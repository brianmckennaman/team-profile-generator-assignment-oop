const { describe } = require("yargs")
const Intern = require("../lib/intern")
const obj = new Intern("Chris", 19, "chris@gmail.com")
describe("Intern", () => {
    describe("Name", () => {
        it("should return an object containing the engineer's name", () => {
            expect(obj.name).toEqual("Chris")
        })
    })
    describe("id", () => {
        it("should return an object containing the employee's id number", () => {
            expect(obj.id).toEqual(19);
        })
    })
    describe("Email", () => {
        it("should return an object containing the employee's email address", () => {
            expect(obj.email).toEqual("chris@gmail.com");
        })
    })
})