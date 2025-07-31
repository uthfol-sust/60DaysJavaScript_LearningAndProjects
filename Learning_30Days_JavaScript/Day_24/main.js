const btn = document.querySelector('#calculate')

btn.addEventListener("click",()=>{
    
    const res = document.querySelector('#output')
    res.textContent = ''
    if(planet.value === '' || weight.value === '' || isNaN(parseFloat(weight.value))){
       const text = 'Please fill all the fields'
       res.textContent = text
       res.style.color = 'white'
       res.style.fontSize = '20px'
    }
    else{
     renderPlanetWeight(planet.value, weight.value);
    }
})

const renderPlanetWeight =(planet, weight) => {
    const planetDiv = document.querySelector('.planet-view')
    planetDiv.innerHTML = ''
    planetDiv.innerHTML = `<img class="img-planet" src="images/${planet}.png" alt="${planet}">
    <h2>Your weight on ${planet} <br><div class="show-weight">${calculateWeight(planet, weight)}<div>N</h2>`
}

const calculateWeight =(planet, weight) => {
    console.log(planet,weight)
const gravity = {
    'mercury': 3.7,     
    'venus': 8.87,
    'earth': 9.81,
    'mars': 3.721,
    'jupiter': 24.79,
    'saturn': 10.44,
    'uranus': 8.69,
    'neptune': 11.15,
    'pluto': 0.62
    
}
    const ans = (weight * gravity[planet])
    console.log(ans)
    return ans
}
