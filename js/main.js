//Create app that pulls pricing from pricecharter for all pokemon mainline games.


//Example fetch using pokemonapi.co
/* document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
} */


//Create app that pulls pricing from pricecharter for all pokemon mainline games.
function getFetch(){
  fetch(`https://cat-fact.herokuapp.com/facts`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let randomIndex = Math.floor(Math.random() * data.length)
        let item = data[randomIndex]
        console.log(item)
        document.querySelector('p').innerText = item.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()

document.querySelector('button').addEventListener('click', getFetch)