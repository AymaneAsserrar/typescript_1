export class Car {
  model: string;
  brand: string;
  color: string;
  year: number;
  speed: number;
  started: boolean;
  distance: number;

  constructor(
    model: string,
    brand: string,
    color: string,
    year: number,
    speed: number = 0,
    started: boolean = false,
    distance: number = 0
  ) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.speed = speed;
    this.started = started;
    this.distance = distance;
  }

  start(): void {
    this.started = true;
  }

  stop(): void {
    this.started = false;
    this.speed = 0;
  }

  accelerate(value: number): void {
    if (!this.started) return;
    if (value <= 0) return;
    this.speed += value;
    this.distance += this.speed;
  }

  status(): string {
    return `Car(${this.brand} ${this.model}, ${this.color}, ${this.year}) -> started: ${this.started}, speed: ${this.speed} km/h, distance: ${this.distance} km`;
  }
}
