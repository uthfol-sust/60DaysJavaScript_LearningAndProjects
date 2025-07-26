const firstName = "Uthpol"


try{
    console.log("Understanding Error Handle in JS")
   console.log(firstName, lastName);
}catch(error){
    console.log('Name of the error', error.name)
  console.log('Error message', error.message)
}finally{
    console.log("It must Be excute Finally block")
}


const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()