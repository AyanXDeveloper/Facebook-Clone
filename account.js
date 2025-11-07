// Register Functionality

function signUp() {
    let firstName = document.getElementById("firstName").value.trim()
    let surName = document.getElementById("surName").value.trim()
    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let gender = document.getElementsByName("gender")
    let email = document.getElementById("email").value.trim()
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let password = document.getElementById("password").value

    if (firstName === "" || surName === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Full Name!!!",
            text: "Please Enter Your Full Name Correctly!",
        });
        return
    }

    if (day === "Day" || month === "Month" || year === "Year") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Date Of Birth!!!",
            text: "Please Enter Your Date Of Birth Correctly!",
        });
        return
    }

    let userGender = ""
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            userGender = gender[i].value
        }
    }

    if (!userGender) {
        Swal.fire({
            icon: "error",
            title: "Enter Your Gender!!!",
            text: "Please Enter Your Gender Correctly!",
        });
        return
    }

    if (!emailRegEx.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Enter Correct Email!!!",
            text: "Please Enter Your Email Correctly!",
        });
        return
    }

    if (password === "" || password.length < 8) {
        Swal.fire({
            icon: "error",
            title: "Enter Correct Password!!!",
            text: "Please Enter Your Email Correctly!",
        });
        return
    }

    else {
        Swal.fire({
            icon: "success",
            title: "Succesfully Logged In!!!",
            text: "Congrats!!! You Have Succesfully Logged In",
        });
    }

    let data = {
        fName: firstName,
        sName: surName,
        email: email,
        pass: password,
        gender: userGender,
        dob: `${day}-${month}-${year}`
    }

    console.log(data)

    let usersArr = JSON.parse(localStorage.getItem("Data")) || [];
    usersArr.push(data)
    localStorage.setItem("Data", JSON.stringify(usersArr))
}