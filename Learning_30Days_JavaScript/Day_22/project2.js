import countries from './countries.js'

let body = document.querySelector("body")

let headDiv = document.createElement("div")

headDiv.innerHTML =`<h1>WORLD COUNTRIES LIST</h1>
                    <h3>Total Number Of Countries:${countries.length}</h3>
                    <p>30DaysOfJavaScript DOM Day-2</p>
                    <p> Author: Uthpol Ghosh</p>
                    <hr>`
headDiv.style.textAlign='center' 
headDiv.style.paddingBottom = '10px'                   
body.append(headDiv)

let divCountry = document.createElement('div')
divCountry.style.display ='flex'
divCountry.style.flexWrap ='wrap'
divCountry.style.width = '70%'
divCountry.style.margin = '0 auto'
divCountry.style.border = 'gray 2px solid'
divCountry.style.justifyContent = 'center'

countries.forEach((ele)=>{
   let boxdiv = document.createElement('div')
   boxdiv.innerHTML =`<img src="${ele.flag}" alt="Flag of ${ele.name}" style="height:80px;display:block;margin:0 auto;border:2px solid #888;border-radius:4px;">
                      <h4>Name: ${ele.name}</h4>
                      <p>Capital: ${ele.capital} </p>
                      <p>Languages: ${ele.languages} </p>
                      <p>Area: ${ele.area} </p>
                      <p>Capital: ${ele.population} </p>
                      <p>Capital: ${ele.region} </p>
                      `
   boxdiv.style.paddingTop = '10px'
   boxdiv.style.paddingLeft = '20px'
   boxdiv.style.width ='30%'
   boxdiv.style.border = 'gray 2px solid'
   boxdiv.style.borderRadius = '8px'
   boxdiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)'
   boxdiv.style.margin = '5px'
   divCountry.append(boxdiv)
})

body.append(divCountry)




