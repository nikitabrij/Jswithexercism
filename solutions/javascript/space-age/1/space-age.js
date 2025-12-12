//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const orbital_period = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  if (!orbital_period.hasOwnProperty(planet)){
    throw new Error("not a planet")
  }
  const earth_second_year = 31557600;
  const planet_year_second = earth_second_year * orbital_period[planet];

  return Number((seconds / planet_year_second).toFixed(2));
};
