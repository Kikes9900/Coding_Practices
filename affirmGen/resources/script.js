let affirmations = ["I am the architect of my life; I build its foundation and choose its contents.", "Today, I am brimming with energy and overflowing with joy.", "My body is healthy; my mind is brilliant; my soul is tranquil.",
"I am superior to negative thoughts and low actions.", "I have been given endless talents which I begin to utilize today.", "I forgive those who have harmed me in my past and peacefully detach from them.",
"A river of compassion washes away my anger and replaces it with love.", "I am guided in my every step by Spirit who leads me towards what I must know and do.", "I possess the qualities needed to be extremely successful.",
"Creative energy surges through me and leads me to new and brilliant ideas.", "Happiness is a choice. I base my happiness on my own accomplishments and the blessings I've been given.", "My ability to conquer my challenges is limitless; my potential to succeed is infinite.",
"I am courageous and I stand up for myself."];

// Generates affirmation from the array of affirmations.
function createAffirmation() {
    let num = Math.ceil(Math.random()*12);
    var picked = affirmations[num];
    document.getElementById("word").innerHTML = picked;
    return picked;
}

console.log(createAffirmation());
