'use strict';
let Mosura = 3;
let Kiryu = 4;
let Anguirus = 4;
let Gojira = 5;
let Biollante = 6;
let Ghidora = 10;

const Battle1 = Gojira - Biollante;
const Battle2 = Gojira + Mosura - Biollante;
const Battle3 = Gojira + Mosura - Ghidora;
const Battle4 = Gojira + Mosura + Kiryu - Ghidora;
const Battle5 = Gojira + Mosura + Kiryu + Anguirus - Biollante - Ghidora;

let Fights = [
    Battle1,
    Battle2,
    Battle3,
    Battle4,
    Battle5,
]

for (let i=0; i<5; i++){
    alert (Fights [i]);
    if (Fights [i] > 0) {
        if (Fights [i] === Battle2) {
            alert ("Godzill & Mothra vs Biollante" + " El planeta es salvado");
        };
        if (Fights [i] === Battle4) {
            alert ("Godzill, Mothra & Kiryu vs King Ghidora" + " El planeta es salvado");
        };
    } else {
        if (Fights [i] === 0) {
            alert ("Godzill, Mothra, Kiryu & Anguirus vs Biollante & King Ghidora" +" El planeta es salvado, pero mueren los buenos");
        } else {
            if (Fights [i] === Battle1) {
                alert ("Godzilla vs Biollante" + " El planeta es destruido");
            };
            if (Fights [i] === Battle3) {
                alert ("Godzill & Mothra vs King Ghidora" + " El planeta es destruido");
            };
        };
    };
}