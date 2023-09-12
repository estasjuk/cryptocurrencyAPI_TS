const { Crypto } = require("../models/crypto");
const controllerWrapper = require("../utils/controllerWrapper");
import { BaseData } from '../services/cryptoApiTypes'

const {getCoinMarketCapCurrency, 
    getCoinBaseCurrency,
    getCoinStatsCurrency,
    getKucoinCurrency,
    getCoinPaprikaCurrency} = require('../services/crypto-services');

const addCrypto = async (): Promise<void> => {
    
    //const coinMarketCap: BaseData = await getCoinMarketCapCurrency();
    const coinBase: BaseData = await getCoinBaseCurrency();
    const coinStats: BaseData = await getCoinStatsCurrency();
    const kucoin: BaseData = await getKucoinCurrency();
    const coinPaprika: BaseData = await getCoinPaprikaCurrency();

    await Crypto.create(
        //...coinMarketCap, 
        ...coinBase, ...coinStats, ...kucoin, ...coinPaprika);
};


module.exports = {
    addCrypto: controllerWrapper(addCrypto),
}
export {}