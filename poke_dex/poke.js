console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`
const endPoint = `pokemon`
let pokemonName;
 


///loop thru pokemon and give//

		




$(() => {
	for(let i = 0 ; i < 20 ;i++){
	$.ajax({
		url : baseURL + endPoint + '/' + i + '/'
	// console.log(queryURL)

	}).then((pokemonData) => {
		console.log(pokemonData)
		
	})
}
	const pokemonData = $.ajax({
		url: queryURL + pokemonName
		//pokemonName is the name of the pokemon the user is 
		//searching for 
	})


$('form').on('submit' , (event) => {
	event.preventDefault()
	titleQuery = $('input[type="text"]').val()
	console.log(titleQuery)

	})
})