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
///////refresh btn////////////////
const refreshButton = () => {
	const $refresh = $('<button>').addClass('refreshBtn').text('REFRESH').css('background-color','azure')
	$('.inputBox1').append($refresh)

	$('.refreshBtn').on('click', () => {
		console.log('hi')

	})


}
refreshButton()
//////////description of pokemon///////
const $div = $('<div>').addClass('tooltips').css('background-color','#bfff80')

const descriptionOfPokemon = () => {
	
	$('.inputBox1').append($div)

	function getAbilities(){
		return 	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		console.log(pokemonData.abilities[0].ability.name)
		// console.log(pokemonData.abilities[1].name)
		// $('.tooltips').append(pokemonData.abilities[0].ability.name)
		// $('.tooltips').append(pokemonData.abilities[1].ability.name)
		$('.tooltips').html(`
			<h4>ability names: </h4>
			<h5>${pokemonData.abilities[0].ability.name}</h5>
			<p>${pokemonData.abilities[1].ability.name}</p>
			`)
	}),(error) => {
		console.log(error)
		console.log(nameURL)

		}


	}
	getAbilities()

}
	
/////////////////////////////////
///////////////get pokemon form api and log to console////////////////////

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
		$('#inputBox1').append(img)
		///////append img///////



	}),(error) => {

		console.log(error)
	}

}


	$('.inputBox2').on('submit',(event) => {
		// event.preventDefault()
	const nameUser = $('input[type="text"]').val()

		// $('.container2').append(nameUser)
		console.log(nameUser)
	})

	$('.inputBox1').on('submit' , (event) => {
	
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

	
});


///objective:

//expand the img to fit the container
//get the refresh button to work
//tooltips with another div with pokemon description
//get carasuel and plus minus btton to work 
// enter trainer name

