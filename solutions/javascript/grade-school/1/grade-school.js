//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    const result = [];

    const grades = Object.keys(this._roster).sort((a, b) => a -b);
    
    for (const grade of grades){
      result.push(...this._roster[grade]);
    }
    return result;
  }

  add(name, grade) {
    for (const g in this._roster){
      if (this._roster[g].includes(name)) {
        return false;
      }
    }
    
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
  
    this._roster[grade].push(name);
    this._roster[grade].sort();
  
    return true;
  }

  grade(grade) {
    if (!this._roster[grade]){
      return [];
    }
    return [...this._roster[grade]];
  }
}
