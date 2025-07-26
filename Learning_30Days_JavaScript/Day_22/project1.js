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
headDiv.append(heading,heading2);
heading2.querySelectorAll('a').forEach((a) =>{
     a.style.color ='black';
     a.style.fontSize = '19px';
})

body.append(document.createElement('hr'));

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

let numberDiv = document.createElement('div');
numberDiv.style.display ='flex';
numberDiv.style.flexWrap = 'wrap'
numberDiv.style.width = '600px';
numberDiv.style.margin = '0 auto';
numberDiv.style.marginTop = '30px';

const colors = ['blue', 'green', 'red', 'purple', 'orange', 'black','white'];

for(let i = 1; i <= 100; i++) {
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
    }
    else{
        p.style.backgroundColor = 'green';
    }
    },1000)

    numberDiv.append(p);
}

const linkCountries = document.createElement('div');
linkCountries.style.padding ='30px'

linkCountries.innerHTML = `<a href='project2.html'>Vist Countries </a>`;
body.append(numberDiv , linkCountries);



