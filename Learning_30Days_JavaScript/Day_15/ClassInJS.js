class Person{
  constructor(firstName, lastName, age=20, city, country){
    //console.log(this)
    this.age = age
    this.city = city
    this.country = country
    this.lastName = lastName
    this.firstName = firstName
    this.score = 0
    this.skills = []
  }

   getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }

  get getSkills(){
    return this.skills
  }

  get getScore(){
    return this.score
  }


  set setScore(score){
     this.score += score;
  }

  set setSkills(skills){
    this.skills.push(skills)
  }


  //static method
  static createAnonymous() {
    return new Person('Anonymous', 'User')
  }

  static showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()+1
    let day = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()

     if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    let fullTime = hours +":"+ minutes + " " + day +"/" + month +"/" +year
    return fullTime;
  }
}

const person = new Person();
console.log(person)
const person1 = new Person("Uthpol", "Ghosh", 24, "Sylhet", "Bangladesh");
console.log(person1)
console.log(person1.firstName)
console.log(person1.getFullName())

console.log(person1.getSkills)

const person2 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');
person2.setScore = 20
person2.setScore = 1
person2.setSkills = 'Planning'
person2.setSkills = 'Managing'
person2.setSkills = 'Organizing'


console.log(person2.getScore)
console.log(person2.getSkills)

const person3 = Person.createAnonymous() // create new object using static method
console.log(person3.getFullName())
console.log(Person.showDateTime())



///for oop
export { Person };