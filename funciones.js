function piso(){
    console.log("|&&__&&&__&&|")
    console.log("| |__| |__| |")
    console.log("|___________|")
}
function pisoBase(){
    console.log("|  __   __  |")
    console.log("| |__| |__| |")
    console.log("|     _     |")
    console.log("|&&&&|.|&&&&|")
}
function techo(){
    console.log("__________")
    console.log("/         \\")
    console.log("___________")
}
function casa(nPisos){
    techo()
    piso()
    for(let i=0;i<nPisos;i++){
        piso();
    }
    pisoBase()
    
}
let nPisos = parseInt(prompt("Ingrese el numero de pisos"))
casa(nPisos);