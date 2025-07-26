import { Person } from './ClassInJS.js'

class Student extends Person{
    constructor(firstName, lastName, age=20, city, country,gender){
        super(firstName, lastName, age=20, city, country)
        this.gender = gender;
    }

   saySomething() {
    return'I am a child of the person class'
   }

   getFullName() {
    const fullName = this.firstName + ' ' + this.lastName +" ,I'm a student"
    return fullName
  }
}

export {Student};