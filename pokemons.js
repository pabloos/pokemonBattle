var Pokemon = new Object();
var maxDefensa = 10;

Pokemon.nombre;
Pokemon.ataque;
Pokemon.vida;
Pokemon.defensa;

Pokemon.init = function(nombre, ataque, vida, defensa, nivel) {
  this.nombre  = nombre;
  this.ataque  = ataque;
  this.vida    = vida;
  this.defensa = defensa;
};

Pokemon.atacar = function(otroPokemon){
  var ataque = this.ataque * (maxDefensa-otroPokemon.defensa);
  otroPokemon.vida = otroPokemon.vida - ataque;
  var mensaje = document.createElement("div");
  mensaje.setAttribute("class", "mensaje");
  mensaje.innerHTML = this.nombre + " ha quitado " + ataque + " de vida a " + otroPokemon.nombre + "!!";

  document.getElementById('narrador').appendChild(mensaje);
}

var pikachu = Object.create(Pokemon);
var squirtle = Object.create(Pokemon);
var charmander = Object.create(Pokemon);
var bulbasur = Object.create(Pokemon);

pikachu.init("Pikachu", 8, 90, 8, 1);
squirtle.init("Squirtle",6, 70, 9, 1);
charmander.init("Charmander", 9, 90, 5, 1);
bulbasur.init("Bulbasur", 7, 100, 7, 1);
