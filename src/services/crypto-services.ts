const axios = require('axios');
import { BaseData, CoinMarketCapResponse, CoinBaseResponse, CoinStatsResponse, KucoinResponse, CoinPaprikaResponse} from "./cryptoApiTypes";

// const getCoinMarketCapCurrency = async () => {
//     const data: CoinMarketCapResponse[] = await axios.get(
//         'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
//         + '?CMC_PRO_API_KEY=bf77236a-1efa-476d-8563-1f5c26dd1aed');

//     const baseData: BaseData = data.map(el => ({
//         symbol: el.symbol,
//         price: el.quote.USD.price,
//         market: "CoinMarketCap",
//     }));

//     return baseData;
// };

const getCoinBaseCurrency = async () => {
    const data: CoinBaseResponse = await axios.get(
        'https://api.coinbase.com/v2/exchange-rates',
);

    let baseData: BaseData = [];

    for (let [key, value] of Object.entries(data.data.rates)) {
        baseData.push({
            symbol: `${key}`,
            price: Number(`${value}`),
            market: "CoinBase"
        })
    };
    return baseData
};

const getCoinStatsCurrency = async () => {
    const data: CoinStatsResponse[] = await axios.get(
        'https://api.coinstats.app/public/v1/coins',
);

    const baseData: BaseData = data.map(el => ({
        symbol: el.symbol,
        price: el.price,
        market: "CoinStats",
    }));
    
    return baseData;
};

const getKucoinCurrency = async () => {
    const data: KucoinResponse = await axios.get(
        'https://api.kucoin.com/api/v1/prices',
);

    let baseData: BaseData = [];

    for (let [key, value] of Object.entries(data.data)) {
        baseData.push({
            symbol: `${key}`,
            price: Number(`${value}`),
            market: "Kucoin"
        })
    };

    return baseData;
};

const getCoinPaprikaCurrency = async () => {
    const data: CoinPaprikaResponse = await axios.get(
        'https://api.coinpaprika.com/v1/tickers',
);

    const baseData: BaseData = data.map(el => ({
        symbol: el.symbol,
        price: el.quotes.USD.price,
        market: "CoinPaprika",
    }));

    return baseData;
};

module.exports = {
    //getCoinMarketCapCurrency,
    getCoinBaseCurrency,
    getCoinStatsCurrency,
    getKucoinCurrency,
    getCoinPaprikaCurrency,
};