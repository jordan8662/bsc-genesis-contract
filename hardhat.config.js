require("dotenv").config();
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: "london", // ⚠️ 常被忽略
        },
      },
      {
        version: "0.6.4",
      },
    ],
  },
  networks: {
    mainnet: {
      url: 'https://summer-special-snow.quiknode.pro/98ad13fcdde6f583290626150ae5546e39369883/',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 200000000, // 0.2 gwei,
      timeout: 10000000
    },
    bsc: {
      url: 'https://fittest-sparkling-breeze.bsc.quiknode.pro/138569e14b4e084419dab3e49a878ac45668c417/',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 200000000, // 0.2 gwei,
      timeout: 10000000
    },
    arbitrum: {
      url: 'https://tame-proportionate-tree.arbitrum-mainnet.quiknode.pro/5043d3f0eccd286a5ff579d10c05ad3aca6b6863/',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 100000000, // 0.1 gwei,
      timeout: 10000000
    },
    base: {
      url: 'https://green-solitary-flower.base-mainnet.quiknode.pro/2fd849a0ad459b5af2e4f15118597e3d9e9b0c92/',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 10000000, // 0.01 gwei,
      timeout: 10000000
    },
    op: {
      url: 'https://late-intensive-breeze.optimism.quiknode.pro/6d553aa7da9f73e603b7c1c49751895538f1d059/',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 10000, // 0.00001 gwei,
      timeout: 10000000
    },
    pindex: {
      url: 'https://rpc.pindex.co/',
      accounts: [process.env.PIN_PRIVATE_KEY],
      gasPrice: 190500000000, // 190.5 gwei,
      timeout: 10000000
    },
    polygontest: {
      url: 'https://polygon-amoy.infura.io/v3/16bfa9d4569748c6b119ea11a6aedb51',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 63000000000, // 65 gwei,
      timeout: 20000000
    },
    bsctest: {
      url: 'https://aged-cosmological-borough.bsc-testnet.quiknode.pro/441634efce5bd01e867fba4821eae37e2f3f06df/',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 200000000, // 0.2 gwei,
      timeout: 10000000
    },
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    pindex_test: {
      type: "http",
      url: "http://54.179.136.218:8545/",
      // 54.179.136.218 3.0.103.147
      accounts: [process.env.PIN_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      bsc: process.env.ETHERSCAN_API_KEY,
      arbitrum: process.env.ETHERSCAN_API_KEY,
      base: process.env.ETHERSCAN_API_KEY,
      op: process.env.ETHERSCAN_API_KEY,
      pindex: 'empty',
      polygontest: process.env.ETHERSCAN_API_KEY,
      bsctest: process.env.ETHERSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      pindex_test: 'empty'
    },
     customChains: [
      {
        network: "mainnet",
        chainId: 1,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=1",
          browserURL: "https://etherscan.io/"
        }
      },
      {
        network: "bsc",
        chainId: 56,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=56",
          browserURL: "https://bscscan.com/"
        }
      },
      {
        network: "arbitrum",
        chainId: 42161,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=42161",
          browserURL: "https://arbiscan.io/"
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=8453",
          browserURL: "https://basescan.org/"
        }
      },
      {
        network: "op",
        chainId: 10,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=10",
          browserURL: "https://optimistic.etherscan.io/"
        }
      },
      {
        network: "pindex",
        chainId: 20266,
        urls: {
          apiURL: "https://rpc.pindex.co/api",
          browserURL: "https://explorer.pindex.co/"
        }
      },
      {
        network: "polygontest",
        chainId: 80002,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=80002",
          browserURL: "https://sepolia.etherscan.io/"
        }
      },
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=11155111",
          browserURL: "https://sepolia.etherscan.io/"
        }
      },
      {
        network: "bsctest",
        chainId: 97,
        urls: {
          apiURL: "https://api.etherscan.io/v2/api?chainid=97",
          browserURL: "https://testnet.bscscan.com/"
        }
      },
      {
        network: "pindex_test",
        chainId: 714,
        urls: {
          apiURL: "http://13.215.179.62:3001/api", //13.229.207.113 
          browserURL: "https://13.215.179.62:3000"
        }
      }
    ]
  },
  sourcify: {
    enabled: false
  },
};