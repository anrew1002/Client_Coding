(function () {
    let table = document.createElement('table');
    let table_row = document.createElement("tr");
    table.appendChild(table_row);
    let days = {
        0: "Пн",
        1: "Вт",
        2: "Ср",
        3: "Чт",
        4: "Пт",
        5: "Сб",
        6: "Вс",
    }
    for (i = 0; i < 7; i++) {
        let table_data = document.createElement("td");
        table_data.textContent = days[i];
        table_row.appendChild(table_data);
    };
    let day_date = new Date();
    let date_counter = 1
    let day_counter = 0

    let year = 2022
    let month = 10
    day_date = new Date(year, month);
    let first_day_month = day_date.getDay() - 1
    if (first_day_month === -1) { first_day_month = 6 }
    let last_date_of_month = new Date(day_date.getFullYear(), day_date.getMonth() + 1, 0).getDate()

    let not_end_dairy = true
    while (not_end_dairy) {
        let table_row = document.createElement("tr");
        for (i = 0; i < 7; i++) {
            let table_data = document.createElement('td');
            if (date_counter > last_date_of_month) {

                table_data.textContent = new Date(day_date.getFullYear(), day_date.getMonth() + 1, date_counter - last_date_of_month).getDate();
                not_end_dairy = false;
                table_data.style.color = "red";
                table_row.append(table_data);
                date_counter++
            }
            else if ((day_counter < (first_day_month))) {
                table_data.textContent = new Date(day_date.getFullYear(), day_date.getMonth(), 0 - day_counter).getDate()
                day_counter++;
                table_data.style.color = "red";
                table_row.prepend(table_data);
            } else {
                table_data.textContent = date_counter;

                if (date_counter === (new Date()).getDate()) {

                    table_data.style.color = '#2361F8';
                }
                date_counter++;
                table_row.append(table_data);
            }

        }
        table.appendChild(table_row);

    };
    document.body.appendChild(table);
})();