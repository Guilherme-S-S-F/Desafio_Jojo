
const domain = "http://localhost:3000/";
//para rodar localhost

//const domain = "https://Guilherme-S-S-F.github.io/Desafio_Jojo/"
//para rodar no github-pages


export function getDomain() {
    return domain;
}

export function letterIndexToNumber(val) {
    let num;
    if (val === "A") {
        num = 0;
    } else if (val === "B") {
        num = 1;
    } else if (val === "C" ) {
        num = 2;
    } else if (val === "D") {
        num = 3;
    } else if (val ==="E") {
        num = 4;
    } 
    return num;
}