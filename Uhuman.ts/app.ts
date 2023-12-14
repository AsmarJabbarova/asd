// interface IHuman{
//     name: string;
//     surname: string;
//     age:number;
// }

// abstract class Human implements IHuman {
//     private _name: string;
//     private _surname: string;
//     public age: number;

//     constructor(name: string, surname: string, age: number) {
//         this._name = name;
//         this._surname = surname;
//         this.age = age;
//     }
//     get fullName(): string {
//         return `${this._name} ${this._surname}`;
//     }

//     get nameAndSurname(): string {
//         return `${this._name} ${this._surname}`;
//     }

  
//     abstract getInfo(): string;
// }
// enum Position{

// }

// interface IEmployee{
// salary:number;
// skills:<T>;
// position:Position;
// }

// class Employee extends Human implements IEmployee {
//     private _employeeId: number;

//     constructor(name: string, surname: string, age:number, employeeId: number) {
//         super(name, surname, age);
//      this._employeeId = employeeId;
//     }

// getInfo(): string {
//         return `Employee ID: ${this._employeeId},Name: ${this.nameAndSurname}, Age: ${this.age}`;
//     }
// }

// interface IStudent{
//     groupName: string;
//     hobbies: string;

// }

// class Student extends Human implements IStudent {
//  private _studentId: number;

// constructor(name: string, surname: string, age: number, studentId: number) {
//     super(name, surname, age);
//         this._studentId = studentId;
//     }

//     getInfo(): string {
//         return `Student ID: ${this._studentId}, Name: ${this.nameAndSurname}, Age: ${this.age}`;
//     }
// }

// const  employee = new Employee('Siya', 'Jabbarova', 22, 101);
// const student = new Student('Ceyla', 'Amirbayli', 21, 201);

// console.log(employee.getInfo());
// console.log(student.getInfo()); 
 


//interfaces
interface IHuman{
    name: string;
    surname: string;
    age: number;
    getInfo: ()=>void;
}
interface IStudent<T>{
    groupName: string;
    hobbies: T;
    GPA: number;
    hasPassed: ()=>boolean;
}
interface IEmployee<T>{
    salary: number;
    skills: T,
    position: Position
}

//enums
enum Position{
    dev = 'developer',
    designer = 'designer',
    marketing = 'marketing',
    hr = 'hr'
}

//classes
abstract class Human implements IHuman{
    private _name: string;
    private _surname: string;
    public age: number;
    
    constructor(name: string,surname:string,age:number){
        this._name = name;
        this._surname = surname;
        if (age>0)
            this.age = age;
        else
            this.age = 0;
    }

    //getters
    get name(){
        return this._name;
    }
    get surname(){
        return this._surname;
    }
    get fullName(){
        return (this._name + ' '+this._surname)
    }

    //methods
    getInfo():void{
        console.log(`${this.fullName} is ${this.age} years old`);
    }
}

class Student extends Human implements IStudent<string[]>{
    public groupName: string;
    private _GPA: number;
    public hobbies: string[];

    constructor(name: string,surname: string,age:number, groupName: string, GPA: number, hobbies: string[]){
        super(name, surname,age);
        this.groupName = groupName;
        if (GPA<0 || GPA>100) {
            this._GPA = 0;
        }
        else{
            this._GPA = GPA;
        }
        this.hobbies = hobbies;
    }

    get GPA(){
        return this._GPA;
    }
    set GPA(value:number){
        if (value>=0 && value<=100) {
            this._GPA = value;
        }
    }

    hasPassed():boolean{
        if (this._GPA<50) {
            return false;
        }
        else{
            return true;
        }
    }

    //method override
    getInfo(): void {
        console.log(`${this.fullName} studies in ${this.groupName} & has GPA:${this.GPA}`);
    }
}

class Employee extends Human implements IEmployee<string[]>{
    public salary: number;
    public skills: string[];
    position: Position;

    constructor(name:string,surname:string,age:number,salary:number,skills: string[],position:Position){
        super(name,surname,age);
        this.salary = salary;
        this.skills = skills;
        this.position = position;
    }

    getInfo(): void {
        console.log(`${this.fullName} is ${this.position} & get paid: ${this.salary}`);
    }
}

//student
let seid = new Student('Seid','Tagizade',20,'BF203',100,['basketball','video games']);
seid.getInfo();
console.log(seid.hasPassed());
//employee
let gurban = new Employee('Gurban','Gurbanzada',30,3000,['programming','blogging'],Position.dev);
gurban.getInfo();



//2-ci hisse

    const form = document.getElementById('myForm') as HTMLFormElement;
    const outputList = document.getElementById('outputList') as HTMLUListElement;
    const occupationSelect = document.getElementById('occupation') as HTMLSelectElement;
    const studentFields = document.getElementById('studentFields') as HTMLDivElement;
    const employeeFields = document.getElementById('employeeFields') as HTMLDivElement;

    occupationSelect.addEventListener('change', showFields);

    function showFields() {
        const occupation = occupationSelect.value;

        if (occupation === 'student') {
            studentFields.style.display = 'block';
            employeeFields.style.display = 'none';
        } else if (occupation === 'employee') {
            studentFields.style.display = 'none';
            employeeFields.style.display = 'block';
        }
    }

    function submitForm() {
        const listItem = document.createElement('li');
        listItem.textContent =
            `Name: ${form.elements.name.value}, ` +
            `Surname: ${form.elements.surname.value}, ` +
            `Age: ${form.elements.age.value}, ` +
            `Occupation: ${form.elements.occupation.value}`;

        if (form.elements.occupation.value === 'student') {
            listItem.textContent +=
                `, Group Name: ${form.elements.groupName.value}, ` +
                `GPA: ${form.elements.GPA.value}, ` +
                `Hobbies: ${form.elements.hobbies.value}`;
        } else if (form.elements.occupation.value === 'employee') {
            listItem.textContent +=
                `, Salary: ${form.elements.salary.value}, ` +
                `Skills: ${form.elements.skills.value}, ` +
                `Position: ${form.elements.position.value}`;
        }

        outputList.appendChild(listItem);
        form.reset();
        resetFields();
    }

    function resetFields() {
        studentFields.style.display = 'none';
        employeeFields.style.display = 'none';
    }

    const submitButton = document.querySelector('button');
    if (submitButton) {
        submitButton.addEventListener('click', submitForm);
    }


























// document.addEventListener('DOMContentLoaded', () => {



// });