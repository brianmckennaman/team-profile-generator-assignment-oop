class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return (this.name)
    }

    getId(){
        return (this.id)
    }

    getEmail() {
        return (this.email)
    }

    getRole() {
        return ('Employee')
    }
}
const obj =  new Employee("Bob", 20, "bob@gmail.com")
console.table(obj.email)
module.exports = Employee