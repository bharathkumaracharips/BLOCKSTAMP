const RecordAttendanceOfStudent = artifacts.require("RecordAttendanceOfStudent");

module.exports = function (deployer) {
  // Deploy RecordAttendanceOfStudent contract with the FacultyTimetable contract address
  deployer.deploy(RecordAttendanceOfStudent, "0x3Fef5cc50B970ae002e1f6CeB657379Ac4fd4a40");
};
