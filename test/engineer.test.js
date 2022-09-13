const { it } = require("node:test")
const { describe } = require("yargs")
const Engineer = require("../lib/engineer")

const obj = new Engineer ("Steve", 21, "steve@gmail.com")
describe("Engineer", () => {
    describe("Name", () => {
        it("should return an object containing the engineer's name", () => {
            expect(obj.name).toEqual("Steve")
        })
    })
    describe("id", () => {
        it("should return an object containing the employee's id number", () => {
            expect(obj.id).toEqual(21);
        })
    })
    describe("Email", () => {
        it("should return an object containing the employee's email address", () => {
            expect(obj.email).toEqual("steve@gmail.com");
        })
    })
    describe("getRole", () => {
        it("should return an object containing the employee's role", () => {
            const getRole = "Engineer"
            const obj = new Engineer(getRole)
            expect(obj).toEqual(getRole)
        })
    })
    describe("getGithub", () => {
        it("should return an object containing the employee's github username", () => {
            const getGithub = "stevegithub"
            const obj = new Manager(getGithub)
            expect(obj).toEqual(getGithub)
        })
    })
})