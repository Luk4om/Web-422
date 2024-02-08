document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const table = document.getElementById('myTable');
    const button = document.createElement('button');

    button.textContent = 'Click me!'
    button.id = 'myButton';
    container.appendChild(button);

    document.addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const age = document.getElementById('age');

        const myRow = table.insertRow();
        const cell1 = myRow.insertCell(0);
        const cell2 = myRow.insertCell(1);

        cell1.textContent = name.value;
        cell2.textContent = age.value;
;
        name.value = "";
        age.value = "";
    })
})