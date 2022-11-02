let table = document.createElement('table');
let table_row = document.createElement("tr");
table_row.append(document.createElement('td'));
for (i = 1; i <= 10; i++) {
    let table_data = document.createElement('td')
    table_data.textContent = i;
    table_data.className = 'table_th_cell'
    table_row.append(table_data)
}
table.append(table_row);
for (i = 1; i <= 10; i++) {
    let table_row = document.createElement("tr");
    let table_data = document.createElement('td')
    table_data.textContent = i
    table_data.className = 'table_th_cell'
    table_row.append(table_data)
    for (j = 1; j <= 10; j++) {
        let table_data = document.createElement('td')
        table_data.textContent = i * j
        table_data.className = 'table_cell'
        table_row.append(table_data)
    }
    table.append(table_row);

}

document.body.append(table);