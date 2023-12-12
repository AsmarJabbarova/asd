// type obj= {
//     name: string;
//     surname: string;
//     age: number;
//     id: uuid;
//     birthday: string;
//     hobbies: string[];
// }
// type uuid=number | string

// function createPerson(name: string, surname: string, age: number, id: string, birthday: string, hobbies: string[]): obj {
//     return {
//         name: name,
//         surname: surname,
//         age: age,
//         id: id,
//         birthday: birthday,
//         hobbies: hobbies
//     };
// }

// let person = createPerson("Asmar", "Jabbarova", 19, "12345", "11-03-2004", ["Shopping", "Traveling"]);

// console.log(person);

interface Shape{
    kind:ShapeKind,
    radius:number,
    sideLenght:number,
    getArea:(r:number)=>number
}
enum ShapeKind{
    circle,
    square,
}
function getArea(radius:number) {
    
}