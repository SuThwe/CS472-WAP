// Basic class syntax
//-----------------
class Clock { //Changed from function to class
    constructor({ template }) { //added constructor
        this.template = template;
    }

    render() { //no need function keyword
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();

// Error creating an instance
//-----------------
class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name); //Child class cannot be created without call super class constructor
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // ok now
alert(rabbit.name); // White Rabbit

