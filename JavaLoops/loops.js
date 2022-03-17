var sum = 0;

for (let i = 0; i < 21; i++) {
     if(i % 2 != 0)
        console.log(i)
}
console.log("finished first loop")

for(var i = 101; i > 0; i--) {
    if(i%3 == 0)
    console.log(i)
}
console.log("finished second loop")

for(var i = 4; i > -4; i-=1.5) {
    console.log(i)
}
console.log("finished third loop")


for (var i = 1; i < 101; i++) {
    sum += i;
    console.log(sum)
}
console.log("finished fourth loop")
var final = 1;
for(var i=1; i<13; i++) {
    final *= i;
}
console.log(final);