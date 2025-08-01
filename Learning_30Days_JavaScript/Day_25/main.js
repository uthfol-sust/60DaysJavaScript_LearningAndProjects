import countries from './countries.js'

//header
const header = document.querySelector('#length')
header.textContent =`We have ${countries.length} countries in the world`

//button 
const button = document.querySelector('.button')
const buttonPara = document.querySelector('.btn-para')

button.addEventListener('click',(e)=>{
   
    buttonPara.textContent = '';
    let text = ''
    if(e.target.textContent == 'population'){
       text = `15 Most Populated Countries in the World`
       showTopmostPopulatedCountries()
    }
    else if(e.target.textContent =='language'){
        text = `15 Most Spoken Languages in the World`
        showTopmostSpokenLanguages()
    }
    buttonPara.textContent = text
    buttonPara.style.color = 'black'
    buttonPara.style.marginTop = '0px'
})

//show countries
const showCountries = document.querySelector('.country')
const sortedCountry = countries;
const showTopmostPopulatedCountries = ()=>{
    showCountries.textContent = ''
    sortedCountry.sort((a, b) => b.population - a.population)
    const maxCountPopulation = sortedCountry[0].population
     
    let top =15;
    sortedCountry.forEach(ele=>{
        if(top<=0) return
        const cardDiv = document.createElement('div')
        cardDiv.className = 'each-country-card'

        const divNameFlag = document.createElement('div');
        divNameFlag.classList.add('divNameFlag')
        const img = document.createElement('img');
        img.src = ele.flag;

        const nameHeading = document.createElement('h4');
        nameHeading.textContent = ele.name;
        divNameFlag.append(img,nameHeading)
        
        const divBar= document.createElement('div');
        divBar.classList.add('bar-container')
        const bar = document.createElement('p');
        bar.classList.add('bar');
        bar.style.width = `${(ele.population / maxCountPopulation) * 50}%`;
        divBar.append(bar)

        const number =  document.createElement('p');
        number.textContent = ele.population
        
        cardDiv.append(divNameFlag,divBar, number)
        showCountries.append(cardDiv)
        top -= 1
   })
}

//top most language
const showTopmostSpokenLanguages = ()=>{
    showCountries.textContent = ''
    
    //map to track most spoken lang
    const languageCount = new Map()
    countries.forEach(country =>{
        const langs = country.languages
        langs.forEach(lang=>{
            if(languageCount.has(lang)){
            languageCount.set(lang , languageCount.get(lang)+1)
            }
            else{
            languageCount.set(lang,1)
            }  
        })  
    })
  
  //sort map
  const sortedLanguages = [...languageCount.entries()].sort((a, b) => b[1] - a[1]); 


  let most = 15
  const maxCountLang = sortedLanguages[0][1]
  
  sortedLanguages.forEach( ele=>{
        if(most<=0) return
        const cardDiv = document.createElement('div')
        cardDiv.className = 'each-country-card'

        const divNameFlag = document.createElement('div');
        divNameFlag.classList.add('divNameFlag')

        const nameHeading = document.createElement('h4');
        nameHeading.textContent = ele[0];
        divNameFlag.append(nameHeading)

        const divBar= document.createElement('div');
        divBar.classList.add('bar-container')
        const bar = document.createElement('p');
        bar.classList.add('bar');
        bar.style.width = `${(ele[1] / maxCountLang) * 50}%`;
        divBar.append(bar)
        
        const number =  document.createElement('p');
        number.textContent = ele[1]
        
        cardDiv.append(divNameFlag,divBar, number)
        showCountries.append(cardDiv)
        most -= 1
  })
    
}




