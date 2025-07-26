import UthpolChallenges from "./data.js"

let body = document.querySelector('body')


//Header
let headingDiv = document.createElement('div')

const colorList = ['blue', 'green', 'red', 'purple', 'orange','yellow', 'gold']

headingDiv.innerHTML =`<h1>${UthpolChallenges.challengeTitle} <span class="year" style="font-size:50px"> ${UthpolChallenges.challengeYear} </span></h1>
                       <a href="#" style="color:black"><h2 class="sub-heading">${UthpolChallenges.challengeSubtitle}</h2></a>
                       `
headingDiv.style.textAlign = 'center'
 

setInterval(()=>{
   let index1 = Math.floor(Math.random()*colorList.length)
   
   let index2 = Math.floor(Math.random()*colorList.length)
   
   document.querySelector('.year').style.color = colorList[index1]
   document.querySelector('.sub-heading').style.color = colorList[index2]

},1000)  

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };


  //Date & Time

let timeDiv = document.createElement('div')
timeDiv.style.fontSize ='18px'
timeDiv.style.margin='0 auto'
timeDiv.style.border = '2px black solid'
timeDiv.style.width = "fit-content"

setInterval(() => {
  const date = new Date();
  const formatted = date.toLocaleString('en-US', options);
  timeDiv.textContent = formatted;
}, 1000);

let line = document.createElement('hr')
line.style.marginBottom = '30px'
body.append(headingDiv,timeDiv,line)


//Challenges

let challengesDiv = document.createElement('div')
challengesDiv.style.width = '60%'
challengesDiv.style.margin ='0 auto'
challengesDiv.style.border ='2px black solid'
challengesDiv.style.borderRadius ='5px'
challengesDiv.style.padding = '15px'

UthpolChallenges.challenges.forEach(element => {
  
   let boxDiv = document.createElement('div')
   boxDiv.style.display = 'flex'
   boxDiv.style.justifyContent='space-between'
   boxDiv.style.margin = '8px'
   boxDiv.style.borderRadius ='5px'

   if(element.status=='Done'){
    boxDiv.style.backgroundColor = 'green'
   }else if(element.status=="Ongoing"){
    boxDiv.style.backgroundColor = 'yellow'
   }else{
    boxDiv.style.backgroundColor = 'gray'
   }

   
   //name
  const nameLink = document.createElement('a');
  nameLink.href = '#';
  nameLink.textContent = element.name;
  nameLink.style.textDecoration = 'underline';
  nameLink.style.padding = '25px'
  nameLink.style.color ='black'

  //topics
  const details = document.createElement('details')
  const summary = document.createElement('summary')
  summary.style.paddingTop = '25px'

  summary.textContent = element.name.split("Of")[1].trim()
  details.append(summary)

  element.topics.forEach(ele=>{
    const p = document.createElement('p')
    p.textContent = ele
    details.append(p)
  })


  // Status
  const status = document.createElement('p');
  status.textContent = element.status;
  status.style.padding = '15px'

  

   boxDiv.append(nameLink,details,status)
   challengesDiv.append(boxDiv)
});

body.append(challengesDiv)



//author
const author = document.createElement("div")
author.style.margin = '0 auto'
author.style.display = 'block'
author.style.width = 'fit-content'
author.innerHTML =`<h3 style="font-size:35px">${UthpolChallenges.author.firstName } ${UthpolChallenges.author.lastName }</h3>`

const authorSocialLinks = document.createElement('div')
authorSocialLinks.style.display = 'flex'
authorSocialLinks.style.justifyContent = 'center'


UthpolChallenges.author.socialLinks.forEach((link ,idx )=>{
  const a = document.createElement('a')
  a.href = link.url
  a.innerHTML = link.fontawesomeIcon
  a.style.fontSize = '30px'  
  a.style.margin = '0 10px'
  a.style.marginTop = '0px'

  if(idx==0){
    a.style.color = 'blue'
  }else{
    a.style.color = 'black'
  }
  a.style.textDecoration = 'none'
  
  authorSocialLinks.append(a) 

})


//Bio
const Bio = document.createElement("div")
Bio.style.width = '60%'
Bio.style.margin = '0 auto'
Bio.style.marginTop = '20px'

const authorBio = document.createElement("p")
authorBio.textContent = UthpolChallenges.author.bio
authorBio.style.margin ='0 auto'
Bio.append(authorBio)

const authorTitles = document.createElement("div")
authorTitles.innerHTML = `<h4>Titles:</h4>`
authorTitles.style.width = 'fit-content'
UthpolChallenges.author.titles.forEach((title,idx)=>{
const p = document.createElement('p')
p.textContent = title
authorTitles.append(p)
})

//titles, skills, qualifications
const authorSkills = document.createElement("div")
authorSkills.innerHTML = `<h4>Skills:</h4>`
authorSkills.style.width = 'fit-content'
UthpolChallenges.author.skills.forEach((title,idx)=>{
const p = document.createElement('p');
const icon = document.createElement('i');
icon.className = 'fa-solid fa-square-check';
icon.style.color = 'green';
icon.style.fontSize = '20px';
p.appendChild(icon);
p.append(' ' + title);
authorSkills.append(p);
})

const authorQualifications = document.createElement("div")
authorQualifications.innerHTML = `<h4>Qualifications:</h4>`
UthpolChallenges.author.qualifications.forEach((qual, idx) => {
  const p = document.createElement('p');        
  const icon = document.createElement('i');
  if(idx % 2 == 0) {
    icon.className = 'fa-solid fa-graduation-cap';
  } else {
    icon.className = 'fa-solid fa-book-open';
  }
  icon.style.color = 'gray';
  icon.style.fontSize = '20px';
  p.appendChild(icon);
  p.append(' ' + qual);
  authorQualifications.append(p);       
})  

//<i class="fa-solid fa-book-open-cover"></i>
const authorDetails = document.createElement("div")
authorDetails.style.width = '60%'
authorDetails.style.display = 'flex'
authorDetails.style.justifyContent = "space-between"
authorDetails.style.margin = '0 auto'
authorDetails.style.marginTop = '20px'
authorDetails.append( authorTitles, authorSkills, authorQualifications)


body.append(author , authorSocialLinks,Bio,authorDetails)
