"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(model, brand, color, year, speed = 0, started = false, distance = 0) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
        this.distance = distance;
    }
    start() {
        this.started = true;
    }
    stop() {
        this.started = false;
        this.speed = 0;
    }
    accelerate(value) {
        if (!this.started)
            return;
        if (value <= 0)
            return;
        this.speed += value;
        this.distance += this.speed;
    }
    status() {
        return `Car(${this.brand} ${this.model}, ${this.color}, ${this.year}) -> started: ${this.started}, speed: ${this.speed} km/h, distance: ${this.distance} km`;
    }
}
exports.Car = Car;
