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
let formMarks = document.forms.groupMarks;
let getTable = document.querySelector('table');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
                   
        for(let person of ourGroup){           
            let html = `
                <tr><td>${person.name}</td><td class >${person.homeWork}</td></tr>
                `;   
            getTable.insertAdjacentHTML('beforeend', html);
        }
});


formMarks.addEventListener('submit2', (ev) => {
    ev.preventDefault();

    for(let person of ourGroup){           
        let html = `
            <tr><td>${person.name}</td><td class >${person.homeWork}</td></tr>
            `;   
            getTable.insertAdjacentHTML('beforeend', html);
        }

    let result = function (ourGroup) {
        let quantyOfHomeWork = 9;
        let BetterStudents = quantyOfHomeWork * 0.8;
        
        if(ourGroup.homeWork > BetterStudents) {
            return (ourGroup);
        }
    }
});