export class Calculator {
    
    constructor(private _currentValue: number = 0) { }

    add(a: number): this {
        this._currentValue += a;
        return this;
    }
    substract(a: number): this {
        this._currentValue -= a;
        return this;
    }
    multiply(a: number): this {
        this._currentValue *= a;
        return this;
    }
    divide(a: number): this {
        this._currentValue /= a;
        return this;
    }
    get value(): number {
        return this._currentValue;
    }
}

