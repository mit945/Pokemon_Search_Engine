console.log('hi')

const baseURL = `https://pokeapi.co/api/v2/`

const endPoint1 = `pokemon`;//name
// const endPoint2 = `pokemon-form`

let pokemonName = "";

// const limit = `limit=1`

const queryURL = baseURL + endPoint1 + '/' + pokemonName 

$(() => {

//////////////////get pokemon names/////////////
	const pokemonData = $.ajax({
		url: queryURL + pokemonName, 
		
	})

const getPokemon = () => {
	
	$.ajax({
		url : queryURL + pokemonName,
		dataType : 'json',
		method: 'GET'
	

	}).then((pokemonData) => {
		var form = pokemonData.forms[0]//img of the pokemon
		console.log(form)
		$('.container1').append(form.name)
		
	}),(error) => {
		console.log(error)
		console.log(queryURL)

		}

	
}


$('form').on('submit' , (event) => {
	event.preventDefault()
	pokemonName = $('input[type="text"]').val()
	console.log(pokemonName)

/////////////////////////////////////////
//////////////get pokemon name below here//////////////////////

	getPokemon()

	
	})

});



// let pokemonTypes = "" ;//yseless
// 	/////////////pokemon types.////////////////////

// var types = $('input[type=text]').val().replace(' ','');
//  types = types.split(',');
//  console.log(types)

//  var trainerType = types.map(function(type){
 	
//  	return $.ajax({
//  		url: 'http://pokeapi.co/api/v2/type/' + type,
//  		dataType:'json',
//  		method: 'GET'

//  	})
//  });


//  	$.when.apply(null,trainerType).then(function(){
//  		console.log(arguments)
//  		var pokemonTypes = Array.prototype.slice.call(arguments)//into array's from input


//  		getDoubleDmg(pokemonTypes)

//  	})

//  });

//  const getDoubleDmg = (pokemonTypes) =>{
// 		pokemonTypes = pokemonTypes.map((types) => {
// 			return types[0].damage_relations.double_damage_from;
// 		});
// 		 	pokemonTypes = flatten(pokemonTypes);

// 		var damageType = pokemonTypes.map((type) => {
// 			return $.ajax({
// 				url: type.url,
// 				dataType: 'json',
// 				method:'GET'
// 			})
// 	})
// 		$.when.apply(null,damageType).then(() => {
// 			var pokemon = Array.prototype.slice.call(arguments);
// 			buildTeam(pokemon);
// 		})

// 		console.log(damageType);//array
// }

// 	const buildTeam = (pokemon) => {
// 		pokemon = pokemon.map(function(poke){
// 				return poke[0].pokemon;
// 		})
// 		console.log(pokemon)
// }

// const flatten = (arrayToFlatten) => {
// 	return arrayToFlatten.reduce((a,b) => {
// 		return a.concat(b)
// 	},[])
// }
// // console.log(trainerType)

