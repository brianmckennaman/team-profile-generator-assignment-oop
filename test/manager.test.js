const Manager = require("../lib/manager")
const objName = "Austin"
const obj = new Manager (objName, 50, "austin@gmail.com")
describe("Manager", () => {
    describe("Name", () => {
        it("should return an object containing the engineer's name", () => {
            expect(obj.name).toEqual(objName)
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
    describe("getRole", () => {
        it("should return an object containing the employee's role", () => {
            const getRole = "Manager"
            expect(getRole).toEqual("Manager")
        })
    })
    describe("getGithub", () => {
        it("should return an object containing the employee's github username", () => {
            const getGithub = "austingithub"
            expect(getGithub).toEqual("austingithub")
        })
    })
})