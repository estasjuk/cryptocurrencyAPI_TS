export type BaseData = {
    symbol: string,
    price: number,
    market: string,
}[];

export type CoinMarketCapResponse = {
    id: number,
    name: string,
    symbol: string,
    slug: string,
    num_market_pairs: number,
    date_added: string,
    tags: string[],
    max_supply: number | null,
    circulating_supply: number,
    total_supply: number,
    platform: object,
    infinite_supply: boolean,
    cmc_rank: number,
    self_reported_circulating_supply: number,
    self_reported_market_cap: number,
    tlv_ratio: number | null,
    last_updated: string,
    quote: any,
};

type CoinBaseRates = {
    [key:string]: number;
}

type CoinBaseData = {
    currency: string;
    rates: CoinBaseRates
}

export type CoinBaseResponse = {
    data: CoinBaseData
}

export type CoinStatsResponse = {
    id: string;
    icon: string;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    priceBtc: number;
    volume?: number;
    marketCap: number;
    availableSupply: number | null;
    totalSupply: number | null;
    priceChange1h: number;
    priceChange1d: number;
    priceChange1w: number;
    websiteUrl: string;
    twitterUrl: string;
    exp: string[];
    contractAddress: string;
    decimals?: number;
    redditUrl?: string;
};

type KucoinRates = {
    [key:string]: number;
};

export type KucoinResponse = {
    code: string;
    data: KucoinRates
};

type PaprikaCoinInfo = {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: any;
    market_cap_change_24h: number;
    percent_change_15m: number;
    percent_change_30m: number;
    percent_change_1h: number;
    percent_change_6h: number;
    percent_change_12h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
    ath_price: number;
    ath_date: Date;
    percent_from_price_ath: number;
}

type Quotes = {
    USD: PaprikaCoinInfo;
};

export type CoinPaprikaResponse = {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    circulating_supply: any,
    total_supply: number | null,
    max_supply: number | null,
    beta_value: number,
    first_data_at: string,
    last_updated: string,
    quotes: Quotes;
}[]

