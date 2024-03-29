import BeautifulTable from '@/components/Beautifultalbe'
import React from 'react'

const data = [
    {
      "token_address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      "symbol": "ETH",
      "name": "Ether",
      "logo": "https://cdn.moralis.io/eth/0x.png",
      "thumbnail": "https://cdn.moralis.io/eth/0x_thumb.png",
      "decimals": 18,
      "smw_holdings_usd": 241428.76253338956,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 9,
      "usd_price": 3494.891506945443,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55",
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d",
        "0x67260767a04066c1259171be81265faf0d1b72d0",
        "0x287e2c76aab4720786076c3deedd7dd386092050",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2",
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346",
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": true,
      "portfolio_average_percentage": 7.1508
    },
    {
      "token_address": "0x162433c934aa74ba147e05150b1206b2c922f71d",
      "symbol": "CRE",
      "name": "CRESO",
      "logo": "https://logo.moralis.io/0x1_0x162433c934aa74ba147e05150b1206b2c922f71d_420528ebc2a4416d90ad95bb9efc4fc2",
      "thumbnail": "https://logo.moralis.io/0x1_0x162433c934aa74ba147e05150b1206b2c922f71d_420528ebc2a4416d90ad95bb9efc4fc2",
      "decimals": 18,
      "smw_holdings_usd": 1411.237015244359,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 4,
      "usd_price": 0.000003902277470271,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2",
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.13340000000000002
    },
    {
      "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "symbol": "USDC",
      "name": "USD Coin",
      "logo": "https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_e6ec22e3ef954a7f9eda04f294938f4d",
      "thumbnail": "https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_e6ec22e3ef954a7f9eda04f294938f4d",
      "decimals": 6,
      "smw_holdings_usd": 8631.239909000002,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 1.0000000000000002,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0967
    },
    {
      "token_address": "0x38029c62dfa30d9fd3cadf4c64e9b2ab21dbda17",
      "symbol": "Dubbz",
      "name": "Dubbz",
      "logo": "https://logo.moralis.io/0x1_0x38029c62dfa30d9fd3cadf4c64e9b2ab21dbda17_66bf2355db5d4c9995faff193e86ff78",
      "thumbnail": "https://logo.moralis.io/0x1_0x38029c62dfa30d9fd3cadf4c64e9b2ab21dbda17_66bf2355db5d4c9995faff193e86ff78",
      "decimals": 18,
      "smw_holdings_usd": 12143.012889828176,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 3.07430681885589,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.5781000000000001
    },
    {
      "token_address": "0x6284c089d6944df1ba61bd56618aeba07d1d6136",
      "symbol": "Visit aeth.network to claim rewards",
      "name": "# aeth.network",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc",
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb281d84989c06e2a6ccdc5ea7bf1663c79a1c31a",
      "symbol": "ZETA",
      "name": "stoicDAO",
      "logo": "https://logo.moralis.io/0x1_0xb281d84989c06e2a6ccdc5ea7bf1663c79a1c31a_3f53b76e1cad449dbf22da6299f803b9",
      "thumbnail": "https://logo.moralis.io/0x1_0xb281d84989c06e2a6ccdc5ea7bf1663c79a1c31a_3f53b76e1cad449dbf22da6299f803b9",
      "decimals": 18,
      "smw_holdings_usd": 226.78214198656133,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 0.000105024889004268,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.2259
    },
    {
      "token_address": "0x06a4385d11b64be7248db210eca0a04a558608a5",
      "symbol": "DOVA",
      "name": "DOVA",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 1013.3576503943412,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": 0.001829750865415045,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.09330000000000001
    },
    {
      "token_address": "0xf394ba49fdf6270c3effd966d2b09f6a2e034a83",
      "symbol": "PepeAir.com",
      "name": "PepeAir.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55",
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xaf9c4d2bc6edf11722997659e3748f2b53ed19be",
      "symbol": "Rewards Token From https://rupool.site",
      "name": "rupool.site",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55",
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x57b9d10157f66d8c00a815b5e289a152dedbe7ed",
      "symbol": "HQG",
      "name": "环球股",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55",
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x55a8f6c6b3aa58ad6d1f26f6afeded78f32e19f4",
      "symbol": "AEGIS",
      "name": "Aegis Ai",
      "logo": "https://logo.moralis.io/0x1_0x55a8f6c6b3aa58ad6d1f26f6afeded78f32e19f4_25ede6fc1a3649adbc4473d1399273ef",
      "thumbnail": "https://logo.moralis.io/0x1_0x55a8f6c6b3aa58ad6d1f26f6afeded78f32e19f4_25ede6fc1a3649adbc4473d1399273ef",
      "decimals": 9,
      "smw_holdings_usd": 81279.31535347927,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 0.3055613359153356,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 2.46355
    },
    {
      "token_address": "0x6e1af8ab61dd4d64c1d9a838d5a9235bd4218db1",
      "symbol": "Get LINK: https://LINKToken.io",
      "name": "$ tLINK",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d",
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24",
      "symbol": "GLQ",
      "name": "GraphLinq",
      "logo": "https://logo.moralis.io/0x1_0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24_021387f005864b3c964f609f4c109378",
      "thumbnail": "https://logo.moralis.io/0x1_0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24_021387f005864b3c964f609f4c109378",
      "decimals": 18,
      "smw_holdings_usd": 68750.44446271559,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 0.15006236114579058,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 8.8321
    },
    {
      "token_address": "0x41ea5d41eeacc2d5c4072260945118a13bb7ebce",
      "symbol": "CRE",
      "name": "CRESO",
      "logo": "https://logo.moralis.io/0x1_0x41ea5d41eeacc2d5c4072260945118a13bb7ebce_4f8f9787a39146fa8126c073bf989a7c",
      "thumbnail": "https://logo.moralis.io/0x1_0x41ea5d41eeacc2d5c4072260945118a13bb7ebce_4f8f9787a39146fa8126c073bf989a7c",
      "decimals": 18,
      "smw_holdings_usd": 22826.23186669805,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 0.000877931994873002,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 3.18275
    },
    {
      "token_address": "0x898339007c491f035c62f51951f81ee828fe558c",
      "symbol": "Claim $CRE Reward at https://cresofi.com",
      "name": "# cresofi.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x372d6a1f5f129fa48ef28e5b27922767855effea",
      "symbol": "Visit aeth.network to claim rewards",
      "name": "# aeth.network",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0",
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd667a84005975eef906e980f200541974a8c9766",
      "symbol": "WxFi.io",
      "name": "WxFi.io",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 176238.460662,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": 0.29373076777,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 7.94355
    },
    {
      "token_address": "0x1412eca9dc7daef60451e3155bb8dbf9da349933",
      "symbol": "A68.net",
      "name": "A68.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 160281.07440812027,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": 0.85265614551,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 7.2243
    },
    {
      "token_address": "0x095bed0153a07a1cbe75d52ba7c69b05fea180df",
      "symbol": "BASEDGROK",
      "name": "SirBasedGrockyGrockster",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 69073.02944565946,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": 0.000093780792448764,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 2.1041
    },
    {
      "token_address": "0x31adda225642a8f4d7e90d4152be6661ab22a5a2",
      "symbol": "HYPR",
      "name": "HYPR",
      "logo": "https://logo.moralis.io/0x1_0x31adda225642a8f4d7e90d4152be6661ab22a5a2_afd916516ea64e0a99afd23bd2d090f3",
      "thumbnail": "https://logo.moralis.io/0x1_0x31adda225642a8f4d7e90d4152be6661ab22a5a2_afd916516ea64e0a99afd23bd2d090f3",
      "decimals": 18,
      "smw_holdings_usd": 13609.76128872342,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 0.032002016361941596,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050",
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.09005
    },
    {
      "token_address": "0x5a3e6a77ba2f983ec0d371ea3b475f8bc0811ad5",
      "symbol": "0x0",
      "name": "0x0.ai: AI Smart Contract Auditor",
      "logo": "https://logo.moralis.io/0x1_0x5a3e6a77ba2f983ec0d371ea3b475f8bc0811ad5_b49b43f2f6964e11a4ab9e56ef7fa60c",
      "thumbnail": "https://logo.moralis.io/0x1_0x5a3e6a77ba2f983ec0d371ea3b475f8bc0811ad5_b49b43f2f6964e11a4ab9e56ef7fa60c",
      "decimals": 9,
      "smw_holdings_usd": 54478.242829308416,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 0.35256663468810673,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 5.423349999999999
    },
    {
      "token_address": "0x04f8538e045a9929ec052550f00ece5a12d933fc",
      "symbol": "Visit website AIgentx.gift",
      "name": "# AIgentx.gift",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb493ffa9c7522bc2b8c3751beb436d069c20c080",
      "symbol": "Claim $0x0 rewards at https://0x0.care",
      "name": "! 0x0.care",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xbd63b3fcd3004df75ba93e837f1c5e4120be1dba",
      "symbol": "Rewards Token From https://mfpool.site",
      "name": "mfpool.site",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346",
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x96b3bbcd86a2874ccb8773b8dbe87fd08eed75c3",
      "symbol": "Visit https://refundcoin.io to claim reward",
      "name": "$ refundcoin.io",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 2,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346",
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x62d0a8458ed7719fdaf978fe5929c6d342b0bfce",
      "symbol": "BEAM",
      "name": "Beam",
      "logo": "https://logo.moralis.io/0x1_0x62d0a8458ed7719fdaf978fe5929c6d342b0bfce_ae5317628b9b40f087444269be10e135",
      "thumbnail": "https://logo.moralis.io/0x1_0x62d0a8458ed7719fdaf978fe5929c6d342b0bfce_ae5317628b9b40f087444269be10e135",
      "decimals": 18,
      "smw_holdings_usd": 11352.825743605785,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 2,
      "usd_price": 0.034628451020819226,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2",
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.32605
    },
    {
      "token_address": "0xf2c7d1dc553962dfac77ab8f2210fd172f58cf02",
      "symbol": "CA",
      "name": "CuriosityAnon",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 4166833.4730445175,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000083339495659033,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 93.227
    },
    {
      "token_address": "0x90148ac48dd4388a5c050d512d215d880b63da94",
      "symbol": "Physics",
      "name": "Physics",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 222955.33394391058,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000006195354885555,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 4.9883
    },
    {
      "token_address": "0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141",
      "symbol": "CA",
      "name": "CuriosityAnon",
      "logo": "https://logo.moralis.io/0x1_0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141_c71b7d5015e24662ae56e635bcd3fd0d",
      "thumbnail": "https://logo.moralis.io/0x1_0xa0c7e61ee4faa9fcefdc8e8fc5697d54bf8c8141_c71b7d5015e24662ae56e635bcd3fd0d",
      "decimals": 18,
      "smw_holdings_usd": 16145.048313613575,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000012194145251974,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.3612
    },
    {
      "token_address": "0x0f7b3f5a8fed821c5eb60049538a548db2d479ce",
      "symbol": "ATOR",
      "name": "AirTor Protocol",
      "logo": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
      "thumbnail": "https://logo.moralis.io/0x1_0x0f7b3f5a8fed821c5eb60049538a548db2d479ce_f5f8abb3eb34464e93ee50d90c7da7a1",
      "decimals": 18,
      "smw_holdings_usd": 12094.85976832836,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 3.2688810184671246,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.2706
    },
    {
      "token_address": "0x426aedbed16726e3f220cb4fed4d4060b95cca46",
      "symbol": "BAHAMAS",
      "name": "Bahamas",
      "logo": "https://logo.moralis.io/0x1_0x426aedbed16726e3f220cb4fed4d4060b95cca46_36ef2d9b7511444bb4bb83e3c0ddbed7",
      "thumbnail": "https://logo.moralis.io/0x1_0x426aedbed16726e3f220cb4fed4d4060b95cca46_36ef2d9b7511444bb4bb83e3c0ddbed7",
      "decimals": 18,
      "smw_holdings_usd": 2719.347302379408,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000005270052911588,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0608
    },
    {
      "token_address": "0x17c50d62e6e8d20d2dc18e9ad79c43263d0720d9",
      "symbol": "NFAi",
      "name": "Not Financial Advice",
      "logo": "https://logo.moralis.io/0x1_0x17c50d62e6e8d20d2dc18e9ad79c43263d0720d9_4162a806914749b0940cec24ba0e7511",
      "thumbnail": "https://logo.moralis.io/0x1_0x17c50d62e6e8d20d2dc18e9ad79c43263d0720d9_4162a806914749b0940cec24ba0e7511",
      "decimals": 18,
      "smw_holdings_usd": 957.2389118767968,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.02485043839632291,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0214
    },
    {
      "token_address": "0x138c2f1123cf3f82e4596d097c118eac6684940b",
      "symbol": "ALPHA",
      "name": "Alpha",
      "logo": "https://logo.moralis.io/0x1_0x138c2f1123cf3f82e4596d097c118eac6684940b_63b5b53d9f264a51b4f4668b1f0bbb67",
      "thumbnail": "https://logo.moralis.io/0x1_0x138c2f1123cf3f82e4596d097c118eac6684940b_63b5b53d9f264a51b4f4668b1f0bbb67",
      "decimals": 18,
      "smw_holdings_usd": 3.61671283512,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.00376740920325,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0001
    },
    {
      "token_address": "0x562e362876c8aee4744fc2c6aac8394c312d215d",
      "symbol": "OPTIMUS",
      "name": "Optimus",
      "logo": "https://logo.moralis.io/0x1_0x562e362876c8aee4744fc2c6aac8394c312d215d_b961dc09d7894ffa8ff19fe2851f82b1",
      "thumbnail": "https://logo.moralis.io/0x1_0x562e362876c8aee4744fc2c6aac8394c312d215d_b961dc09d7894ffa8ff19fe2851f82b1",
      "decimals": 9,
      "smw_holdings_usd": 0.036109217785288715,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.3610921778528871,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5c99a6c14f8dc0c2c3655c64a2cef68ff9f771ba",
      "symbol": "LARRY",
      "name": "Llama",
      "logo": "https://logo.moralis.io/0x1_0x5c99a6c14f8dc0c2c3655c64a2cef68ff9f771ba_e0c23f2aed054be3aaabac61d0193e2b",
      "thumbnail": "https://logo.moralis.io/0x1_0x5c99a6c14f8dc0c2c3655c64a2cef68ff9f771ba_e0c23f2aed054be3aaabac61d0193e2b",
      "decimals": 18,
      "smw_holdings_usd": 3.202895071e-26,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 3.202895071e-9,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xbf2d68bd2f03c90dd2f373c7cec3b1e956a5c8f8",
      "symbol": "UNI-V2",
      "name": "Uniswap V2",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb4d44cd0d48c5dba1893f4d2a48c496dbcc6fea2",
      "symbol": "$ATOR Rewards By https://atorlab.xyz",
      "name": "! atorlab.xyz",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x29d4885c4c5b1c4554cbbea215ca8feec1216b8a",
      "symbol": "OPTI-XC",
      "name": "OPTI-XC",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xcd443a0950f1842c7be8a6c31fcebf2ff22ebedc"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x84018071282d4b2996272659d9c01cb08dd7327f",
      "symbol": "BLENDR",
      "name": "Blendr Network",
      "logo": "https://logo.moralis.io/0x1_0x84018071282d4b2996272659d9c01cb08dd7327f_cb70e8d5837643339e0e7d0b2b90f1b3",
      "thumbnail": "https://logo.moralis.io/0x1_0x84018071282d4b2996272659d9c01cb08dd7327f_cb70e8d5837643339e0e7d0b2b90f1b3",
      "decimals": 18,
      "smw_holdings_usd": 18657.25766431335,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 3.02619025911919,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 42.9667
    },
    {
      "token_address": "0x0001a500a6b18995b03f44bb040a5ffc28e45cb0",
      "symbol": "OLAS",
      "name": "Autonolas",
      "logo": "https://logo.moralis.io/0x1_0x0001a500a6b18995b03f44bb040a5ffc28e45cb0_8107737b800f478db8759a9770e5a054",
      "thumbnail": "https://logo.moralis.io/0x1_0x0001a500a6b18995b03f44bb040a5ffc28e45cb0_8107737b800f478db8759a9770e5a054",
      "decimals": 18,
      "smw_holdings_usd": 11774.445164412638,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 4.415357568075222,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 27.1159
    },
    {
      "token_address": "0x0f17eeccc84739b9450c88de0429020e2dec05eb",
      "symbol": "OTACON",
      "name": "Otacon",
      "logo": "https://logo.moralis.io/0x1_0x0f17eeccc84739b9450c88de0429020e2dec05eb_8acbb444eca5458dbcf13cf8dccaba2f",
      "thumbnail": "https://logo.moralis.io/0x1_0x0f17eeccc84739b9450c88de0429020e2dec05eb_8acbb444eca5458dbcf13cf8dccaba2f",
      "decimals": 18,
      "smw_holdings_usd": 8238.197662408384,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.02746065887469461,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 18.9721
    },
    {
      "token_address": "0xcc6a1fbaeae9bc699458dea5c853e83b60bb131f",
      "symbol": "IP",
      "name": "Incog Protocol",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 2420.7464704868785,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000122317991733613,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 5.5749
    },
    {
      "token_address": "0x312ca48325f45064aa8f45f725fd8c59a2d997dc",
      "symbol": "POSSUM",
      "name": "Possum",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 1027.42789802799,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000002978051878342,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 2.3661
    },
    {
      "token_address": "0xe9cd30fc7dd341ac89acc08fcf2b1ce5a5410913",
      "symbol": "UNP",
      "name": "Unipoly Coin",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 672.6770668244731,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000015104832685376,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.5491
    },
    {
      "token_address": "0xd20292a58c0c8fa9a7a0d7e30ac3996b1661f758",
      "symbol": "SHAKMA",
      "name": "SHAKMA",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 32.12034433302249,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.309650487e-9,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.074
    },
    {
      "token_address": "0xe414e16c4309bc84f3c862c2afeb232560c35c69",
      "symbol": "卩乇卩乇",
      "name": "ㄖ几乇 卩乇卩乇",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 25.798549249562523,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000001814147204922,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0594
    },
    {
      "token_address": "0x6781bfdf59c852e904a2507fea3966c89e79f1cf",
      "symbol": "METRIC",
      "name": "Metric",
      "logo": "https://logo.moralis.io/0x1_0x6781bfdf59c852e904a2507fea3966c89e79f1cf_ed82522bed2245c99d5a37716e398c7a",
      "thumbnail": "https://logo.moralis.io/0x1_0x6781bfdf59c852e904a2507fea3966c89e79f1cf_ed82522bed2245c99d5a37716e398c7a",
      "decimals": 8,
      "smw_holdings_usd": 23.622392883312425,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.005795020084,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0544
    },
    {
      "token_address": "0xeb67171a9ca23f9bd9273b2fb5e79a7d861d19eb",
      "symbol": "INF",
      "name": "Infinity",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 15.920972006454102,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000096322445439584,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0367
    },
    {
      "token_address": "0x4907a67b0b4e193840d4a6d4db054bdb124d8625",
      "symbol": "X",
      "name": "X Corp",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 13.686346746542586,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.1510980577e-8,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0315
    },
    {
      "token_address": "0x215f8db126db36f3ecbac38b79934645ee6035e6",
      "symbol": "ZOGZ",
      "name": "Zogz Club",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 12.063039047683992,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 9.5510414102e-8,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0278
    },
    {
      "token_address": "0x00b4651795193daca7e73b5ddd031dfde8ca5720",
      "symbol": "MAIL",
      "name": "CHAINMAIL",
      "logo": "https://logo.moralis.io/0x1_0x00b4651795193daca7e73b5ddd031dfde8ca5720_99b26ada7fd140e1bc007b716ab1043b",
      "thumbnail": "https://logo.moralis.io/0x1_0x00b4651795193daca7e73b5ddd031dfde8ca5720_99b26ada7fd140e1bc007b716ab1043b",
      "decimals": 18,
      "smw_holdings_usd": 10.282330030641724,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000076775058469041,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0237
    },
    {
      "token_address": "0x0b9adf503e3bac41d7a755ef20e52692fb9252b3",
      "symbol": "PATRON",
      "name": "Patron Coin",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 1.6575620253179806,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.082567555e-9,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0038
    },
    {
      "token_address": "0x439ec0ce540af8d3d610a5c8b0418e8e4dc208ec",
      "symbol": "TGSWAP",
      "name": "AnonymousTgSwap",
      "logo": "https://logo.moralis.io/0x1_0x439ec0ce540af8d3d610a5c8b0418e8e4dc208ec_294e8656b2894137a7b2087018b20e1a",
      "thumbnail": "https://logo.moralis.io/0x1_0x439ec0ce540af8d3d610a5c8b0418e8e4dc208ec_294e8656b2894137a7b2087018b20e1a",
      "decimals": 9,
      "smw_holdings_usd": 1.239211927087266,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000001300790165263,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0029
    },
    {
      "token_address": "0xf819d9cb1c2a819fd991781a822de3ca8607c3c9",
      "symbol": "UNIBOT",
      "name": "Unibot",
      "logo": "https://logo.moralis.io/0x1_0xf819d9cb1c2a819fd991781a822de3ca8607c3c9_2d6ee39517974dc291ee1369e0edeeb0",
      "thumbnail": "https://logo.moralis.io/0x1_0xf819d9cb1c2a819fd991781a822de3ca8607c3c9_2d6ee39517974dc291ee1369e0edeeb0",
      "decimals": 18,
      "smw_holdings_usd": 0.8426637387222605,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 22.804959407053637,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0019
    },
    {
      "token_address": "0xe1223f2d494c37f83e1bdda5015e990938f00d81",
      "symbol": "HYPE",
      "name": "Hype",
      "logo": "https://logo.moralis.io/0x1_0xe1223f2d494c37f83e1bdda5015e990938f00d81_a9cb8e5e8f3649a081e48f734e1b29c6",
      "thumbnail": "https://logo.moralis.io/0x1_0xe1223f2d494c37f83e1bdda5015e990938f00d81_a9cb8e5e8f3649a081e48f734e1b29c6",
      "decimals": 9,
      "smw_holdings_usd": 0.10846706581192044,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.011417585874938994,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0002
    },
    {
      "token_address": "0x1693588dff81ca3bcb193b253c43d5257ecfc7d2",
      "symbol": "0xSC",
      "name": "0xSniperChart.io",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 0.007398925853368566,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 7.210754e-12,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x07e0edf8ce600fb51d44f51e3348d77d67f298ae",
      "symbol": "XRP",
      "name": "HarryPotterObamaPacMan8Inu",
      "logo": "https://logo.moralis.io/0x1_0x07e0edf8ce600fb51d44f51e3348d77d67f298ae_8c3e71f6fc904e1b9c551f084a3d59e0",
      "thumbnail": "https://logo.moralis.io/0x1_0x07e0edf8ce600fb51d44f51e3348d77d67f298ae_8c3e71f6fc904e1b9c551f084a3d59e0",
      "decimals": 8,
      "smw_holdings_usd": 0.006437486979300113,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.006568864264591952,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xbc581118802bec35e755f0a85f62af6736a2c4a1",
      "symbol": "YFII2.0",
      "name": "DFI.money2.0",
      "logo": "https://logo.moralis.io/0x1_0xbc581118802bec35e755f0a85f62af6736a2c4a1_f462197fd71c4d138ee40c4793cabb75",
      "thumbnail": "https://logo.moralis.io/0x1_0xbc581118802bec35e755f0a85f62af6736a2c4a1_f462197fd71c4d138ee40c4793cabb75",
      "decimals": 18,
      "smw_holdings_usd": 0.00016636210387074,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000008318105193537,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x51080bb17cd5774fadac5b41e9bd1bd40c40f957",
      "symbol": "ISAI",
      "name": "InsiderSniperBot",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 1.2035166473311312e-10,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2e-18,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x80da0c87f68e63618b86e11ee62d237a4a8e1bce",
      "symbol": "BLACKHOLE",
      "name": "BLACKHOLE",
      "logo": "https://logo.moralis.io/0x1_0x80da0c87f68e63618b86e11ee62d237a4a8e1bce_2ec3642bcca340e7a93d2af87a1ba86f",
      "thumbnail": "https://logo.moralis.io/0x1_0x80da0c87f68e63618b86e11ee62d237a4a8e1bce_2ec3642bcca340e7a93d2af87a1ba86f",
      "decimals": 18,
      "smw_holdings_usd": 1.2893084640549197e-20,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.012893084640549196,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc162e59cf158c0e9aa06c4c3c66a2ce2961777ee",
      "symbol": "BRAIN",
      "name": "Black Rabbit AI",
      "logo": "https://logo.moralis.io/0x1_0xc162e59cf158c0e9aa06c4c3c66a2ce2961777ee_de09d868eda8488495e1b20fb186a667",
      "thumbnail": "https://logo.moralis.io/0x1_0xc162e59cf158c0e9aa06c4c3c66a2ce2961777ee_de09d868eda8488495e1b20fb186a667",
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x11913c9b8556b90345d1d253f315832120216050",
      "symbol": "Tensor Tickets (https://tensor-space.org)",
      "name": "# Tensor Ticket (https://tensor-space.org)",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xfed7391b66106a8877656e3bc92c4a6f68870751",
      "symbol": "OLAS Reward Tickets (https://olasnetwork.org)",
      "name": "# OLAS Reward Ticket",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xfd6651d60eeda28047f318db75cee296f89809d2",
      "symbol": "Claim rewards at blendrprotocol.com",
      "name": "$ blendrprotocol.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xee02a815a61823e235095260455d69a87358ce47",
      "symbol": "Linq-LP.com",
      "name": "Linq-LP.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xe754f5fc5d43c11c48f1554aeb56ef948eb7b149",
      "symbol": "wSNX",
      "name": "!SNXPool.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb6d2838167f622ae257acd45e74d99aa9750faed",
      "symbol": "Claim rewards at blendrprotocol.com",
      "name": "! blendrprotocol.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3607f7c84f1f0f36ab37e6b87808ded93f560f86",
      "symbol": "Claim rewards at https://blendrprotocol.com",
      "name": "! blendrprotocol.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x30d922f88ba2a0e678aa21523e69937211c71627",
      "symbol": "Claim $TPU Reward at https://tensor-space.com",
      "name": "# tensor-space.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x280f796414e86b60f1b4d378366e0034d3c10bd3",
      "symbol": "Claim $BLENDR rewards at https://blendrprotocol.com",
      "name": "! blendrprotocol.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x220f8f16a551f92f339883406a3b96da0afdcc2f",
      "symbol": "Visit https://uniUSD.pro to claim rewards",
      "name": "$ uniUSD.pro",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x1750b4dc9d1a27dd87fec4ab792f55de19f40631",
      "symbol": "Claim rewards at https://guni.pro",
      "name": "$ gUNI.pro",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xa257757dab77a9a44dad6ad1907dbfc385b48574",
      "symbol": "Visit https://usd2023.com to claim rewards",
      "name": "# usd2023.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6ff539f688aa8338807c0e5b2f466c43c97a0b91",
      "symbol": "Access token to https://araft.site",
      "name": "$ araft.site",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xdf3b896a89f7e1af7dca82216624ae20d48d5e55"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98",
      "symbol": "OPSEC",
      "name": "OpSec",
      "logo": "https://logo.moralis.io/0x1_0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98_1be9ec66831e434d863d917cfdc2c55c",
      "thumbnail": "https://logo.moralis.io/0x1_0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98_1be9ec66831e434d863d917cfdc2c55c",
      "decimals": 18,
      "smw_holdings_usd": 1389610.1642527382,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 2.3160169404212305,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 73.5952
    },
    {
      "token_address": "0xee3200f94a1a2345e6cc486032a5df1d50cb621c",
      "symbol": "CX",
      "name": "ChartAI",
      "logo": "https://logo.moralis.io/0x1_0xee3200f94a1a2345e6cc486032a5df1d50cb621c_62ebe4c68ead42bc9bcf3a415580e7fe",
      "thumbnail": "https://logo.moralis.io/0x1_0xee3200f94a1a2345e6cc486032a5df1d50cb621c_62ebe4c68ead42bc9bcf3a415580e7fe",
      "decimals": 18,
      "smw_holdings_usd": 195002.14091006137,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.013095609637708946,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 10.3275
    },
    {
      "token_address": "0xf19693068120185664e211f619c4f0530ce07088",
      "symbol": "BANK",
      "name": "Bank AI",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 101452.29508103314,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.001451763387049874,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 5.373
    },
    {
      "token_address": "0xa3cb87080e68ad54d00573983d935fa85d168fde",
      "symbol": "IBIT",
      "name": "InfinityBit Token",
      "logo": "https://logo.moralis.io/0x1_0xa3cb87080e68ad54d00573983d935fa85d168fde_1baca6fe06f84e6dbed26a912c6770f1",
      "thumbnail": "https://logo.moralis.io/0x1_0xa3cb87080e68ad54d00573983d935fa85d168fde_1baca6fe06f84e6dbed26a912c6770f1",
      "decimals": 8,
      "smw_holdings_usd": 43583.817764214575,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.001031341065012666,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 2.3082
    },
    {
      "token_address": "0xd9f79fc56839c696e2e9f63948337f49d164a015",
      "symbol": "IDFK",
      "name": "IDFK",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 34322.55055346512,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000002702404456,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.8178
    },
    {
      "token_address": "0x91c00f8cb874fd3c207a818b5cc4813153f1122d",
      "symbol": "LOYAL",
      "name": "0xLOYAL",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 21855.805014539998,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000104075261974,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.1575
    },
    {
      "token_address": "0x346d38f4c0d957a769e9acaae389c202dfec5b97",
      "symbol": "MARBLE",
      "name": "Marble Racing",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 2720.6882376,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00027206882376,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.1441
    },
    {
      "token_address": "0x9cc32f63850a3d9a64d613a4fa7b1c7d8993c054",
      "symbol": "CRYPT",
      "name": "Cryptensor",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 931.448599820088,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.3310931101703305,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0493
    },
    {
      "token_address": "0x365fd436a7e0c4421017f544be9e2434f87ca099",
      "symbol": "TARD",
      "name": "Full Tard",
      "logo": "https://logo.moralis.io/0x1_0x365fd436a7e0c4421017f544be9e2434f87ca099_adb440b58c3a4b5c93a9eeacd45a4623",
      "thumbnail": "https://logo.moralis.io/0x1_0x365fd436a7e0c4421017f544be9e2434f87ca099_adb440b58c3a4b5c93a9eeacd45a4623",
      "decimals": 18,
      "smw_holdings_usd": 113.15922209968812,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.15573835e-10,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.006
    },
    {
      "token_address": "0x8303dc5fd3f211bde646e818dd4acd87776fa11c",
      "symbol": "CHOY",
      "name": "BOK CHOY",
      "logo": "https://logo.moralis.io/0x1_0x8303dc5fd3f211bde646e818dd4acd87776fa11c_942a9b0c0baf431faeb222a1883c96e4",
      "thumbnail": "https://logo.moralis.io/0x1_0x8303dc5fd3f211bde646e818dd4acd87776fa11c_942a9b0c0baf431faeb222a1883c96e4",
      "decimals": 18,
      "smw_holdings_usd": 111.88639295208,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000002797159823802,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0059
    },
    {
      "token_address": "0x94dc32f6f4268a4b99cdee7989c4e6818de317cf",
      "symbol": "BIONIC",
      "name": "Bionic",
      "logo": "https://logo.moralis.io/0x1_0x94dc32f6f4268a4b99cdee7989c4e6818de317cf_b7270da43d0b44f6a59d1a1e023f3616",
      "thumbnail": "https://logo.moralis.io/0x1_0x94dc32f6f4268a4b99cdee7989c4e6818de317cf_b7270da43d0b44f6a59d1a1e023f3616",
      "decimals": 18,
      "smw_holdings_usd": 92.71519582437871,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000703198939448328,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0049
    },
    {
      "token_address": "0x545de63ccce14b6b60d69aee98078461bd6c21dd",
      "symbol": "UBANK",
      "name": "Unibank.One",
      "logo": "https://logo.moralis.io/0x1_0x545de63ccce14b6b60d69aee98078461bd6c21dd_7f46c90aad27441482f2453f3bb4b96c",
      "thumbnail": "https://logo.moralis.io/0x1_0x545de63ccce14b6b60d69aee98078461bd6c21dd_7f46c90aad27441482f2453f3bb4b96c",
      "decimals": 9,
      "smw_holdings_usd": 82.5393561035948,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.007169467692726583,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0044
    },
    {
      "token_address": "0x018ccb43a997db44876e793278664f96824ae8fb",
      "symbol": "PL",
      "name": "Pepe Locker",
      "logo": "https://logo.moralis.io/0x1_0x018ccb43a997db44876e793278664f96824ae8fb_bfe02eedc5fd4c0dae2eefa650e71140",
      "thumbnail": "https://logo.moralis.io/0x1_0x018ccb43a997db44876e793278664f96824ae8fb_bfe02eedc5fd4c0dae2eefa650e71140",
      "decimals": 18,
      "smw_holdings_usd": 82.1721739208183,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.2139456714e-8,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0044
    },
    {
      "token_address": "0x1da1b0432f3ebd25c0d65bcb3fb9c9731d0ee2d0",
      "symbol": "CBDGE",
      "name": "Chinese Baby Doge",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 81.19132419209768,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00038446776,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0043
    },
    {
      "token_address": "0xc7598668d2a088993fed3c24ac52e47811937b14",
      "symbol": "BENC",
      "name": "Ben Classic",
      "logo": null,
      "thumbnail": null,
      "decimals": 8,
      "smw_holdings_usd": 59.61689044994049,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000003017295666,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0032
    },
    {
      "token_address": "0x4de6c0a7f67a2209c6a37abae6d24fc995fc3e14",
      "symbol": "EEYORE",
      "name": "EEYORE",
      "logo": "https://logo.moralis.io/0x1_0x4de6c0a7f67a2209c6a37abae6d24fc995fc3e14_8082ca981e744e40bcc679b0a8e76dd2",
      "thumbnail": "https://logo.moralis.io/0x1_0x4de6c0a7f67a2209c6a37abae6d24fc995fc3e14_8082ca981e744e40bcc679b0a8e76dd2",
      "decimals": 9,
      "smw_holdings_usd": 41.75203651433817,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000078831142816545,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0022
    },
    {
      "token_address": "0x6b9af55a51c721cf65072aaf891b3a1e3a3c5162",
      "symbol": "MEVY",
      "name": "MEV Tools",
      "logo": "https://logo.moralis.io/0x1_0x6b9af55a51c721cf65072aaf891b3a1e3a3c5162_31cde2212d614f799c450de27e606706",
      "thumbnail": "https://logo.moralis.io/0x1_0x6b9af55a51c721cf65072aaf891b3a1e3a3c5162_31cde2212d614f799c450de27e606706",
      "decimals": 9,
      "smw_holdings_usd": 41.214683879538875,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000494698265028715,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0022
    },
    {
      "token_address": "0x63f483773c74ac6d7ab89af9ab3b3d3849d554cb",
      "symbol": "PEPEX",
      "name": "PepeX",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 37.52100164663671,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.961670905e-9,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.002
    },
    {
      "token_address": "0x39ec76e8031015cc4c6bb88cb251f2ce534ce616",
      "symbol": "SMART",
      "name": "SmartFlow",
      "logo": "https://logo.moralis.io/0x1_0x39ec76e8031015cc4c6bb88cb251f2ce534ce616_a9e14f4e10864f3a91cc4ce577b2fb14",
      "thumbnail": "https://logo.moralis.io/0x1_0x39ec76e8031015cc4c6bb88cb251f2ce534ce616_a9e14f4e10864f3a91cc4ce577b2fb14",
      "decimals": 18,
      "smw_holdings_usd": 26.446038405210444,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.003338096039834688,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0014
    },
    {
      "token_address": "0xe79418853c4bba4bce152155d779e91d4a9e0bc0",
      "symbol": "WALL",
      "name": "The Great Wall Of China",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 25.736420598754183,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000023196804451885,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0014
    },
    {
      "token_address": "0x85cd22083260e1d6c869ca7d89b0c8b5428e3c92",
      "symbol": "VEG",
      "name": "Turkeys.io",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 25.61566574534209,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.004269277624223682,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0014
    },
    {
      "token_address": "0xb92f71aea3d23acf62db81d5e3593a2ab9ff6b71",
      "symbol": "UNXBOT",
      "name": "UniswapX Bot",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 25.561957009478665,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0051405075521,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0014
    },
    {
      "token_address": "0x0abb1444466634ef46f9ee1761aba562d63b0d34",
      "symbol": "CoINTEL",
      "name": "CoINTEL",
      "logo": "https://logo.moralis.io/0x1_0x0abb1444466634ef46f9ee1761aba562d63b0d34_0473548f441840ae815d18cbc028ffa5",
      "thumbnail": "https://logo.moralis.io/0x1_0x0abb1444466634ef46f9ee1761aba562d63b0d34_0473548f441840ae815d18cbc028ffa5",
      "decimals": 9,
      "smw_holdings_usd": 18.69583373825164,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 3.04722951733e-7,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.001
    },
    {
      "token_address": "0x5293fc632f3a42d0c0d5f34d91f384da0e0c824e",
      "symbol": "MIYAGI",
      "name": "MIYAGI",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 11.109312137,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000088874497096,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0006
    },
    {
      "token_address": "0xf234248cc8df4cd24e05e1b2f50c4fc8ff0c3310",
      "symbol": "AndyBrettLandwolfPepe",
      "name": "Boys Club",
      "logo": "https://logo.moralis.io/0x1_0xf234248cc8df4cd24e05e1b2f50c4fc8ff0c3310_9c071515afe345d58a6de2159636e301",
      "thumbnail": "https://logo.moralis.io/0x1_0xf234248cc8df4cd24e05e1b2f50c4fc8ff0c3310_9c071515afe345d58a6de2159636e301",
      "decimals": 9,
      "smw_holdings_usd": 0.0579451422006,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 9.6575237001e-8,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3969900c10def45322eb1a3dbf70e8da079eb718",
      "symbol": "TZU",
      "name": "Moon Tzu",
      "logo": "https://logo.moralis.io/0x1_0x3969900c10def45322eb1a3dbf70e8da079eb718_67e18187ac174e25b2a4b1eb1ff866b5",
      "thumbnail": "https://logo.moralis.io/0x1_0x3969900c10def45322eb1a3dbf70e8da079eb718_67e18187ac174e25b2a4b1eb1ff866b5",
      "decimals": 18,
      "smw_holdings_usd": 0.019224554289123893,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 4.75610132e-10,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd91316cc545e4a55aed7aa9ec41e1a9215d313b6",
      "symbol": "敖欽",
      "name": "Ao Qin",
      "logo": "https://logo.moralis.io/0x1_0xd91316cc545e4a55aed7aa9ec41e1a9215d313b6_3f984e0aca0c49dc939dacc64bbfc77c",
      "thumbnail": "https://logo.moralis.io/0x1_0xd91316cc545e4a55aed7aa9ec41e1a9215d313b6_3f984e0aca0c49dc939dacc64bbfc77c",
      "decimals": 8,
      "smw_holdings_usd": 0.0058402580947166756,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 3.48181678222e-7,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x01605a71c2e052aa31e0cf859775d666c5f2991f",
      "symbol": "BOPI",
      "name": "Bank Of Panda",
      "logo": "https://logo.moralis.io/0x1_0x01605a71c2e052aa31e0cf859775d666c5f2991f_4af29df87506452c88c6dd0063c3f0f5",
      "thumbnail": "https://logo.moralis.io/0x1_0x01605a71c2e052aa31e0cf859775d666c5f2991f_4af29df87506452c88c6dd0063c3f0f5",
      "decimals": 9,
      "smw_holdings_usd": 0.005776668300098349,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.82105102e-10,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xab41aee05d876550930b1bed4338b464831fc307",
      "symbol": "FUCK $INU",
      "name": "President Skemba",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0.00538700024929,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00048972729539,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xa8b28269376a854ce52b7238733cb257dd3934e8",
      "symbol": "VEG",
      "name": "Turkeys V2",
      "logo": "https://logo.moralis.io/0x1_0xa8b28269376a854ce52b7238733cb257dd3934e8_b46804f5f6a04519aebd893b5450ea27",
      "thumbnail": "https://logo.moralis.io/0x1_0xa8b28269376a854ce52b7238733cb257dd3934e8_b46804f5f6a04519aebd893b5450ea27",
      "decimals": 9,
      "smw_holdings_usd": 0.000012251064546,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.041844091e-9,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xa73a068c1c18f3a50360e4b2273d1590a2205f1b",
      "symbol": "$INU",
      "name": "President Shiba",
      "logo": "https://logo.moralis.io/0x1_0xa73a068c1c18f3a50360e4b2273d1590a2205f1b_f60ae22d2f7f456a84cfa01ac2b76e54",
      "thumbnail": "https://logo.moralis.io/0x1_0xa73a068c1c18f3a50360e4b2273d1590a2205f1b_f60ae22d2f7f456a84cfa01ac2b76e54",
      "decimals": 18,
      "smw_holdings_usd": 0.0000024160238916399226,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.2404e-13,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6528353fffd15e9751ffcadd5f9feccfce3aa4f5",
      "symbol": "MAFIA",
      "name": "Crypto Mafia",
      "logo": "https://logo.moralis.io/0x1_0x6528353fffd15e9751ffcadd5f9feccfce3aa4f5_1f7a47285b004ce699b7010f410598fa",
      "thumbnail": "https://logo.moralis.io/0x1_0x6528353fffd15e9751ffcadd5f9feccfce3aa4f5_1f7a47285b004ce699b7010f410598fa",
      "decimals": 7,
      "smw_holdings_usd": 1.76712377726e-14,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.76712377726e-7,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf1cce90793991de9e12af3bfe9461ca736d813cc",
      "symbol": "PIRA",
      "name": "Piranha",
      "logo": "https://logo.moralis.io/0x1_0xf1cce90793991de9e12af3bfe9461ca736d813cc_95fba1e0ba094a9cbdb6ba332dd14f2d",
      "thumbnail": "https://logo.moralis.io/0x1_0xf1cce90793991de9e12af3bfe9461ca736d813cc_95fba1e0ba094a9cbdb6ba332dd14f2d",
      "decimals": 18,
      "smw_holdings_usd": 2.626224301492341e-16,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2e-18,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x664f8cbf877bf40e5d21df5545ebf5e4dc840aa6",
      "symbol": "BOTS",
      "name": "Deezbots",
      "logo": "https://logo.moralis.io/0x1_0x664f8cbf877bf40e5d21df5545ebf5e4dc840aa6_06779fb37ca0462a87391861650eac95",
      "thumbnail": "https://logo.moralis.io/0x1_0x664f8cbf877bf40e5d21df5545ebf5e4dc840aa6_06779fb37ca0462a87391861650eac95",
      "decimals": 18,
      "smw_holdings_usd": 8.90587801882e-25,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 8.90587801882e-7,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xda8263d8ce3f726233f8b5585bcb86a3120a58b6",
      "symbol": "DOGC",
      "name": "DogeClub",
      "logo": "https://logo.moralis.io/0x1_0xda8263d8ce3f726233f8b5585bcb86a3120a58b6_c409e7f02ef04fd1982a786729ffdc72",
      "thumbnail": "https://logo.moralis.io/0x1_0xda8263d8ce3f726233f8b5585bcb86a3120a58b6_c409e7f02ef04fd1982a786729ffdc72",
      "decimals": 18,
      "smw_holdings_usd": 4.5641296800000005e-28,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 4.56412968e-10,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3eef95e483b0a013d34b9482c6f4afcbd4d38146",
      "symbol": "PORT",
      "name": "Multiport",
      "logo": "https://logo.moralis.io/0x1_0x3eef95e483b0a013d34b9482c6f4afcbd4d38146_be20a3393ac344e1b4bb54687eb5eacd",
      "thumbnail": "https://logo.moralis.io/0x1_0x3eef95e483b0a013d34b9482c6f4afcbd4d38146_be20a3393ac344e1b4bb54687eb5eacd",
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc3d9bbb0d39dd6afe429a1bd1a8869dc8976106c",
      "symbol": "KZN",
      "name": "Kaizen",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xa6855581de8624c59b26562ecbfb17ac516f2593",
      "symbol": "Visit https://usd-coin.net to claim rewards",
      "name": "# usd-coin.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x937a765e82ef535bafdf70b9a3d60fc0d20a2841",
      "symbol": "OpSec Reward Tickets (https://opseclab.org)",
      "name": "# OpSec Reward Ticket (https://opseclab.org)",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x8d91c89dab8cb7e2b37d0fbfc3260ef88c0a37ad",
      "symbol": "Visit https://uniV3.net to claim reward",
      "name": "$ uniV3.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4d649d810a34bcb3a90c0e284601f68b7d389c26",
      "symbol": "Visit https://usd-coin.org to claim rewards",
      "name": "$ usd-coin.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3d534c70f6f5c512983ec1449477e50de448b4dc",
      "symbol": "Claim rewards at https://guni.fi",
      "name": "$ gUNI.fi",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2bc108ba322e25f48033d9056b460f735e4ff5f6",
      "symbol": "ETH",
      "name": "ETH...",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xffb950c7622080f5923932878559940732d113e2",
      "symbol": "tLINK",
      "name": "LINKToken.io",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x0a862844c2da70b09e2ef71ea5c3627602458db0",
      "symbol": "Claim Rewards at https://abict.site",
      "name": "abict.site",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x57bca5c8b7dd2049bb4a9fafe8c63e73d354073a",
      "symbol": "Access token to https://byed.xyz",
      "name": "$ byed.xyz",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xcc86444ed3ba0247d246ff66eccbfd7fefd47789",
      "symbol": "Claim $OPSEC reward at https://opsec-reward.com",
      "name": "# opsec-reward.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xcc1a6f65e643ebaba65ce919f459c18c3c5f3b46",
      "symbol": "Visit https://uniV3.in to claim rewards",
      "name": "$ uniV3.in",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x29ad4c1f3fcfcebbcf2a69c412e187edfbdbac1d"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc01154b4ccb518232d6bbfc9b9e6c5068b766f82",
      "symbol": "NEX",
      "name": "NEXUS",
      "logo": "https://logo.moralis.io/0x1_0xc01154b4ccb518232d6bbfc9b9e6c5068b766f82_a53a8c8836be40028e0642f5af41420e",
      "thumbnail": "https://logo.moralis.io/0x1_0xc01154b4ccb518232d6bbfc9b9e6c5068b766f82_a53a8c8836be40028e0642f5af41420e",
      "decimals": 18,
      "smw_holdings_usd": 83346.17297434091,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.037884624079245866,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 28.3779
    },
    {
      "token_address": "0xee3c722d177559f73288cec91fa3e4bbfd8c27fc",
      "symbol": "HHGTTG",
      "name": "Douglas Adams",
      "logo": "https://logo.moralis.io/0x1_0xee3c722d177559f73288cec91fa3e4bbfd8c27fc_83684f6e50d24d75ab952d64c2c039bf",
      "thumbnail": "https://logo.moralis.io/0x1_0xee3c722d177559f73288cec91fa3e4bbfd8c27fc_83684f6e50d24d75ab952d64c2c039bf",
      "decimals": 9,
      "smw_holdings_usd": 2591.153098136083,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 3.06085127972e-7,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.8822
    },
    {
      "token_address": "0xf4b5470523ccd314c6b9da041076e7d79e0df267",
      "symbol": "BBANK",
      "name": "BlockBank",
      "logo": "https://logo.moralis.io/0x1_0xf4b5470523ccd314c6b9da041076e7d79e0df267_721e1f8abf1d4477a1e8f5c12e0bf5f7",
      "thumbnail": "https://logo.moralis.io/0x1_0xf4b5470523ccd314c6b9da041076e7d79e0df267_721e1f8abf1d4477a1e8f5c12e0bf5f7",
      "decimals": 18,
      "smw_holdings_usd": 1.5684246504302282e-21,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.001568424650430228,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x9b4aa337f0da4385f913daa91bda43ad523d1730",
      "symbol": "ETHTF",
      "name": "ETHtf",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x7eff48dd35b05bb731141bf34258cbfc7fa0daa7",
      "symbol": "Visit https://get-usdc.com to claim rewards",
      "name": "$ get-usdc.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3d9d19aad039af4437227417cf85b9ccb76a7c64",
      "symbol": "PvMINT",
      "name": "PLACEHOLDERvMINT",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3d5637ce09315e715076cc65f112c64235fa7195",
      "symbol": "Visit https://usd-rewards.com to claim rewards",
      "name": "# usd-rewards.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xe503a01c10734207ebdf188d622e8d4bdbac1f3c",
      "symbol": "Claim $GLQ Reward at https://graphlinq.org",
      "name": "# graphlinq.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xdb42a17f09f1b2f57d6e4bee3223193717aeb15a",
      "symbol": "Claim $GLQ rewards at https://glq.io",
      "name": "! glq.io",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd3b1ce01141e5272de51b5f709b12d8d897d63c6",
      "symbol": "$NEXUS Rewards By https://nexuschain.tech",
      "name": "! NEXUS Rewards By nexuschain.tech",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd29395003a0382447a771d9a16c3a6c95b1a9db2",
      "symbol": "Claim $NEX Reward at https://nexus-chain.org",
      "name": "# nexus-chain.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x0d467f4c99807ca7b148c1fdd2e24fff0fa55cbc",
      "symbol": "Visit https://apyeth.com to claim rewards",
      "name": "# apyeth.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x67260767a04066c1259171be81265faf0d1b72d0"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x63860910aff66559f660ce4ce3fb46acc6100669",
      "symbol": "SAMO",
      "name": "Samoyed coin",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 1208865868196908.5,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 73.519587076,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 94.742
    },
    {
      "token_address": "0x89fda77c5885762e3a392ea8828ed360bd7c5780",
      "symbol": "uPEPE",
      "name": "Unique Pepe",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 67089260363459.71,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 81847.606977,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 5.258
    },
    {
      "token_address": "0xf5faad12a7f599c25b69c341c925aa6ddee69480",
      "symbol": "PepeSmurf",
      "name": "Pepe Smurf",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 11820962.020343672,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 9.70980737111e-7,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x76160787be56e7049ca30260fa28ff7efa446858",
      "symbol": "UtilityAI",
      "name": "Utility AI",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 1987226.8235206637,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000003191494626,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x284fe3a05cd19b54e5214ba8572faf2c2b70f09a",
      "symbol": "G-PEPE",
      "name": "Granny Pepe",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 1164124.7676160575,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000017128480407,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x63756d4b39c7c08a0cd07cab806d2ab1ff9de3a2",
      "symbol": "ELEANOR",
      "name": "ELEANOR",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 747772.0448721951,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000027848748182505,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x0d79eb90f9f7947f7b137b1bf06ae9f75a94d478",
      "symbol": "WRX404",
      "name": "WRX404",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 707600.07907686,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000025814273729335,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x33be63986df6f9fb78f65b393c37d69fe24eb928",
      "symbol": "GENDALF",
      "name": "GENDALF",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 686989.3159364488,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000028895520584582,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x192f89f6bf6416f93fa0acba376bc9d12cbc3949",
      "symbol": "CRUNCHY",
      "name": "CRUNCHY",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 519071.68508340226,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000020903087817256,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2a91a442dbf260b79bb21b98599a3600bd7e842c",
      "symbol": "CatCRAB",
      "name": "Cat Crab Coin",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 497588.911963338,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000580789998165,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4a08a22453d0d32a3307c13f59a3f210fb7bf6d9",
      "symbol": "퍼리인어스",
      "name": "FurryAnus",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 413058.7766110557,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000017328730388664,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf9062f301eb316428bb7826ba4cedf9b771f192a",
      "symbol": "YaoMing",
      "name": "YaoMing Coin",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 258178.74944249203,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000032496953385,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x7f9c17de7520fe93d954e4be9345547d1f62a752",
      "symbol": "STRK",
      "name": "Starkindustries",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 246356.7072237823,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000014978923178756,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x38e68a37e401f7271568cecaac63c6b1e19130b4",
      "symbol": "BANANA",
      "name": "Banana",
      "logo": "https://logo.moralis.io/0x1_0x38e68a37e401f7271568cecaac63c6b1e19130b4_e9e396d23ef340228d67b5d6084db23e",
      "thumbnail": "https://logo.moralis.io/0x1_0x38e68a37e401f7271568cecaac63c6b1e19130b4_e9e396d23ef340228d67b5d6084db23e",
      "decimals": 18,
      "smw_holdings_usd": 212500.39342913116,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 39.78793919678506,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf52f65057dc7d6e4011f70dc11714b4206669ad1",
      "symbol": "SHIBIRIUM",
      "name": "Shibirium DAO",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 206095.5160394819,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000019783610199,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x90063485d61abb6b9cec2bd693659de42d553039",
      "symbol": "NETSTARK",
      "name": "NETSTARK",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 156901.54876319595,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000024674467791507,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb5af758a26cbbdec29e6e53c5dcd9d85369f49d2",
      "symbol": "KDOGE",
      "name": "KORK DOGE",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 150100.513042057,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000024211639403878,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2b42c3d2fe0db609ea37089e3364a42626717964",
      "symbol": "CrocoINU",
      "name": "CROCO INU",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 145737.08994096538,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000031055538736859,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd2fb645af6ee858d464c816527dfb7ca3b4ffbab",
      "symbol": "SIMPA",
      "name": "SIMPA",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 143553.02726132068,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000063520259531,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x8e48b7f6bc2e5d6f4410948eca80296b76b27918",
      "symbol": "EggsPEPE",
      "name": "Eggs Pepe",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 138075.91948798546,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000026721993036,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x44971abf0251958492fee97da3e5c5ada88b9185",
      "symbol": "basedAI",
      "name": "basedAI",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 124566.87216200733,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 10.855609355885207,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd9812f24f34e0d727bbf6ea7caaee05b7f7a2603",
      "symbol": "TPU",
      "name": "TensorSpace",
      "logo": "https://logo.moralis.io/0x1_0xd9812f24f34e0d727bbf6ea7caaee05b7f7a2603_bcbb37848b774fc8bab6875cf03286e2",
      "thumbnail": "https://logo.moralis.io/0x1_0xd9812f24f34e0d727bbf6ea7caaee05b7f7a2603_bcbb37848b774fc8bab6875cf03286e2",
      "decimals": 18,
      "smw_holdings_usd": 114323.3384693017,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.07705562066617715,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x54855d3133669b7ef54a2c962f5f63fdb44bbae9",
      "symbol": "ZFX",
      "name": "zkFlex Finance",
      "logo": "https://logo.moralis.io/0x1_0x54855d3133669b7ef54a2c962f5f63fdb44bbae9_bc67af6ba79848249098466b2f183977",
      "thumbnail": "https://logo.moralis.io/0x1_0x54855d3133669b7ef54a2c962f5f63fdb44bbae9_bc67af6ba79848249098466b2f183977",
      "decimals": 9,
      "smw_holdings_usd": 108776.21501391493,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.008326374891519423,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x710287d1d39dcf62094a83ebb3e736e79400068a",
      "symbol": "ENQAI",
      "name": "enqAI",
      "logo": "https://logo.moralis.io/0x1_0x710287d1d39dcf62094a83ebb3e736e79400068a_bd731d52a23940d4aa882721139ca4f6",
      "thumbnail": "https://logo.moralis.io/0x1_0x710287d1d39dcf62094a83ebb3e736e79400068a_bd731d52a23940d4aa882721139ca4f6",
      "decimals": 18,
      "smw_holdings_usd": 87451.60923806697,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.07342149563682591,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xfd4168e642ebd04c3684a6cdb3a5e86de85d3908",
      "symbol": "API",
      "name": "The APIs",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 81962.05172610162,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.54390111332,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x92f419fb7a750aed295b0ddf536276bf5a40124f",
      "symbol": "TATSU",
      "name": "Taτsu",
      "logo": "https://logo.moralis.io/0x1_0x92f419fb7a750aed295b0ddf536276bf5a40124f_272a63e8422748f2adef415a07538946",
      "thumbnail": "https://logo.moralis.io/0x1_0x92f419fb7a750aed295b0ddf536276bf5a40124f_272a63e8422748f2adef415a07538946",
      "decimals": 18,
      "smw_holdings_usd": 76639.48055987005,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 42.26846639010542,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x56f6424d8d6c6d14bcdeec734915dc3a7fb002ca",
      "symbol": "DUCK",
      "name": "Duck Tales",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 72749.78949640233,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00065644784846726,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd6c67b93a7b248df608a653d82a100556144c5da",
      "symbol": "EXNT",
      "name": "ExNetwork Community Token",
      "logo": "https://logo.moralis.io/0x1_0xd6c67b93a7b248df608a653d82a100556144c5da_fbb4605d3cd74360a5410eea13d89ca0",
      "thumbnail": "https://logo.moralis.io/0x1_0xd6c67b93a7b248df608a653d82a100556144c5da_fbb4605d3cd74360a5410eea13d89ca0",
      "decimals": 16,
      "smw_holdings_usd": 66155.27850795239,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.045332582647282946,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x18671a89488c656f16c579147f607609beec576b",
      "symbol": "BIB",
      "name": "Back Into Battle",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 65725.89037553157,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.002698340566312918,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x728f30fa2f100742c7949d1961804fa8e0b1387d",
      "symbol": "GHX",
      "name": "GamerCoin",
      "logo": "https://logo.moralis.io/0x1_0x728f30fa2f100742c7949d1961804fa8e0b1387d_48e3e26a929041b2a362c11acfcaca2a",
      "thumbnail": "https://logo.moralis.io/0x1_0x728f30fa2f100742c7949d1961804fa8e0b1387d_48e3e26a929041b2a362c11acfcaca2a",
      "decimals": 18,
      "smw_holdings_usd": 63539.86528103674,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.19961117788381924,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb0b06c565b90f85132ff0070ebf1790205a7ab0f",
      "symbol": "Lishay",
      "name": "Lishay",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 49302.04829972973,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000042954259234083,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xaaee1a9723aadb7afa2810263653a34ba2c21c7a",
      "symbol": "Mog",
      "name": "Mog Coin",
      "logo": "https://logo.moralis.io/0x1_0xaaee1a9723aadb7afa2810263653a34ba2c21c7a_1e305fe2f1014481b0d60ed61efbaf9a",
      "thumbnail": "https://logo.moralis.io/0x1_0xaaee1a9723aadb7afa2810263653a34ba2c21c7a_1e305fe2f1014481b0d60ed61efbaf9a",
      "decimals": 18,
      "smw_holdings_usd": 48513.475217256324,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 7.08858545115e-7,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc881255e4d639b42e326158c7b8ccb7f33459261",
      "symbol": "AMMX",
      "name": "AMMX",
      "logo": "https://logo.moralis.io/0x1_0xc881255e4d639b42e326158c7b8ccb7f33459261_0a751421360e4ed29c6fdadb4382cb60",
      "thumbnail": "https://logo.moralis.io/0x1_0xc881255e4d639b42e326158c7b8ccb7f33459261_0a751421360e4ed29c6fdadb4382cb60",
      "decimals": 18,
      "smw_holdings_usd": 47054.006984115236,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.00078806156042705,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c",
      "symbol": "TKST",
      "name": "TokenSight Token",
      "logo": "https://logo.moralis.io/0x1_0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c_7304b4fde5ec49f1a89f2dd101515094",
      "thumbnail": "https://logo.moralis.io/0x1_0x7cdbfc86a0bfa20f133748b0cf5cea5b787b182c_7304b4fde5ec49f1a89f2dd101515094",
      "decimals": 18,
      "smw_holdings_usd": 46505.50818366794,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.2198841994499666,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x1495bc9e44af1f8bcb62278d2bec4540cf0c05ea",
      "symbol": "DEAI",
      "name": "Zero1 Token",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 44695.96953860808,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.744932825643468,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4e9fcd48af4738e3bf1382009dc1e93ebfce698f",
      "symbol": "TAONU",
      "name": "TAO Inu",
      "logo": "https://logo.moralis.io/0x1_0x4e9fcd48af4738e3bf1382009dc1e93ebfce698f_07ac865043ed4a39bf5518ff0cd11591",
      "thumbnail": "https://logo.moralis.io/0x1_0x4e9fcd48af4738e3bf1382009dc1e93ebfce698f_07ac865043ed4a39bf5518ff0cd11591",
      "decimals": 18,
      "smw_holdings_usd": 44133.143211914605,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.014711047737304868,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc6c9448a86882d73164a984fa52285ab51c823bc",
      "symbol": "RPILL",
      "name": "RED PILL",
      "logo": "https://logo.moralis.io/0x1_0xc6c9448a86882d73164a984fa52285ab51c823bc_7019dd0b2b414b1f8acfc084ad353ceb",
      "thumbnail": "https://logo.moralis.io/0x1_0xc6c9448a86882d73164a984fa52285ab51c823bc_7019dd0b2b414b1f8acfc084ad353ceb",
      "decimals": 18,
      "smw_holdings_usd": 43249.33673517201,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000012814553478739,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2da719db753dfa10a62e140f436e1d67f2ddb0d6",
      "symbol": "CERE",
      "name": "CERE Network",
      "logo": "https://logo.moralis.io/0x1_0x2da719db753dfa10a62e140f436e1d67f2ddb0d6_d5afd14f856140f2a7a8257d404829c4",
      "thumbnail": "https://logo.moralis.io/0x1_0x2da719db753dfa10a62e140f436e1d67f2ddb0d6_d5afd14f856140f2a7a8257d404829c4",
      "decimals": 10,
      "smw_holdings_usd": 41473.90931346168,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.008847767320205159,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x9072b3c9bf36b6583b6f0bcf35193121ff3ecf82",
      "symbol": "RARE",
      "name": "RarePepe",
      "logo": "https://logo.moralis.io/0x1_0x9072b3c9bf36b6583b6f0bcf35193121ff3ecf82_6f54395b64494f42af61c73f4cddf1a5",
      "thumbnail": "https://logo.moralis.io/0x1_0x9072b3c9bf36b6583b6f0bcf35193121ff3ecf82_6f54395b64494f42af61c73f4cddf1a5",
      "decimals": 18,
      "smw_holdings_usd": 35663.26439843165,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000006010015975776,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2df627dda0ba1f2941055208cd4daa9c84eb53e2",
      "symbol": "E3RIP",
      "name": "E3_RIP",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 29802.54466208768,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000044297786994505,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x26fa4870e43f425b390dc75b20cfe72380ce38e3",
      "symbol": "HotokeAI",
      "name": "Hotoke AI",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 29529.954156438467,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0007065342494,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xaef1c993bb57d9e82f82eafdedde7dd62f4a1f1f",
      "symbol": "TaroINU",
      "name": "Taro Inu",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 29260.12800899292,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000192581015664684,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4af9ab04615cb91e2ee8cbedb43fb52ed205041b",
      "symbol": "KHEX.net",
      "name": "KHEX.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 28937.21691225512,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.1194168764253,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4c11249814f11b9346808179cf06e71ac328c1b5",
      "symbol": "ORAI",
      "name": "Oraichain Token",
      "logo": "https://logo.moralis.io/0x1_0x4c11249814f11b9346808179cf06e71ac328c1b5_78bc4216f8ab412dba00c5334c2a254d",
      "thumbnail": "https://logo.moralis.io/0x1_0x4c11249814f11b9346808179cf06e71ac328c1b5_78bc4216f8ab412dba00c5334c2a254d",
      "decimals": 18,
      "smw_holdings_usd": 28481.95548684869,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 15.627450857625421,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb08154e0659f559deb6793d76ecd3f86afbdbab2",
      "symbol": "SHINOBI",
      "name": "Shinobi DAO",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 27906.92269887309,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000010986536351769,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x7d8146cf21e8d7cbe46054e01588207b51198729",
      "symbol": "BOB",
      "name": "BOB",
      "logo": "https://logo.moralis.io/0x1_0x7d8146cf21e8d7cbe46054e01588207b51198729_e04649046fbf41a2bb594217ee355fac",
      "thumbnail": "https://logo.moralis.io/0x1_0x7d8146cf21e8d7cbe46054e01588207b51198729_e04649046fbf41a2bb594217ee355fac",
      "decimals": 18,
      "smw_holdings_usd": 27036.109051417814,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000037791597779449,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x89d584a1edb3a70b3b07963f9a3ea5399e38b136",
      "symbol": "AIT",
      "name": "AIT Protocol",
      "logo": "https://logo.moralis.io/0x1_0x89d584a1edb3a70b3b07963f9a3ea5399e38b136_5a0c362f5ac7412da589e2159d79ac56",
      "thumbnail": "https://logo.moralis.io/0x1_0x89d584a1edb3a70b3b07963f9a3ea5399e38b136_5a0c362f5ac7412da589e2159d79ac56",
      "decimals": 18,
      "smw_holdings_usd": 26016.881319390195,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.6422160190519481,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4596971dca386329cce1e0d46104f2df5aedc556",
      "symbol": "FUJINU",
      "name": "FUJIN INU",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 24215.60031866048,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000512826920080704,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xbd7dd7e19bd2b5943548aeeb89b2f6f1c3ffae82",
      "symbol": "PRR",
      "name": "PERRIER",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 23994.331450484417,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000761311075356526,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xaeb3607ec434454ceb308f5cd540875efb54309a",
      "symbol": "STRDY",
      "name": "Sturdy Token",
      "logo": "https://logo.moralis.io/0x1_0xaeb3607ec434454ceb308f5cd540875efb54309a_86c33cd0862343e3a4ae8049639a6789",
      "thumbnail": "https://logo.moralis.io/0x1_0xaeb3607ec434454ceb308f5cd540875efb54309a_86c33cd0862343e3a4ae8049639a6789",
      "decimals": 18,
      "smw_holdings_usd": 23668.541909122367,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 1.9074841496731125,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4269008d0ce534d85f6e3a2cd68ac2e6ee4a38e5",
      "symbol": "WHALES",
      "name": "Whales DAO",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 22909.312746171156,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000074156662828417,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xdd884a5abef88836dba4808e8a4d58e6041e48b0",
      "symbol": "PEGASUS",
      "name": "Pegasus Oracle",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 22511.00750817592,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00037593480256,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x40e9187078032afe1a30cfcf76e4fe3d7ab5c6c5",
      "symbol": "AIX",
      "name": "AIgentX",
      "logo": "https://logo.moralis.io/0x1_0x40e9187078032afe1a30cfcf76e4fe3d7ab5c6c5_7c6c3b6c58fc4cd2ac71dea86587f173",
      "thumbnail": "https://logo.moralis.io/0x1_0x40e9187078032afe1a30cfcf76e4fe3d7ab5c6c5_7c6c3b6c58fc4cd2ac71dea86587f173",
      "decimals": 18,
      "smw_holdings_usd": 21914.921373196146,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.7522328598987207,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5e67b30cb02c25a97030d551ec391687f6e6ef80",
      "symbol": "BINARY",
      "name": "Binary DAO",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 21882.7827343804,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000155201349735,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x11571485d2b56e5d25f47e4883389dd0cde8bf36",
      "symbol": "YUKI404",
      "name": "YUKI404",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 21608.445583801484,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000806402988110113,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf622b2063ade19865d4fe26e35fe6ff26cfa9762",
      "symbol": "CHABA",
      "name": "CHABA",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 19513.26876587136,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.001190299966898898,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x8b792a144876546d015e323426650584dab3d5f9",
      "symbol": "FDAO",
      "name": "FriendDAO",
      "logo": "https://logo.moralis.io/0x1_0x8b792a144876546d015e323426650584dab3d5f9_efdd411159684bd5999ddb12aab10b2a",
      "thumbnail": "https://logo.moralis.io/0x1_0x8b792a144876546d015e323426650584dab3d5f9_efdd411159684bd5999ddb12aab10b2a",
      "decimals": 18,
      "smw_holdings_usd": 19297.33622875118,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000012262345687276,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6faa826af0568d1866fca570da79b318ef114dab",
      "symbol": "B21",
      "name": "B21 Token",
      "logo": "https://logo.moralis.io/0x1_0x6faa826af0568d1866fca570da79b318ef114dab_734b360aa0e04ab5a7443a9db7b52773",
      "thumbnail": "https://logo.moralis.io/0x1_0x6faa826af0568d1866fca570da79b318ef114dab_734b360aa0e04ab5a7443a9db7b52773",
      "decimals": 18,
      "smw_holdings_usd": 19239.99696049843,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.4115728560796498,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6d03bfed9286982fb22b0f736b642dd63c691d76",
      "symbol": "AltDLR",
      "name": "ALT DEALER",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 18343.90405552876,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000719658993474133,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xe92344b4edf545f3209094b192e46600a19e7c2d",
      "symbol": "ZKML",
      "name": "zKML",
      "logo": "https://logo.moralis.io/0x1_0xe92344b4edf545f3209094b192e46600a19e7c2d_be02992d571f4e9c966cd8517ab9d0a2",
      "thumbnail": "https://logo.moralis.io/0x1_0xe92344b4edf545f3209094b192e46600a19e7c2d_be02992d571f4e9c966cd8517ab9d0a2",
      "decimals": 18,
      "smw_holdings_usd": 17994.76981819581,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.45524109032067933,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xce1987f72227ad23abdd57411457507c4b499b5e",
      "symbol": "AZURA",
      "name": "Azura DAO",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 17372.36329968586,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00033217280928,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4440e9319beacafc7d09e784a3d9c877e16b5d23",
      "symbol": "ANMS",
      "name": "Animus",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 17239.082822491342,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000247311167833255,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xe3944ab788a60ca266f1eec3c26925b95f6370ad",
      "symbol": "RAIN",
      "name": "Precipitate.AI",
      "logo": "https://logo.moralis.io/0x1_0xe3944ab788a60ca266f1eec3c26925b95f6370ad_bd25367491744d61bb26836c2f66b718",
      "thumbnail": "https://logo.moralis.io/0x1_0xe3944ab788a60ca266f1eec3c26925b95f6370ad_bd25367491744d61bb26836c2f66b718",
      "decimals": 18,
      "smw_holdings_usd": 17183.104420858068,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.011785393978640651,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6bae853d07ccd9e136af231fb55662741cc4321e",
      "symbol": "FunkyPEPE",
      "name": "Funky PEPE",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 16943.648475951184,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00000215567606,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x8a0a9b663693a22235b896f70a229c4a22597623",
      "symbol": "SCALE",
      "name": "Scalia Infrastructure",
      "logo": "https://logo.moralis.io/0x1_0x8a0a9b663693a22235b896f70a229c4a22597623_263a3535f6c74b08a69358837fc8835f",
      "thumbnail": "https://logo.moralis.io/0x1_0x8a0a9b663693a22235b896f70a229c4a22597623_263a3535f6c74b08a69358837fc8835f",
      "decimals": 18,
      "smw_holdings_usd": 16668.244710403196,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.390574848382329,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2ceee24f8d03fc25648c68c8e6569aa0512f6ac3",
      "symbol": "XCH",
      "name": "ABCHANGE.io",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 16342.002022072154,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.054814836505,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xea9f525b3cbb4c49d30daa1a97dc889b4438b550",
      "symbol": "KNTVR",
      "name": "KENTAVR",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 15934.247377136931,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000616845554016582,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xe5516d1e13183cfe79f30f0c0da1effbd7539ba8",
      "symbol": "MARQ",
      "name": "Marquis",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 15715.943058937872,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.002254391325013264,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x70cc3531960fea6b6d1ce059aae17e6ae8851518",
      "symbol": "VRT",
      "name": "VIRTUS",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 14967.454462416496,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000644926695377337,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x70715e133f3b98af9dcb4897657cd4608d395d49",
      "symbol": "NBT",
      "name": "NeuralByte",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 14956.485479439545,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.1013815841447448,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2cdbd3700774abf0988967626fc7ac98cb54e345",
      "symbol": "MERA",
      "name": "Mera Inu",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 14826.9488278999,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000001475703535275,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x369733153e6e08d38f2bc72ae2432e855cfbe221",
      "symbol": "XALPHA",
      "name": "X-Alpha.ai",
      "logo": "https://logo.moralis.io/0x1_0x369733153e6e08d38f2bc72ae2432e855cfbe221_fcbf4a123e6e44b49556d84cdf6f3978",
      "thumbnail": "https://logo.moralis.io/0x1_0x369733153e6e08d38f2bc72ae2432e855cfbe221_fcbf4a123e6e44b49556d84cdf6f3978",
      "decimals": 18,
      "smw_holdings_usd": 14639.93424509953,
      "possible_spam": true,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.18299917806374416,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd82ca720e13e69bd25ca0a14535d00ccd4256f74",
      "symbol": "BULL",
      "name": "Bull Step",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 14322.594151828773,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 5.32765607495e-7,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xedbdb48625833be254d8141b7f7d9a0374f210dd",
      "symbol": "oneAI",
      "name": "One AI",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 13040.97293549393,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.900742586e-9,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x698de70544cacb933945a237906f44473262b530",
      "symbol": "CHIPI",
      "name": "CHIPI",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 13035.484764992305,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000769477773404923,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x9de44f26c011aa308f87c15943cbb514ebcb32d3",
      "symbol": "ALLIN",
      "name": "All In Bets",
      "logo": "https://logo.moralis.io/0x1_0x9de44f26c011aa308f87c15943cbb514ebcb32d3_a8022a90c18644a5a9f7e91b29b275e8",
      "thumbnail": "https://logo.moralis.io/0x1_0x9de44f26c011aa308f87c15943cbb514ebcb32d3_a8022a90c18644a5a9f7e91b29b275e8",
      "decimals": 18,
      "smw_holdings_usd": 12824.427558350546,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000002586208632056,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6ff2241756549b5816a177659e766eaf14b34429",
      "symbol": "AQTIS",
      "name": "AQTIS Token",
      "logo": "https://logo.moralis.io/0x1_0x6ff2241756549b5816a177659e766eaf14b34429_0b5a3480d0a046ba95803e5b66ba1561",
      "thumbnail": "https://logo.moralis.io/0x1_0x6ff2241756549b5816a177659e766eaf14b34429_0b5a3480d0a046ba95803e5b66ba1561",
      "decimals": 18,
      "smw_holdings_usd": 12777.658655755638,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.012777658655755638,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xac63d05a7cdb83ce38101c4d51690a06d7cb2ed9",
      "symbol": "PIKAPEP",
      "name": "Pikapep",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 12677.993477789445,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 4.05417096111e-7,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5cd4143005f1929f6113e0439014cd06ee3f3ad5",
      "symbol": "VSS",
      "name": "VOSS",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 12534.555267526704,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000994109806150651,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x1e354f9ab5bcc9fb981f31b794c5fe13f7a89218",
      "symbol": "NTD",
      "name": "Neural Tensor Dynamics",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 12467.282567627411,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.1595631784387228,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf38c7eb5f0eb9958de7854b408c038a08a16b43e",
      "symbol": "COWBELL",
      "name": "COWBELL",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 12430.980856486296,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000727432640965599,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xa2c2c937333165d4c5f2dc5f31a43e1239fecfeb",
      "symbol": "HERA",
      "name": "Hera Token",
      "logo": "https://logo.moralis.io/0x1_0xa2c2c937333165d4c5f2dc5f31a43e1239fecfeb_e3fb693f157448f1b40abc1e3a6c47b5",
      "thumbnail": "https://logo.moralis.io/0x1_0xa2c2c937333165d4c5f2dc5f31a43e1239fecfeb_e3fb693f157448f1b40abc1e3a6c47b5",
      "decimals": 18,
      "smw_holdings_usd": 12427.696709009893,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 4.958926639483978,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x8c282c35b5e1088bb208991c151182a782637699",
      "symbol": "MONAI",
      "name": "MONAI",
      "logo": "https://logo.moralis.io/0x1_0x8c282c35b5e1088bb208991c151182a782637699_cf20be94f3814aa192e42154b1d06f44",
      "thumbnail": "https://logo.moralis.io/0x1_0x8c282c35b5e1088bb208991c151182a782637699_cf20be94f3814aa192e42154b1d06f44",
      "decimals": 18,
      "smw_holdings_usd": 12133.508775525905,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.4909898951929397,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x327e9c8f537ce9c190ae4b75349f1c053bb57cb4",
      "symbol": "LOGIA",
      "name": "Logia",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 12075.540685522423,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000758665615437412,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf27763d9f8ea3728aa89e6eb35821e8ff778c2e7",
      "symbol": "MESSIAH",
      "name": "Messiah Coin",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 12029.932534838097,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00000101863411814,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb5bcaaebfbe2fdafae4e2fca1ffdcbfdfbcdbcb0",
      "symbol": "Xylometazoline",
      "name": "Xylometazoline",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 11899.022388919566,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000136336569155832,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6f222e04f6c53cc688ffb0abe7206aac66a8ff98",
      "symbol": "ROKO",
      "name": "ROKO",
      "logo": "https://logo.moralis.io/0x1_0x6f222e04f6c53cc688ffb0abe7206aac66a8ff98_6d5fdcd07a4f44adbb629c0b1c77f9a6",
      "thumbnail": "https://logo.moralis.io/0x1_0x6f222e04f6c53cc688ffb0abe7206aac66a8ff98_6d5fdcd07a4f44adbb629c0b1c77f9a6",
      "decimals": 18,
      "smw_holdings_usd": 11735.509171592228,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000075404367716583,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5b6e43bc879bf611beb332c5d984b383214a1c86",
      "symbol": "DWO",
      "name": "Daewoo",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 11470.293560530543,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000694690678962957,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xfdbfa759f18c6f680c385842cd98c19a03b32722",
      "symbol": "HOMER",
      "name": "Homer Simpson",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 11078.09135881601,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 4.65731203483e-7,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4c76589c689d466d88c54978e5321518ee146003",
      "symbol": "RGR",
      "name": "REGERA",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 11070.236690718133,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000819427295228667,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4cda19726021fc39b4a614958a48996fb62986da",
      "symbol": "BARBIE",
      "name": "Barbie DAO",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 10983.003080401575,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000739164912345,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb2dc36416cf42962fc24e9650fa9c3717052274c",
      "symbol": "LMN",
      "name": "Fidelis",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 10934.425677627281,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000643536213552348,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x1cf0c11d1f07c4057445bd05d3e153040870e991",
      "symbol": "SONGO",
      "name": "Son Goku",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 10676.713470594786,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00012311683695,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x223ca126f162402c37b61c5b37c3ec5850abb9b4",
      "symbol": "AZAT",
      "name": "AZATRON",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 10307.470566513504,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0005756893518156,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xacdaeaaa9be7b88427264238766603d129ef9f6c",
      "symbol": "BARON",
      "name": "BARON",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 10205.31601338352,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.002050396071547036,
      "smw_holders_address": [
        "0x287e2c76aab4720786076c3deedd7dd386092050"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb699dab9b3f981a01abc0474f085427d20d0d602",
      "symbol": "YeSwap.net",
      "name": "YeSwap.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 91286.91164130661,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.304289705471022,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 16.4582
    },
    {
      "token_address": "0x046eee2cc3188071c02bfc1745a6b17c656e3f3d",
      "symbol": "RLB",
      "name": "Rollbit Coin",
      "logo": "https://logo.moralis.io/0x1_0x046eee2cc3188071c02bfc1745a6b17c656e3f3d_83bff5cd5ad6489292b660a683112038",
      "thumbnail": "https://logo.moralis.io/0x1_0x046eee2cc3188071c02bfc1745a6b17c656e3f3d_83bff5cd5ad6489292b660a683112038",
      "decimals": 18,
      "smw_holdings_usd": 47399.99523438106,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.11105091752860646,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 8.5458
    },
    {
      "token_address": "0x1ae7e1d0ce06364ced9ad58225a1705b3e5db92b",
      "symbol": "LMEOW",
      "name": "lmeow",
      "logo": "https://logo.moralis.io/0x1_0x1ae7e1d0ce06364ced9ad58225a1705b3e5db92b_75679685156941fd9000cee19fb44adf",
      "thumbnail": "https://logo.moralis.io/0x1_0x1ae7e1d0ce06364ced9ad58225a1705b3e5db92b_75679685156941fd9000cee19fb44adf",
      "decimals": 9,
      "smw_holdings_usd": 36366.51007322001,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.032731536434059585,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 6.5565
    },
    {
      "token_address": "0x38e382f74dfb84608f3c1f10187f6bef5951de93",
      "symbol": "MUBI",
      "name": "MUBI",
      "logo": "https://logo.moralis.io/0x1_0x38e382f74dfb84608f3c1f10187f6bef5951de93_7a338ac1797c4bf3952586c051e674ab",
      "thumbnail": "https://logo.moralis.io/0x1_0x38e382f74dfb84608f3c1f10187f6bef5951de93_7a338ac1797c4bf3952586c051e674ab",
      "decimals": 18,
      "smw_holdings_usd": 34525.02080264345,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.10430489438048733,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 6.2245
    },
    {
      "token_address": "0x64bc2ca1be492be7185faa2c8835d9b824c8a194",
      "symbol": "BIGTIME",
      "name": "Big Time",
      "logo": "https://logo.moralis.io/0x1_0x64bc2ca1be492be7185faa2c8835d9b824c8a194_31ac388088e346c1b63ca6a1696f88f3",
      "thumbnail": "https://logo.moralis.io/0x1_0x64bc2ca1be492be7185faa2c8835d9b824c8a194_31ac388088e346c1b63ca6a1696f88f3",
      "decimals": 18,
      "smw_holdings_usd": 20367.958834724865,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.36410734207721523,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 3.6722
    },
    {
      "token_address": "0x8ab2ff0116a279a99950c66a12298962d152b83c",
      "symbol": "ORDS",
      "name": "Ordiswap",
      "logo": "https://logo.moralis.io/0x1_0x8ab2ff0116a279a99950c66a12298962d152b83c_79e05f41f2f841068a35fd5a8c6f1f32",
      "thumbnail": "https://logo.moralis.io/0x1_0x8ab2ff0116a279a99950c66a12298962d152b83c_79e05f41f2f841068a35fd5a8c6f1f32",
      "decimals": 18,
      "smw_holdings_usd": 13762.977328224488,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.15441446823166555,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 2.4813
    },
    {
      "token_address": "0x9ff58067bd8d239000010c154c6983a325df138e",
      "symbol": "PROPC",
      "name": "Propchain Token",
      "logo": "https://logo.moralis.io/0x1_0x9ff58067bd8d239000010c154c6983a325df138e_5c99dff9fad441698d0758c62b53571a",
      "thumbnail": "https://logo.moralis.io/0x1_0x9ff58067bd8d239000010c154c6983a325df138e_5c99dff9fad441698d0758c62b53571a",
      "decimals": 18,
      "smw_holdings_usd": 8937.614668607815,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 4.468807334303908,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.6114
    },
    {
      "token_address": "0x03aa6298f1370642642415edc0db8b957783e8d6",
      "symbol": "NMT",
      "name": "NetMind Token",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 8789.956783486132,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 8.567932599183928,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.5847
    },
    {
      "token_address": "0x328a268b191ef593b72498a9e8a481c086eb21be",
      "symbol": "MZERO",
      "name": "MetaZero",
      "logo": "https://logo.moralis.io/0x1_0x328a268b191ef593b72498a9e8a481c086eb21be_8dc7233d6dd94b969ac8c767710302a0",
      "thumbnail": "https://logo.moralis.io/0x1_0x328a268b191ef593b72498a9e8a481c086eb21be_8dc7233d6dd94b969ac8c767710302a0",
      "decimals": 18,
      "smw_holdings_usd": 6870.1100482845795,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.26716580474618656,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.2386
    },
    {
      "token_address": "0x443459d45c30a03f90037d011cbe22e2183d3b12",
      "symbol": "TYPE",
      "name": "TypeAI",
      "logo": "https://logo.moralis.io/0x1_0x443459d45c30a03f90037d011cbe22e2183d3b12_45d64105d53c483ea1093c5b409f4205",
      "thumbnail": "https://logo.moralis.io/0x1_0x443459d45c30a03f90037d011cbe22e2183d3b12_45d64105d53c483ea1093c5b409f4205",
      "decimals": 18,
      "smw_holdings_usd": 6519.177683655772,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 2.9632625834798962,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.1753
    },
    {
      "token_address": "0x15e6e0d4ebeac120f9a97e71faa6a0235b85ed12",
      "symbol": "SAVM",
      "name": "SatoshiVM",
      "logo": "https://logo.moralis.io/0x1_0x15e6e0d4ebeac120f9a97e71faa6a0235b85ed12_879880c54e0d4acb87c49845357e39d0",
      "thumbnail": "https://logo.moralis.io/0x1_0x15e6e0d4ebeac120f9a97e71faa6a0235b85ed12_879880c54e0d4acb87c49845357e39d0",
      "decimals": 18,
      "smw_holdings_usd": 5643.983377654147,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 6.455625510105237,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.0176
    },
    {
      "token_address": "0xbe03e60757f21f4b6fc8f16676ad9d5b1002e512",
      "symbol": "RST",
      "name": "Raini Studios Token",
      "logo": "https://logo.moralis.io/0x1_0xbe03e60757f21f4b6fc8f16676ad9d5b1002e512_968fba05cd46491b966d3385a34a1f78",
      "thumbnail": "https://logo.moralis.io/0x1_0xbe03e60757f21f4b6fc8f16676ad9d5b1002e512_968fba05cd46491b966d3385a34a1f78",
      "decimals": 18,
      "smw_holdings_usd": 5562.672336223336,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.07744453809555119,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.0029
    },
    {
      "token_address": "0x2ad9addd0d97ec3cdba27f92bf6077893b76ab0b",
      "symbol": "PLANET",
      "name": "PLANET",
      "logo": "https://logo.moralis.io/0x1_0x2ad9addd0d97ec3cdba27f92bf6077893b76ab0b_29c181e75e484aed910e106f121957ba",
      "thumbnail": "https://logo.moralis.io/0x1_0x2ad9addd0d97ec3cdba27f92bf6077893b76ab0b_29c181e75e484aed910e106f121957ba",
      "decimals": 18,
      "smw_holdings_usd": 5287.644496080447,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000097008766655946,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.9533
    },
    {
      "token_address": "0xfa15fc3b3623518fd0975470d71fa86a0bb30c46",
      "symbol": "USSF",
      "name": "Space Force",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 5132.452901507811,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000077676320712,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.9253
    },
    {
      "token_address": "0x69a68d4d83d5ea53dc9fa35ca0a49e7dadbb3c3e",
      "symbol": "🐸🟪",
      "name": "🐸🟪",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 4470.214492846148,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.003662181727,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.8059
    },
    {
      "token_address": "0x614577036f0a024dbc1c88ba616b394dd65d105a",
      "symbol": "GNUS",
      "name": "Genius Token & NFT Collections",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 4226.212967115088,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 67.17746106994001,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.7619
    },
    {
      "token_address": "0xb244b3574a5627849fca2057e3854340def63071",
      "symbol": "VEIL",
      "name": "Veil",
      "logo": "https://logo.moralis.io/0x1_0xb244b3574a5627849fca2057e3854340def63071_6ae92f66c5a04523a7138b75704c1760",
      "thumbnail": "https://logo.moralis.io/0x1_0xb244b3574a5627849fca2057e3854340def63071_6ae92f66c5a04523a7138b75704c1760",
      "decimals": 18,
      "smw_holdings_usd": 3726.228007483756,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.006373101471828439,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.6718
    },
    {
      "token_address": "0xda31d0d1bc934fc34f7189e38a413ca0a5e8b44f",
      "symbol": "BSSB",
      "name": "BSSB",
      "logo": "https://logo.moralis.io/0x1_0xda31d0d1bc934fc34f7189e38a413ca0a5e8b44f_d9fb813726f8474386f45ab4fc759a40",
      "thumbnail": "https://logo.moralis.io/0x1_0xda31d0d1bc934fc34f7189e38a413ca0a5e8b44f_d9fb813726f8474386f45ab4fc759a40",
      "decimals": 18,
      "smw_holdings_usd": 3622.3881884575158,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 1.057509538124692,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.6531
    },
    {
      "token_address": "0xce6e54daa1ea95fb3530859d69d4bdb978dd821b",
      "symbol": "ORBK",
      "name": "Ordibank",
      "logo": "https://logo.moralis.io/0x1_0xce6e54daa1ea95fb3530859d69d4bdb978dd821b_bc70fba433d541c0b286b8ff1ab9189d",
      "thumbnail": "https://logo.moralis.io/0x1_0xce6e54daa1ea95fb3530859d69d4bdb978dd821b_bc70fba433d541c0b286b8ff1ab9189d",
      "decimals": 18,
      "smw_holdings_usd": 2802.619199134668,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.04895860900791271,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.5053
    },
    {
      "token_address": "0x23150e1db43a04ae1ea993b76dd3c37156cabe0f",
      "symbol": "TEQ",
      "name": "Teq Network",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 2301.6545347515216,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.7560370498722113,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.415
    },
    {
      "token_address": "0x239015de0f0121f2c80134558decbba75ea056c6",
      "symbol": "WAND",
      "name": "Wand",
      "logo": "https://logo.moralis.io/0x1_0x239015de0f0121f2c80134558decbba75ea056c6_4f3bce49ecff4c52bef444d3f809d5dd",
      "thumbnail": "https://logo.moralis.io/0x1_0x239015de0f0121f2c80134558decbba75ea056c6_4f3bce49ecff4c52bef444d3f809d5dd",
      "decimals": 18,
      "smw_holdings_usd": 2195.2281515627983,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.03769514004010007,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.3958
    },
    {
      "token_address": "0xe00924736426393035b22770d94a188f25fc3b16",
      "symbol": "DESK",
      "name": "DIAMOND DESK",
      "logo": "https://logo.moralis.io/0x1_0xe00924736426393035b22770d94a188f25fc3b16_2c927a677d754677a81ff2fba49083f5",
      "thumbnail": "https://logo.moralis.io/0x1_0xe00924736426393035b22770d94a188f25fc3b16_2c927a677d754677a81ff2fba49083f5",
      "decimals": 18,
      "smw_holdings_usd": 2153.670141108526,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.015534078008623185,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.3883
    },
    {
      "token_address": "0xc3cc3076cb304494775b3193ef1aa080ba6bf962",
      "symbol": "ODGN",
      "name": "OrdiGen",
      "logo": "https://logo.moralis.io/0x1_0xc3cc3076cb304494775b3193ef1aa080ba6bf962_996c6e0a8f44462a9d77444f76f5e96e",
      "thumbnail": "https://logo.moralis.io/0x1_0xc3cc3076cb304494775b3193ef1aa080ba6bf962_996c6e0a8f44462a9d77444f76f5e96e",
      "decimals": 18,
      "smw_holdings_usd": 2042.525623260726,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.002372156744236101,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.3682
    },
    {
      "token_address": "0xaef420fd77477d9dc8b46d704d44dd09d6c27866",
      "symbol": "CGV",
      "name": "Cogito Governance Token",
      "logo": "https://logo.moralis.io/0x1_0xaef420fd77477d9dc8b46d704d44dd09d6c27866_1b6ddebe7577459a88f80925ba95b317",
      "thumbnail": "https://logo.moralis.io/0x1_0xaef420fd77477d9dc8b46d704d44dd09d6c27866_1b6ddebe7577459a88f80925ba95b317",
      "decimals": 6,
      "smw_holdings_usd": 1605.312731017867,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.23352589295223936,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.2894
    },
    {
      "token_address": "0x1e241521f4767853b376c2fe795a222a07d588ee",
      "symbol": "UNIT",
      "name": "Uni Terminal",
      "logo": "https://logo.moralis.io/0x1_0x1e241521f4767853b376c2fe795a222a07d588ee_f0a9a0ec10dc45228814eecf490de597",
      "thumbnail": "https://logo.moralis.io/0x1_0x1e241521f4767853b376c2fe795a222a07d588ee_f0a9a0ec10dc45228814eecf490de597",
      "decimals": 18,
      "smw_holdings_usd": 438.7388742355649,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.4963513463602466,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0791
    },
    {
      "token_address": "0xbccbedab3bf6fa1cfc3e2d07aa5ce4a282864d6e",
      "symbol": "RVIV",
      "name": "The Revival",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 388.28486923522826,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000300633264897,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.07
    },
    {
      "token_address": "0x3ed525fa1f10889dbf55515d1a436d91680d6c54",
      "symbol": "Kishui.net",
      "name": "Kishui.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 228.009890592253,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000094865775158,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0411
    },
    {
      "token_address": "0xa3c31927a092bd54eb9a0b5dfe01d9db5028bd4f",
      "symbol": "ESPR",
      "name": "Espresso",
      "logo": "https://logo.moralis.io/0x1_0xa3c31927a092bd54eb9a0b5dfe01d9db5028bd4f_d8704c5e4ead40659874beeb73f1bfcd",
      "thumbnail": "https://logo.moralis.io/0x1_0xa3c31927a092bd54eb9a0b5dfe01d9db5028bd4f_d8704c5e4ead40659874beeb73f1bfcd",
      "decimals": 9,
      "smw_holdings_usd": 170.11278069004757,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000405030430214399,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0307
    },
    {
      "token_address": "0x19efa7d0fc88ffe461d1091f8cbe56dc2708a84f",
      "symbol": "UNITAO",
      "name": "UNITAO",
      "logo": "https://logo.moralis.io/0x1_0x19efa7d0fc88ffe461d1091f8cbe56dc2708a84f_0714fc57fda54cbd808335fcf28fe7fa",
      "thumbnail": "https://logo.moralis.io/0x1_0x19efa7d0fc88ffe461d1091f8cbe56dc2708a84f_0714fc57fda54cbd808335fcf28fe7fa",
      "decimals": 18,
      "smw_holdings_usd": 130.79313849192124,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.03870357228396624,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0236
    },
    {
      "token_address": "0xda8343085b6e61b3bc92dab00f3b40ef2529c9f9",
      "symbol": "INCOG",
      "name": "Incognito Bot",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 119.483433744917,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.011863178130059483,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0215
    },
    {
      "token_address": "0x8b937af714ac7e2129bd33d93641f52b665ca352",
      "symbol": "JIZZ",
      "name": "JizzRocket",
      "logo": "https://logo.moralis.io/0x1_0x8b937af714ac7e2129bd33d93641f52b665ca352_5f99b7915ed9418ab06c15e2d3486365",
      "thumbnail": "https://logo.moralis.io/0x1_0x8b937af714ac7e2129bd33d93641f52b665ca352_5f99b7915ed9418ab06c15e2d3486365",
      "decimals": 18,
      "smw_holdings_usd": 99.15426341508807,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000001530653808772,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0179
    },
    {
      "token_address": "0xdc5e9445169c73cf21e1da0b270e8433cac69959",
      "symbol": "科太币",
      "name": " Ethereum",
      "logo": "https://logo.moralis.io/0x1_0xdc5e9445169c73cf21e1da0b270e8433cac69959_9b054ce368594382b42583fec349a968",
      "thumbnail": "https://logo.moralis.io/0x1_0xdc5e9445169c73cf21e1da0b270e8433cac69959_9b054ce368594382b42583fec349a968",
      "decimals": 9,
      "smw_holdings_usd": 67.33979936049352,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 2.33516357e-10,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0121
    },
    {
      "token_address": "0x38cf6cea814aefd01027a0bbf8a78b7aa95a698e",
      "symbol": "BYPASS",
      "name": "Bypass",
      "logo": "https://logo.moralis.io/0x1_0x38cf6cea814aefd01027a0bbf8a78b7aa95a698e_3f9aac8b46c443c9818452b4d36d4323",
      "thumbnail": "https://logo.moralis.io/0x1_0x38cf6cea814aefd01027a0bbf8a78b7aa95a698e_3f9aac8b46c443c9818452b4d36d4323",
      "decimals": 9,
      "smw_holdings_usd": 66.75290431598744,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.040652930638604146,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.012
    },
    {
      "token_address": "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "symbol": "CRV",
      "name": "Curve DAO Token",
      "logo": "https://logo.moralis.io/0x1_0xd533a949740bb3306d119cc777fa900ba034cd52_fb1f8936cfb14442a59d10e6e96efbd0",
      "thumbnail": "https://logo.moralis.io/0x1_0xd533a949740bb3306d119cc777fa900ba034cd52_fb1f8936cfb14442a59d10e6e96efbd0",
      "decimals": 18,
      "smw_holdings_usd": 61.89493489694161,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.7048756838080634,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0112
    },
    {
      "token_address": "0xff055ff1ec9aa85f14e757d769f9d52d023f2e3b",
      "symbol": "NHUB",
      "name": "NodeHUB",
      "logo": "https://logo.moralis.io/0x1_0xff055ff1ec9aa85f14e757d769f9d52d023f2e3b_3e8bace002fa4c2085de16dc85d9b15d",
      "thumbnail": "https://logo.moralis.io/0x1_0xff055ff1ec9aa85f14e757d769f9d52d023f2e3b_3e8bace002fa4c2085de16dc85d9b15d",
      "decimals": 18,
      "smw_holdings_usd": 60.52430616253022,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000460525861640816,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0109
    },
    {
      "token_address": "0x1bf8fd0fd7e22a474a140aad2fd7a2076c393ada",
      "symbol": "WRAP",
      "name": "WRAPPED Protocol",
      "logo": "https://logo.moralis.io/0x1_0x1bf8fd0fd7e22a474a140aad2fd7a2076c393ada_7c609cc671f4495d82ef153e8f706102",
      "thumbnail": "https://logo.moralis.io/0x1_0x1bf8fd0fd7e22a474a140aad2fd7a2076c393ada_7c609cc671f4495d82ef153e8f706102",
      "decimals": 18,
      "smw_holdings_usd": 41.064913020094785,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000694365846058872,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0074
    },
    {
      "token_address": "0x28e4f2b4f9215d0093b95c458b52108267671fbd",
      "symbol": "0xLP",
      "name": "0xLiquidity",
      "logo": "https://logo.moralis.io/0x1_0x28e4f2b4f9215d0093b95c458b52108267671fbd_167229f7072f41fdac7da84ed07fe729",
      "thumbnail": "https://logo.moralis.io/0x1_0x28e4f2b4f9215d0093b95c458b52108267671fbd_167229f7072f41fdac7da84ed07fe729",
      "decimals": 9,
      "smw_holdings_usd": 38.95097127322358,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00016140080581905,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.007
    },
    {
      "token_address": "0x8ef32a03784c8fd63bbf027251b9620865bd54b6",
      "symbol": "BULLET",
      "name": "Bullet Game Betting Token",
      "logo": "https://logo.moralis.io/0x1_0x8ef32a03784c8fd63bbf027251b9620865bd54b6_90be56e67bc74203b01cb4d8a2b84f8b",
      "thumbnail": "https://logo.moralis.io/0x1_0x8ef32a03784c8fd63bbf027251b9620865bd54b6_90be56e67bc74203b01cb4d8a2b84f8b",
      "decimals": 8,
      "smw_holdings_usd": 37.061077634406374,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.02150099295871124,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0067
    },
    {
      "token_address": "0x20fcefa41045080764c48c2b9429e44c644e5dea",
      "symbol": "foox",
      "name": "foox",
      "logo": "https://logo.moralis.io/0x1_0x20fcefa41045080764c48c2b9429e44c644e5dea_dd892fb24f544bdbae1d962e60527237",
      "thumbnail": "https://logo.moralis.io/0x1_0x20fcefa41045080764c48c2b9429e44c644e5dea_dd892fb24f544bdbae1d962e60527237",
      "decimals": 18,
      "smw_holdings_usd": 34.244539294268584,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.00150265036890477,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0062
    },
    {
      "token_address": "0x4ad70d8a44ee3825333ae5fa019bf474fa0204b0",
      "symbol": "DUST",
      "name": "MoonDust",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 28.700303757652453,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.005934719552864444,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0052
    },
    {
      "token_address": "0xb4357054c3da8d46ed642383f03139ac7f090343",
      "symbol": "PORT3",
      "name": "Port3 Network",
      "logo": "https://logo.moralis.io/0x1_0xb4357054c3da8d46ed642383f03139ac7f090343_45bcaa07ef074abb95c14c4d4143d846",
      "thumbnail": "https://logo.moralis.io/0x1_0xb4357054c3da8d46ed642383f03139ac7f090343_45bcaa07ef074abb95c14c4d4143d846",
      "decimals": 18,
      "smw_holdings_usd": 28.08973594916181,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.27538956812903737,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0051
    },
    {
      "token_address": "0x7e77dcb127f99ece88230a64db8d595f31f1b068",
      "symbol": "sILV2",
      "name": "Escrowed Illuvium 2",
      "logo": "https://logo.moralis.io/0x1_0x7e77dcb127f99ece88230a64db8d595f31f1b068_c695bae6048f412f833efe421c20e56c",
      "thumbnail": "https://logo.moralis.io/0x1_0x7e77dcb127f99ece88230a64db8d595f31f1b068_c695bae6048f412f833efe421c20e56c",
      "decimals": 18,
      "smw_holdings_usd": 22.183967404635016,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 74.27349390497892,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.004
    },
    {
      "token_address": "0xb2b68f7785daecf337749491c4a5ff9de3c964ef",
      "symbol": "MSTR",
      "name": "MicroStrategy",
      "logo": "https://logo.moralis.io/0x1_0xb2b68f7785daecf337749491c4a5ff9de3c964ef_42dc7a01967a449d889a8d36329a6c17",
      "thumbnail": "https://logo.moralis.io/0x1_0xb2b68f7785daecf337749491c4a5ff9de3c964ef_42dc7a01967a449d889a8d36329a6c17",
      "decimals": 18,
      "smw_holdings_usd": 17.899441193590903,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.009288935077549012,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0032
    },
    {
      "token_address": "0x1e971b5b21367888239f00da16f0a6b0effecb03",
      "symbol": "LEEROY",
      "name": "LEEEEEEEEEEEROOOOY JENKINNNNNS!!!!",
      "logo": "https://logo.moralis.io/0x1_0x1e971b5b21367888239f00da16f0a6b0effecb03_8c0cfe6830e54ae18f9583237c644963",
      "thumbnail": "https://logo.moralis.io/0x1_0x1e971b5b21367888239f00da16f0a6b0effecb03_8c0cfe6830e54ae18f9583237c644963",
      "decimals": 18,
      "smw_holdings_usd": 16.61115114560678,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000001158634785959,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.003
    },
    {
      "token_address": "0x9e64ea4e67371de7ea8039c6f992f3029836cf4d",
      "symbol": "GUNBET",
      "name": "GUNBET",
      "logo": "https://logo.moralis.io/0x1_0x9e64ea4e67371de7ea8039c6f992f3029836cf4d_ebbca95e95df425c81f946ddb8514b1f",
      "thumbnail": "https://logo.moralis.io/0x1_0x9e64ea4e67371de7ea8039c6f992f3029836cf4d_ebbca95e95df425c81f946ddb8514b1f",
      "decimals": 9,
      "smw_holdings_usd": 12.451770519816083,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.003112942629954021,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0022
    },
    {
      "token_address": "0xec1d67dbb39942b5c50086e485e2e3eedee015cb",
      "symbol": "Grave",
      "name": "Ravens",
      "logo": "https://logo.moralis.io/0x1_0xec1d67dbb39942b5c50086e485e2e3eedee015cb_87034d32f2d546bbbebf068a01e790e9",
      "thumbnail": "https://logo.moralis.io/0x1_0xec1d67dbb39942b5c50086e485e2e3eedee015cb_87034d32f2d546bbbebf068a01e790e9",
      "decimals": 18,
      "smw_holdings_usd": 9.211699358856475,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 9.8115703147e-8,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0017
    },
    {
      "token_address": "0x5526f0cab9f260023e94cf01e353e70d2f45ed81",
      "symbol": "COCKS",
      "name": "COCKBOXING",
      "logo": "https://logo.moralis.io/0x1_0x5526f0cab9f260023e94cf01e353e70d2f45ed81_8aecdab74400429aa228d18fb8192744",
      "thumbnail": "https://logo.moralis.io/0x1_0x5526f0cab9f260023e94cf01e353e70d2f45ed81_8aecdab74400429aa228d18fb8192744",
      "decimals": 9,
      "smw_holdings_usd": 8.767291330645016,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.001217391846572135,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0016
    },
    {
      "token_address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "symbol": "WETH",
      "name": "Wrapped Ether",
      "logo": "https://logo.moralis.io/0x1_0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_018112a9229b4bf1bf0d042beb7c2c55",
      "thumbnail": "https://logo.moralis.io/0x1_0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2_018112a9229b4bf1bf0d042beb7c2c55",
      "decimals": 18,
      "smw_holdings_usd": 7.8066476573415615,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 3494.891506945443,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0014
    },
    {
      "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "symbol": "LINK",
      "name": "ChainLink Token",
      "logo": "https://logo.moralis.io/0x1_0x514910771af9ca656af840dff83e8264ecf986ca_9fae9a4833e343b3a67983dfdd9d048f",
      "thumbnail": "https://logo.moralis.io/0x1_0x514910771af9ca656af840dff83e8264ecf986ca_9fae9a4833e343b3a67983dfdd9d048f",
      "decimals": 18,
      "smw_holdings_usd": 6.819030121660412,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 18.85170204119548,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0012
    },
    {
      "token_address": "0xb2e7dd58793bfc0ac7ef5d9fa315cfc561c845d9",
      "symbol": "NIOCTIB",
      "name": "unI01cinoSamabOrettoPyrraH",
      "logo": null,
      "thumbnail": null,
      "decimals": 8,
      "smw_holdings_usd": 6.757295656300066,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00153010213419892,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0012
    },
    {
      "token_address": "0xbb881a71b649a61f4cbc237b25402c2e3872bc24",
      "symbol": "QUIQ",
      "name": "QUIQ",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0.27910450984591256,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.009303483661530419,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0001
    },
    {
      "token_address": "0x2b000332cd291ef558af76298a4d6f6001e4e015",
      "symbol": "XAR",
      "name": "Xar",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0.002034613260198279,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.8547743408e-8,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x667102bd3413bfeaa3dffb48fa8288819e480a88",
      "symbol": "TKX",
      "name": "Tokenize Emblem",
      "logo": "https://logo.moralis.io/0x1_0x667102bd3413bfeaa3dffb48fa8288819e480a88_76be08b8932c4017aa820723defc1d9e",
      "thumbnail": "https://logo.moralis.io/0x1_0x667102bd3413bfeaa3dffb48fa8288819e480a88_76be08b8932c4017aa820723defc1d9e",
      "decimals": 8,
      "smw_holdings_usd": 0.0009695882398328084,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 15.63851999730336,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x53fffb19bacd44b82e204d036d579e86097e5d09",
      "symbol": "BGBG",
      "name": "BigMouthFrog",
      "logo": "https://logo.moralis.io/0x1_0x53fffb19bacd44b82e204d036d579e86097e5d09_2635cf9f75a04096bc6bf14297910ae4",
      "thumbnail": "https://logo.moralis.io/0x1_0x53fffb19bacd44b82e204d036d579e86097e5d09_2635cf9f75a04096bc6bf14297910ae4",
      "decimals": 18,
      "smw_holdings_usd": 1.0615403338396131e-8,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 7.7758083e-11,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xdfef6416ea3e6ce587ed42aa7cb2e586362cbbfa",
      "symbol": "Shib2.0",
      "name": "Shib2.0",
      "logo": "https://logo.moralis.io/0x1_0xdfef6416ea3e6ce587ed42aa7cb2e586362cbbfa_21185b372a6c4752a49e4e043939f97d",
      "thumbnail": "https://logo.moralis.io/0x1_0xdfef6416ea3e6ce587ed42aa7cb2e586362cbbfa_21185b372a6c4752a49e4e043939f97d",
      "decimals": 9,
      "smw_holdings_usd": 2.949681334e-18,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.949681334e-9,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
      "symbol": "LDO",
      "name": "Lido DAO Token",
      "logo": "https://logo.moralis.io/0x1_0x5a98fcbea516cf06857215779fd812ca3bef1b32_136ca41584924ab39f1ec92a547a2ce7",
      "thumbnail": "https://logo.moralis.io/0x1_0x5a98fcbea516cf06857215779fd812ca3bef1b32_136ca41584924ab39f1ec92a547a2ce7",
      "decimals": 18,
      "smw_holdings_usd": 2.838606108917252e-18,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 2.8386061089172516,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x08c32b0726c5684024ea6e141c50ade9690bbdcc",
      "symbol": "STOS",
      "name": "Stratos Token",
      "logo": "https://logo.moralis.io/0x1_0x08c32b0726c5684024ea6e141c50ade9690bbdcc_52374cd27301403daa8f70bd7a03d253",
      "thumbnail": "https://logo.moralis.io/0x1_0x08c32b0726c5684024ea6e141c50ade9690bbdcc_52374cd27301403daa8f70bd7a03d253",
      "decimals": 18,
      "smw_holdings_usd": 1.4618656274137075e-18,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 1.4618656274137074,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x661ecf29b533e7d09f67f597af77eeaf3cc6b1e7",
      "symbol": "NUDE",
      "name": "0xNude",
      "logo": "https://logo.moralis.io/0x1_0x661ecf29b533e7d09f67f597af77eeaf3cc6b1e7_5d120f2468414b98a39e4134b262dd8c",
      "thumbnail": "https://logo.moralis.io/0x1_0x661ecf29b533e7d09f67f597af77eeaf3cc6b1e7_5d120f2468414b98a39e4134b262dd8c",
      "decimals": 9,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xab98093c7232e98a47d7270ce0c1c2106f61c73b",
      "symbol": "BLAST",
      "name": "BLASTERS",
      "logo": "https://logo.moralis.io/0x1_0xab98093c7232e98a47d7270ce0c1c2106f61c73b_40608506ff5641c6ad310633efd73be1",
      "thumbnail": "https://logo.moralis.io/0x1_0xab98093c7232e98a47d7270ce0c1c2106f61c73b_40608506ff5641c6ad310633efd73be1",
      "decimals": 9,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x17a10104cbc1ed155d083ead9fcf5c3440bb50e8",
      "symbol": "$ USDCNotice.com <- Visit to secure your wallet!",
      "name": "$ USDCNotice.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x1389f9576d4107205c0bf532889f00a42ff03766",
      "symbol": "Visit https://ondo-reward.com to get $ONDO Reward",
      "name": "# ondo-reward.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x083b95c3752367e80dcc288b1bda912f463629b0",
      "symbol": "UniAward.org",
      "name": "$",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x7c743517f34daefc6477d44b0a2a12de6fa38ea2",
      "symbol": "Uniswapv3LP.com",
      "name": "! Uniswapv3LP.com !",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6b15c3a0ece9a699790f5a1dc93aa99e59097b08",
      "symbol": "Claim Rewards at https://abict.pro",
      "name": "$ abict.pro",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x68ca006db91312cd60a2238ce775be5f9f738bba",
      "symbol": "$ USDCGift.com <- Visit to claim bonus",
      "name": "$ USDCGift.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x67542502245eb5df64ef7ea776199ceb79401058",
      "symbol": "$ UniswapLR.com @ 5.75",
      "name": "$ UniswapLR.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x643695d282f6ba237afe27ffe0acd89a86b50d3e",
      "symbol": "$ USDCXmas.com <- Visit to claim gift",
      "name": "$ USDCXmas.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x6202feb160ce2a709d03d67dc0396c619caa26f3",
      "symbol": "$TYPE Rewards Ticket from https://type-ai.xyz",
      "name": "! type-ai.xyz",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x60c81ce152a565b4d45c6e666f254c33b0330cb6",
      "symbol": "Visit https://abroshib.org in order to Swap to ETH.",
      "name": "AbroShib.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5be7794209b50ecbea73833caaf403fb5ffda473",
      "symbol": "Visit https://ethapy.net to claim rewards",
      "name": "# ethapy.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x58f03261e54562bf73ce011638e0b2c4134ec78f",
      "symbol": "PLANET Gift Token | planetfi.org",
      "name": "# PLANET Gift Token | planetfi.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x573af4529756643e9c16caae7995a5ce4aad051d",
      "symbol": "Swap to ETH here - https://Abroshib.org ",
      "name": "AbroShib.Org",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5611e2864a541847f3b96b67c1aa7bb921e81242",
      "symbol": "Claim $GNUS Reward at https://gnuslabs.com",
      "name": "# gnuslabs.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xfcb73606eb9ee9a53619ed64b9a31d9bfee6a544",
      "symbol": "Reward Token - Claim at https://stUSD.xyz",
      "name": "$ stUSD.xyz",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xfa414b582f1a1c26831343f93c9ef5a45617eb21",
      "symbol": "Claim $MUBI reward at https://multibitex.org",
      "name": "! MUBI Reward Ticket (Website: multibitex.org)",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd885a8029961f78754487d8e107e87b0ea879d67",
      "symbol": "Get free $TEQ at https://teqai.org",
      "name": "! TEQ Airdrop Ticket (URL: teqai.org)",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd5efcca71a658fe5ab612dde833e57eced0efffe",
      "symbol": "Claim $PORT3 airdrop at https://port3network.org",
      "name": "# port3network.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xcf39b7793512f03f2893c16459fd72e65d2ed00c",
      "symbol": "UniswapLP.com",
      "name": "$ UniswapLP.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc990e886e7325eb748be47ad9d8cf821e1fde6d5",
      "symbol": "Visit AbeNFT.Net in order to Swap your Coins",
      "name": "AbeNFT.Net",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc83aa62eb4e449967de0eb4bf653b7fba57b50b9",
      "symbol": "Visit website abroshib.org to swap tokens.",
      "name": "Abroshib.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc1c8c49b0405f6cffba5351179befb2d8a2c776c",
      "symbol": "$ ClaimUniLP.com - Visit to claim",
      "name": "$ ClaimUniLP.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb79dff2c4fb01491b80b090a5181ead445fd12e2",
      "symbol": "Visit https://mantlerewards.com to claim rewards",
      "name": "# mantlerewards.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x9e09722e9934bfd4da061b2369830a2c2e07c221",
      "symbol": "Claim $TYPE Reward at https://typelabs.org",
      "name": "# typelabs.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x9d42ee269acf39b50fa01370c8f11c32c1e293ec",
      "symbol": "UNIRewardsV2.com",
      "name": "$ UNIRewardsV2.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x98d1c76831c0abea30e3dac8628bd72d6b0e3dd2",
      "symbol": " R# Visit UrgentDT.com to secure your funds ASAP. A hacker has access to your funds.",
      "name": "# UrgentDT.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x96b949f093b330bae408278aa5109eccecf103ed",
      "symbol": "Claim $0x0 reward at https://0x0dao.com",
      "name": "! 0x0dao.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0xfdc3d1f88805ccdc18340ab8a819d84e307bfad2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
      "symbol": "FLOKI",
      "name": "FLOKI",
      "logo": "https://logo.moralis.io/0x1_0xcf0c122c6b73ff809c693db761e7baebe62b6a2e_5e6940e596304bfea729e45c6a8bfd37",
      "thumbnail": "https://logo.moralis.io/0x1_0xcf0c122c6b73ff809c693db761e7baebe62b6a2e_5e6940e596304bfea729e45c6a8bfd37",
      "decimals": 9,
      "smw_holdings_usd": 2407298.41888566,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000240729841888566,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 64.7274
    },
    {
      "token_address": "0x0d6632cc1e5a956bc670e3a3e91ec008f763b05c",
      "symbol": "GREEDY",
      "name": "GREEDY",
      "logo": "https://logo.moralis.io/0x1_0x0d6632cc1e5a956bc670e3a3e91ec008f763b05c_f081597e7f714ebcba5b372d893fa356",
      "thumbnail": "https://logo.moralis.io/0x1_0x0d6632cc1e5a956bc670e3a3e91ec008f763b05c_f081597e7f714ebcba5b372d893fa356",
      "decimals": 18,
      "smw_holdings_usd": 726559.0152348719,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.58262144639e-7,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 19.5357
    },
    {
      "token_address": "0x573468aab618e4b4ea627d34f9beeec91dc03ce2",
      "symbol": "COKE",
      "name": "COCAINE BULL",
      "logo": "https://logo.moralis.io/0x1_0x573468aab618e4b4ea627d34f9beeec91dc03ce2_3412e03ffa4d43dfb57a675b3c9563b0",
      "thumbnail": "https://logo.moralis.io/0x1_0x573468aab618e4b4ea627d34f9beeec91dc03ce2_3412e03ffa4d43dfb57a675b3c9563b0",
      "decimals": 18,
      "smw_holdings_usd": 306485.91138589906,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 7.2863253799e-8,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 8.2408
    },
    {
      "token_address": "0xb69753c06bb5c366be51e73bfc0cc2e3dc07e371",
      "symbol": "POOH",
      "name": "POOH",
      "logo": "https://logo.moralis.io/0x1_0xb69753c06bb5c366be51e73bfc0cc2e3dc07e371_63493a02d8f249199e17c65be99d4f4d",
      "thumbnail": "https://logo.moralis.io/0x1_0xb69753c06bb5c366be51e73bfc0cc2e3dc07e371_63493a02d8f249199e17c65be99d4f4d",
      "decimals": 18,
      "smw_holdings_usd": 131948.54377738427,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 6.1707184039e-8,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 3.5478
    },
    {
      "token_address": "0x9ad5a43baf2e78e8b2602aa4250b4ec0889ec75d",
      "symbol": "Popi",
      "name": "POPI",
      "logo": "https://logo.moralis.io/0x1_0x9ad5a43baf2e78e8b2602aa4250b4ec0889ec75d_73b13aff425f4244a390172b3e0cd1b9",
      "thumbnail": "https://logo.moralis.io/0x1_0x9ad5a43baf2e78e8b2602aa4250b4ec0889ec75d_73b13aff425f4244a390172b3e0cd1b9",
      "decimals": 18,
      "smw_holdings_usd": 36984.75915935924,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 7.2401215629e-8,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.9944
    },
    {
      "token_address": "0xff836a5821e69066c87e268bc51b849fab94240c",
      "symbol": "шайлушай",
      "name": "Real Smurf Cat",
      "logo": "https://logo.moralis.io/0x1_0xff836a5821e69066c87e268bc51b849fab94240c_364b6613d76a4eef86155ddd74f5dc83",
      "thumbnail": "https://logo.moralis.io/0x1_0xff836a5821e69066c87e268bc51b849fab94240c_364b6613d76a4eef86155ddd74f5dc83",
      "decimals": 18,
      "smw_holdings_usd": 32116.793165791303,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000095897476905842,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.8636
    },
    {
      "token_address": "0xba386a4ca26b85fd057ab1ef86e3dc7bdeb5ce70",
      "symbol": "JESUS",
      "name": "Jesus Coin",
      "logo": "https://logo.moralis.io/0x1_0xba386a4ca26b85fd057ab1ef86e3dc7bdeb5ce70_69f689401b0b447d8be5ebce1811e7d9",
      "thumbnail": "https://logo.moralis.io/0x1_0xba386a4ca26b85fd057ab1ef86e3dc7bdeb5ce70_69f689401b0b447d8be5ebce1811e7d9",
      "decimals": 18,
      "smw_holdings_usd": 27708.753875797636,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 1.75193053188e-7,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.745
    },
    {
      "token_address": "0x9e20461bc2c4c980f62f1b279d71734207a6a356",
      "symbol": "OMNI",
      "name": "OmniCat",
      "logo": "https://logo.moralis.io/0x1_0x9e20461bc2c4c980f62f1b279d71734207a6a356_ec594aa8d3714464912eacbf4ed0af09",
      "thumbnail": "https://logo.moralis.io/0x1_0x9e20461bc2c4c980f62f1b279d71734207a6a356_ec594aa8d3714464912eacbf4ed0af09",
      "decimals": 18,
      "smw_holdings_usd": 14459.237341037975,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000949260645637967,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.3888
    },
    {
      "token_address": "0x61e393beb6e312982a450f7aec35e84012b4c7e0",
      "symbol": "CFI",
      "name": "Crystal Finance",
      "logo": "https://logo.moralis.io/0x1_0x61e393beb6e312982a450f7aec35e84012b4c7e0_a7450ff4015b4587b02eab3cbb9a3e65",
      "thumbnail": "https://logo.moralis.io/0x1_0x61e393beb6e312982a450f7aec35e84012b4c7e0_a7450ff4015b4587b02eab3cbb9a3e65",
      "decimals": 18,
      "smw_holdings_usd": 8044.99055025426,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000003542231640963,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.2163
    },
    {
      "token_address": "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
      "symbol": "PPT",
      "name": "Populous Platform",
      "logo": "https://logo.moralis.io/0x1_0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a_3c00cc01350c4b61956189661a1c9ca0",
      "thumbnail": "https://logo.moralis.io/0x1_0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a_3c00cc01350c4b61956189661a1c9ca0",
      "decimals": 8,
      "smw_holdings_usd": 4888.6919537326485,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.037317988562164235,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.1314
    },
    {
      "token_address": "0xf49311af05a4ffb1dbf33d61e9b2d4f0a7d4a71c",
      "symbol": "CBot",
      "name": "CompanionBot",
      "logo": "https://logo.moralis.io/0x1_0xf49311af05a4ffb1dbf33d61e9b2d4f0a7d4a71c_c62c5e1b0b294a759e3572f3e6df226b",
      "thumbnail": "https://logo.moralis.io/0x1_0xf49311af05a4ffb1dbf33d61e9b2d4f0a7d4a71c_c62c5e1b0b294a759e3572f3e6df226b",
      "decimals": 9,
      "smw_holdings_usd": 4504.479910903536,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.10773312898879377,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.1211
    },
    {
      "token_address": "0x7bdf3ff2513a4f467bc25b7fd4b8404ad8126cb3",
      "symbol": "MUSK",
      "name": "Elon Musk",
      "logo": "https://logo.moralis.io/0x1_0x7bdf3ff2513a4f467bc25b7fd4b8404ad8126cb3_b5f792f706554da8b77f729c458224c2",
      "thumbnail": "https://logo.moralis.io/0x1_0x7bdf3ff2513a4f467bc25b7fd4b8404ad8126cb3_b5f792f706554da8b77f729c458224c2",
      "decimals": 18,
      "smw_holdings_usd": 2853.149292506103,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000028678463364983,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0767
    },
    {
      "token_address": "0xc76d53f988820fe70e01eccb0248b312c2f1c7ca",
      "symbol": "INU",
      "name": "Inu",
      "logo": "https://logo.moralis.io/0x1_0xc76d53f988820fe70e01eccb0248b312c2f1c7ca_23ec35bf70a0407981400d662425f003",
      "thumbnail": "https://logo.moralis.io/0x1_0xc76d53f988820fe70e01eccb0248b312c2f1c7ca_23ec35bf70a0407981400d662425f003",
      "decimals": 18,
      "smw_holdings_usd": 2742.186394680219,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 6.762876135e-9,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0737
    },
    {
      "token_address": "0x6f6382f241e3c6ee0e9bee2390d91a73adc0afff",
      "symbol": "TMNT",
      "name": "Teenage Mutant Ninja Turtles",
      "logo": "https://logo.moralis.io/0x1_0x6f6382f241e3c6ee0e9bee2390d91a73adc0afff_9568ba1db16740cdb07fb877ba74d901",
      "thumbnail": "https://logo.moralis.io/0x1_0x6f6382f241e3c6ee0e9bee2390d91a73adc0afff_9568ba1db16740cdb07fb877ba74d901",
      "decimals": 18,
      "smw_holdings_usd": 2350.2057491715736,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.001129960114842587,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0632
    },
    {
      "token_address": "0xb1e8df7e585b1ffed100843ea99b54324db49d67",
      "symbol": "MUSK",
      "name": "Elon Musk",
      "logo": "https://logo.moralis.io/0x1_0xb1e8df7e585b1ffed100843ea99b54324db49d67_cce76436d9b548c1867164cc06a27432",
      "thumbnail": "https://logo.moralis.io/0x1_0xb1e8df7e585b1ffed100843ea99b54324db49d67_cce76436d9b548c1867164cc06a27432",
      "decimals": 18,
      "smw_holdings_usd": 2277.8621928107655,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000028067183401217,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0612
    },
    {
      "token_address": "0xc1534fe936be00369c7a827a6e731a233bd0ed34",
      "symbol": "CAVA",
      "name": "Cavachon",
      "logo": "https://logo.moralis.io/0x1_0xc1534fe936be00369c7a827a6e731a233bd0ed34_9d11609caeaf4826935646205d76cc29",
      "thumbnail": "https://logo.moralis.io/0x1_0xc1534fe936be00369c7a827a6e731a233bd0ed34_9d11609caeaf4826935646205d76cc29",
      "decimals": 18,
      "smw_holdings_usd": 1595.8529775409968,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 5.5811353e-11,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0429
    },
    {
      "token_address": "0x73d3a884322af11c6a5e35118c8296cbdad68caf",
      "symbol": "VROOM",
      "name": "TurboPepe",
      "logo": "https://logo.moralis.io/0x1_0x73d3a884322af11c6a5e35118c8296cbdad68caf_5129db99a7eb4a078308d20dda68ed94",
      "thumbnail": "https://logo.moralis.io/0x1_0x73d3a884322af11c6a5e35118c8296cbdad68caf_5129db99a7eb4a078308d20dda68ed94",
      "decimals": 18,
      "smw_holdings_usd": 1201.6540696574762,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 3.25986406923e-7,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0323
    },
    {
      "token_address": "0x5edb9a9ecc1963f45802861e3579ed17cc89f19f",
      "symbol": "DEFIAI",
      "name": "DeFi",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 566.1426352102611,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000104448944679059,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0152
    },
    {
      "token_address": "0x4208aa4d7a9a10f4f8bb7f6400c1b2161d946969",
      "symbol": "똥코인",
      "name": "똥코인",
      "logo": "https://logo.moralis.io/0x1_0x4208aa4d7a9a10f4f8bb7f6400c1b2161d946969_9624d5b566954663af968ae23b3e652e",
      "thumbnail": "https://logo.moralis.io/0x1_0x4208aa4d7a9a10f4f8bb7f6400c1b2161d946969_9624d5b566954663af968ae23b3e652e",
      "decimals": 18,
      "smw_holdings_usd": 511.9987394906271,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 3.09501358e-10,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0138
    },
    {
      "token_address": "0x9f60285661ecfb8bb1b04c8b94d93989f93dc457",
      "symbol": "ET",
      "name": "THE ONE QUESTION",
      "logo": "https://logo.moralis.io/0x1_0x9f60285661ecfb8bb1b04c8b94d93989f93dc457_48a0791e30f14fd5bb439f482e137333",
      "thumbnail": "https://logo.moralis.io/0x1_0x9f60285661ecfb8bb1b04c8b94d93989f93dc457_48a0791e30f14fd5bb439f482e137333",
      "decimals": 18,
      "smw_holdings_usd": 489.59130799741143,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.313292409e-9,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0132
    },
    {
      "token_address": "0x0531de6c92c4690b25c1c41dd415ef869ef33976",
      "symbol": "SOON",
      "name": "Mousetrap",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 482.94492089279964,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 4.75532411955e-7,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.013
    },
    {
      "token_address": "0xf51f3b3c45cc8b96f646f0427cecd179344f8171",
      "symbol": "DODO",
      "name": "DODO",
      "logo": "https://logo.moralis.io/0x1_0xf51f3b3c45cc8b96f646f0427cecd179344f8171_ab138c54a3fd44a3aa41c16e74f17cfd",
      "thumbnail": "https://logo.moralis.io/0x1_0xf51f3b3c45cc8b96f646f0427cecd179344f8171_ab138c54a3fd44a3aa41c16e74f17cfd",
      "decimals": 18,
      "smw_holdings_usd": 332.7168061776368,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.0000018269996688,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0089
    },
    {
      "token_address": "0x6992efa26f7617dda2f436d13a03af168c86fe39",
      "symbol": "KABO",
      "name": "Kabochan",
      "logo": "https://logo.moralis.io/0x1_0x6992efa26f7617dda2f436d13a03af168c86fe39_26eb7debdbec44119c0be7d8ac572361",
      "thumbnail": "https://logo.moralis.io/0x1_0x6992efa26f7617dda2f436d13a03af168c86fe39_26eb7debdbec44119c0be7d8ac572361",
      "decimals": 9,
      "smw_holdings_usd": 303.8024258927086,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000004158041252509,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0082
    },
    {
      "token_address": "0xe9514a6eba63a0bbbe2faea919e773ebe0f527c1",
      "symbol": "KEK",
      "name": "Kekcoin",
      "logo": "https://logo.moralis.io/0x1_0xe9514a6eba63a0bbbe2faea919e773ebe0f527c1_af2c50076a874eee9e8b66770fbd2aa5",
      "thumbnail": "https://logo.moralis.io/0x1_0xe9514a6eba63a0bbbe2faea919e773ebe0f527c1_af2c50076a874eee9e8b66770fbd2aa5",
      "decimals": 18,
      "smw_holdings_usd": 196.41801877170164,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 6.7953732e-11,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0053
    },
    {
      "token_address": "0x0be43fd28c570e18a8609b37039740d3b00b4840",
      "symbol": "DOMO",
      "name": "Domo",
      "logo": "https://logo.moralis.io/0x1_0x0be43fd28c570e18a8609b37039740d3b00b4840_5e0ba40087ce43a08f69dfb0a89f9789",
      "thumbnail": "https://logo.moralis.io/0x1_0x0be43fd28c570e18a8609b37039740d3b00b4840_5e0ba40087ce43a08f69dfb0a89f9789",
      "decimals": 18,
      "smw_holdings_usd": 158.0466560338773,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000261830512319303,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0042
    },
    {
      "token_address": "0x0c21638d4bcb88568f88bc84a50e317715f8de8a",
      "symbol": "GDX",
      "name": "GrokDogeX",
      "logo": "https://logo.moralis.io/0x1_0x0c21638d4bcb88568f88bc84a50e317715f8de8a_f4d2b2a5bd3c4d89b79db7d13815861d",
      "thumbnail": "https://logo.moralis.io/0x1_0x0c21638d4bcb88568f88bc84a50e317715f8de8a_f4d2b2a5bd3c4d89b79db7d13815861d",
      "decimals": 18,
      "smw_holdings_usd": 150.09217180643014,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000050470842705637,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.004
    },
    {
      "token_address": "0xf9a449382b54edc12fab88b54c13c296249b41ae",
      "symbol": "CASH",
      "name": "StalloneSchwarzeneggerVanDammeChuckNorrisStevenSeagalJackieChan",
      "logo": "https://logo.moralis.io/0x1_0xf9a449382b54edc12fab88b54c13c296249b41ae_b9129b94d81d487a8faaf3190686ae53",
      "thumbnail": "https://logo.moralis.io/0x1_0xf9a449382b54edc12fab88b54c13c296249b41ae_b9129b94d81d487a8faaf3190686ae53",
      "decimals": 18,
      "smw_holdings_usd": 138.52606233697082,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000139334770783193,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0037
    },
    {
      "token_address": "0x7669420c678db40f621184c047212c813a002e84",
      "symbol": "QNET",
      "name": "Quantum Network",
      "logo": "https://logo.moralis.io/0x1_0x7669420c678db40f621184c047212c813a002e84_620529a120cd4983b9a93c1e37ef8567",
      "thumbnail": "https://logo.moralis.io/0x1_0x7669420c678db40f621184c047212c813a002e84_620529a120cd4983b9a93c1e37ef8567",
      "decimals": 18,
      "smw_holdings_usd": 122.24567844740388,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000112259770095996,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0033
    },
    {
      "token_address": "0xfdad8ce706961c0b897ca20398f17d7801a14e20",
      "symbol": "PEPISH",
      "name": "Pepish",
      "logo": "https://logo.moralis.io/0x1_0xfdad8ce706961c0b897ca20398f17d7801a14e20_4e93c09515804a1790c6fc62f3ffb08d",
      "thumbnail": "https://logo.moralis.io/0x1_0xfdad8ce706961c0b897ca20398f17d7801a14e20_4e93c09515804a1790c6fc62f3ffb08d",
      "decimals": 18,
      "smw_holdings_usd": 121.79470045826596,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.5764624e-11,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0033
    },
    {
      "token_address": "0xf3e66b03d098d0482be9cb3d6999787231a93ed9",
      "symbol": "PROMPTIDE",
      "name": "PromptIDE",
      "logo": "https://logo.moralis.io/0x1_0xf3e66b03d098d0482be9cb3d6999787231a93ed9_c6f77520cb7d4cd1a986d14f8df0214a",
      "thumbnail": "https://logo.moralis.io/0x1_0xf3e66b03d098d0482be9cb3d6999787231a93ed9_c6f77520cb7d4cd1a986d14f8df0214a",
      "decimals": 9,
      "smw_holdings_usd": 112.39039166253221,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 1.24077215172e-7,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.003
    },
    {
      "token_address": "0xcd87cc7bf308f4bde3d1a4f7015812445942c86d",
      "symbol": "DINGER",
      "name": "DINGER",
      "logo": "https://logo.moralis.io/0x1_0xcd87cc7bf308f4bde3d1a4f7015812445942c86d_d590382a5e6e4326b31a7cd357b6a41f",
      "thumbnail": "https://logo.moralis.io/0x1_0xcd87cc7bf308f4bde3d1a4f7015812445942c86d_d590382a5e6e4326b31a7cd357b6a41f",
      "decimals": 18,
      "smw_holdings_usd": 110.55867844736775,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 5.0881254206e-8,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.003
    },
    {
      "token_address": "0xda07797a75ec922394fb6a9de7f90ee38b1c9160",
      "symbol": "BEAST",
      "name": "Beast Coin",
      "logo": "https://logo.moralis.io/0x1_0xda07797a75ec922394fb6a9de7f90ee38b1c9160_761677da648745ceab97483d8c4edee1",
      "thumbnail": "https://logo.moralis.io/0x1_0xda07797a75ec922394fb6a9de7f90ee38b1c9160_761677da648745ceab97483d8c4edee1",
      "decimals": 8,
      "smw_holdings_usd": 104.54771499269889,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000031491167265071,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0028
    },
    {
      "token_address": "0x01469617b776b05344382412173e3bc25356397c",
      "symbol": "PEPE6900",
      "name": "PEPE6900",
      "logo": "https://logo.moralis.io/0x1_0x01469617b776b05344382412173e3bc25356397c_356d1cd1c2e94af8af297ddc59b2fc74",
      "thumbnail": "https://logo.moralis.io/0x1_0x01469617b776b05344382412173e3bc25356397c_356d1cd1c2e94af8af297ddc59b2fc74",
      "decimals": 18,
      "smw_holdings_usd": 88.70844494306837,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000020083145228235,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0024
    },
    {
      "token_address": "0x7ba5273d53d8a964b0a338e25def0c082f5c29d3",
      "symbol": "WEN",
      "name": "wen",
      "logo": "https://logo.moralis.io/0x1_0x7ba5273d53d8a964b0a338e25def0c082f5c29d3_85cf17af9ea241f6a910b344b05c91d9",
      "thumbnail": "https://logo.moralis.io/0x1_0x7ba5273d53d8a964b0a338e25def0c082f5c29d3_85cf17af9ea241f6a910b344b05c91d9",
      "decimals": 8,
      "smw_holdings_usd": 84.2186287072803,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000082269547470646,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0023
    },
    {
      "token_address": "0xb98ac7c0f14386f3094c43a92a2269c8868eddc3",
      "symbol": "STFU",
      "name": "STFU",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 80.22873112429167,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.16973665744e-7,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0022
    },
    {
      "token_address": "0x883de1a848a63ba73a9df7ab35d48b5748e466de",
      "symbol": "XDOGE",
      "name": "XAI Doge",
      "logo": "https://logo.moralis.io/0x1_0x883de1a848a63ba73a9df7ab35d48b5748e466de_474a8a9c34db40af844da3a2e7af9459",
      "thumbnail": "https://logo.moralis.io/0x1_0x883de1a848a63ba73a9df7ab35d48b5748e466de_474a8a9c34db40af844da3a2e7af9459",
      "decimals": 9,
      "smw_holdings_usd": 77.06209358501347,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.003839475791429609,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0021
    },
    {
      "token_address": "0x2eab22e8818f892ef384983f2b021753a088478c",
      "symbol": "GOKU",
      "name": "Goku",
      "logo": "https://logo.moralis.io/0x1_0x2eab22e8818f892ef384983f2b021753a088478c_e62547f9de0f4893a4a95183cb38e329",
      "thumbnail": "https://logo.moralis.io/0x1_0x2eab22e8818f892ef384983f2b021753a088478c_e62547f9de0f4893a4a95183cb38e329",
      "decimals": 18,
      "smw_holdings_usd": 71.0849578341761,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.87978901e-10,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0019
    },
    {
      "token_address": "0xfb14434cab5ec006a562ef9ed7ad8610866da65a",
      "symbol": "TIGRA",
      "name": "Tigra",
      "logo": "https://logo.moralis.io/0x1_0xfb14434cab5ec006a562ef9ed7ad8610866da65a_32f3f98a22e7466f802f0a22c0192104",
      "thumbnail": "https://logo.moralis.io/0x1_0xfb14434cab5ec006a562ef9ed7ad8610866da65a_32f3f98a22e7466f802f0a22c0192104",
      "decimals": 9,
      "smw_holdings_usd": 55.08005148558771,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000007509828634559,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0015
    },
    {
      "token_address": "0xfb4504f45293e1fc2764d63045b6ea5970df22f3",
      "symbol": "RAYGUN",
      "name": "Ray Gun Sniper Bot",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 46.9012090976937,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.006053625906014365,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0013
    },
    {
      "token_address": "0x07091689a8b9177247f9b61400200ee7878b1d31",
      "symbol": "PEPEZILLA",
      "name": "Pepezilla",
      "logo": "https://logo.moralis.io/0x1_0x07091689a8b9177247f9b61400200ee7878b1d31_d5c6c86acfd94647902223e342116529",
      "thumbnail": "https://logo.moralis.io/0x1_0x07091689a8b9177247f9b61400200ee7878b1d31_d5c6c86acfd94647902223e342116529",
      "decimals": 18,
      "smw_holdings_usd": 36.66810381324566,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.3134169e-11,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.001
    },
    {
      "token_address": "0x11bac0c3c81838022327198aa46124cdb8ce6ab9",
      "symbol": "CSAS",
      "name": "CSAS",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 33.34342812403523,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.010732593451671036,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0009
    },
    {
      "token_address": "0x30cf5e27b5ec3dd696e8f4beb3af3c793c34169c",
      "symbol": "MOCHI",
      "name": "Mochi",
      "logo": "https://logo.moralis.io/0x1_0x30cf5e27b5ec3dd696e8f4beb3af3c793c34169c_c7f9559224f9414ab2989ac294fb2181",
      "thumbnail": "https://logo.moralis.io/0x1_0x30cf5e27b5ec3dd696e8f4beb3af3c793c34169c_c7f9559224f9414ab2989ac294fb2181",
      "decimals": 9,
      "smw_holdings_usd": 32.83291318245774,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 8.1352503e-9,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0009
    },
    {
      "token_address": "0x63bd91ee1804e0e76e2d0536cda94bb6101a1126",
      "symbol": "$BANDS",
      "name": "BANDS CRYPTO",
      "logo": "https://logo.moralis.io/0x1_0x63bd91ee1804e0e76e2d0536cda94bb6101a1126_86dabd65b4f7498e957d2fbc81c8bf40",
      "thumbnail": "https://logo.moralis.io/0x1_0x63bd91ee1804e0e76e2d0536cda94bb6101a1126_86dabd65b4f7498e957d2fbc81c8bf40",
      "decimals": 18,
      "smw_holdings_usd": 32.59200554296181,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000047357316691485,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0009
    },
    {
      "token_address": "0xdd106174a22606fff6116212155e93e177d4420b",
      "symbol": "ETHI",
      "name": "Eth Inu",
      "logo": "https://logo.moralis.io/0x1_0xdd106174a22606fff6116212155e93e177d4420b_b9898556dc4f4585bf83e6aaf40f9ec0",
      "thumbnail": "https://logo.moralis.io/0x1_0xdd106174a22606fff6116212155e93e177d4420b_b9898556dc4f4585bf83e6aaf40f9ec0",
      "decimals": 9,
      "smw_holdings_usd": 29.998129024871144,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 9.4771168406e-8,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0008
    },
    {
      "token_address": "0x2f9bfd5954d7e3537fe1779e646ac63f39c8c1a4",
      "symbol": "HELGA",
      "name": "Helga",
      "logo": "https://logo.moralis.io/0x1_0x2f9bfd5954d7e3537fe1779e646ac63f39c8c1a4_d358f56a2a194e51838082fee4a6463a",
      "thumbnail": "https://logo.moralis.io/0x1_0x2f9bfd5954d7e3537fe1779e646ac63f39c8c1a4_d358f56a2a194e51838082fee4a6463a",
      "decimals": 9,
      "smw_holdings_usd": 29.802832803807615,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.230066381e-9,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0008
    },
    {
      "token_address": "0xe633bc1fcb00f44b18a80d3124021728b4f3f20f",
      "symbol": "EMPIRE",
      "name": "Empire DAO",
      "logo": "https://logo.moralis.io/0x1_0xe633bc1fcb00f44b18a80d3124021728b4f3f20f_24d6d8a85ad64829a7e1dcca38aec890",
      "thumbnail": "https://logo.moralis.io/0x1_0xe633bc1fcb00f44b18a80d3124021728b4f3f20f_24d6d8a85ad64829a7e1dcca38aec890",
      "decimals": 8,
      "smw_holdings_usd": 29.50975277943458,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000007639277134308,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0008
    },
    {
      "token_address": "0xece688e32c52badc2984f87b0648f29d6019ee3e",
      "symbol": "ETH",
      "name": "Ethereum vs Solana",
      "logo": "https://logo.moralis.io/0x1_0xece688e32c52badc2984f87b0648f29d6019ee3e_bb2fd3b0b20e42ec89c15d6a12832196",
      "thumbnail": "https://logo.moralis.io/0x1_0xece688e32c52badc2984f87b0648f29d6019ee3e_bb2fd3b0b20e42ec89c15d6a12832196",
      "decimals": 9,
      "smw_holdings_usd": 29.40687849111156,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000003983541366468,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0008
    },
    {
      "token_address": "0xeff1ca0b55c1ff1456c48838c23e9a32b508470b",
      "symbol": "MOOK",
      "name": "MOOKY",
      "logo": "https://logo.moralis.io/0x1_0xeff1ca0b55c1ff1456c48838c23e9a32b508470b_0df1ed1824cd49e6828a7f32f4b78be2",
      "thumbnail": "https://logo.moralis.io/0x1_0xeff1ca0b55c1ff1456c48838c23e9a32b508470b_0df1ed1824cd49e6828a7f32f4b78be2",
      "decimals": 18,
      "smw_holdings_usd": 20.857190704619132,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.1753073986e-8,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0006
    },
    {
      "token_address": "0x21322b7dbb80ee320262c9cc4a022a96a691bcbf",
      "symbol": "KIRBY",
      "name": "KIRBY",
      "logo": "https://logo.moralis.io/0x1_0x21322b7dbb80ee320262c9cc4a022a96a691bcbf_3acebd5d51db4599b4bd63ea82a32b18",
      "thumbnail": "https://logo.moralis.io/0x1_0x21322b7dbb80ee320262c9cc4a022a96a691bcbf_3acebd5d51db4599b4bd63ea82a32b18",
      "decimals": 18,
      "smw_holdings_usd": 19.337602446377684,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.558625392e-8,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0005
    },
    {
      "token_address": "0x7e836909645577b98a5ec1d48e9d85cd137a11c3",
      "symbol": "MOONED",
      "name": "THE COIN THAT MOONED",
      "logo": "https://logo.moralis.io/0x1_0x7e836909645577b98a5ec1d48e9d85cd137a11c3_8a6ff35b399846bab6488517d74be2c7",
      "thumbnail": "https://logo.moralis.io/0x1_0x7e836909645577b98a5ec1d48e9d85cd137a11c3_8a6ff35b399846bab6488517d74be2c7",
      "decimals": 18,
      "smw_holdings_usd": 12.152275563223169,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 3.938263892e-9,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0003
    },
    {
      "token_address": "0xc30531650828889cc3ec967bdd4ac1a7890f4142",
      "symbol": "MASTER",
      "name": "Master Vitalik",
      "logo": "https://logo.moralis.io/0x1_0xc30531650828889cc3ec967bdd4ac1a7890f4142_3cbcff2733984c7c9d81ecd13d42eba8",
      "thumbnail": "https://logo.moralis.io/0x1_0xc30531650828889cc3ec967bdd4ac1a7890f4142_3cbcff2733984c7c9d81ecd13d42eba8",
      "decimals": 9,
      "smw_holdings_usd": 11.950560904013091,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 3.79713453e-10,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0003
    },
    {
      "token_address": "0x93a98c6dc7ce9987d287be7ed9bbb430f1cdcde3",
      "symbol": "META",
      "name": "META",
      "logo": "https://logo.moralis.io/0x1_0x93a98c6dc7ce9987d287be7ed9bbb430f1cdcde3_e6ffb0fe37a44c38ae6734a96d1f2654",
      "thumbnail": "https://logo.moralis.io/0x1_0x93a98c6dc7ce9987d287be7ed9bbb430f1cdcde3_e6ffb0fe37a44c38ae6734a96d1f2654",
      "decimals": 18,
      "smw_holdings_usd": 10.41059006160807,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00050111024753804,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0003
    },
    {
      "token_address": "0x67b0f3cc777daf05f7972df42e23f68c7c4b4585",
      "symbol": "MUSK",
      "name": "Elon Musk",
      "logo": "https://logo.moralis.io/0x1_0x67b0f3cc777daf05f7972df42e23f68c7c4b4585_c9a5de14c0e54280a27922d033fc81eb",
      "thumbnail": "https://logo.moralis.io/0x1_0x67b0f3cc777daf05f7972df42e23f68c7c4b4585_c9a5de14c0e54280a27922d033fc81eb",
      "decimals": 18,
      "smw_holdings_usd": 9.304305686807899,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.61420935858e-7,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0003
    },
    {
      "token_address": "0xef4c094636c2623c9a1653278013ddd9a428e13e",
      "symbol": "ApeGPT",
      "name": "ApeGPT",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 0.49091309875645767,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.4649376e-11,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xa8ced25a98cda0bc360d12a0fabc449d36c0ccc5",
      "symbol": "WACT",
      "name": "We Are Crypto Twitter",
      "logo": "https://logo.moralis.io/0x1_0xa8ced25a98cda0bc360d12a0fabc449d36c0ccc5_a42e7c8f8cb545479b655b05d3120df0",
      "thumbnail": "https://logo.moralis.io/0x1_0xa8ced25a98cda0bc360d12a0fabc449d36c0ccc5_a42e7c8f8cb545479b655b05d3120df0",
      "decimals": 18,
      "smw_holdings_usd": 0.09307235192857197,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 6.697208962e-9,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x654fed1e458a81f156cec51f04ecc0ead75a964e",
      "symbol": "Okey",
      "name": "Okey",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 0.00006733779050810824,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.84381e-13,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4b10ad332a1adb018769dd74808f5e2355342a60",
      "symbol": "MOON",
      "name": "Moon Finance",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 3.5645102191814137e-8,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1e-18,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x38e3b07d607def629b4f3f46a0082006fdd6cda2",
      "symbol": "SHIBO",
      "name": "Shibosu",
      "logo": "https://logo.moralis.io/0x1_0x38e3b07d607def629b4f3f46a0082006fdd6cda2_1d5db7dfd1644c8ea0553b013ac17b37",
      "thumbnail": "https://logo.moralis.io/0x1_0x38e3b07d607def629b4f3f46a0082006fdd6cda2_1d5db7dfd1644c8ea0553b013ac17b37",
      "decimals": 18,
      "smw_holdings_usd": 1.5287746e-11,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 1.5287746e-11,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf61eeba04538d96750f5d697f734e3fc497fdfd1",
      "symbol": "NARUTO",
      "name": "Naruto Coin",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xb14e8d23e705330912f6fb611fc755aaa4df6024",
      "symbol": "SYNK",
      "name": "Synk Bot",
      "logo": "https://logo.moralis.io/0x1_0xb14e8d23e705330912f6fb611fc755aaa4df6024_5623b6d623ba485e8107badb682ca382",
      "thumbnail": "https://logo.moralis.io/0x1_0xb14e8d23e705330912f6fb611fc755aaa4df6024_5623b6d623ba485e8107badb682ca382",
      "decimals": 9,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x40a44f2e4c8b61100ad5bd4ace1d7b7d067bc93f",
      "symbol": "Visit https://usdc-rewards.org to claim rewards",
      "name": "# usdc-rewards.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x02f6e362cc9e56cd37b6b1f713f9d2f2853a5f81",
      "symbol": "815$ Visit bitbonus.org to claim",
      "name": "$ bitbonus.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf2c5c0e43f164e832c56185fc4e8ea6cdd50279e",
      "symbol": "Claim $OMNI reward at https://omnicatlabs.com",
      "name": "# OMNI Reward Ticket (Website: omnicatlabs.com)",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xe25a34e54b23f1ef74fc62234f9e615e99e7812f",
      "symbol": "LOYALETH.COM",
      "name": "LOYALETH.COM",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xcb6ba52f93e85b1089e2592c35696c1e7111cf85",
      "symbol": "Visit https://uniETH.fi to claim reward",
      "name": "$ uniETH.fi",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xbd8a495250f7ecb877396762c81689fc9bd18366",
      "symbol": "FLOKI Reward Ticket (Website: flokiv2.com)",
      "name": "# FLOKI Reward Ticket (Website: flokiv2.com)",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x938119976c6d962e9ea5731774ccba3c527dc337",
      "symbol": "$FLOKI Rewards By https://flokidao.xyz",
      "name": "! FLOKI Rewards By flokidao.xyz",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x927402ab67c0cda3c187e9dfe34554ac581441f2",
      "symbol": "SAITABIT",
      "name": "SAITABIT",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x85b7195a0a06b11e25eecbdf908cb49242aa9b04",
      "symbol": "POOH Award Chip | poohmoney.org",
      "name": "$ POOH Award Chip | poohmoney.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3bb65f5c9e7603971cf768dd05903c3a2bf02002",
      "symbol": "Claim $POOH Reward at https://poohmoney.org",
      "name": "# poohmoney.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3472c4909faa7938a71c3012a03a3f2ad99a175a",
      "symbol": "Kishib.com",
      "name": "Kishib.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2c0b41d1f6a89fe1fb36975b351e976966a49262",
      "symbol": "Visit https://apyeth.com to claim rewards",
      "name": "# apyeth.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 6,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x6c7dd55ad86ff808b932c66241f0b3dd982f1346"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x069d89974f4edabde69450f9cf5cf7d8cbd2568d",
      "symbol": "BVM",
      "name": "BVM",
      "logo": "https://logo.moralis.io/0x1_0x069d89974f4edabde69450f9cf5cf7d8cbd2568d_8bff49429fc84acba8fc579a6d335f35",
      "thumbnail": "https://logo.moralis.io/0x1_0x069d89974f4edabde69450f9cf5cf7d8cbd2568d_8bff49429fc84acba8fc579a6d335f35",
      "decimals": 18,
      "smw_holdings_usd": 59543.680220675466,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 2.9771840110337733,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 51.905
    },
    {
      "token_address": "0x4594cffbfc09bc5e7ecf1c2e1c1e24f0f7d29036",
      "symbol": "0KN",
      "name": "Zero Knowledge Network",
      "logo": "https://logo.moralis.io/0x1_0x4594cffbfc09bc5e7ecf1c2e1c1e24f0f7d29036_100be26123c8402aa120221aa1aeeb10",
      "thumbnail": "https://logo.moralis.io/0x1_0x4594cffbfc09bc5e7ecf1c2e1c1e24f0f7d29036_100be26123c8402aa120221aa1aeeb10",
      "decimals": 18,
      "smw_holdings_usd": 39984.31198245228,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.001332810399415076,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 34.8548
    },
    {
      "token_address": "0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe",
      "symbol": "DZHV",
      "name": "DizzyHavoc",
      "logo": "https://logo.moralis.io/0x1_0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe_4390495d9a724900ae2afe4e14e61f45",
      "thumbnail": "https://logo.moralis.io/0x1_0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe_4390495d9a724900ae2afe4e14e61f45",
      "decimals": 18,
      "smw_holdings_usd": 14448.530259815878,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.014886851541504854,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 12.595
    },
    {
      "token_address": "0x6443e6093dc3094fdca5f128d2cf9ff54edd253a",
      "symbol": "PAPER",
      "name": "Paper Wraps Rock",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 186.6053120951515,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 2.13576321611e-7,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.1627
    },
    {
      "token_address": "0xc3ddb85a92a38e05d31061c842f8d8d9fcd4478d",
      "symbol": "ORE",
      "name": "Ore",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 32.76199380952175,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.16380996904760875,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0286
    },
    {
      "token_address": "0xd114b01d91e15d636f63f1bda2edac8534e6f571",
      "symbol": "MEO",
      "name": "MEO",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0.04911023709888,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000009822047419776,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x12edd5b6dd25ed34b33ded3daf48ee5a1d66cdc7",
      "symbol": "MEMRSATS",
      "name": "MEMRSATS",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0.038229832939212,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000003185819411601,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x263792a91a243a695292ff5d150b321587bebd76",
      "symbol": "MEO",
      "name": "MEO",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0.0001259199063362,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 6.29599531681e-7,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x58363997ccab89e9a2272d1ba8793cc4aa66c36c",
      "symbol": "DFM",
      "name": "DFM",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 0.000101685226679392,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000006355326667462,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x2a69219523a3c3372b26de059352302a30efe982",
      "symbol": "ETX",
      "name": "Ethereum Dex",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0.0000344711377066474,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.00344711377066474,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x955d5c14c8d4944da1ea7836bd44d54a8ec35ba1",
      "symbol": "RFD",
      "name": "REFUND",
      "logo": "https://logo.moralis.io/0x1_0x955d5c14c8d4944da1ea7836bd44d54a8ec35ba1_52193a19e5c941a98ec03deeb320ec93",
      "thumbnail": "https://logo.moralis.io/0x1_0x955d5c14c8d4944da1ea7836bd44d54a8ec35ba1_52193a19e5c941a98ec03deeb320ec93",
      "decimals": 18,
      "smw_holdings_usd": 7.140297940387e-24,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.000007140297940387,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xc75c635c1f5e21d23ec8592cb37503b82a7ef942",
      "symbol": "KOTOV2",
      "name": "Koto V2",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5b5c4f876082d6dcb7d8b47666e9da31eaf70866",
      "symbol": "Visit https://uniV3.fi to claim reward",
      "name": "$ uniV3.fi",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x388bc6728b3cab9e93bd79105d6ecb3db8431918",
      "symbol": "PSYOPToken.net",
      "name": "PSYOPToken.net",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xf635744b0d491a7bd823eb3d4d9b0379c71f3d74",
      "symbol": "0KN Gift Token (https://0101011001.com)",
      "name": "# 0101011001.com",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xd112c7164a02f151184922535d1f1085a19ed24c",
      "symbol": "Visit https://usdc-rewards.org to claim rewards",
      "name": "# usdc-rewards.org",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x941111f2be8ed9b4e0ce7cea556c8e1eee7077c2"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
      "symbol": "WOO",
      "name": "Wootrade Network",
      "logo": "https://logo.moralis.io/0x1_0x4691937a7508860f876c9c0a2a617e7d9e945d4b_b3d8f04c532d4a46af44482092a9eaa1",
      "thumbnail": "https://logo.moralis.io/0x1_0x4691937a7508860f876c9c0a2a617e7d9e945d4b_b3d8f04c532d4a46af44482092a9eaa1",
      "decimals": 18,
      "smw_holdings_usd": 133156.27687644283,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.44803140441734984,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 31.1057
    },
    {
      "token_address": "0x14fee680690900ba0cccfc76ad70fd1b95d10e16",
      "symbol": "$PAAL",
      "name": "PAAL AI",
      "logo": "https://logo.moralis.io/0x1_0x14fee680690900ba0cccfc76ad70fd1b95d10e16_1c356d075e0e48aca8484de18e1cf921",
      "thumbnail": "https://logo.moralis.io/0x1_0x14fee680690900ba0cccfc76ad70fd1b95d10e16_1c356d075e0e48aca8484de18e1cf921",
      "decimals": 9,
      "smw_holdings_usd": 105218.71841730714,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.5889573693002688,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 24.5794
    },
    {
      "token_address": "0xc039f4f19a733b01875e6e003ede78c6b1c470e6",
      "symbol": "Your1000xBag",
      "name": "AntiDumpySuperPumpy1000xBag",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 76323.09995363736,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000013878070311212,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 17.8293
    },
    {
      "token_address": "0x8b9b95292f890df47fff5ac9cbe93d5fc242bd51",
      "symbol": "BEFI",
      "name": "Befi Labs",
      "logo": null,
      "thumbnail": null,
      "decimals": 18,
      "smw_holdings_usd": 8242.449371634139,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 0.2747483123878046,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 1.9255
    },
    {
      "token_address": "0xa8a837e2bf0c37fef5c495951a0dfc33aaead57a",
      "symbol": "UNI-V2",
      "name": "Uniswap V2",
      "logo": "https://logo.moralis.io/0x1_0xa8a837e2bf0c37fef5c495951a0dfc33aaead57a_3ed5832245734cfa90e7a95f7272b832",
      "thumbnail": "https://logo.moralis.io/0x1_0xa8a837e2bf0c37fef5c495951a0dfc33aaead57a_3ed5832245734cfa90e7a95f7272b832",
      "decimals": 18,
      "smw_holdings_usd": 24.44618491424435,
      "possible_spam": false,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 28.503208756663433,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0057
    },
    {
      "token_address": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
      "symbol": "RNDR",
      "name": "Render Token",
      "logo": "https://logo.moralis.io/0x1_0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24_bc51d067bc00488baa3088129c2c514a",
      "thumbnail": "https://logo.moralis.io/0x1_0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24_bc51d067bc00488baa3088129c2c514a",
      "decimals": 18,
      "smw_holdings_usd": 0.21886177001607565,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 10.943088500803782,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0.0001
    },
    {
      "token_address": "0x44ea324e4dba6c1611953dec152a909485fd82b0",
      "symbol": "ETF",
      "name": "Bitcoin ETF",
      "logo": "https://logo.moralis.io/0x1_0x44ea324e4dba6c1611953dec152a909485fd82b0_b54480fd8cad4812801aab9b34ae1881",
      "thumbnail": "https://logo.moralis.io/0x1_0x44ea324e4dba6c1611953dec152a909485fd82b0_b54480fd8cad4812801aab9b34ae1881",
      "decimals": 18,
      "smw_holdings_usd": 0.07769919396118567,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.001047891996822037,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x922a646ffbb580b56407401f6d1eba25dde2f384",
      "symbol": "GTAI",
      "name": "GT PROTOCOL",
      "logo": "https://logo.moralis.io/0x1_0x922a646ffbb580b56407401f6d1eba25dde2f384_3f7d2d2322904f91a60db8ff8987e985",
      "thumbnail": "https://logo.moralis.io/0x1_0x922a646ffbb580b56407401f6d1eba25dde2f384_3f7d2d2322904f91a60db8ff8987e985",
      "decimals": 18,
      "smw_holdings_usd": 0.010019059665057034,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000292029910186392,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x3c6dbbadc310a55c7a16f624c0e08c1f6e65dad0",
      "symbol": "MOSS",
      "name": "MOSS",
      "logo": null,
      "thumbnail": null,
      "decimals": 9,
      "smw_holdings_usd": 0.008772081666353621,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0.000003928384087037,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a",
      "symbol": "ORN",
      "name": "Orion Protocol",
      "logo": "https://logo.moralis.io/0x1_0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a_08392731c7d342e6b8e62764ace5b638",
      "thumbnail": "https://logo.moralis.io/0x1_0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a_08392731c7d342e6b8e62764ace5b638",
      "decimals": 8,
      "smw_holdings_usd": 2.242236142004313e-8,
      "possible_spam": false,
      "verified_contract": true,
      "smw_holders": 1,
      "usd_price": 2.242236142004313,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x340e450baacbd6ef483def53865c1491147e08c1",
      "symbol": "Lambo",
      "name": "Lambo",
      "logo": "https://logo.moralis.io/0x1_0x340e450baacbd6ef483def53865c1491147e08c1_b66984e028d441d9ae121264eddad42d",
      "thumbnail": "https://logo.moralis.io/0x1_0x340e450baacbd6ef483def53865c1491147e08c1_b66984e028d441d9ae121264eddad42d",
      "decimals": 18,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": 0,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x1ebb6a9893b9479ee15f11c23823c8b59c1b6e21",
      "symbol": "PAAL Reward Token (Website: paalabs.com)",
      "name": "! PAAL Reward Token (Website: paalabs.com)",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x108d689f887b2c64835f227c52eb90abc26a9380",
      "symbol": "Claim $PAAL rewards at https://paal.pro",
      "name": "! paal.pro",
      "logo": null,
      "thumbnail": null,
      "decimals": 2,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0x5ce9f734cc20b11f8d997c36512cc6d2ea0c774e",
      "symbol": "Get $BEFI reward at https://befiapp.com",
      "name": "! BEFI Reward Token (Website: befiapp.com)",
      "logo": null,
      "thumbnail": null,
      "decimals": 1,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    },
    {
      "token_address": "0xab060fde30c8f0bf02206acb4a180037e4f4fbee",
      "symbol": "$BEFI Rewards By https://befilab.xyz",
      "name": "! BeFi Rewards By befilab.xyz",
      "logo": null,
      "thumbnail": null,
      "decimals": 0,
      "smw_holdings_usd": 0,
      "possible_spam": true,
      "verified_contract": false,
      "smw_holders": 1,
      "usd_price": null,
      "smw_holders_address": [
        "0x162c6c832611dabb9ac90f8f7902a78b3361bbad"
      ],
      "native_token": false,
      "portfolio_average_percentage": 0
    }
  ]

const page = () => {
  return (
    <div className='w-4/5 m-auto mt-[7rem]'>
        <h2 className='text-2xl text-black text-center font-bold my-[2rem]'>Top Holdings</h2>
      <BeautifulTable data={data} />
    </div>
  )
}

export default page