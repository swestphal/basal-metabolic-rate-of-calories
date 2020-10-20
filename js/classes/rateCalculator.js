class RateCalculator {

    constructor(human) {
        this.gender = human.gender;
        this.age = human.age;
        this.activity = human.activity;
        this.grundbedarf = 1541;
        this.palMin = human.palMin;
        this.palMax = human.palMax;
    }

    // calculate weight for current human
    calculate() {
        const dayPal = (this.palMin * this.grundbedarf);
        return dayPal;
    };
}