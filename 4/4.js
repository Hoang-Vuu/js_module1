'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.getElementById("target");
    const students = [
        { value: "2345768", name: "John" },
        { value: "2134657", name: "Paul" },
        { value: "5423679", name: "Jones" }
    ];
    students.forEach(student => {
        const option = document.createElement("option");
        option.value = student.value;
        option.textContent = student.name;
        targetElement.appendChild(option);
    });
});
