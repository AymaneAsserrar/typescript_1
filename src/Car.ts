export enum CarType {
  Gasoline = "gasoline",
  Electric = "electric",
  Hybrid = "hybrid",
}

export class Car {
  private readonly _maxSpeed: number;
  private readonly _type: CarType;
  private _fuelLevel: number;
  private _speed: number;
  private _distance: number;

  model: string;
  brand: string;
  color: string;
  year: number;
  started: boolean;

  get maxSpeed(): number {
    return this._maxSpeed;
  }
  get type(): CarType {
    return this._type;
  }
  get fuelLevel(): number {
    return this._fuelLevel;
  }
  get speed(): number {
    return this._speed;
  }
  get distance(): number {
    return this._distance;
  }

  constructor(
    model: string,
    brand: string,
    color: string,
    year: number,
    type: CarType = CarType.Gasoline,
    maxSpeed: number = 200,
    speed: number = 0,
    started: boolean = false,
    distance: number = 0,
    fuelLevel: number = 100
  ) {
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.started = started;
    this._type = type;
    this._maxSpeed = maxSpeed;
    this._speed = speed;
    this._distance = distance;
    this._fuelLevel = fuelLevel;
  }

  start(): void {
    if (this.fuelLevel <= 0) {
      console.warn("Can't start: no fuel/charge!");
      return;
    }
    this.started = true;
  }

  stop(): void {
    this.started = false;
    this._speed = 0;
  }

  accelerate(value: number): void {
    if (!this.started) return;
    if (value <= 0) return;
    if (this._fuelLevel <= 0) {
      console.warn("Can't accelerate: no fuel/charge!");
      return;
    }

    const newSpeed = Math.min(this._speed + value, this._maxSpeed);
    const actualAcceleration = newSpeed - this._speed;
    this._speed = newSpeed;

    const fuelConsumption = this.calculateFuelConsumption(actualAcceleration);
    this._fuelLevel = Math.max(0, this._fuelLevel - fuelConsumption);

    this._distance += this._speed / 3600;
  }

  brake(value: number): void {
    if (!this.started) return;
    if (value <= 0) return;

    this._speed = Math.max(0, this._speed - value);
  }

  refuel(amount: number): void {
    if (amount <= 0) return;
    this._fuelLevel = Math.min(100, this._fuelLevel + amount);
  }

  private calculateFuelConsumption(acceleration: number): number {
    const baseConsumption = 0.01;
    const accelerationConsumption = acceleration * 0.002;

    const typeMultiplier = {
      [CarType.Electric]: 0.6,
      [CarType.Hybrid]: 0.8,
      [CarType.Gasoline]: 1.0,
    }[this.type];

    return (baseConsumption + accelerationConsumption) * typeMultiplier;
  }

  getFuelType(): string {
    return this.type === CarType.Electric ? "Battery" : "Fuel";
  }

  status(): string {
    const fuelType = this.getFuelType();
    return `Car(${this.brand} ${this.model}, ${this.color}, ${this.year}, ${
      this.type
    }) -> 
      started: ${this.started}, 
      speed: ${this.speed.toFixed(1)}/${this.maxSpeed} km/h, 
      distance: ${this.distance.toFixed(1)} km,
      ${fuelType}: ${this.fuelLevel.toFixed(1)}%`;
  }
}
