class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            console.log(`${this.name} attacking ${target.name}`)
            target.print_stats();
            target.res -= this.power;
            console.log("after attack:")
            target.print_stats();
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    print_stats() {
        console.log(`Name: ${this.name} Power: ${this.power} Res: ${this.res}`)
    }
}

class Effect extends Card {
    constructor(name, cost, action, stat, magnitude) {
        super(name, cost);
        this.action = action;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.action == "Raise") {
                if (this.stat == "power") {
                    target.power += this.magnitude;
                } else if (this.stat == "res") {
                    target.res += this.magnitude;
                }
            } else if (this.action == "Lower") {
                if (this.stat == "power") {
                    target.power -= this.magnitude;
                } else if (this.stat == "res") {
                    target.res -= this.magnitude;
                }
            }
            console.log(this.text());
            target.print_stats();
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    text() {
        return `${this.action} the target's ${this.stat} by ${this.magnitude}`
    }
}

class RedBeltNinja extends Unit {
    constructor() {
        super("Red Belt Ninja", 3, 3, 4);
    }
}
class BlackBeltNinja extends Unit {
    constructor() {
        super("Black Belt Ninja", 4, 5, 4);
    }
}
class HardAlgorithm extends Effect {
    constructor() {
        super("Hard Algorithm", 2, 'Raise', 'res', 3)
    }
}
class UnhandledPromiseRejection extends Effect {
    constructor() {
        super("Unhandled Promise Rejection", 1, 'Lower', 'res',2)
    }
}
class PairProgramming extends Effect {
    constructor() {
        super("Pair Programming", 3, 'Raise', 'power', 2)
    }
}

redBeltNinja = new RedBeltNinja()
hardAlgorithm = new HardAlgorithm()
hardAlgorithm.play(redBeltNinja)
blackBeltNinja = new BlackBeltNinja()
unhandledPromiseRejection = new UnhandledPromiseRejection()
unhandledPromiseRejection.play(redBeltNinja)
pairProgramming = new PairProgramming()
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)

