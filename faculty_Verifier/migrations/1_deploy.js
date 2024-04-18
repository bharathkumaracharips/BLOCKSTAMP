// 2_deploy_contracts.js
const FacultyVerifier = artifacts.require("FacultyVerifier");
const FacultyRegistry = artifacts.require("FacultyRegistry");

module.exports = function (deployer) {
  const facultyRegistryAddress = "0xBEAB6A2E10F5AFb1782427c08887062Dbb9904d3"; // Address of the FacultyRegistry contract
  deployer.deploy(FacultyVerifier, facultyRegistryAddress);
};
