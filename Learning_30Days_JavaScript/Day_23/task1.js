let headDiv = document.createElement('div');
let body = document.querySelector('body');

headDiv.style.margin = '0 auto';
headDiv.style.width = 'fit-content';
headDiv.style.textAlign='center'
headDiv.style.border ='gray 2px solid'
headDiv.style.borderRadius = '5px'

body.append(headDiv);
let heading = document.createElement("h1");
let heading2 = document.createElement('p');

heading.textContent = "Number Generator";
heading2.innerHTML = `<a href='#'>30DaysOfJavaScript DOM Day-2</a>
                      <a href='#'> <p> Author: Uthpol Ghosh<p></a>`;
headDiv.append(heading,heading2)
heading2.querySelectorAll('a').forEach((a) =>{
     a.style.color ='black'
     a.style.fontSize = '19px'
})


const prime = (num)=>{
   if(num< 2) return false;
   if( num ==2 || num == 3) return true;
   if(num%2==0) return false;

   for(i=3; i*i<=num; i++){
    if(num%i==0)
    {
        return false;
    }
   }
   return true;
} 

// Function to generate numbers and apply styles based on conditions
const numberGenerator = (range) => {

  const prevDiv = document.getElementById('numberDiv');
  if (prevDiv) {
    prevDiv.remove();
  }

let numberDiv = document.createElement('div');
numberDiv.style.display ='flex';
numberDiv.style.flexWrap = 'wrap'
numberDiv.style.width = '600px';
numberDiv.style.margin = '0 auto';
numberDiv.style.marginTop = '30px';
numberDiv.id = 'numberDiv';

const colors = ['blue', 'green', 'red', 'purple', 'orange', 'black','white'];

for(let i = 1; i <= range; i++) {
    let p = document.createElement('div');
    p.textContent = i;
    p.style.width = '60px';
    p.style.height = '60px'
    p.style.border ='black 2px solid';
    p.style.margin ='5px';
    p.style.textAlign = 'center';
    p.style.fontSize ='30px';

    setInterval(()=>{
    let index = Math.floor(Math.random()*colors.length);

    if(prime(i)){
        p.style.backgroundColor = colors[index];
    }
    else if(i%2){
        p.style.backgroundColor = 'yellow';
      } else {
        p.style.backgroundColor = 'green';
    }
    },1000)

    numberDiv.append(p);
  }
  body.append(numberDiv );
}



// Event handling in JavaScript
const input= document.createElement('input')
input.style.width = '300px'
input.style.height = '30px'
input.style.border = '4px solid green'
input.type = 'Text'
input.style.paddingRight = '20px'
input.id = 'input'

const submitButton = document.createElement('button')
submitButton.textContent = 'Number Generator'
submitButton.style.marginLeft = '20px'
submitButton.style.height = '40px'
submitButton.style.border = '4px solid green'
submitButton.style.backgroundColor = 'grey'
submitButton.style.cursor = 'pointer'

const submitDiv = document.createElement('div')
submitDiv.style.margin = '0 auto'
submitDiv.style.padding = '20px'
submitDiv.style.width = 'fit-content'
submitDiv.style.textAlign = 'center'
submitDiv.style.border = '2px solid black'
submitDiv.append(input, submitButton)

body.append(submitDiv,document.createElement('hr'))

const massage = document.createElement('p')
massage.style.color = 'red'
massage.style.fontSize = '20px'
massage.style.marginLeft = '0px'

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(input.value ==='' || isNaN(parseInt(input.value))){
        massage.textContent = 'Please enter a integer number'
        submitDiv.prepend(massage)
    }
    else{
        massage.textContent = ''
        console.log('Input value is: ', input.value)
        let num = parseInt(input.value)
        numberGenerator(num)
    }
})








