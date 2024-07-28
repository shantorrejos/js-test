function add7(x){
    return x +7;
}   

function multiply(x, y){
    return x * y;
}

function capitalize(str){
    let strLowercase = str.toLowerCase();
    return strLowercase.charAt(0).toUpperCase() + strLowercase.slice(1);
}

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

console.log(lastLetter("bAnanAlegs"));