const optionSection = document.querySelector(".option-section");
const studentCard = document.querySelector(".student");
const parentCard = document.querySelector(".parent")
const studentForm = document.querySelector(".student-form");
const parentForm = document.querySelector(".parent-form");

studentCard.addEventListener("click", showStudentForm);
parentCard.addEventListener("click", showParentForm);

function showStudentForm() {
    optionSection.classList.add("hidden");
    console.log(optionSection.classList);
    studentForm.classList.remove("hidden");
}

function showParentForm() {
    optionSection.classList.add("hidden");
    parentForm.classList.remove("hidden");
}