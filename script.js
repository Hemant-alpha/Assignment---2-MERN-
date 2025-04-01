document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            const user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            form.reset();
            alert("User registered successfully!");
        });
    }

    const userTableBody = document.getElementById("userTableBody");
    if (userTableBody) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.contact}</td><td>${user.address}</td>`;
            userTableBody.appendChild(row);
        });
    }
});
