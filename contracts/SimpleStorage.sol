// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;


contract SimpleStorage {
    uint256 s_myFavoriteNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }
    Person[] public listOfPeople;

    mapping(string => uint256) public s_nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        s_myFavoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return s_myFavoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push(Person(_favoriteNumber, _name));
        s_nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}