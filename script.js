var totalLike = [9, 12, 9]
var post = [
    document.querySelector("#inLike"),
    document.querySelector("#inLikeT"),
    document.querySelector("#inLiketr")
]
function newLike(id) {
    totalLike[id]++
    post[id].innerText= totalLike[id] + " Like(s)";
    console.log(totalLike)
}