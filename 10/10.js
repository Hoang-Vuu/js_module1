document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("source");
    const target = document.getElementById("target");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const firstname = form.querySelector('input[name="firstname"]').value.trim();
        const lastname = form.querySelector('input[name="lastname"]').value.trim();
        if (!firstname || !lastname) {
            target.textContent = "Please enter both your first and last name.";
            return;
        }
        target.textContent = `Your name is ${firstname} ${lastname}`;
    });
});
