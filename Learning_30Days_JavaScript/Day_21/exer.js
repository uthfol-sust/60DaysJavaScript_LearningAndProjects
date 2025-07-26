let div = document.querySelector('.wrapper');

div.style.backgroundColor = 'gray';
div.style.width = '80%';
div.style.margin = "0 auto";
div.style.border = '3px solid black';
div.style.borderRadius = '10px';

let heading1 = document.querySelector('h1');
heading1.style.textAlign ='center';

let heading2 = document.querySelector('h2');
heading2.innerHTML = `<a href=''>${heading2.textContent}</a>`;
heading2.style.textAlign ='center';

// Change link color every second
const linkColors = ['blue', 'green', 'red', 'purple', 'orange', 'black','white'];

setInterval(()=>{
    const index = Math.floor(Math.random() * linkColors.length);
    heading1.style.color = linkColors[index];
},1000)

setInterval(() => {
     const index = Math.floor(Math.random() * linkColors.length);
    heading2.querySelector('a').style.color = linkColors[index];
}, 1000);

let ul = document.querySelector('ul');
ul.style.paddingLeft = '80px';
ul.style.paddingRight = '80px';

let li = document.querySelectorAll('li');
li.forEach((li , i)=>{
    li.style.display='flex';
    li.style.padding = '10px';
    li.style.border = '3px solid white';

    if(i%2==0 && i<2){
        li.style.backgroundColor = 'green'
    }
    else if(i%2!=0 && i<2){
        li.style.backgroundColor = 'yellow'
    }
    else{
        li.style.backgroundColor = 'red'
    }
})

