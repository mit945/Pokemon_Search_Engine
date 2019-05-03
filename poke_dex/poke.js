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
// const refreshButton = () => {
// 	const $refresh = $('<button>').addClass('refreshBtn').text('REFRESH').css('background-color','red')
// 	$('.container1').append($refresh)

// 	$('.refreshBtn').on('click', () => {
// 		console.log('hi')
// 		// $('p').reomve()
// 	})


// }
const descriptionOfPokemon = (abilities) => {
	const $div = $('<div>')
	abilities 
}
const getPokemon = () => {
	
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		var form = pokemonData.forms[0]//img src of the pokemon
		// console.log(form)
		// console.log(form.name)
		// $('.container1').append(form.name)
		// $('.container1').html(`
		// 	<p>${form.name}</p>
		// 	`)
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

	var img = $('img').attr(`src` , `${pokemondata.sprites.front_default}`)
		$('#container1').append(img)


	descriptionOfPokemon(abilities)
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
	// refreshButton()
});


///objective:

//expand the img to fit the container
//get the refresh button to work
//tooltips with another div with pokemon description
//get carasuel and plus minus btton to work 
// enter trainer name

