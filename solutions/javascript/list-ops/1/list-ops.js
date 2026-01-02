//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(other) {
    const result = [];
    let index = 0;

    for (let i = 0; i < this.values.length; i++){
      result[index++] = this.values[i];
    }
    for (let i =0; i < other.values.length; i++){

      result[index++] = other.values[i];
    }
    return new List(result)
  }

  concat(lists) {
    const result = [];
    let index = 0;

    for (let i = 0; i < this.values.length; i++){
      result[index++] = this.values[i]
    }

    for (let i = 0; i < lists.values.length; i++) {
      const current = lists.values[i];
      for (let j = 0; j < current.values.length; j++) {
        result[index++] = current.values[j];
      }
    }
    return new List(result)
  }

  filter(predicate) {
    const result = [];
    let index = 0;

    for (let i = 0; i < this.values.length; i++) {
      if (predicate(this.values[i])) {
        result[index++] = this.values[i];
      }
    }
    return new List(result)
  }

  map(fi) {
    const result = [];

    for (let i = 0; i < this.values.length; i++) {
      result[i] = fi(this.values[i]);
    }
    return new List(result);
  }

  length() {
    let count = 0;

    for (const _ of this.values) {
      count++;
    }
    return count;
  }

  foldl(fn, initial) {
    let acc = initial;

    for (let i = 0; i < this.values.length; i++) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  foldr(fn, initial) {
    let acc = initial;

    for (let i = this.values.length -1;i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const result = [];
    let index = 0;

    for (let i = this.values.length - 1; i >= 0; i--) {
      result[index++] = this.values[i];
    }
    return new List(result);
  }
}
