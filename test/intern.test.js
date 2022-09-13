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
    describe("getRole", () => {
        it("should return an object containing the employee's role", () => {
            const getRole = "Intern"
            const obj = new Intern(getRole)
            expect(obj).toEqual(getRole)
        })
    })
    describe("getGithub", () => {
        it("should return an object containing the employee's github username", () => {
            const getGithub = "chrisgithub"
            const obj = new Intern(getGithub)
            expect(obj).toEqual(getGithub)
        })
    })
})