// 2_deploy_contracts.js
const FacultyVerifier = artifacts.require("FacultyVerifier");
const FacultyRegistry = artifacts.require("FacultyRegistry");


module.exports = function (deployer) {
  const facultyRegistryAddress = "0xd3fc4A74F7eF23f993eae7788dfE16a735208Bed"; // Address of the FacultyRegistry contract
  deployer.deploy(FacultyVerifier, facultyRegistryAddress);
};
