// interface IHuman{
//     name: string;
//     surname: string;
//     age:number;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//enums
var Position;
(function (Position) {
    Position["dev"] = "developer";
    Position["designer"] = "designer";
    Position["marketing"] = "marketing";
    Position["hr"] = "hr";
})(Position || (Position = {}));
//classes
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        if (age > 0)
            this.age = age;
        else
            this.age = 0;
    }
    Object.defineProperty(Human.prototype, "name", {
        //getters
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "fullName", {
        get: function () {
            return (this._name + ' ' + this._surname);
        },
        enumerable: false,
        configurable: true
    });
    //methods
    Human.prototype.getInfo = function () {
        console.log("".concat(this.fullName, " is ").concat(this.age, " years old"));
    };
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, GPA, hobbies) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        if (GPA < 0 || GPA > 100) {
            _this._GPA = 0;
        }
        else {
            _this._GPA = GPA;
        }
        _this.hobbies = hobbies;
        return _this;
    }
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (value) {
            if (value >= 0 && value <= 100) {
                this._GPA = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        if (this._GPA < 50) {
            return false;
        }
        else {
            return true;
        }
    };
    //method override
    Student.prototype.getInfo = function () {
        console.log("".concat(this.fullName, " studies in ").concat(this.groupName, " & has GPA:").concat(this.GPA));
    };
    return Student;
}(Human));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skills, position) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.salary = salary;
        _this.skills = skills;
        _this.position = position;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        console.log("".concat(this.fullName, " is ").concat(this.position, " & get paid: ").concat(this.salary));
    };
    return Employee;
}(Human));
//student
var seid = new Student('Seid', 'Tagizade', 20, 'BF203', 100, ['basketball', 'video games']);
seid.getInfo();
console.log(seid.hasPassed());
//employee
var gurban = new Employee('Gurban', 'Gurbanzada', 30, 3000, ['programming', 'blogging'], Position.dev);
gurban.getInfo();
//2-ci hisse
var form = document.getElementById('myForm');
var outputList = document.getElementById('outputList');
var occupationSelect = document.getElementById('occupation');
var studentFields = document.getElementById('studentFields');
var employeeFields = document.getElementById('employeeFields');
occupationSelect.addEventListener('change', showFields);
function showFields() {
    var occupation = occupationSelect.value;
    if (occupation === 'student') {
        studentFields.style.display = 'block';
        employeeFields.style.display = 'none';
    }
    else if (occupation === 'employee') {
        studentFields.style.display = 'none';
        employeeFields.style.display = 'block';
    }
}
function submitForm() {
    var listItem = document.createElement('li');
    listItem.textContent =
        "Name: ".concat(form.elements.name.value, ", ") +
            "Surname: ".concat(form.elements.surname.value, ", ") +
            "Age: ".concat(form.elements.age.value, ", ") +
            "Occupation: ".concat(form.elements.occupation.value);
    if (form.elements.occupation.value === 'student') {
        listItem.textContent +=
            ", Group Name: ".concat(form.elements.groupName.value, ", ") +
                "GPA: ".concat(form.elements.GPA.value, ", ") +
                "Hobbies: ".concat(form.elements.hobbies.value);
    }
    else if (form.elements.occupation.value === 'employee') {
        listItem.textContent +=
            ", Salary: ".concat(form.elements.salary.value, ", ") +
                "Skills: ".concat(form.elements.skills.value, ", ") +
                "Position: ".concat(form.elements.position.value);
    }
    outputList.appendChild(listItem);
    form.reset();
    resetFields();
}
function resetFields() {
    studentFields.style.display = 'none';
    employeeFields.style.display = 'none';
}
var submitButton = document.querySelector('button');
if (submitButton) {
    submitButton.addEventListener('click', submitForm);
}
// document.addEventListener('DOMContentLoaded', () => {
// });
