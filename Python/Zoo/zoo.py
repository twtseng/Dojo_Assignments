class Animal:
    def __init__(self, name, age, health, happiness):
        self.name = name
        self.age = age
        self.health = health
        self.happiness = happiness

    def feed(self):
        print(f"Feeding {self.__class__.__name__} named {self.name}")
        self.health += 10
        self.happiness += 10
        return self

    def display_info(self):
        print(f"Species:{self.__class__.__name__} Name:{self.name} Age:{self.age} Health:{self.health} Happiness:{self.happiness}")
    

class Tiger(Animal):
    def __init__(self, name, age, health=5, happiness=3):
        super().__init__(name, age, health, happiness)


tiger1 = Tiger("Tony",50)
tiger1.display_info()
tiger1.feed()
tiger1.display_info()