var count = 2;
var count2 = 418;
var friendC = document.getElementById("countConnect")
var totalF = document.getElementById("myCount")
function addF(id) {
    var rFriend = document.querySelector(id);
    rFriend.remove();
    count --;
    count2 ++;
    friendC.innerText = count;
    totalF.innerText = count2;
    console.log(rFriend)
    console.log(count)
    console.log(friendC)
}
function decline(id) {
    var rFriend2 = document.querySelector(id)
    rFriend2.remove();
    count --;
    friendC.innerText = count;
    console.log(rFriend2)
    console.log(count)
    console.log(friendC)

}

function changeN() {
    var editN = document.getElementById("nameC");
    console.log(editN)
    editN.innerText = "Amber Smith";
}