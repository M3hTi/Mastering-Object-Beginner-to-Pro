

// Beginner Object
let person = {
    name: 'John',
    age: 30,
    greet : function(){
        console.log('Hi, I am ' + this.name);
    }
}


person.greet()





// Constructor Functions (Intermediate)

function Personal(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hi, I am ' + this.name);
    }
}

let Ali = new Personal('ali', 26)
Ali.greet()



// Example 2 : constructor function
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;

    this.start = function() {
        this.isRunning = true
        console.log(`The ${this.make} ${this.model} is starting`);
    }

    this.stop = function() {
        this.isRunning = false
        console.log(`The ${this.make} ${this.model} is stopping`);
    }
}

let bmw = new Car('BMW','Z3',2014)
bmw.start()
bmw.stop()



// Example 3 : cunstructor function =======> Adding Methods to Constructor Function
function PersonalInfo(name , age) {
    this.name = name;
    this.age = age
}

PersonalInfo.prototype.greeting = function(){
    console.log(`Hi i'm ${this.name}`);
}


PersonalInfo.prototype.birthDay = function () {
    this.age++;
    console.log(`now i'm ${this.age} Years Old!`);
}


const maria = new PersonalInfo('Marya', 30);
maria.greeting()
maria.birthDay()




// Example 4 =====> Constructor Function with Private Variables
function bankAccount(initialValue) {
    let balance = initialValue
    this.deposite = function (amount) {
        balance += amount
        console.log(`Deposited ${amount}. New balance is ${balance}`);
    }
    this.withdraw = function(amount){
        if(amount > balance){
            console.log(`Insufficient Balance`);
        }else{
            balance -= amount
            console.log(`Withdraw ${amount}. New balance is ${balance}`);
        }
    }
    this.getBalance = function(){
        return balance
    }
}
const account = new bankAccount(1000)   


account.deposite(500)
account.withdraw(200)
console.log(account.getBalance());




// Example 5 ==========> Inheritance with Constructor Functions
function Animal(name) {
    this.name = name
}
Animal.prototype.makeSound = function () {
    console.log("The animal makes a sound");
}
function Dog(name) {
    Animal.call(this, name)
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add or override methods
Dog.prototype.makeSound = function() {
    console.log(this.name + " barks");
};

Dog.prototype.fetch = function() {
    console.log(this.name + " fetches the ball");
};

let animal = new Animal("Generic Animal");
let dog = new Dog("Buddy");

animal.makeSound();
dog.makeSound();
dog.fetch();








// Classes (ES6+, Intermediate to Advanced)
class PersonalInformation {
    constructor(name , age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`Hi i'm ${this.name}`);
    }
}
const firstPerson = new PersonalInformation('john', 34);
firstPerson.greeting()





// Inheritance with Classes (Advanced)
class EtelaateShakhsi {
    constructor(fname, lname , age , codemeli) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.codemeli = codemeli
    }
    getFullName(){
        console.log(`Full Name is : ${this.fname} ${this.lname}`);
    }
    getCodeMeli(){
        console.log(`code Meli is : ${this.codemeli}`);
    }
}

/* for debug class EtelaateShakhsi
    const avalinShakhs = new EtelaateShakhsi('Mehdi','nasir', 33 , '0014537484');
    avalinShakhs.getFullName()
    avalinShakhs.getCodeMeli()
*/

class workers extends EtelaateShakhsi{
    constructor(fname, lname , age , codemeli , workercode){
        super(fname , lname , age , codemeli)
        this.workercode = workercode
    }
    showWorkerInfo(){
        super.getFullName()
        super.getCodeMeli()
        console.log(`code karmandi is : ${this.workercode}`);
    }
}

const firstWorker = new workers('Mehdi', 'nasir' , 34 , '0014537484' , '1234567890');
firstWorker.showWorkerInfo()




