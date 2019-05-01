console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`
const endPoint = `pokemon`
let pokemonName;
 
console.log(queryURL)

///loop thru pokemon and give//
for(let i = 0 ; i < 964 ;i++){
	let queryURL = baseURL + endPoint + '/' + ${`i`} + '/' 
}



$(() => {
	$.ajax({
		url : baseURL + endPoint
	}).then((pokemonData) => {

		
	})

	const pokemonData = $.ajax({
		url: queryURL + endPoint 
	})


$('form').on('submit' , (event) => {
	event.preventDefault()
	titleQuery = $('input[type="text"]').val()
	console.log(titleQuery)

	})
})