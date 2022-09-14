const Employee = require('./employee')

class Manager extends Employee {
    constructor (name, id, email, office, role) {
        super(name, id, email)

        this.role = role

        this.office = office
    }

    getOfficeNumber () {
        return(this.office)
    }

    getRole() {
        return ('Manager')
    }
}

module.exports = Manager