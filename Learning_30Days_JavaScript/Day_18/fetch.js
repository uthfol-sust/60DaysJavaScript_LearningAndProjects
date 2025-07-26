const url = "https://catfact.ninja/facts";
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const paraFacts = document.querySelector("#fact");
const btn = document.querySelector("#btn");

//Fetch Promise with async,await
fetch(url)
  .then(response => response.json()) 
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) 

//Async , await(more readable and clean code)
const getFacts = async() => {
    try{
     const res = await fetch(url);
     const data =await res.json();
     
    const randomIndex = Math.floor(Math.random() * data.data.length);
    const randomFact = data.data[randomIndex].fact;

    paraFacts.innerHTML = randomFact;
    }
    catch(error){
        console.log(error);
    }
}

btn.addEventListener("click", getFacts);

const getCats = async() =>{
    let response = await fetch(catsAPI);
    let data = await response.json();

    data.forEach((data)=>{
        console.log(data.name , data.weight);
    })
}
getCats();
