class Employee {
    constructor(EmployeeId, EmployeeName, Department, DateOfJoining, PhotoFileName) {
        this.EmployeeId = EmployeeId;
        this.EmployeeName = EmployeeName;
        this.Department = Department;
        this.DateOfJoining = DateOfJoining;
        this.PhotoFileName = PhotoFileName;
    }
}
module.exports = Employee;