// Student data
// Pehli baar default data save hoga

let students = JSON.parse(localStorage.getItem("students"));

if (students == null) {

    students = [
        {
            id: 1,
            name: "Aditi Sharma",
            course: "B.Tech CSE",
            email: "aditi@stu.com",
            gender: "Female"
        },

        {
            id: 2,
            name: "Rohan Mehta",
            course: "B.Tech ECE",
            email: "rohan@stu.com",
            gender: "Male"
        },

        {
            id: 3,
            name: "Sneha Patel",
            course: "B.Sc CS",
            email: "sneha@stu.com",
            gender: "Female"
        },

        {
            id: 4,
            name: "Rahul Kumar",
            course: "BCA",
            email: "rahul@stu.com",
            gender: "Male"
        },

        {
            id: 5,
            name: "Aman Singh",
            course: "B.Tech CSE",
            email: "aman@stu.com",
            gender: "Male"
        }
    ];

    localStorage.setItem("students", JSON.stringify(students));
}


// Save data

function saveData() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


// Show Page

function showPage(page) {

    document.getElementById("dashboard").classList.add("hide");
    document.getElementById("add").classList.add("hide");
    document.getElementById("students").classList.add("hide");
    document.getElementById("search").classList.add("hide");
    document.getElementById("delete").classList.add("hide");

    document.getElementById(page).classList.remove("hide");

    displayStudents();
}


// Add Student

function addStudent() {

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;

    if (name == "" || course == "" ||
        email == "" || gender == "") {

        alert("Please fill all details");

        return;
    }


    let newStudent = {

        id: students.length + 1,

        name: name,

        course: course,

        email: email,

        gender: gender
    };


    students.push(newStudent);


    // Save in browser

    saveData();


    alert("Student Added Successfully");


    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "";


    displayStudents();
}


// Display Students

function displayStudents() {

    let table =
        document.getElementById("studentTable");

    let dashboard =
        document.getElementById("dashboardTable");

    let deleteTable =
        document.getElementById("deleteTable");


    table.innerHTML = "";

    dashboard.innerHTML = "";

    deleteTable.innerHTML = "";


    for (let i = 0; i < students.length; i++) {


        // Students

        table.innerHTML +=

            "<tr>" +

            "<td>" + students[i].id + "</td>" +

            "<td>" + students[i].name + "</td>" +

            "<td>" + students[i].course + "</td>" +

            "<td>" + students[i].email + "</td>" +

            "<td>" + students[i].gender + "</td>" +

            "</tr>";


        // Dashboard

        dashboard.innerHTML +=

            "<tr>" +

            "<td>" + students[i].id + "</td>" +

            "<td>" + students[i].name + "</td>" +

            "<td>" + students[i].course + "</td>" +

            "<td>" + students[i].email + "</td>" +

            "</tr>";


        // Delete

        deleteTable.innerHTML +=

            "<tr>" +

            "<td>" + students[i].id + "</td>" +

            "<td>" + students[i].name + "</td>" +

            "<td>" + students[i].course + "</td>" +

            "<td>" +

            "<button onclick='deleteStudent(" +
            students[i].id +
            ")'>Delete</button>" +

            "</td>" +

            "</tr>";
    }


    updateNumbers();
}


// Update Numbers

function updateNumbers() {

    let male = 0;

    let female = 0;


    for (let i = 0; i < students.length; i++) {

        if (students[i].gender == "Male") {

            male++;
        }

        if (students[i].gender == "Female") {

            female++;
        }
    }


    document.getElementById("total").innerHTML =
        students.length;

    document.getElementById("active").innerHTML =
        students.length;

    document.getElementById("male").innerHTML =
        male;

    document.getElementById("female").innerHTML =
        female;
}


// Search Student

function searchStudent() {

    let searchName =
        document.getElementById("searchName")
        .value
        .toLowerCase()
        .trim();


    let result =
        document.getElementById("result");


    result.innerHTML = "";


    if (searchName == "") {

        result.innerHTML =
            "Please enter student name";

        return;
    }


    let found = false;


    for (let i = 0; i < students.length; i++) {

        if (students[i].name
            .toLowerCase()
            .includes(searchName)) {


            result.innerHTML +=

                "<h3>Student Found</h3>" +

                "ID: " + students[i].id +

                "<br><br>" +

                "Name: " + students[i].name +

                "<br><br>" +

                "Course: " + students[i].course +

                "<br><br>" +

                "Email: " + students[i].email +

                "<br><br>" +

                "Gender: " + students[i].gender +

                "<hr>";


            found = true;
        }
    }


    if (found == false) {

        result.innerHTML =
            "<h3>Student Not Found</h3>";
    }
}


// Delete Student

function deleteStudent(id) {

    for (let i = 0; i < students.length; i++) {

        if (students[i].id == id) {

            students.splice(i, 1);

            break;
        }
    }


    // Save after delete

    saveData();


    alert("Student Deleted");


    displayStudents();
}


// Load data when page opens

displayStudents();