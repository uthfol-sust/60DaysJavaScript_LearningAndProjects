firstTitle = document.querySelector('h1')
firstTitle = document.querySelector('#first-id') 
firstTitle = document.querySelector('.title')



let heading = document.querySelectorAll('h1')
heading[0].setAttribute("class", "title1") // (Attribute name, value)

heading[0].innerText ='Updates '+ heading[0].innerText;

heading[1].innerHTML = heading[1].innerHTML+ "<p>This is the part of under second title<p>"

heading[2].innerText='';
console.log(heading[2].innerText)

heading[3].innerText = 'This is 4th title'

let body = document.querySelector('body')
console.log(body.innerHTML)
console.log(body.textContent)


const lists = `<ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
            </ul>`
body.innerHTML += lists

let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')
//ul.remove()
//ul.innerHTML= ''
ul.style.backgroundColor='red'
ul.style.padding = '15px'
li.forEach((li,i)=>{
 li.style.color = 'white'
 li.style.margin= '10px'
 li.style.backgroundColor='black'
 li.style.padding ='8px'
})



