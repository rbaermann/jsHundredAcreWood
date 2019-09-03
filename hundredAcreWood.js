var huffalumps = { character : "Huffalumps" };
var eeyore = { character : "Eeyore" };
var kanga = { character : "Kanga" };
var robin = { character : "Christopher Robin" };
var owl = { character : "Owl" };
var rabbit = { character : "Rabbit" };
var gopher = { character : "Gopher" };
var piglet = { character : "Piglet" };
var pooh = { character : "Winnie the Pooh" };
var bees = { character : "Bees" };
var tigger = { character : "Tigger" };

//huffalumps
huffalumps.west = eeyore;

//eeyore
eeyore.east = huffalumps;
eeyore.south = kanga;

//kanga
kanga.north = eeyore;
kanga.south = robin;

//robin
robin.north = kanga;
robin.west = owl;
robin.east = rabbit;
robin.south = pooh;

//rabbit
rabbit.east = gopher;
rabbit.west = robin;
rabbit.south = bees;

//gopher
gopher.west = rabbit;

//owl
owl.south = piglet;
owl.east = robin;

//piglet
piglet.east = pooh;
piglet.north = owl;

//pooh
pooh.north = robin;
pooh.east = bees;
pooh.west = piglet;
pooh.south = tigger;

//bees
bees.north = rabbit;
bees.west = pooh;

//tigger
tigger.north = pooh;

console.log(huffalumps.west.south.south.east.south.west.south.character);