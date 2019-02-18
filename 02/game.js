// Координаты трехпалубного корабля
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль или нет

// Создаем три переменные: location1, location2, location3
let location1 = Math.floor(Math.random() * 8)
let location2 = location1 + 1
let location3 = location2 + 1
// Создаем переменную currentShot
let currentShot
// Создаем переменную, чтобы считать выстрелы
let shots = 0
// Создаем переменную для количества попаданий hits
let hits = 0
// Создаем переменную, чтобы отслеживать потоплен или нет isSunk
let isSunk = false

while (isSunk === false) {
  // Получить координаты выстрела
  currentShot = Number(prompt("Введите число от 0 до 9:"))
  // Нужно увеличить счетчик всех выстрелов
  shots += 1
  // Сравнить координаты выстрела с координатами корабля
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    // Если игрок попал, то увеличиваем счетчик попаданий на 1
    hits += 1
    // Если количество попаданий равно 3, то меняем значение переменной isSunk на true и сообщаем о победе
    if (hits === 3) {
      isSunk = true
      alert("Победа!")
    }
  }
}
// Выводим статистику игры и рейтинг игрока
let rating = Math.round(3 / shots * 100)
alert("Вам понадобилось " + shots + " выстрелов, чтобы потопить корабль. Ваш рейтинг: " + rating)




// EOF
