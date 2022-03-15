// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
constructor(name, power){
this.name = name;
this.power = power;
this.isPlugged = false;
}
// метод, который определяет прибор как включенный в розетку
plugIn() {
console.log(this.name + " is plugged!");
this.isPlugged = true;
}

// метод, который определяет прибор как выключеный из розетки
unplug() {
console.log(this.name + " is unplugged!");
this.isPlugged = false;
}

// метод, который определяет потребляемую мощность
getPower = function () {
    console.log(this.name + " consumes " + this.power + " W")
}

}

// прибор лампа
class Lamp extends ElectricalAppliance {
constructor (name, brand, power, bulbType) {
super(name, power);
this.brand = brand;
this.bulbType = bulbType;
this.isPlugged = true;
}
}

// прибор комп
class Computer extends ElectricalAppliance {
constructor(name, brand, power, type, functionality) {
super(name, power);
this.brand = brand;
this.type = type;
this.functionality = functionality;
this.isPlugged = false;
}
}

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// потребляемая мощность tableLamp
tableLamp.getPower();

// потребляемая мощность homePC
homePC.getPower();

// результат
console.log(homePC)
console.log(tableLamp)