let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars:12,
    raceCars: 5,
    blackCars: 40,
    rarecars:2,
};

for (const item in statistics) {
    if(item.startsWith('r') || statistics[item] % 2 != 0)
  console.log(statistics[item]);
}