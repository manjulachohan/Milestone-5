// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareablelinkContainer = document.getElementById('shareable-link-container');
var shareablelinkElement = document.getElementById('shareable-link');
var downloadpdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Save torm data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //Generte the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p span contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p span contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p span contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    //Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    //Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username), ";");
    //Display the shareable link
    shareablelinkContainer.style.display = 'block';
    shareablelinkElement.href = shareableURL;
    shareablelinkElement.textContent = shareableURL;
});
