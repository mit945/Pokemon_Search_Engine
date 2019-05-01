console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`
const endPoint = `pokemon`
let pokemonName;
let queryURL = baseURL + endPoint + '/' + 2 + '/'  
console.log(queryURL)






$(() => {
	// $.ajax({
	// 	url : 
	// })

	// const pokemonData = $.ajax({
	// 	url: queryURL + 
	// })


$('form').on('submit' , (event) => {
	event.preventDefault()
	titleQuery = $('input[type="text"]').val()
	console.log(titleQuery)

	})
})