document.addEventListener('DOMContentLoaded', function () {
    const titleElement = document.getElementById('typing-title');
    const textToType = "Machine learning engineer";
    let index = 0;
    let intervalId;

    function type() {
        titleElement.textContent = textToType.slice(0, index);
        index++;

        if (index > textToType.length) {
            clearInterval(intervalId); // Stop the interval after completing the animation
        }
    }

    intervalId = setInterval(type, 50); // Adjust the typing speed (milliseconds)
});