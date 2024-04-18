const FacultyTimetable = artifacts.require("FacultyTimetable");

module.exports = function(deployer) {
  deployer.deploy(FacultyTimetable);
};
