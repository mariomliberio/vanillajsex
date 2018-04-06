// NPC

let character = {
    name: "coolkid",
    age: 33,
    items_togive: ["shield", "sword", "mace"]};

for (properties in character ){
    console.log(character[properties]);
};

function giveItem(){
    let rndObj = Math.floor(Math.random() * 3);
    console.log("give a " + character.items_togive[rndObj]);
};
giveItem();

// SHOP

class shop {
    constructor(title, physic, magic, minlevel, available){
        this.title = title;
        this.physic = physic;
        this.magic = magic;
        this.minlevel = minlevel;
        this.available = available;
    }
}

let weapon = new shop("Master Sword", 30, 12, 25, false);
let weapon1 = new shop("BanHammer", 23, 3, 12, true);
let weapon2 = new shop("Sonic Boom", 18, 45, 16, true);
let weapon3 = new shop("BFG", 9000, 15, 3, true);

function logShop(){
    console.log(weapon);
    console.log(weapon1);
    console.log(weapon2);
    console.log(weapon3);
};

logShop();

// Character

mainCharacter = {
    name: "Mario",
    level: 69,
    life: 100,
    weapon: {
        name: "BFG",
        damage: 9001
            },
    attack: function(){
        console.log(this.name + " attacks with " + this.weapon.name + " for " + this.level * this.weapon.damage + " damage.");
    }
};

mainCharacter.attack();

// Bonus

class adversary {
    constructor(name, level, life, weapon, attack, recieveDamage){
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = weapon;
        this.attack = attack;
        this.recieveDamage = recieveDamage;
    }
}

let main = new adversary(
    "Mario",
    69,
    100,
    {name:"BFG", damage:"9"},
    function(){console.log(this.name + " attacks " + opponent.name + " with " + this.weapon.name + " and inflicts " + this.level * this.weapon.damage + " damage, now" + opponent.name + " has " + this.level * this.weapon.damage - opponent.life + " life points.");},
    function(){});
let opponent = new adversary(
    "Red",
    23,
    100,
    {name:"Gun", damage: "3"},
    function(){},
    function(){});
main.attack();
// BONUS IS BROKE U BETTA FIXIT
