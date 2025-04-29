function shakeElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Shake animation
        element.classList.add('shake');
        setTimeout(() => element.classList.remove('shake'), 400);
    }
}
