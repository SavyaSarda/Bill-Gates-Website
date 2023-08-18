//code for all the typed text in the achievements page
const textElement1 = document.getElementById('typing-text-1');
const textElement2 = document.getElementById('typing-text-2');
const textElement3 = document.getElementById('typing-text-3');
const textElement4 = document.getElementById('typing-text-4');
const textElement5 = document.getElementById('typing-text-5');

const texts1 = [
    "Bill Gates: Co-Founding Microsoft and Shaping Technology",
];

const texts2 = [
    "Bill & Melinda Gates Foundation: Transforming Global Philanthropy",
];

const texts3 = [
    "Bill Gates: Championing Education Advocacy"
];

const texts4 = [
    "Bill Gates: Pioneering Efforts in Addressing Climate Change"
];

const texts5 = [
    "Bill Gates: A Thought Leader and Influential Author"
];


let textIndex1 = 0;
let charIndex1 = 0;

let textIndex2 = 0;
let charIndex2 = 0;

let textIndex3 = 0;
let charIndex3 = 0;

let textIndex4 = 0;
let charIndex4 = 0;

let textIndex5 = 0;
let charIndex5 = 0;

function typeText1() {
    if (textIndex1 < texts1.length) {
        if (charIndex1 < texts1[textIndex1].length) {
            textElement1.innerHTML += texts1[textIndex1].charAt(charIndex1);
            charIndex1++;
            setTimeout(typeText1, 100); // Adjust the typing speed here (in milliseconds)
        }   
    }
}

function typeText2() {
    if (textIndex2 < texts2.length) {
        if (charIndex2 < texts2[textIndex2].length) {
            textElement2.innerHTML += texts2[textIndex2].charAt(charIndex2);
            charIndex2++;
            setTimeout(typeText2, 100); // Adjust the typing speed here (in milliseconds)
        } 
    }
}

function typeText3() {
    if (textIndex3 < texts3.length) {
        if (charIndex3 < texts3[textIndex3].length) {
            textElement3.innerHTML += texts3[textIndex3].charAt(charIndex3);
            charIndex3++;
            setTimeout(typeText3, 100); // Adjust the typing speed here (in milliseconds)
        }   
    }
}

function typeText4() {
    if (textIndex4 < texts4.length) {
        if (charIndex4 < texts4[textIndex4].length) {
            textElement4.innerHTML += texts4[textIndex4].charAt(charIndex4);
            charIndex4++;
            setTimeout(typeText4, 100); // Adjust the typing speed here (in milliseconds)
        } 
    }
}

function typeText5() {
    if (textIndex5 < texts5.length) {
        if (charIndex5 < texts5[textIndex5].length) {
            textElement5.innerHTML += texts5[textIndex5].charAt(charIndex5);
            charIndex5++;
            setTimeout(typeText5, 100); // Adjust the typing speed here (in milliseconds)
        } 
    }
}


typeText1();
typeText2();
typeText3();
typeText4();
typeText5();