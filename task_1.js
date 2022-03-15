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

