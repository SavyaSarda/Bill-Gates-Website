const textElement = document.getElementById('typing_text');
const text = "Bill Gates is a technologist, business leader, and philanthropist. He was born and raised in Seattle, Washington. With his interest in computers, he dropped out of college to start Microsoft with his childhood friend Paul Allen. Today, Gates co-chairs the Bill & Melinda Gates Foundation with his ex-wife, Melinda French Gates. He works to give his wealth back to society.";
let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        textElement.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 1); // Adjust the typing speed here (in milliseconds)
    }
}
type();
