import {Student} from './student.js'

const student1 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki',"Male")

console.log(student1.getFullName())
console.log(student1.saySomething())

const student2 = new Student('Lidiya2', 'Tekle2', 28, 'Finland2', 'Helsinki2',"Female")
console.log(student2.getFullName())

