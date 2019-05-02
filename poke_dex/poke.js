console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`

const endPoint1 = `pokemon`;//name


let pokemonName = "";

// const limit = `limit=1`

const nameURL = baseURL + endPoint1 + '/' + pokemonName 
const formURL = `https://pokeapi.co/api/v2/pokemon-form/`//getpokemonForm()
$(() => {

//////////////////get pokemon names/////////////
	const pokemonData = $.ajax({
		url: nameURL + pokemonName, 
		
	})

const getPokemon = () => {
	
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		var form = pokemonData.forms[0]//img src of the pokemon
		// console.log(form)
		$('.container1').append(form.name)
		
	}),(error) => {
		console.log(error)
		console.log(nameURL)

		}

	
}

//////////form///////////////////////
const getpokemonForm = () => {
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	 
	}).then((pokemondata) => {
		const pokemonFormURL = formURL + pokemonName + '/'
		console.log(pokemonFormURL)
		
	}),(error) => {

		console.log(error)
	}

}

$('form').on('submit' , (event) => {
	event.preventDefault()
	pokemonName = $('input[type="text"]').val()
	console.log(pokemonName)

/////////////////////////////////////////
//////////////get pokemon calls below here//////////////////////

	getPokemon()
	getpokemonForm()
	
	})

});


///objective:

// get the getpokemonform() to work 
//grab the img src and display it on the left side of the screen;