const HTML_Inventory = `<div class="section-header">
    <div class="section-title">Competenze</div>
    <button class="add-btn no-print" onclick="aggiungiElemento('lista-competenze', 'competenza')"
        title="Aggiungi Competenza">+</button>
</div>
<ul id="lista-competenze">
    <li><strong contenteditable="true">Strumenti:</strong> <span contenteditable="true">Attrezzi da scasso</span>
        <button class="remove-btn no-print" onclick="this.parentElement.remove()">-</button>
    </li>
</ul>

<div class="section-header">
    <div class="section-title">Inventario</div>
    <button class="add-btn no-print" onclick="aggiungiElemento('lista-inventario', 'inventario')"
        title="Aggiungi Oggetto">+</button>
</div>
<ul id="lista-inventario">
    <li><span contenteditable="true">Zaino (x1) | Contiene provviste</span> <button class="remove-btn no-print"
            onclick="this.parentElement.remove()">-</button></li>
</ul>

<div class="section-header">
    <div class="section-title">Equipaggiamento</div>
    <button class="add-btn no-print" onclick="aggiungiElemento('lista-equipaggiamento', 'equipaggiamento')"
        title="Aggiungi Equipaggiamento">+</button>
</div>
<ul id="lista-equipaggiamento">
    <li><strong>Armatura:</strong> <span contenteditable="true">Armatura di cuoio</span></li>
</ul>`