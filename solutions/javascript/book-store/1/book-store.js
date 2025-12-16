//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const PRICE = 800;

  const Discount = {
    1: 800,
    2: 1520,
    3: 2160,
    4: 2560,
    5: 3000
  }
  const count = {};
  for (const book of books) {
    count[book] = (count[book] || 0) + 1;
  }

  const groups = [];

  while (Object.keys(count).length > 0){
    const unique = Object.keys(count).length;
    groups.push(unique);
    for (const book in count){
      count[book]--;
      if (count[book] === 0) delete count[book];
    }
  }
  while (groups.includes(5) && groups.includes(3)) {
    groups.splice(groups.indexOf(5), 1);
    groups.splice(groups.indexOf(3), 1);
    groups.push(4, 4);
  }  
  return groups.reduce((sum, g) => sum + Discount[g], 0);
};
