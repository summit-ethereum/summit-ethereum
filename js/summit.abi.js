var summitAbi = {"abi": [
	{
		"constant": false,
		"inputs": [],
		"name": "claimDivs",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDividendPoints",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "LAST_LEVEL",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "idToAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastUserId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "usersActiveMultiLevels",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "findFreeDirectReferrer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "usersDirectMatrix",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "address"
			}
		],
		"name": "isUserExists",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "usersActiveDirectLevels",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_player",
				"type": "address"
			}
		],
		"name": "viewDivs",
		"outputs": [
			{
				"name": "divsAvailable",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "referrerAddress",
				"type": "address"
			}
		],
		"name": "registrationExt",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDivs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "SRVR_COST",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "referrer",
				"type": "address"
			},
			{
				"name": "friendsCount",
				"type": "uint256"
			},
			{
				"name": "divClaimMark",
				"type": "uint256"
			},
			{
				"name": "totalPlayerDivPoints",
				"type": "uint256"
			},
			{
				"name": "divsClaimed",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "matrix",
				"type": "uint8"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "buyNewLevel",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "DV_PRCNT",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"name": "lvlPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "usersMultiMatrix",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "userEarnings",
		"outputs": [
			{
				"name": "directMatrixEarnings",
				"type": "uint256"
			},
			{
				"name": "multiMatrixEarnings",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_player",
				"type": "address"
			}
		],
		"name": "viewDivsPercent",
		"outputs": [
			{
				"name": "divsPercent",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "findFreeMultiReferrer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "divPot",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "ownerAddress",
				"type": "address"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "userId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "referrerId",
				"type": "uint256"
			}
		],
		"name": "Registration",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "currentReferrer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "caller",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "matrix",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "Reinvest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "matrix",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "Upgrade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "matrix",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "lvl",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "place",
				"type": "uint8"
			}
		],
		"name": "NewUserPlace",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "matrix",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "MissedEthReceive",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "matrix",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "lvl",
				"type": "uint8"
			}
		],
		"name": "SentExtraEthDividends",
		"type": "event"
	}
]};