# SimpleStorage Contract

This Solidity contract, `SimpleStorage`, demonstrates basic functionalities for storing and retrieving data on the Ethereum blockchain.

## Overview

The contract includes the following features:

- Storing and retrieving a single favorite number.
- Storing and retrieving a list of people along with their favorite numbers.
- Mapping names to favorite numbers.

## Functions

### `store(uint256 _favoriteNumber)`

This function allows you to store your favorite number.

### `retrieve()`

This function allows you to retrieve your favorite number.

### `addPerson(string memory _name, uint256 _favoriteNumber)`

This function allows you to add a person to the list of people along with their favorite number.

## Usage

To use this contract with Hardhat, follow these steps:

1. Clone the repository: `git clone https://github.com/mohamed-Decentralized/simple-storage-hardhat-version.git`
2. Navigate to the project directory: `cd simple-storage-hardhat-version`
3. Install dependencies: `npm i`
4. Run Hardhat tests: `npx hardhat test`
5. Deploy the contract to a local Ethereum network: `npx hardhat run scripts/deploy.js --network localhost`
6. Interact with the contract in the Hardhat console or write scripts to interact with it programmatically.

For more information on using Hardhat, refer to the [Hardhat documentation](https://hardhat.org/getting-started/).
