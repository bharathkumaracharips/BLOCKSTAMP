const RecordAttendanceOfStudent = artifacts.require("RecordAttendanceOfStudent");

module.exports = function (deployer) {
  // Deploy RecordAttendanceOfStudent contract with the FacultyTimetable contract address
  deployer.deploy(RecordAttendanceOfStudent, "0x3b34c783651f0832E8977e1e444D2fd172034552");
};
