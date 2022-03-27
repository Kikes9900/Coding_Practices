function linkAl(element) {
    alert('Website under construction');
    console.log("Alert sent");
}
function changeC() {
    var tableC = document.querySelectorAll('#color');
    console.log(tableC);
    for (var color of tableC) {
        color.classList.toggle("blue");
    }
}