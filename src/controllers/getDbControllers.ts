import { Request, Response } from "express";
const { Crypto } = require("../models/crypto");
const controllerWrapper = require("../utils/controllerWrapper");
const HttpError = require("../utils/HttpError");
const getTimeRange = require("../services/getTimeRange");

const hypeCrypto: string[] = [
    "BTC", "ETH", "XTZ", "ALGO", "SOL", "DOGE", "ADA", "TON", "ZEC", "HT",
    "MANA", "FIL", "ICP", "HNT", "KDA", "ONT", "WOO", "BSW", "TRX", "GRT"
];

type RequestQuery = { time?: string; symbol?: string; market?: string}

const getCrypto = async ( req: Request<
    {},
    {},
    {},
    RequestQuery
  >, res: Response) => {
    const {symbol, market, time} = req.query;

    type Result = {
        symbol: string,
        price?: number,
        createdAt: string,
        market?: string,
    };

    type RawResult = {
        _id: string,
        symbol: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        market: string,
    }[];
    

    let result: Result[] = [];

    if (!market && symbol && time) {                              // get average price
        const searchTime: string = getTimeRange(time);
        const rawResult: RawResult[] = await Crypto.find({symbol, createdAt: {
            $gte: searchTime} 
        })

        const formattedRes: Result[] = rawResult.map(el => ({symbol: el.symbol, price: el.price, createdAt: el.createdAt.toString().slice(0,21)}));

        const arrays: Result[][] = formattedRes.reduce((a, c) => {
            let idx: number = a.findIndex(e => e[0].createdAt === c.createdAt);
            if (idx !== -1) a[idx].push(c);
            else a.push([c]);
            return a;
        }, []);
        

        result = arrays.map(elem => 
            {
                const sum = elem.reduce((total, el) => {
                return (total + el.price)}, 0);
            return ({symbol: elem[0].symbol, price: (sum/elem.length).toFixed(2), createdAt: elem[0].createdAt})
            }
        );

        if (result.length === 0) {
            throw HttpError.NotFoundError("Data not found");
        };

    }

    else if (!market && !time && !symbol) {    // endpoint for telegram bot
        const searchTime: Date = getTimeRange("5m");
        const rawResult: RawResult = await Crypto.find({createdAt: {$gte: searchTime}, symbol: {$in: hypeCrypto}});
        if (rawResult.length === 0) {
            throw HttpError.NotFoundError("Data not found");
        };

        const arrays = rawResult.reduce((a, c) => {
            let idx = a.findIndex(e => e[0].symbol === c.symbol);
            if (idx !== -1) a[idx].push(c);
            else a.push([c]);
            return a;
        }, []);
        
        result = arrays.map(elem => 
                    {
                        const sum = elem.reduce((total, el) => {
                        return (total + el.price)}, 0);
                    return ({symbol: elem[0].symbol, price: (sum/elem.length).toFixed(2), createdAt: elem[0].createdAt})
                    }
                );
    }
    
    else {                                      // standart parameters
        const searchTime: string = getTimeRange(time);
        result = await Crypto.find({symbol, market, createdAt: {$gte: searchTime}});

        if (result.length === 0) {
            throw HttpError.NotFoundError("Data not found");
        };
    }
    

    res.status(200).json({
        result,
    });
};

const deleteCrypto = async (req: Request, res: Response) =>  {
    await Crypto.deleteMany({});

    res.status(200).json({
        message: "Ok",
    });
};

module.exports = {
    getCrypto: controllerWrapper(getCrypto),
    deleteCrypto: controllerWrapper(deleteCrypto),
};