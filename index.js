<!DOCTYPE html>
<html>
    <head>
        <title>
            Krishna Kumar Portfolio
        </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="index.css">
    </head>
    <body class="darkmode">
        <nav class="navbar navbar-dark navbar-expand-lg bg-black text-white" id="navbar">
            <div class="container-fluid">
              <a class="fw-bold navbar-brand">Krishna Kumar</a>
              <button id="night" onclick="mode()">darkmode</button>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">profile</a>
                  </li>
                  <li class="nav-item">
                    <button id="projectsBtn" class="nav-link active" aria-current="page" href="Projects">Projects</button>
                  </li>
                  <li class="nav-item">
                    <button id="skillsBtn" class="nav-link active" aria-current="page" href="#">Skills</a>
                  </li>
                  <li class="nav-item">
                    <button id="certifBtn" class="nav-link active" aria-current="page" href="#">Certifications</a>
                  </li>
                  <li class="nav-item">
                    <button id="contactNavBtn" class="nav-link active" aria-current="page" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="photo2.webp" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="200" loading="lazy">
            </div>
            <div class="col-lg-6" style="padding-left:60px;padding-top: 50px;">
              <p class="display-5 fw-bold lh-1 mb-3">
                Hi,I'm Krishna Kumar.<br>
                I'm passionate to build innovative websites.
              </p>
              <p class="lead">
                "As a skilled software developer, I leverage my passion for website development to solve complex user problems and craft intuitive interfaces that drive user engagement and positive outcomes."
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="https://github.com/hemakrishnakumar966" target="_blank"><button type="button" class="btn btn-dark btn-lg px-4 me-md-2">Github</button></a>
                <a href="https://www.linkedin.com/in/krishnakumarkoppineni/" target="_blank"><button type="button" class="btn btn-primary btn-lg px-4">LinkedIn</button></a>
                <a href="https://drive.google.com/file/d/1Z4q4wm5jCrfU3j2UK7EF64tjaxQ23f5f/view?usp=drivesdk" target="_blank"><button type="button" class="btn btn-success btn-lg px-4">Resume</button></a>
              </div>
            </div>
        </div>

        <section id="projects">
            <div class="container marketing">
                
              <div class="px-4 py-5 text-center">
                <h1 class="display-5 fw-bold">Projects</h1>
                <div class="col-lg-6 mx-auto">
                  <p class="lead mb-4">
                      My technical skills shine across various software projects,
                      encompassing web development and more. Each project highlights 
                      my creativity, problem-solving abilities, and commitment to delivering 
                      top-notch solutions.
                  </p>
                  </div>
              </div>
              
                <div class="row">
                  <div class="col-lg-4">
                    <img class="bd-placeholder-img" width="200" height="140" src="powersaving.jpg" />
                    <h2 class="fw-normal">automated intelligent power saving system</h2>
                    <p>developed an intellingent system to accurately track the number of people ina room and managing electronic devices.</p>
                    <p><a class="btn btn-secondary" href="#">View Project »</a></p>
                  </div>
                  <div class="col-lg-4">
                    <img class="bd-placeholder-img" width="140" height="140" src="playStore.png" />
                    <h2 class="fw-normal">Mini GameStore</h2>
                    <p>Designed and developed a front-end interface for a game store application, enabling users to browse, and download games.</p>
                    <p><a class="btn btn-secondary" href="#">View Project »</a></p>
                  </div>
                  <div class="col-lg-4">
                    <img class="bd-placeholder-img" width="140" height="140" src="dataTransfer.png" />
                    <h2 class="fw-normal">DataTransferTimeCalculator</h2>
                    <p>Built a tool using javascript to calculate the time required for transferring files based on size and network speed. Demonstrates practical application of development skills.</p>
                    <p><a class="btn btn-secondary" href="#">View Project »</a></p>
                  </div>
                </div>
            </div>
        </section>

        <section id="skills">
            <h1>Skills</h1>
            <ul id="skillsList">
                <li class="skillsItem">
                  <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" class="skillsImage">
                  <h2>JAVASCRIPT</h2>
                </li>
                <li class="skillsItem">
                    <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" class="skillsImage">
                    <h2>JAVA</h2>
                </li>
                <li class="skillsItem">
                    <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" class="skillsImage">
                    <h2>PYTHON</h2>
                </li>

            </ul>
        </section>

        <section id="certif">
          <h1 id="certifHeading">Certifications</h1>
          <br>
          <div class="card" style="width: 25rem;">
            <img src="Henotic.webp" class="card-img-top" height="200px">
            <div class="card-body">
              <h5 class="card-title">Henotic(JUNE-2023)</h5>
              <p class="card-text">During this Project,Developed a Machine Learning Model which will analyze given dataset and predicts whether a customer will take Term Deposit or not.</p>
              <a target="_blank" href="https://drive.google.com/file/d/1qxVLfXC8VA2s1qYHQhi8Lk9mBBLywSMl/view?usp=drive_link" class="btn btn-primary">view</a>
            </div>
          </div>
          <div class="card" style="width: 25rem;">
            <img src="Hackathon.webp" class="card-img-top" height="200px">
            <div class="card-body">
              <h5 class="card-title">Hackathon(October-2023)</h5>
              <p class="card-text">During a Hackthon named HackOverFlow conducted by coding club in my College,Develop a mail2SMS real-time project which notify users when they get mail from specific mail addresses.</p>
              <a target="_blank" href="https://drive.google.com/file/d/1nrnlOrUpul1GlPRWMfRoII7jds579jfZ/view?usp=drive_link" class="btn btn-primary">view</a>
            </div>
          </div>
          <div class="card" style="width: 25rem;">
            <img src="javascript.webp" class="card-img-top" height="200px">
            <div class="card-body">
              <h5 class="card-title">HackerRank</h5>
              <p class="card-text">Demonstrated proficiency in JavaScript fundamentals by completing the HackerRank JavaScript (Basic) Skills Certification Test.</p>
              <a target="_blank" href="https://drive.google.com/file/d/1iOOBJkM-FmPZ5Q5MnWQ2-AKYIog5qMjF/view?usp=drive_link" class="btn btn-primary">view</a>
            </div>
          </div>
          <div class="card" style="width: 25rem;">
            <img src="technoHacks.svg" class="card-img-top" height="200px">
            <div class="card-body">
              <h5 class="card-title">TechnoHacks(August-2023)</h5>
              <p class="card-text">During this Internship,Implemented basic responsive websites like Currency Converter , landing page of a product, calculator usnig front-end.</p>
              <a target="_blank" href="https://drive.google.com/file/d/1ZOF1dpNv0Ws-BgUcTguX_ZIzqSHcTAUv/view?usp=drive_link" class="btn btn-primary">view</a>
            </div>
          </div>
          <div class="card" style="width: 25rem;">
            <img src="cisco.webp" class="card-img-top" height="200px">
            <div class="card-body">
              <h5 class="card-title">CiscoNetaCad(November-2023)</h5>
              <p class="card-text">Completed a Cisco Networking Academy workshop in Introduction to Networks, gaining foundational knowledge of computer networking concepts.</p>
              <a target="_blank" href="https://drive.google.com/file/d/1HYb6H6T_bfWAc7UVfHDRO93YFD5blJlS/view?usp=drive_link" class="btn btn-primary">view</a>
            </div>
          </div>
          <div class="card" style="width: 25rem;">
            <img src="britishEngStrokes.webp" class="card-img-top" height="200px">
            <div class="card-body">
              <h5 class="card-title">British English Strokes(Aug 2022 to Feb 2023)</h5>
              <p class="card-text">Improved Grammatical and Communication Skills by learning and qualifying Basic, Beginner, Intermadiate, Advanced levels of course.</p>
              <a target="_blank" href="https://drive.google.com/file/d/1qBvKW5N_v8lupaIogAhtcWaGpa-RMkMm/view?usp=drive_link" class="btn btn-primary">Basic</a>
              <a target="_blank" href="https://drive.google.com/file/d/1qBYHSBVSCpeEV9u-oFSIDHEAd-iPW048/view?usp=drive_link" class="btn btn-primary">Beginner</a>
              <a target="_blank" href="https://drive.google.com/file/d/1HYb6H6T_bfWAc7UVfHDRO93YFD5blJlS/view?usp=drive_link" class="btn btn-primary">Inter</a>
              <a target="_blank" href="https://drive.google.com/file/d/10bDmjpgtOT7oeDkCLl9VxigQFdRCme2K/view?usp=drive_link" class="btn btn-primary">Advanced</a>
            </div>
            </div>
        </section>
        <br />

        <section id="contact">
          <h1 id="contactHeading">Contact</h1>
          <div id="contactDiv">
          <iframe id="contactPhoto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7649.32654454975!2d81.49197528062597!3d16.543088779375815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a362d5e7ef94f99%3A0x3a2b78f9b48493fe!2sSRKR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1702310220131!5m2!1sen!2sin" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <form id="contactForm" action="/sendMail" method="post">
            <input name="name" type="text" placeholder="Enter Name" id="contactName"><br>
            <input name="email" type="email" placeholder="Enter email" id="contactMail"><br>
            <input name="comment" type="text" placeholder="Enter Comment" id="contactPass"><br>
            <input type="submit" id="contactBtn">
          </form>
          </div>
        </section>
    </body>

    <script>
      const projectsButton = document.getElementById('projectsBtn');
      const projectsSection = document.getElementById('projects');
      projectsButton.addEventListener('click', () => {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
      });

      const skillsButton = document.getElementById('skillsBtn');
      const skillsSection = document.getElementById('skills');
      skillsButton.addEventListener('click', () => {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      });

      const certifButton = document.getElementById('certifBtn');
      const certifSection = document.getElementById('certif');
      certifButton.addEventListener('click', () => {
        certifSection.scrollIntoView({ behavior: 'smooth' });
      });

      const contactButton = document.getElementById('contactNavBtn');
      const contactSection = document.getElementById('contact');
      contactButton.addEventListener('click', () => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
      });

      function mode(){
        var ele = document.body;
        ele.classList.toggle("darkmode");
        var navBar = document.getElementById("navbar");
        navBar.classList.toggle("bg-black");
        navBar.classList.toggle("bg-white");
        navBar.classList.toggle("text-white");
        navBar.classList.toggle("navbar-light");
        navBar.classList.toggle("navbar-dark");

        var m = document.getElementById("night").innerText;
        if(m==="darkmode")
        document.getElementById("night").innerText="lightmode";
        else if(m==="lightmode")
        document.getElementById("night").innerText="darkmode";
      }
    </script>
</html>
