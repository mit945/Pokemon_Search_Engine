console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`

const endPoint1 = `pokemon`;//get the pokemon by /pokemon/ in api


let pokemonName = "";



const nameURL = baseURL + endPoint1 + '/' + pokemonName 

const pokemonFormURL = `https://pokeapi.co/api/v2/pokemon-form/` + pokemonName + '/'
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
		// console.log(form.name)
		$('.container1').append(form.name)
		
	}),(error) => {
		console.log(error)
		console.log(nameURL)

		}

	
}

//////////form///////////////////////
const getPokemonForm = () => {
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	 
	}).then((pokemondata) => {
		console.log(pokemondata)
	var pokemonFormURL = pokemondata.forms[0].url
		console.log(pokemonFormURL)
		// $('#container1').append('hi')

	var img = $('img').attr('src' , 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png')
		$('#container1').append(img)
	}),(error) => {

		console.log(error)
	}

}

$('form').on('submit' , (event) => {
	event.preventDefault()
	pokemonName = $('input[type="text"]').val()
	// console.log(pokemonName)

/////////////////////////////////////////
//////////////get pokemon calls below here//////////////////////

	getPokemon()
	getPokemonForm()
	
	})

});


///objective:

// get the getPokemonForm() to work 
//grab the img src and display it on the left side of the screen;