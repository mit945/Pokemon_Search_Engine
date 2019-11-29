console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`

const endPoint1 = `pokemon`;//get the pokemon by /pokemon/ in api


let pokemonName = "";


const nameURL = baseURL + endPoint1 + '/' + pokemonName ;

const pokemonFormURL = `https://pokeapi.co/api/v2/pokemon-form/` + pokemonName + '/';

$(() => {

//////////////////
  //get pokemon names
//////////////////
const pokemonData = $.ajax({
		url: nameURL + pokemonName, 
		
	})




////////////////
  //DISPLAYING THE ABILITY INFORMATIONS
////////////////
const $div = $('<div>').addClass('tooltips')

const descriptionOfPokemon = () => {
	
	$('.inputBox1').append($div)

	function getAbilities(){
		return 	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		// console.log(pokemonData.abilities[0].ability.name)
		console.log(pokemonData)
		var form = pokemonData.forms[0]//do not need this line
		// console.log(pokemonData.abilities[1].name)
		// $('.tooltips').append(pokemonData.abilities[0].ability.name)
		// $('.tooltips').append(pokemonData.abilities[1].ability.name)
		$('.tooltips').html(`
			<h4>${form.name}</h4>
			<h4>ability names: </h4>
			<p>1.${pokemonData.abilities[0].ability.name}</p>
			<p>2.${pokemonData.abilities[1].ability.name}</p>
			`)
	}),(error) => {
		console.log(error)
		console.log(nameURL)

		}


	}
	getAbilities()

}



///////////////
//GET POKEMON API AND LOG IT TO THE CONSOLE
/////////////////////////////////
const getPokemon = () => {
	
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		
		console.log(pokemonData)
	
	}),(error) => {
		console.log(error)
		console.log(nameURL)

		}

	
}





//////////
 //GET THE PICTURE OF THE POKEMON AND DISPLAY IT IN CONTAINER1
///////////////////////
const getPokemonForm = () => {
	$.ajax({
		url : nameURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	 
	}).then((pokemondata) => {
		// console.log(pokemondata)
	var pokemonFormURL = pokemondata.forms[0].url//look at 
		// console.log(pokemonFormURL)
		// console.log()

	var $image = $('img').attr(`src` , `${pokemondata.sprites.front_default}`)
		$('#inputBox1').append($image)
		///////append $image///////

		//if refresh button is hit, then call $image again

	}),(error) => {

		console.log(error)
	}

}


/////user's collection/////////
const collection =[];//up to 8 collections
let count = 0;

// const collectionImg = () => {
// 	for(let i = 0 ; i < 8 ;i++){
// 		$('.inputBox2').append($image)
// 		// if($('.ui.draggable'))
// 	}
// }




/////////////////////////
 //  CONTAINER 2	
//////////////////////////
	$('.inputBox2').on('submit',(event) => {
		
	const nameUser = $('input[name="submit1"]').val()

		// $('.container2').append(nameUser)
		alert('Welcome! Trainer ' + nameUser + "!")
		var  instruction = $('#inst').text('drag pokemon here for ' + nameUser + '\'s collection:')
		$('.inputBox2').append(instruction)

		// $('inputBox2').droppable(
	// 	{hoverClass:"drop-hover"}
	// )
		event.preventDefault()
	})




/////////////////
 //TOOLTIP WHEN MOUSEENTER and call descriptionOfPokemon() function
//////////////////
	$('img').on('mouseenter',(event) => {

		descriptionOfPokemon()
	})
	$('img').draggable({
		// helper:'clone'
	})
	;





//////////////
  //REREFRESH BUTTON
     // - CLEAR IMAGE
     // - CLEAR DESCRIPTIONS
//////////////
	const $refresh = $('<button>').addClass('refreshBtn').text('Reset').css('background-color','white')
	$('.inputBox1').append($refresh)



	$('.refreshBtn').on('click', () => {
		console.log('refreshed')
		//empty the tooltip and image
		$('.tooltips').empty()
		$('img').removeAttr('src');
	})






//////////////
 //

$('.inputBox1').on('submit' , (event) => {
	
	pokemonName = $('input[type="poke"]').val()
	// console.log(pokemonName)

/////////////////////////////////////////
//////////////get pokemon calls below here//////////////////////

	getPokemon()
	getPokemonForm()


	event.preventDefault()
	})

});


///objective:
//make the inputBox2 droppable

