var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        var _this = this;
        this.getName = function () { return _this.name; };
        this.getEmail = function () { return _this.email; };
        this.getAge = function () { return _this.age; };
        this.setName = function (name) { return _this.name = name; };
        this.setEmail = function (email) { return _this.email = email; };
        this.setAge = function (age) { return _this.age = age; };
        this.name = name;
        this.email = email;
        this.age = age;
    }
    return Staff;
}());
var staff = new Staff('Huy', 'huydothe1999@gamil.com', 24);
console.log(staff.getName());
console.log(staff.getEmail());
console.log(staff.getAge());
staff.setName('HH');
staff.setEmail('HH@gmail.com');
staff.setAge(26);
console.log('<br>');
console.log(staff.getName());
console.log(staff.getEmail());
console.log(staff.getAge());
