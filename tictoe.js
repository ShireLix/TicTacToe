let tabla = Array(9).fill('');
let jatekos = 'X';
let aktiv = true;

document.querySelectorAll('.mezo').forEach((mezo, index) => {
    mezo.addEventListener('click', () => {
        if (tabla[index] || !aktiv) return;
        tabla[index] = jatekos;
        mezo.textContent = jatekos;
        ellenoriz();
    });
});

function ellenoriz() {
    const nyero = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    let allapotElem = document.getElementById('allapot');

    if (nyero.some(([a, b, c]) => tabla[a] && tabla[a] === tabla[b] && tabla[b] === tabla[c])) {
        allapotElem.textContent = `${jatekos} nyert!`;
        allapotElem.style.color = 'limegreen';
        aktiv = false;
    } else if (!tabla.includes('')) {
        allapotElem.textContent = 'Döntetlen!';
        allapotElem.style.color = 'yellow';
        aktiv = false;
    } else {
        jatekos = jatekos === 'X' ? 'O' : 'X';
        document.getElementById('kovetkezo').textContent = `Jelenlegi lépés: ${jatekos}`;
    }
}

function ujraindit() {
    tabla.fill('');
    jatekos = 'X';
    aktiv = true;
    document.getElementById('allapot').textContent = '';
    document.getElementById('kovetkezo').textContent = `Jelenlegi lépés: X`;
    document.getElementById('allapot').style.color = 'white';
    document.querySelectorAll('.mezo').forEach(mezo => mezo.textContent = '');
}