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
		var form = pokemonData.forms[0]
		// console.log(pokemonData.abilities[1].name)
		// $('.tooltips').append(pokemonData.abilities[0].ability.name)
		// $('.tooltips').append(pokemonData.abilities[1].ability.name)
		$('.tooltips').html(`
			<h4>${form.name}</h4>
			<h4>ability names: </h4>
			<p>1.${pokemonData.abilities[0].ability.name}<p>
			<p>2.${pokemonData.abilities[1].ability.name}</p>
			`)
	}),(error) => {
		console.log(error)
		console.log(nameURL)

		}


	}
	getAbilities()

}
	///////refresh btn////////////////

	const refreshButton = () => {
	const $refresh = $('<button>').addClass('refreshBtn').text('REFRESH').css('background-color','azure')
	$('.inputBox1').append($refresh)

	$('.refreshBtn').on('click', () => {
		console.log('hi')
		let pokemonImg = $image;
		// $('.container1').remove('.ui-draggable')
	})


}
refreshButton()
/////////////////////////////////
///////////////get pokemon form api and log to console////////////////////

const getPokemon = () => {
	
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		// var form = pokemonData.forms[0]//img src of the pokemon
		// console.log(form)
		// console.log(form.name)
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

	var $image = $('img').attr(`src` , `${pokemondata.sprites.front_default}`)
		$('#inputBox1').append($image)
		///////append $image///////



	}),(error) => {

		console.log(error)
	}

}

/////////////////errors//////////////////////

	$('.inputBox2').on('submit1',(event) => {
		
	const nameUser = $('input[type="text"]').val()

		// $('.container2').append(nameUser)
		console.log(typeof nameUser)
		event.preventDefault()
	})
///////////////////////////////////////////
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
	$('img').draggable({
		// helper:'clone'
	})
	// $('inputBox2').droppable({
	// 	drop: function(event,ui){
	// 		var id = $(ui.draggable).attr('id');
	// 		var toy = $(ui.draggable).attr('html');
	// 		var box = $(this).attr('id');
	// 	}
	// 	$.ajax({
	// 		url:'jquery.ui.touch-punch.min.js',
	// 		type:'GET',
	// 		data:{
	// 			'id':id,
	// 			'box':box
	// 		}

	// 	})
	// })

});


///objective:

// add pokemon to trainer's side (drag and drop)
// let trainer able to delete item
// expand img 

