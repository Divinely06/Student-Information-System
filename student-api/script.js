// This is the function to load the students 

function loadStudents() {
    fetch("api/students.php")
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("studentTable");
            table.innerHTML = "";
            data.forEach(student => {
                table.innerHTML += `
                    <tr>
                        <td>${student.student_id}</td>
                        <td>${student.student_name}</td>
                        <td>${student.program}</td>
                        <td>${student.year_level}</td>
                        <td>${student.email}</td>
                        <td>
                            <button class="edit-btn" onclick="editStudent('${student.student_id}','${student.student_name}','${student.program}','${student.year_level}','${student.email}')">Edit</button>
                            <button class="delete-btn" onclick="deleteStudent('${student.student_id}')">Delete</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// This is the function to delete the student

function addStudent() {
    let student_id = document.getElementById("student_id").value;
    let student_name = document.getElementById("student_name").value;
    let program = document.getElementById("program").value;
    let year_level = document.getElementById("year_level").value;
    let email = document.getElementById("email").value;

    fetch("api/add_student.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            student_id: student_id,
            student_name: student_name,
            program: program,
            year_level: year_level,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadStudents();
        document.getElementById("studentForm").reset();
    })
    .catch(error => console.error("Error:", error));
}

//This is the function to delete the student

function editStudent(id, name, program, year, email) {
    document.getElementById("student_id").value = id;
    document.getElementById("student_name").value = name;
    document.getElementById("program").value = program;
    document.getElementById("year_level").value = year;
    document.getElementById("email").value = email;
}

// This is the function to update the student's informations

function updateStudent() {
    let student_id = document.getElementById("student_id").value;
    let student_name = document.getElementById("student_name").value;
    let program = document.getElementById("program").value;
    let year_level = document.getElementById("year_level").value;
    let email = document.getElementById("email").value;

    fetch("api/update_student.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            student_id: student_id,
            student_name: student_name,
            program: program,
            year_level: year_level,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadStudents();
        document.getElementById("studentForm").reset();
    })
    .catch(error => console.error("Error:", error));
}

// This the function to delete the student

function deleteStudent(id) {
    fetch("api/delete_student.php", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: id })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadStudents();
    })
    .catch(error => console.error("Error:", error));
}