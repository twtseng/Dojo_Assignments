class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Ninja name: ${this.name}`);
    }
    showStats() {
        console.log(`Ninja name: ${this.name}, speed: ${this.speed}, strength: ${this.strength} health: ${this.health}`);
    }    
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health);
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("I just drank sake!");
    }
    showStats() {
        console.log(`Ninja name: ${this.name}, speed: ${this.speed}, strength: ${this.strength} health: ${this.health} wisdom: ${this.wisdom}`);
    }   
}
ninja = new Ninja('Joe', 123);
ninja.showStats();
ninja.drinkSake();
ninja.showStats();

sensei = new Sensei('Frank');
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();
