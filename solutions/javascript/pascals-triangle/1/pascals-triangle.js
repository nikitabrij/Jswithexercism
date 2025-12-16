//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  const triangle = [[1]];

  for (let i=1; i < n; i++) { 
    const prev = triangle[i - 1];
    const row = [];

    for (let j=0; j <= i; j++) {
      row.push((prev[j - 1] || 0) + (prev[j] || 0));
    }
    triangle.push(row);
  }
  return n === 0 ? [] : triangle;
};
