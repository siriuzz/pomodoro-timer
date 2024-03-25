class User {
    constructor(name, password) {
        this._name = name;
        this._password = password;
    }

    get name(){
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get password() {
        return this._password;
    }

    set password(newPassword) {
        this._password = newPassword;
    }

}