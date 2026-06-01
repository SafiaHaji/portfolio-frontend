// Paste your exact Render web URL below, keeping the "/api/portfolio" at the end!
const BACKEND_URL = "https://portfolio-backend-c244.onrender.com/";

async function loadPortfolioData() {
    try {
        const response = await fetch(BACKEND_URL);
        const data = await response.json();

        // Put the data into the HTML text fields
        document.getElementById('user-name').innerText = data.profile.name;
        document.getElementById('user-title').innerText = data.profile.title;
        document.getElementById('user-bio').innerText = data.profile.bio;
        document.getElementById('user-location').innerText = data.contact.location;
        document.getElementById('user-email').innerText = data.contact.email;

        // Load Skills List
        const skillsUl = document.getElementById('skills-list');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsUl.appendChild(li);
        });

        // Load Qualifications List
        const qualUl = document.getElementById('qualifications-list');
        data.qualifications.forEach(qual => {
            const li = document.createElement('li');
            li.innerText = qual;
            qualUl.appendChild(li);
        });

        // Load Projects List
        const projectsDiv = document.getElementById('projects-list');
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'project';
            div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectsDiv.appendChild(div);
        });

        // Hide loading text and show your completed website page
        document.getElementById('loader').style.display = 'none';
        document.getElementById('portfolio-content').style.display = 'block';

    } catch (error) {
        document.getElementById('loader').innerText = "Error connecting to cloud backend API.";
        console.error(error);
    }
}

// Run this function immediately when the page finishes loading
window.onload = loadPortfolioData;