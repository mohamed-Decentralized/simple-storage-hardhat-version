const { ethers } = require('hardhat')
const { expect,assert } = require('chai')

describe("SimpleStorage",()=>{
  let simpleStorageFactory,simpleStorage;
  beforeEach(async ()=>{
     simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
     simpleStorage = await simpleStorageFactory.deploy();
  })
  it("Should start with fav number of zero",async()=>{
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    // assert
    assert.equal(currentValue.toString(),expectedValue)
  })
  it("Should update when call the store function",async()=>{
    const expectedValue = "7"
    await simpleStorage.store(expectedValue)
    const storedValue = await simpleStorage.retrieve();
    assert.equal(expectedValue,storedValue.toString())
    // expect(storedValue.toString()).to.equal(expectedValue);
  })
})