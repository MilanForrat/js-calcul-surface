let longueur = document.getElementById('longueur');
let largeur = document.getElementById('largeur');
let calcul = document.getElementById('calcul');
let ulSurface = document.getElementById('ul-surface');
let submitCalcul = document.getElementById('submit-calcul')
let avertissement = document.getElementById('avertissement');
let piece = document.getElementById('piece');
let tableauSurface = [];
let compteur = 1;
// ajouter contrôle

avertissement.style.display="none";
submitCalcul.addEventListener('click', (e) =>{
        e.preventDefault();
        checkInput(longueur.value, largeur.value);
})

function checkInput(param1, param2){
    if(param1 =="" || param2 == "" || isNaN(param1)==true || isNaN(param2)==true){
        console.log("not number");
        avertissement.style.display="inline-block";
        avertissement.textContent="Veuillez saisir des nombres";
    }
    else{
        console.log("number");
        avertissement.style.display="none";
        convertNombre(param1,param2)
    }
}

function convertNombre(param1,param2){
    let param1Convert = parseFloat(param1);
    let param2Convert = parseFloat(param2);
    calculSurface(param1Convert, param2Convert);
}

function calculSurface(param1,param2){
    let result = param1*param2;
    ajoutTableau(result)
    afficherResultat(result);
}

function ajoutTableau(surface){
    tableauSurface.push(surface);
}

function afficherResultat(param){
    console.log(tableauSurface);
    let li = document.createElement('li');
    if(piece.value !=""){
        li.textContent=piece.value+" : "+param+"m2";
    }
    else{
        li.textContent="Surface "+compteur+" : "+param+"m2";
        compteur++;
    }
    ulSurface.appendChild(li);
    nettoyerInputPiece();
}

function nettoyerInputPiece(){
    piece.value ="";
}