const {ethers ,run, network } = require('hardhat');

const { vars } = require("hardhat/config");


const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

const deploy = async() => {
    const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    await new Promise(resolve => setTimeout(resolve, 10000));
    const simpleStorage = await simpleStorageFactory.deploy();
    await simpleStorage.waitForDeployment();
    const address = await simpleStorage.getAddress()
    if(network.config.chainId == 11155111 && ETHERSCAN_API_KEY){
        console.log("verifying contract",address);
        await new Promise(resolve => setTimeout(resolve, 5000));
        await verify(address,[]);
    }
}

const verify = async (address,args) => {
  try{
    await run("verify:verify",{
        address,
        constructorArguments:args
    })
    } catch (error) {
        console.log("VERIFY ERROR :",error.message)  
    }

}

deploy().then(()=>process.exit(0)).catch((error)=>console.log("ERROR",error?.message));