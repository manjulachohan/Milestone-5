
// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareablelinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareablelinkElement= document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadpdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email= (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience= (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
   
    //Save torm data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    
    //Generte the resume content dynamically

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p span contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p span contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p span contenteditable="true">${skills}</p>

    `;

    //Display the generated resume
   
    resumeDisplayElement.innerHTML = resumeHTML;
   //Generate a shareable URL with the username only
   const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)};`

   //Display the shareable link
   shareablelinkContainer.style.display = 'block';
   shareablelinkElement.href = shareableURL;
   shareablelinkElement.textContent = shareableURL;
    
});

