const Manager = require("../lib/manager")
const obj = new Manager ("Austin", 50, "austin@gmail.com")
describe("Manager", () => {
    describe("Name", () => {
        it("should return an object containing the engineer's name", () => {
            expect(obj.name).toEqual("Austin")
        })
    })
    describe("id", () => {
        it("should return an object containing the employee's id number", () => {
            expect(obj.id).toEqual(50);
        })
    })
    describe("Email", () => {
        it("should return an object containing the employee's email address", () => {
            expect(obj.email).toEqual("austin@gmail.com");
        })
    })
})