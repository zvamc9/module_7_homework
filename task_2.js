// Модуль 7. Задание 2
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const education = 'platform'
const student = {
	name: 'Igor',
    age: 40,
	student: true,
 }
const propertyStudent = (str, obj) => (str in obj) ? true : false;
console.log(propertyStudent(education, student))