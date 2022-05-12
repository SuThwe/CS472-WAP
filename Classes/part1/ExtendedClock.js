class ExtendedClock extends Clock {
    constructor({ template }, precision) {
        super({ template });
        console.log("template: " + this.template);
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

var extendedClock1 = new ExtendedClock({template: 'h:m:s'}, 1000);
console.log(extendedClock1.start())