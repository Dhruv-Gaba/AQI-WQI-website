document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(".leaflet-clickable");
    console.log(elements);
    const c = document.getElementById("me");
    console.log(c);
    let delayTimer; // Declare delayTimer
    const q = document.getElementById("info-title");
    console.log(q);
    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            clearTimeout(delayTimer); // Clear any existing delay timer

            console.log('Mouse over');

            // Set opacity and display with a delay
            setTimeout(() => {
                let name = element.getAttribute('data-name');
                q.textContent = name;
                c.style.opacity = '0.6';
                c.style.display = 'block';
            }, 100);
        });

        element.addEventListener('mouseout', () => {
            clearTimeout(delayTimer); // Clear any existing delay timer

            console.log('Mouse out');

            // Set opacity and display to hide the element with a delay
            delayTimer = setTimeout(() => {
                c.style.opacity = '0';
                setTimeout(() => {
                    c.style.display = 'none';
                }, 100);
            }, 100);
        });
    });
});

