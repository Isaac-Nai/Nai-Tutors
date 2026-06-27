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

const submitBtn = document.querySelector(".form-grid")
submitBtn.addEventListener("submit", request)

async function request(event) {
    event.preventDefault();

    const formData = {
        fname: document.querySelector("#fname").value,
        lname: document.querySelector("#lname").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        dob: document.querySelector("#dob").value,
    }

    const res = await fetch("http://localhost:5000/api/signUp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }); 
}


