const HTML_TS = `<div class="section-header">
    <div class="section-title">Tiri salvezza</div>
</div>
<ul id="lista-tiri-salvezza-skills" style="list-style-type: none; padding-left: 5px;">
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>TS Forza:</strong> <span class="calc-val" data-ability="str"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>TS Destrezza:</strong> <span class="calc-val" data-ability="dex"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>TS Costituzione:</strong> <span class="calc-val" data-ability="con"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>TS Intelligenza:</strong> <span class="calc-val" data-ability="int"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>TS Saggezza:</strong> <span class="calc-val" data-ability="wis"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>TS Carisma:</strong> <span class="calc-val" data-ability="cha"
            contenteditable="false">+0</span></li>

    <hr style="border: 0; border-top: 1px solid #e1e1e1; margin: 12px 0;">

    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Acrobazia (Des):</strong> <span class="calc-val" data-ability="dex"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Addestrare animali (Sag):</strong> <span class="calc-val"
            data-ability="wis" contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Arcano (Int):</strong> <span class="calc-val" data-ability="int"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Atletica (For):</strong> <span class="calc-val" data-ability="str"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Furtività (Des):</strong> <span class="calc-val" data-ability="dex"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Indagare (Int):</strong> <span class="calc-val" data-ability="int"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Inganno (Car):</strong> <span class="calc-val" data-ability="cha"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Intimidire (Car):</strong> <span class="calc-val" data-ability="cha"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Intrattenere (Car):</strong> <span class="calc-val" data-ability="cha"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Intuizione (Sag):</strong> <span class="calc-val" data-ability="wis"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Mano lesta (Des):</strong> <span class="calc-val" data-ability="dex"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Medicina (Sag):</strong> <span class="calc-val" data-ability="wis"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Natura (Int):</strong> <span class="calc-val" data-ability="int"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Percezione (Sag):</strong> <span class="calc-val" data-ability="wis"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Persuasione (Car):</strong> <span class="calc-val" data-ability="cha"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Religione (Int):</strong> <span class="calc-val" data-ability="int"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Sopravvivenza (Sag):</strong> <span class="calc-val" data-ability="wis"
            contenteditable="false">+0</span></li>
    <li class="skill-row" style="margin-bottom: 4px;"><input type="checkbox" class="prof-check"
            style="margin-right: 8px;"> <strong>Storia (Int):</strong> <span class="calc-val" data-ability="int"
            contenteditable="false">+0</span></li>

        <hr style="border: 0; border-top: 1px solid #e1e1e1; margin: 12px 0;">
</ul>`