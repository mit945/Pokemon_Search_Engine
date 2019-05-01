console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`

const endPoint = `pokemon`
let titleQuery = $('input[type="text"]').val()
let pokemonName = "";
let pokemonTypes = "" ;


const queryURL = baseURL + endPoint + '/' + pokemonName 

$(() => {

//////////////////get pokemon names/////////////
	const pokemonData = $.ajax({
		url: queryURL 
		//pokemonName is the name of the pokemon the user is 
		//searching for 
	})

const getPokemon = () => {
	for(let i = 0 ; i < 20 ;i++){
	$.ajax({
		url : queryURL,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		console.log(pokemonData)

		// $.getJSON(Url, function(data,status){
		// 	console.
		// })
	}),(error) => {
		console.log(error)
		console.log(queryURL)

		}

	}
}


/////////////////////////////
///////////////////////////////////////////////////////////////////


$('form').on('submit' , (event) => {
	event.preventDefault()
	// pokemonName = $('input[type="text"]').val()
	// console.log(pokemonName)
/////////////types.////////////////////

var types = $('input[type=text]').val().replace(' ','');
 types = types.split(',');
 console.log(types)

 var trainerTypes = types.map(function(type){
 	console.log(type)
 	return $.ajax({
 		url: 'http://pokeapi.co/api/v2/type/' + type,
 		dataType:'json',
 		method: 'GET'

 	})
 });



 	$.when.apply(null,trainerTypes).then(function(){
 		console.log(arguments)
 		var pokemonTypes = Array.prototype.slice.call(arguments)//into argument

 
 		getDoubleDmg(pokemonTypes)

 	})

 });

 const getDoubleDmg = (pokemonTypes) =>{
		pokemonTypes = pokemonTypes.map((types) => {
			return types[0].damage_relations.double_damage_from;
		});
				// console.log(pokemonTypes)
}

// console.log(trainerTypes)
/////////////////////////////////////////
////////////////////////////////////


	// $.ajax({
	// 	url :  baseURL + endPoint + '/' + pokemonName
	

	// }).then((pokemonData) => {
	// 	console.log(pokemonData)
	// 	// $.getJSON(Url, function(data,status){
	// 	// 	console.
	// 	// })
	// }),(error) => {
	// 	console.log(error)
	// 	console.log(queryURL)

	// 	}

	// })
})