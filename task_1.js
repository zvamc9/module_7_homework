// Задание 1
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.


const person = {
	city: 'Moscow',
	speciality: 'Frontend-developer' 
};

const student = Object.create(person);
    student.name = 'Igor';
    student.age = 40;
    student.student = true;
    
function showOwnProp(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) 
        console.log(`${key} - ${obj[key]}`);
	}
}
showOwnProp(student);

