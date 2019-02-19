let scores = [22, 33, 49, 87, 82, 38, 18, 49, 87, 49, 73, 18, 56, 62]

let i = 0
while (i < scores.length) {
  let msg = `Лошадь №${i + 1} пришла с результатом ${scores[i]}`
  console.log(msg)
  i += 1
}
