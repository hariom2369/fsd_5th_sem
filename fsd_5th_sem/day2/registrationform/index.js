const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const section = document.getElementById("section");
const branch = document.getElementById("branch");
const password = document.getElementById("password");
const conform_password = document.getElementById("confirm_password");
const students = document.getElementById("students");

function clickHandler() {

    let user = {
        name: name.value,
        email: email.value,
        course: course.value,
        section: section.value,
        branch: branch.value,
        password: password.value,
        conform_password: conform_password.value
    };

    console.log(user);

    if (user.password === user.conform_password) {

        const div = document.createElement("div");

        const h2 = document.createElement("h2");
        h2.innerText = `Name: ${user.name}`;

        const p1 = document.createElement("p");
        p1.innerText = `Email: ${user.email}`;

        const p2 = document.createElement("p");
        p2.innerText = `Course: ${user.course}`;

        const p3 = document.createElement("p");
        p3.innerText = `Section: ${user.section}`;

        const p4 = document.createElement("p");
        p4.innerText = `Branch: ${user.branch}`;

        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);

        students.appendChild(div);

    } else {
        alert("Password does not match!");
    }
}