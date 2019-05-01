console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`

const endPoint = `pokemon`
let titleQuery = $('input[type="text"]').val()
let pokemonName = "";
 


///loop thru pokemon and give//
// const 

const queryURL = baseURL + endPoint + '/' + pokemonName 

$(() => {
	const pokemonData = $.ajax({
		url: queryURL 
		//pokemonName is the name of the pokemon the user is 
		//searching for 
	})
	
const getPokemon = () => {
	for(let i = 0 ; i < 20 ;i++){
	$.ajax({
		url : queryURL

	

	}).then((pokemonData) => {
		console.log(pokemonData)

		// $.getJSON(Url, function(data,status){
		// 	console.
		// })
	}),(error) => {
		console.log(error)
		console.log(queryURL)

		}

	}
}



$('form').on('submit' , (event) => {
	event.preventDefault()
	pokemonName = $('input[type="text"]').val()
	console.log(pokemonName)
	$.ajax({
		url :  baseURL + endPoint + '/' + pokemonName

	

	}).then((pokemonData) => {
		console.log(pokemonData)
		// $.getJSON(Url, function(data,status){
		// 	console.
		// })
	}),(error) => {
		console.log(error)
		console.log(queryURL)

		}

	})
})