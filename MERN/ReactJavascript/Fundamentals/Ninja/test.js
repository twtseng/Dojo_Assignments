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

ninja = new Ninja('Joe', 123);
ninja.showStats();
ninja.drinkSake();
ninja.showStats();