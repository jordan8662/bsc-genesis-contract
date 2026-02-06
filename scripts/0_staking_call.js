const { ethers, upgrades, artifacts } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer:", deployer.address);

  const balanceWei = await ethers.provider.getBalance(deployer);
  
  // 转换为 ETH
  const balanceEth = ethers.formatEther(balanceWei);
  
  console.log(`余额: ${balanceEth} PIN`);

  let amount  = ethers.parseUnits("100", 18);

  const StakeCreditF = await ethers.getContractFactory('StakeCredit');
  let ccStakeCC = await StakeCreditF.attach('0x7597E59607A1e91E5B4Af6b63c3A0c5070445A52');
  let queryRet = await ccStakeCC.getPooledBNB('0x3c24c25f5EF708f48C2511118EA967eF4FeEfCaf')
  console.log("queryRet:=", queryRet)

  let queryRet2 = await ccStakeCC.getSharesByPooledBNB(queryRet);
  console.log("queryRet2:=", queryRet2)


  const contractName = 'StakeHub';
  const contractAddress = '0x0000000000000000000000000000000000002002';
  const CCFactory = await ethers.getContractFactory(contractName);
  let ccInst = await CCFactory.attach(contractAddress);

//   let tx = await ccInst.undelegate('0x3c24c25f5EF708f48C2511118EA967eF4FeEfCaf', ethers.parseUnits("100", 18))
//   await tx.wait();
//   console.log("tx:=", tx.hash)

//   let tx = await ccInst.claim('0x3c24c25f5EF708f48C2511118EA967eF4FeEfCaf', 0);
//   await tx.wait();
//   console.log("tx:=", tx.hash)


  let query3 = await ccStakeCC.claimableUnbondRequest('0x3c24c25f5EF708f48C2511118EA967eF4FeEfCaf')
  console.log("query3:=", query3)

  let query4 = await ccStakeCC.pendingUnbondRequest('0x3c24c25f5EF708f48C2511118EA967eF4FeEfCaf')
  console.log("query4:=", query4)

  let query5 = await ccStakeCC.unbondRequest('0x3c24c25f5EF708f48C2511118EA967eF4FeEfCaf', 0)
  console.log("query5:=", query5)
  
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
