function post() {
    var description = document.getElementById("description")
    var image = document.getElementById("file")
    var post = document.getElementById("post");
    var file = image.files[0]
    var imgUrl = URL.createObjectURL(file)

    post.innerHTML += `
    <div class="post-box-2 my-3">
                    <div class="d-flex justify-content-between" style="padding: 7px 13px;">
                        <div class="links d-flex align-items-center gap-2 py-1">
                            <img width="40px"
                                src="./assets/user-profile-icon-vector-avatar-600nw-2558760599-removebg-preview.png"
                                alt="">
                            <div class="d-flex flex-column gap-1">
                                <p class="menu-text">Ayan Zaveri</p>
                                <div class="d-flex align-items-center gap-2">
                                    <p class="public">13h</p>
                                    <img height="12px"
                                        src="https://static.xx.fbcdn.net/rsrc.php/v4/y5/r/qop9rFQ_Ys1.png?_nc_eui2=AeHJXVfQv0zgxugaFCigGg6IRdYIPs78prZF1gg-zvymtqzrD4TGfDbEjTtLVLRz-zonVXl9UN-9-PjSVoY5H5jl"
                                        alt="">
                                </div>
                            </div>
                        </div>
                        <div class="post-icons d-flex gap-3 p-2">
                            <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"
                                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                style="--x-color: var(--secondary-icon);">
                                <g fill-rule="evenodd" transform="translate(-446 -350)">
                                    <path
                                        d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                                    </path>
                                </g>
                            </svg>
                            <svg id="remove" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true"
                                class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                style="--x-color: var(--secondary-icon);">
                                <path
                                    d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="main-post">
                        <div style="padding: 0px 13px;">
                            <p> ${description.value} </p>
                        </div>
                        <div class="post-div">
                            <img class="post-img"
                                src="${imgUrl}"
                                alt="">
                        </div>
                    </div>
                </div>
                `;


    description.value = " "
    image.files = " "
}


// Register Functionality

function passGen() {
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+][{}|;:<>.,?/"
    let passLength = 8
    let pass = ""
    for (let i = 0; i < passLength; i++) {
        let ranIndex = Math.floor(Math.random() * char.length)
        pass += char[ranIndex]
    }

    document.getElementById("password").value = pass
    console.log(pass)
}

function signUp() {
    let firstName = document.getElementById("firstName").value
    let surName = document.getElementById("surName").value
    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let gender = document.getElementsByName("gender")
    let email = document.getElementById("email").value.trim()
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let password = document.getElementById("password").value
    let nunRegEx = /(?=.*\d)/
    let speRegEx = /(?=.*[!@#$%^&()`~\-_'+=,.?":{}|<>])/
    let missing = [];

    if (firstName === "" && surName === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Full Name!!!",
            text: "Please Enter Your Full Name!",
        });
        return
    }

    if (firstName.trim() === "") missing.push("First Name")
    if (surName.trim() === "") missing.push("Sur Name")

    if (missing.length > 0) {
        Swal.fire({
            icon: "error",
            title: "Enter Your Full Name Correctly",
            text: "Please Enter Your " + missing.join(", ")
        });
        return;
    }

    if (day === "Day" && month === "Month" && year === "Year") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Date Of Birth!!!",
            text: "Please Enter Your Date Of Birth Correctly!",
        });
        return
    }

    if (day === "Day") missing.push("Day");
    if (month === "Month") missing.push("Month");
    if (year === "Year") missing.push("Year");

    if (missing.length > 0) {
        Swal.fire({
            icon: "error",
            title: "Incomplete Date of Birth",
            text: "Please select: " + missing.join(", ")
        });
        return;
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

    if (email === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Email!!!",
            text: "Please Enter Your Email!",
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

    if (password === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Password!!!",
            text: "Please Enter Your Password!",
        });
        return
    }

    if (password.length < 8) missing.push("Atleast 8 Characters")
    if (!nunRegEx.test(password)) missing.push("Atleast Enter one number")
    if (!speRegEx.test(password)) missing.push("Atleast Enter one Special Character")

    if (missing.length > 0) {
        Swal.fire({
            icon: "error",
            title: "Enter a Stronger PIN!!!",
            html: "Please enter:<br><br>" + missing.join("<br>") + " in your Password",
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

    setTimeout(function () {
        window.location.href = "/dashboard.html"
    }, 5000)
}