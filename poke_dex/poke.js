console.log("hi");

const baseURL = `https://pokeapi.co/api/v2/`;

const endPoint1 = `pokemon`;

let pokemonName = "";

const nameURL = baseURL + endPoint1 + "/" + pokemonName;

const pokemonFormURL =
  `https://pokeapi.co/api/v2/pokemon-form/` + pokemonName + "/";

$(() => {
  const pokemonData = $.ajax({
    url: nameURL + pokemonName,
  });

  const $div = $("<div>").addClass("tooltips");

  const descriptionOfPokemon = () => {
    $(".inputBox1").append($div);

    function getAbilities() {
      return (
        $.ajax({
          url: nameURL + pokemonName,
          dataType: "json",
          method: "GET",
        }).then((pokemonData) => {
          //   console.log(pokemonData.forms);
          var form = pokemonData.forms[0];

          $(".tooltips").html(`
			<h4>${form.name}</h4>
			<h4> ability names: </h4>
			<p>1.${pokemonData.abilities[0].ability.name}</p>
			<p>2.${pokemonData.abilities[1].ability.name}</p>
			`);
        }),
        (error) => {
          console.log(error);
          console.log(nameURL);
        }
      );
    }
    getAbilities();
  };

  const getPokemon = () => {
    $.ajax({
      url: nameURL + pokemonName,
      dataType: "json",
      method: "GET",
    }).then((pokemonData) => {
      console.log(pokemonData);
    }),
      (error) => {
        console.log(error);
        console.log(nameURL);
      };
  };

  const getPokemonForm = () => {
    $.ajax({
      url: nameURL + pokemonName,
      dataType: "json",
      method: "GET",
    }).then((pokemondata) => {
      // console.log(pokemondata)
      var pokemonFormURL = pokemondata.forms[0].url;
      //look at
      // console.log(pokemonFormURL)
      // console.log()

      var $image = $("img").attr(`src`, `${pokemondata.sprites.front_default}`);
      $("#inputBox1").append($image);
      ///////append $image///////

      //if refresh button is hit, then call $image again
    }),
      (error) => {
        console.log(error);
      };
  };

  /////user's collection/////////
  const collection = []; //up to 8 collections
  let count = 0;

  $(".inputBox2").on("submit", (event) => {
    const nameUser = $('input[name="submit1"]').val();

    // $('.container2').append(nameUser)
    alert("Welcome! Trainer " + nameUser + "!");
    var instruction = $("#inst").text(
      "drag pokemon here for " + nameUser + "'s collection:"
    );
    $(".inputBox2").append(instruction);

    // $('inputBox2').droppable(
    // 	{hoverClass:"drop-hover"}
    // )
    event.preventDefault();
  });

  /////////////////
  //TOOLTIP WHEN MOUSEENTER and call descriptionOfPokemon() function
  //////////////////
  $("img").on("mouseenter", (event) => {
    descriptionOfPokemon();
  });
  $("img").draggable({
    // helper:'clone'
  });

  //////////////
  //REREFRESH BUTTON
  // - CLEAR IMAGE
  // - CLEAR DESCRIPTIONS
  //////////////
  const $refresh = $("<button>")
    .addClass("refreshBtn")
    .text("Reset")
    .css("background-color", "white");
  $(".inputBox1").append($refresh);

  $(".refreshBtn").on("click", () => {
    console.log("refreshed");
    //empty the tooltip and image
    $(".tooltips").empty();
    $("img").remove();
  });

  //////////////
  //

  $(".inputBox1").on("submit", (event) => {
    pokemonName = $('input[type="poke"]').val();
    // console.log(pokemonName)

    /////////////////////////////////////////
    //////////////get pokemon calls below here//////////////////////

    getPokemon();
    getPokemonForm();

    event.preventDefault();
  });
});

///objective:
//make the inputBox2 droppable
