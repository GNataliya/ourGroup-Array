let ourGroup = [
    {name: 'Наталия', homeWork: 3},
    {name: 'Иванна', homeWork: 5},
    {name: 'Денис', homeWork: 7},
    {name: 'Александр', homeWork: 3},
    {name: 'Артем', homeWork: 9},
    {name: 'Андрей', homeWork: 4},
    {name: 'Егор', homeWork: 6},
    {name: 'Владислав', homeWork: 4},
    {name: 'Владимир', homeWork: 8},
    {name: 'Ярослав',homeWork: 6},
    {name: 'Захар', homeWork: 5},
    {name: 'Алекс', homeWork: 9},
];


let form = document.forms.group;
let getTable = document.querySelector('table');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    
    let formData = new FormData(ev.target);

    let result = function (getTable, ourGroup) { 
        for (let person of ourGroup) { 
            let tableStr = document.createElement('tr');
                for (let mark of ourGroup) {
                let tableCol = document.createElement('td');
                tableCol.innerHTML = ourGroup [person] [mark];
                tableStr.appendChild(tableCol);
            }
            getTable.appendChild(tableStr);
        }
    }
    let getResult = result();

    getTable.innerHTML = getResult;
});
