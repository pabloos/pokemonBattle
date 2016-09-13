var pokemon, player1, player2;
var data;

var arena1 = document.getElementById("jugador1_arena");
var arena2 = document.getElementById("jugador2_arena");

function selector(){
  var lista = document.getElementById("select");
  var indiceLista = lista.selectedIndex;

  pokemon = lista.options[indiceLista].value;

  var marco = document.getElementById("marco");
  marco.setAttribute("src", pokemon + ".gif");
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();

  while(ev.target.hasChildNodes()){
    ev.target.removeChild(ev.target.firstChild);
  }

  data = ev.dataTransfer.getData("text");
  var nuevo = ev.target.appendChild(document.getElementById(data));

  if (ev.target.id == "jugador1_arena"){
    player1 = pokemon;

  } else if (ev.target.id == "jugador2_arena"){
    player2 = pokemon;

  } else {
    console.log("Error al asignar pokemon al jugador");
  }

  nuevo.setAttribute("src", pokemon + "_fighting" + ".gif");
  nuevo.setAttribute("width", "100%");
  nuevo.setAttribute("height", "100%");
  nuevo.setAttribute("style", "border-radius: 25px");

  var marco = document.getElementById("marco");
  marco.setAttribute("id", "");

  //restauramos la imagen de abajo//
  var cuadro = document.getElementById("cuadro");
  var img = document.createElement("img");
  cuadro.appendChild(img);

    //y asignamos nuevos atributos a esa imagen
  img.setAttribute("id", "marco");
  img.setAttribute("draggable", "true");
  img.setAttribute("ondragstart", "drag(event)");
  img.setAttribute("onclick", "selector()");
  img.setAttribute("src", "pokeball.png");
  img.setAttribute("width", "90%");
  img.setAttribute("height", "90%");

  if(player1 == "bulbasur"){
    player1 = bulbasur;
  } else if(player1 == "charmander"){
    player1 = charmander;
  } else if (player1 == "squirtle"){
    player1 = squirtle;
  } else if (player1 == "pikachu") {
    player1 = pikachu;
  }

  if(player2 == "bulbasur"){
    player2 = bulbasur;
  } else if(player2 == "charmander"){
    player2 = charmander;
  } else if (player2 == "squirtle"){
    player2 = squirtle;
  } else if (player2 == "pikachu") {
    player2 = pikachu;
  }
}

function batalla(pokemon1, pokemon2) {
  console.log("Empieza la batalla...");
  while(pokemon1.vida > 0 && pokemon2.vida > 0){
    var lapida = document.createElement("div");
    var grave = document.getElementById("the_grave");

    pokemon1.atacar(pokemon2);

    if(pokemon2.vida <= 0) {
      lapida.setAttribute("class", "mensaje");
      grave.appendChild(lapida);
      lapida.innerHTML = pokemon2.nombre + " derrotado!";

      pokemon2 = null;
      console.log(pokemon1.nombre + " ha vencido!");
      break;
    }

    pokemon2.atacar(pokemon1);

    if(pokemon1.vida <= 0) {
      lapida.setAttribute("class", "mensaje");
      grave.appendChild(lapida);
      lapida.innerHTML = pokemon1.nombre + " derrotado!";

      pokemon1 = null;
      console.log(pokemon2.nombre + " ha vencido!");
      break;
    }
  }
}
