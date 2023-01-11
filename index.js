function firstPageData(e) {
    e.preventDefault()
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let fatherFname = document.getElementById('ffname').value;
    let fatherLname = document.getElementById('flname').value;
    let motherFname = document.getElementById('mfname').value;
    let motherLname = document.getElementById('mlname').value;
    let gender = document.getElementsByName("gender");
    let nationality = document.getElementById('nationality').value;
    let homeAddress = document.getElementById('address').value;
    let homeAddress1 = document.getElementById('address1').value;
    let homeAddress2 = document.getElementById('address2').value;
    let homeNumber = document.getElementById('homeNumber').value;
    let number = document.getElementById('number').value;

    // Gender Validation 
    for(let i = 0; i<gender.length; i++){
        if(gender[i].checked){
            gender = gender[i].value
        }
    }

    // Stoing Data To Localstorage
    let user_data = new Array()
    user_data = JSON.parse(localStorage.getItem('First_Page_Data')) ? JSON.parse(localStorage.getItem('First_Page_Data')) : []

    user_data.push({
        "First Name": fname,
        "Last Name": lname,
        "D.O.B": dob,
        "Email": email,
        "Father First Name": fatherFname,
        "Father Last Name": fatherLname,
        "Mother First Name": motherFname,
        "Mother Last Name": motherLname,
        "Gender": gender,
        "Nationality": nationality,
        "Address": homeAddress,
        "Street": homeAddress1,
        "City": homeAddress2,
        "Home Number": homeNumber,
        "Number": number
    })

    if (fname === "") {
        alert("Enter First Name")
    }
    else if (lname === "") {
        alert("Enter Last Name")
    }
    else if (dob === "") {
        alert("Enter Date of Birth")
    }
    else if (email === "" || email.indexOf('@') <= 0 || email.charAt(email.length - 4)!= '.') {
        alert("Invalid Email Please Check the email")
    }
    else if (fatherFname === "") {
        alert("Enter Father's Name")
    }
    else if (fatherLname === "") {
        alert("Enter Father's Name")
    }
    else if (motherFname === "") {
        alert("Enter Mother's Name")
    }
    else if (motherLname === "") {
        alert("Enter Father's Name")
    }
    else if (gender === "") {
        alert("Choose Gender")
    }
    else if (homeNumber.length < 10 || homeNumber.length > 10) {
        alert("Type a valid Phone Number")
    }
    else if(number.length < 10 || number.length > 10){
        alert("Type a valid Phone Number")
    }
    else if (homeNumber != number) {

        let x = document.getElementById("next")
        x.style.visibility = "visible"

        localStorage.setItem("First_Page_Data", JSON.stringify(user_data))
        alert("Added Succesfully")
    }
    else {
        alert("Home Number should not be equal!!");
    }
}


function secondPage(e) {
    e.preventDefault()
    let hsc_name = document.getElementById('hsc_name').value;
    let hsc_board = document.getElementById('hsc_board').value;
    let hsc_percentage = document.getElementById('hsc_percentage').value;
    let ssc_name = document.getElementById('ssc_name').value;
    let ssc_board = document.getElementById('ssc_board').value;
    let ssc_percentage = document.getElementById('ssc_percentage').value;
    let pursuing = document.getElementById('pursuing').value;
    let current_institute = document.getElementById('current_institute').value;
    let current_percentage = document.getElementById('current_percentage').value;
    let backlog = document.getElementById('backlog').value;

    let user_data = new Array()
    user_data = JSON.parse(localStorage.getItem('Second_Page_Data')) ? JSON.parse(localStorage.getItem('Second_Page_Data')) : []

    user_data.push({
        "HSC Name": hsc_name,
        "HSC Bard": hsc_board,
        "HSC Percentage": hsc_percentage,
        "SSC Name": ssc_name,
        "SSC Board": ssc_board,
        "SSC Percentage": ssc_percentage,
        "Cuurently Pursuing": pursuing,
        "Current Institute": current_institute,
        "Current Percentage": current_percentage,
        "Active Backlog": backlog
    })

    if (hsc_name === "") {
        alert("Enter HSC Name")
    }
    else if (hsc_board === "") {
        alert("Enter HSC Board")
    }
    else if (hsc_percentage === "") {
        alert("Enter HSC percentage")
    }
    else if (ssc_name === "") {
        alert("Enter SSC Name")
    }
    else if (ssc_board === "") {
        alert("Enter SSC Board")
    }
    else if (ssc_percentage === "") {
        alert("Enter SSC Percentage")
    }
    else if (pursuing === "") {
        alert("Are You currently Pursuing?")
    }
    else if (current_institute === "") {
        alert("Enter Current Institue")
    }
    else if (current_percentage === "") {
        alert("Enter the Overall Percentage")
    }
    else if (backlog === "") {
        alert("Did you Have any Active Backlog")
    }
    else {

        let x = document.getElementById("next")
        x.style.visibility = "visible"

        localStorage.setItem("Second_Page_Data", JSON.stringify(user_data))
        alert("Added Succesfully")
    }
}


function thirdPage(e) {
    e.preventDefault()

    let passport_pic = document.getElementById('passport');
    let hsc_mark = document.getElementById('hsc_mark');
    let ssc_mark = document.getElementById('ssc_mark');
    let semester = document.getElementById('semester_mark');

    let user_data = new Array()
    user_data = JSON.parse(localStorage.getItem('Third_Page_Data')) ? JSON.parse(localStorage.getItem('Third_Page_Data')) : []

    user_data.push({
        "Passport Photo": passport_pic.value,
        "HSC MarkSheet": hsc_mark.value,
        "SSC MarkSheet": ssc_mark.value,
        "All Semester": semester.value
    })

    if (passport_pic.files[0].size > 4000000) {
        alert("File size must be less than 4mb.")
    } else if (hsc_mark.files[0].size > 4000000) {
        alert("File size must be less than 4mb.")
    } else if (ssc_mark.files[0].size > 4000000) {
        alert("File size must be less than 4mb.")
    } else if (semester.files[0].size > 10000000) {
        alert("File size must be less than 10mb.")
    } else {
        localStorage.setItem("Third_Page_Data", JSON.stringify(user_data))
        alert("Added Succesfully")
    }


}