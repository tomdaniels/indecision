
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return this.major = !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` and their major is ${this.major}`
        }

        return description;
    }
}

const me = new Student('Tom Daniels', 22, 'IT');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
