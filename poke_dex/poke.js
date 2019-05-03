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
const refreshButton = () => {
	const $refresh = $('<button>').addClass('refreshBtn').text('REFRESH').css('background-color','azure')
	$('.container1').append($refresh)

	$('.refreshBtn').on('click', () => {
		console.log('hi')
		// $('p').reomve()
	})


}
//////////description of pokemon///////
const $div = $('<div>').addClass('tooltips').css('background-color','gray')

const descriptionOfPokemon = () => {
	
	$('.container1').append($div)
	// function abilities(){
	// 	return 	$.ajax({
	// 	url : nameURL + pokemonName,
	// 	dataType : 'json',
	// 	method: 'GET'
	

	// }).then((pokemonData) => {
	// 	var form = pokemonData.forms[0]//img src of the pokemon
	// 	// console.log(form)
	// 	// console.log(form.name)
	// 	$('.container1').append(form.name)
	
	// }),(error) => {
	// 	console.log(error)
	// 	console.log(nameURL)

	// 	}


	// }

}
	
/////////////////////////////////
///////////////////////////////////

const getPokemon = () => {
	
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		var form = pokemonData.forms[0]//img src of the pokemon
		// console.log(form)
		console.log(form.name)
		// $('.tooltips').append(form.name)
	
	}),(error) => {
		console.log(error)
		console.log(nameURL)

		}

	
}

//////////get the picture of pokemon///////////////////////
const getPokemonForm = () => {
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	 
	}).then((pokemondata) => {
		console.log(pokemondata)
	var pokemonFormURL = pokemondata.forms[0].url
		// console.log(pokemonFormURL)
		// console.log()

	var img = $('img').attr(`src` , `${pokemondata.sprites.front_default}`)
		$('#container1').append(img)
		///////append img///////



	}),(error) => {

		console.log(error)
	}

}


	$('.container2').on('submit',(event) => {
		// event.preventDefault()
	const nameUser = $('input[type="text"]').val()

		// $('.container2').append(nameUser)
		console.log(nameUser)
	})

	$('.container1').on('submit' , (event) => {
	
	pokemonName = $('input[type="text"]').val()
	// console.log(pokemonName)

/////////////////////////////////////////
//////////////get pokemon calls below here//////////////////////

	getPokemon()
	getPokemonForm()
	event.preventDefault()
	})


	$('img').on('mouseenter',(event) => {

		descriptionOfPokemon()
	})

	refreshButton()
});


///objective:

//expand the img to fit the container
//get the refresh button to work
//tooltips with another div with pokemon description
//get carasuel and plus minus btton to work 
// enter trainer name

