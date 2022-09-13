const Employee = require("../lib/employee");
const obj =  new Employee("Bob", 20, "bob@gmail.com")
describe("Employee", () => {
    describe("Name", () => {
        it("should return an object containing the employee's name", () => {
            expect(obj.name).toEqual("Bob");
        });
    });
    describe("id", () => {
        it("should return an object containing the employee's id number", () => {
            expect(obj.id).toEqual(20);
        })
    })
    describe("Email", () => {
        it("should return an object containing the employee's email address", () => {
            expect(obj.email).toEqual("bob@gmail.com");
        })
    })

    describe("getName", () => {

    })
})