const HTML_Actions = `
<div class="section-header">
    <div class="section-title">AZIONI E ATTACCHI</div>
    <button class="add-btn no-print" onclick="addRow('tabella-attacchi')" title="Aggiungi Attacco">+</button>
</div>
<table class="attack-table">
    <thead>
        <tr>
            <th style="width: 25%;">Nome</th>
            <th style="width: 15%;">Bonus</th>
            <th style="width: 25%;">Danno</th>
            <th style="width: 30%;">Note</th>
            <th style="width: 5%;" class="no-print"></th>
        </tr>
    </thead>
    <tbody id="tabella-attacchi">
        <tr>
            <td><strong contenteditable="true">Attacco 1</strong></td>
            <td contenteditable="true">+?</td>
            <td contenteditable="true">1d? + ?</td>
            <td contenteditable="true">...</td>
            <td class="action-cell no-print"><button class="remove-btn" onclick="this.closest('tr').remove()">-</button></td>
        </tr>
    </tbody>
</table>

<div class="section-header">
    <div class="section-title">Abilità & Tratti</div>
    <button class="add-btn no-print" onclick="addRow('tabella-privilegi')" title="Aggiungi Tratto">+</button>
</div>
<table class="attack-table">
    <thead>
        <tr>
            <th style="width: 30%;">Nome</th>
            <th style="width: 65%;">Effetto</th>
            <th style="width: 5%;" class="no-print"></th>
        </tr>
    </thead>
    <tbody id="tabella-privilegi">
        <tr>
            <td><strong class="feature-name" contenteditable="true">Tratto 1</strong></td>
            <td contenteditable="true">Descrizione 1.</td>
            <td class="action-cell no-print"><button class="remove-btn" onclick="this.closest('tr').remove()">-</button></td>
        </tr>
    </tbody>
</table>

<div class="section-header">
    <div class="section-title">TRATTI CARATTERIALI</div>
    <button class="add-btn no-print" onclick="addRow('tabella-psicologia')" title="Aggiungi Elemento">+</button>
</div>
<table class="attack-table">
    <thead>
        <tr>
            <th style="width: 30%;">Nome</th>
            <th style="width: 65%;">Descrizione</th>
            <th style="width: 5%;" class="no-print"></th>
        </tr>
    </thead>
    <tbody id="tabella-psicologia">
        <tr>
            <td><strong contenteditable="true">Tratto 1</strong></td>
            <td contenteditable="true">Descrizione 1.</td>
            <td class="action-cell no-print"><button class="remove-btn" onclick="this.closest('tr').remove()">-</button></td>
        </tr>
    </tbody>
</table>
`;