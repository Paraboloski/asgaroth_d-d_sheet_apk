function load() {
    const root = document.getElementById('dynamic-sheet-content');
    const sheet = localStorage.getItem('sheet');

    const inject = (id, htmlVar) => {
        const el = document.getElementById(id);
        if (el && typeof htmlVar !== 'undefined') el.innerHTML = htmlVar;
    };

    inject('comp-navbar', typeof HTML_Navbar !== 'undefined' ? HTML_Navbar : '');

    if (sheet) {
        root.innerHTML = sheet;
    } else {
        inject('comp-header', typeof HTML_Header !== 'undefined' ? HTML_Header : '');
        inject('comp-stats', typeof HTML_Stats !== 'undefined' ? HTML_Stats : '');
        inject('comp-TS', typeof HTML_TS !== 'undefined' ? HTML_TS : '');
        inject('comp-inventory', typeof HTML_Inventory !== 'undefined' ? HTML_Inventory : '');
        inject('comp-combat', typeof HTML_Combat !== 'undefined' ? HTML_Combat : '');
        inject('comp-actions', typeof HTML_Actions !== 'undefined' ? HTML_Actions : '');
    }

    update(); 
}

document.addEventListener("DOMContentLoaded", load);


function numFormat(num) {
    return num >= 0 ? '+' + num : num;
}

function calcMod(score) {
    let parsedScore = parseInt(score);
    if (isNaN(parsedScore)) return 0;
    return Math.floor((parsedScore - 10) / 2);
}

function update() {
    const stats = {
        str: document.getElementById('score-str')?.innerText || "10",
        dex: document.getElementById('score-dex')?.innerText || "10",
        con: document.getElementById('score-con')?.innerText || "10",
        int: document.getElementById('score-int')?.innerText || "10",
        wis: document.getElementById('score-wis')?.innerText || "10",
        cha: document.getElementById('score-cha')?.innerText || "10"
    };

    const mods = {};
    for (let key in stats) {
        mods[key] = calcMod(stats[key]);
        const modElement = document.getElementById('mod-' + key);
        if (modElement) modElement.innerText = numFormat(mods[key]);
    }

    const initiative = document.getElementById('initiative-val');
    if (initiative) initiative.innerText = numFormat(mods['dex']);

    const proficiency = document.getElementById('prof-bonus')?.innerText || "+0";
    const format = proficiency.match(/-?\d+/);
    const bonus = format ? parseInt(format[0]) : 0;

    document.querySelectorAll('.skill-row').forEach(row => {
        const checkbox = row.querySelector('.prof-check');
        const value = row.querySelector('.calc-val');
        if (value) {
            let total = mods[value.getAttribute('data-ability')] || 0;
            if (checkbox && checkbox.checked) total += bonus;
            value.innerText = numFormat(total);
        }
    });
}

document.addEventListener('input', e => {
    if (e.target.classList.contains('input-score') || e.target.id === 'prof-bonus') update();
});
document.addEventListener('change', e => {
    if (e.target.classList.contains('prof-check')) update();
});


const templates = {
    competenza: '<strong contenteditable="true">Categoria:</strong> <span contenteditable="true">Valori</span> <button class="remove-btn no-print" onclick="this.parentElement.remove()">-</button>',
    inventario: '<span contenteditable="true">Nuovo Oggetto (x1) | descrizione</span> <button class="remove-btn no-print" onclick="this.parentElement.remove()">-</button>',
    equipaggiamento: '<strong>Nuovo Equip:</strong> <span contenteditable="true">Descrizione</span> <button class="remove-btn no-print" onclick="this.parentElement.remove()">-</button>'
};

function addElement(id, type) {
    const ul = document.getElementById(id);
    const li = document.createElement('li');
    li.innerHTML = templates[type];
    ul.appendChild(li);
}

function addRow(id) {
    const body = document.getElementById(id);
    const tr = document.createElement('tr');
    if (id === 'tabella-attacchi') {
        tr.innerHTML = `<td><strong contenteditable="true">Nuovo Attacco</strong></td><td contenteditable="true">+0</td><td contenteditable="true">1d?</td><td contenteditable="true">-</td><td class="action-cell no-print"><button class="remove-btn" onclick="this.closest('tr').remove()">-</button></td>`;
    } else {
        tr.innerHTML = `<td><strong class="feature-name" contenteditable="true">Nuovo Elemento</strong></td><td contenteditable="true">Descrizione.</td><td class="action-cell no-print"><button class="remove-btn" onclick="this.closest('tr').remove()">-</button></td>`;
    }
    body.appendChild(tr);
}


function salvaDati() {
    update();
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) checkbox.setAttribute('checked', 'checked');
        else checkbox.removeAttribute('checked');
    });

    const content = document.getElementById('dynamic-sheet-content').innerHTML;
    localStorage.setItem('sheet', content);

    alert("Scheda salvata con successo! Puoi chiudere l'app.");
}

function resetDati() {
    if (confirm("Sei sicuro di voler resettare? Perderai tutte le modifiche!")) {
        localStorage.removeItem('sheet');
        location.reload();
    }
}