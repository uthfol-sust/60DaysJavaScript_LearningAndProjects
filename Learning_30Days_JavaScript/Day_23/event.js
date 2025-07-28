// const btn = document.querySelector('h1')

// btn.addEventListener('dblclick', (e)=>{
//     console.log('e gives the event listener object:', e)
//         console.log('e.target gives the selected element: ', e.target)
//         console.log(
//           'e.target.textContent gives content of selected element: ',
//           e.target.textContent)
// })

// Event handling in JavaScript
const button = document.querySelector('#btn')
console.log("Button found: ", button)

// Click event example
button.addEventListener('dblclick', (e) => {
  console.log('Button was double clicked!')
  console.log('Event object:', e)
  console.log('Target element:', e.target)
  console.log('Target text content:', e.target.textContent)
  e.target.style.backgroundColor = 'lightblue'
});

// Mouseover event example
button.addEventListener("mouseover",(e)=>{
  const p = document.createElement('p')
  p.textContent = 'Mouse entered the button!'
  document.body.appendChild(p)
  console.log('Mouse entered the button!')
})


// BMI Calculator example
const btnBmi = document.querySelector('#bmi')
btnBmi.addEventListener('click',(e)=>{
  bmi = mass.value / height.value ** 2
  alert(`your bmi is ${bmi.toFixed(2)}`)
  console.log(bmi)
})


// Live input example
const inputPara = document.querySelector('#inputPara')
const liveInput = document.querySelector('.liveInput')

liveInput.addEventListener('input', (e) => {
    inputPara.textContent = `You typed: ${e.target.value}`
})

// Keypress event example
 document.body.addEventListener('keypress', e => {
        alert(e.keyCode)
  })
