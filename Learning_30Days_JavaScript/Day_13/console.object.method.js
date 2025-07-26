console.log('30 Days of JavaScript')
console.log('%d %s of JavaScript', 30, 'Days')


console.warn('This is a warning')
console.warn('Warning is different from error')


console.error('This is an error message')
console.error('We all make mistakes')

const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
]
console.table(users)


console.info("hello ,welcome back in 30 days javascript")
const func = () => {
  console.count('Function has been called')
}
func()
func()
func()

console.clear()

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm']]

console.time('forEach')
countries.forEach(([c, cap]) => console.log(c, cap))
console.timeEnd('forEach')
