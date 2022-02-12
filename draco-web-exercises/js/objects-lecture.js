var currentWeather = {
    humidity: 77,
    temp: 82.33,
    feels_like: 88.79,
    clouds: 75
}

// console.log(currentWeather.temp);
// console.log(currentWeather.humidity);
// console.log(currentWeather.feels_like);

// console.log(currentWeather["temp"]);
// var whatImInterestedIn = "humidity";
// console.log(currentWeather[whatImInterestedIn]);

// console.log("The current temperature is " + currentWeather.temp);
//
// function fahrenheitToCelsius(tempInF){
//     return ((tempInF - 32)*5)/9;
// }
//
// console.log("The current temperature is " + currentWeather.temp + "F, " + fahrenheitToCelsius(currentWeather.temp).toFixed(2) + "C");
//
// if (currentWeather.temp > 95) {
//     console.log("It's hot!");
// } else {
//     console.log("Not real Texas heat!");
// }


// you can add new properties to an existing object
currentWeather.uvIndex = 9.79;

// loop through the object and get the property names
// for (var prop in currentWeather){
//     console.log(prop + ": " + currentWeather[prop]);
// }

// console.log("The UV index is " + currentWeather.uvIndex);

// you can delete properties from an object
// delete currentWeather.uvIndex;
// console.log("The UV index is " + currentWeather.uvIndex);

var hourlyWeather = [
    {
        time: "08:00",
        temp: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temp: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temp: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temp: 84.49,
        feels_like: 89.24
    }
];

// console.log(hourlyWeather[0].temp);

// for (var i = 0; i < hourlyWeather.length; i++){
//     console.log("Object number " + i + " At " + hourlyWeather[i].time + " the temperature will be " + hourlyWeather[i].temp + " and feel like " + hourlyWeather[i].feels_like);
// }

// hourlyWeather.forEach(function(hourlyForecast){
//     console.log("At " + hourlyForecast.time + " the temperture will be " + hourlyForecast.temp + " and feel like " + hourlyForecast.feels_like);
// });

var sanAntonio = {
    latitude: 29.423017,
    longitude: -98.48527,
    timezone: "America/Chicago",
    currentWeather: {
        humidity: 77,
        temp: 82.33,
        feels_like: 88.79,
        clouds: 75
    }
}

// console.log("The San Antonio time zone is " + sanAntonio.timezone + " and the current humidity is " + sanAntonio.currentWeather.humidity);

 var texasInfo = [
     {
        city: "San Antonio",
        latitude: 29.423017,
        longitude: -98.48527,
        timezone: "America/Chicago",
        currentWeather: {
            humidity: 77,
            temp: 82.33,
            feels_like: 88.79,
            clouds: 75
        }
    },
     {
         city: "Houston",
         latitude: 29.7915,
         longitude: -95.093,
         timezone: "America/Chicago",
         currentWeather: {
             humidity: 68,
             temp: 87.44,
             feels_like: 97.7,
             clouds: 75
         }
     }
 ]

// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);

// var fighter = {
//     // state: what the object knows about itself
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     // behavior: what the object does
//     // this is a method
//     // a method is a function inside an object
//     attack: function(target){
//         console.log(this.name + " attacks" + " the " + target.name + "!");
//         console.log(target.name + " has " + target.hitPoints + " hit points.");
//         var damage = Math.ceil(Math.random() * this.maxDamage);
//         console.log(this.name + " does " + damage + " points of damage!");
//         // let's have an object's behavior affect another object's state
//         target.hitPoints -= damage;
//         console.log(target.name + " now has " + target.hitPoints + " hit points left.");
//     }
// }

// the this keyword

// var monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6,
// }
//
// // fighter.attack(monster);
//
// var fighter = {
//     // state: what the object knows about itself
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function(){
//         console.log(this.name + " attacks!");
//     }
// }

// monster.attack();

// var controller = {
//     attack: function(attacker, defender){
//         console.log(attacker.name + " attacks" + " the " + defender.name + "!");
//         console.log(defender.name + " has " + defender.hitPoints + " hit points.");
//         var damage = Math.ceil(Math.random() * attacker.maxDamage);
//         console.log(attacker.name + " does " + damage + " points of damage!");
//         // let's have an object's behavior affect another object's state
//         defender.hitPoints -= damage;
//         console.log(defender.name + " now has " + defender.hitPoints + " hit points left.");
//         console.log("------------------------");
//     }
// }

// controller.attack(fighter, monster);
// controller.attack(monster, fighter);
//
// var model = {
//     monster: {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6,
//     },
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8,
//     }
// }
//
// var controller = {
//     attack: function(attacker, defender){
//         var hitPointsBeforeAttack = defender.hitPoints;
//         var damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker.name, defender.name, damage, hitPointsBeforeAttack, defender.hitPoints);
//     }
// }
//
//
// var view = {
//     displayAttackResults: function(attackerName, defenderName, damage, defenderHitPoints, defenderHitPointsAfterDamage){
//         console.log(attackerName + " attacks" + " the " + defenderName + "!");
//         console.log(defenderName + " has " + defenderHitPoints + " hit points.");
//         console.log(attackerName + " does " + damage + " points of damage!");
//         console.log(defenderName + " now has " + defenderHitPointsAfterDamage + " hit points left.");
//         console.log("------------------------");
//     }
// }
//
//
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);


var monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 6
}

var fighter = {
    name: "Arata",
    hitPoints: 18,
    maxDamage: 8
}

var anotherGoblin = {};
anotherGoblin.name = "Goblin";
anotherGoblin.hitPoints = 8;
anotherGoblin.maxDamage = 6;


// We can make a function that returns an object
function makeAGoblin(name, hitPoints, maxDamage){
    return {
        name: name,
        hitPoints: hitPoints,
        maxDamage: maxDamage
    }
}

var hobgoblin = makeAGoblin("Hobgoblin", 11, 11);
console.log(hobgoblin.name + " has " + hobgoblin.hitPoints + " hit points.");


// ... or we can use an actual object constructor
// by convention, a constructor function is capitalized
function Monster(name, hitPoints, maxDamage){
    this.name = name;
    this.hitPoints = hitPoints;
    this.maxDamage = maxDamage;
}

var hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
console.log(hobgoblinCaptain.name + " has " + hobgoblinCaptain.hitPoints + " hit points.");



