function changeGreeting() {
    const greetingInput = document.getElementById('greeting-input').value;
    if (greetingInput.trim() !== '') {
        document.getElementById('greeting').textContent = greetingInput;
    }
}

function changeFirstParagraph() {
    const paragraphInput = document.getElementById('paragraph-input').value;
    if (paragraphInput.trim() !== '') {
        document.getElementById('first-paragraph').textContent = paragraphInput;
    }
}

function changeBackgroundColor() {
    const colorSelect = document.getElementById('bg-color').value;
    document.body.style.backgroundColor = colorSelect;
}

document.getElementById('apply-changes').addEventListener('click', () => {
    changeGreeting();
    changeFirstParagraph();
    changeBackgroundColor();
    console.log
});