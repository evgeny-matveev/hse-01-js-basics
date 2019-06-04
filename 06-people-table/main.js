const button = document.querySelector('button')

button.onclick = function () {
  // По нажатию на кнопку собирать информацию
  // со всех инпутов
  const allInputs =  document.querySelectorAll('input')

  const tbody = document.querySelector('tbody')
  // Затем создать новую строчку в таблице
  // <tr></tr>
  const tr = document.createElement('tr')

  allInputs.forEach(function (i) {
    // Создаем ячейку таблицы в памяти браузера
    // <td></td>
    let td = document.createElement('td')
    // Добавляем в нее информацию из инпута
    // <td>Информация</td>
    td.innerText = i.value
    // Добавляем внутрь <tr></tr>
    tr.appendChild(td)
    // Удаляем информацию из инпутов
    i.value = ''
  })

  // Добавляем поулченный ряд в таблицу
  tbody.appendChild(tr)
}
