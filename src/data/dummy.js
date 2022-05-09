const NFTData = [
    {
        id: 1,
        name: 'Bitcoin',
        alias: 'BTC',
        image: require('../assets/images/bitcoin.png'),
        totals: 444,
        update: +7.56,
        wallet: 456543,
        transaction_history: [
            {
                id:1,
                type: "Buy",
                coin: "Bitcoin",
                amount: 3,
                date: "12 May 2021"
            },
            {
                id:2,
                type: "Sold",
                coin: "Bitcoin",
                amount: 1,
                date: "13 May 2021"
            },
            {
                id:3,
                type: "Buy",
                coin: "Bitcoin",
                amount: 6,
                date: "13 May 2021"
            },
            {
                id:4,
                type: "Buy",
                coin: "Bitcoin",
                amount: 3,
                date: "15 May 2021"
            },
            {
                id:5,
                type: "Sold",
                coin: "Bitcoin",
                amount: 5,
                date: "13 May 2021"
            },
        ]
    },
    {
        id: 2,
        name: 'Ethereum',
        alias: 'ETH',
        image: require('../assets/images/ethereum.png'),
        totals: 91.9,
        update: -0.56,
        wallet: 456543,
        transaction_history: [
            {
                id:1,
                type: "Buy",
                coin: "Ethereum",
                amount: 3,
                date: "12 May 2021"
            },
            {
                id:2,
                type: "Sold",
                coin: "Ethereum",
                amount: 1,
                date: "13 May 2021"
            },
            {
                id:3,
                type: "Buy",
                coin: "Bitcoin",
                amount: 6,
                date: "13 May 2021"
            },
            {
                id:4,
                type: "Buy",
                coin: "Ethereum",
                amount: 3,
                date: "15 May 2021"
            },
            {
                id:5,
                type: "Sold",
                coin: "Ethereum",
                amount: 5,
                date: "13 May 2021"
            },
        ]
    },
    {
        id: 3,
        name: 'Litecoin',
        alias: 'LTC',
        image: require('../assets/images/litecoin.png'),
        totals: 0.78,
        update: +9.09,
        wallet: 456543,
        transaction_history: [
            {
                id:1,
                type: "Buy",
                coin: "Litecoin",
                amount: 3,
                date: "12 May 2021"
            },
            {
                id:2,
                type: "Sold",
                coin: "Litecoin",
                amount: 1,
                date: "13 May 2021"
            },
            {
                id:3,
                type: "Buy",
                coin: "Litecoin",
                amount: 6,
                date: "13 May 2021"
            },
            {
                id:4,
                type: "Buy",
                coin: "Litecoin",
                amount: 3,
                date: "15 May 2021"
            },
            {
                id:5,
                type: "Sold",
                coin: "Litecoin",
                amount: 5,
                date: "13 May 2021"
            },
        ]
    },
]

export default NFTData;