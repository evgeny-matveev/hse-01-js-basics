// Сделайте 3 блюда — 3 объекта с полями name и isHealthy.

let mealOne = {
  name: "Греча",
  isHealthy: true,
  spoons: Math.floor(Math.random() * 5 + 2)
}
let mealTwo = {
  name: "Картошка фри",
  isHealthy: false,
  spoons: Math.floor(Math.random() * 5 + 2)
}
let mealThree = {
  name: "Дошик",
  isHealthy: false,
  spoons: Math.floor(Math.random() * 5 + 1)
}

function checkMeal(mealObject) {
  if (mealObject.isHealthy) {
    console.log(mealObject.name + " полезно, кушайте")
  } else {
    console.log("Ты действительно голоден? Скушай что-нибудь полезнее.")
  }
  for (let steps = 0; steps < mealObject.spoons; steps += 1) {
    console.log("ном-ном-ном")
  }
}

checkMeal(mealOne)
checkMeal(mealTwo)
checkMeal(mealThree)
checkMeal({ name: "Картоха" })







// EOF
