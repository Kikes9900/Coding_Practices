var likes = [1, 5 ];
var post = [ document.querySelector("#fLikeO"), document.querySelector("#fLikeT")];

function notify() {
    alert('Website still under construction')
}

function increaseL(id) {
    likes[id]++
    post[id].innerText=likes[id] + ' likes';
}