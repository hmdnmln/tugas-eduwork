function generateTable(containerSelector, data, columns) {
    const container = document.querySelector(containerSelector);
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-bordered');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    columns.forEach(column => {
        const th = document.createElement('th');
        th.innerText = column.charAt(0).toUpperCase() + column.slice(1);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        columns.forEach(column => {
            const td = document.createElement('td');
            td.innerText = item[column];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);
}
