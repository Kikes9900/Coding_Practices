function cookieR(id) {
    var cookie = document.querySelector(id);
    cookie.remove();
    console.log(cookie)
}
function convertC(temp) {
    return Math.round(9 / 5 * temp + 32);
}
function convertF(temp) {
    return Math.round(5 / 9 * (temp - 32)) ;
}
function degree(element) {
    console.log(element.value)
    for( i = 1; i < 9; i++) {
        var newText = document.querySelector("#temp" + i);
        var newVal = parseInt(newText.innerText);
        if(element.value == "C") {
            newText.innerText = convertF(newVal);
        } else {
            newText.innerText = convertC(newVal);
        }
    }

}