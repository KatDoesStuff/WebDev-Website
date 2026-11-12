//Adding the Copyright statement + Priv policy to the diaglog

const dialogContainer = document.getElementById("dialogContainer");

dialogContainer.innerHTML = `
<h2>Switch to dark mode?</h2><br>
<label for="themeToggle"><h2>Dark Mode: </h2></label> 
  <input type="checkbox" id="themeToggle" onchange="modeToggle()">
  <br><br><h2>Privacy Policy</h2><br>
  <p>This site is an original work created for the purpose of displaying the author's artist portfolio, and to displaying items the author currently has up for purchase. Information, such as the amount of times this site is viewed, and the amount of time spent on it may be collected.
  This information is used to improve website services and user experience, and will not be given to any third party services. 
  The appropriate security measures are used to protect any information we collect during your useage of this site.
  <br><br>You have the right to:<br><br>- Access your personal information<br>
  - Ask to update out-of-date or incorrect information<br>
  - Request the removal of any information collected
  <br><br>If you have any questions, contact me at InsertBuisnessEmail@gmail.com</p>
  
  <br><br>
  <button onclick="document.getElementById('dialogContainer').close()">Close and Accept</button>
`;

function modeToggle() {
            //When users check or uncheck the box, this changes the mode
            //First we grab the user's input:
            let theme = document.getElementById('themeToggle').checked ? 'dark' : 'light' //checked : unchecked
            console.log("Theme: " + theme);
            //Next we update the theme colour
            if (theme == 'dark') {
                document.body.classList.add('darkMode');
                console.log("darkMode Activated");
            }
            else {
                document.body.classList.remove('darkMode');
                console.log("darkMode De-Activated");
            }
        }

