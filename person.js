class Person {
    constructor(name, age){
        this.name = name; 
        this.age = age; 
    }

    gretting() {
        console.log(`Hello ${name} and you're ${age} old`);

    }

}

module.exports = Person; 