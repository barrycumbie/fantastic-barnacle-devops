# Psychic Basson for CIS 486: Projects in Information Systems

##  Info
**Name:** Carly Copley  

[My GitHub Profile](https://github.com/carlycopley)

### Application Links

**Dev Server App:**  
https://dev-psychic-bassoon.onrender.com/

**Production App:**  
https://breakfastbuddy.barrycumbie.com/

**GitHub Repository:**  
https://github.com/carlycopley/psychic-bassoon

---
## App Function
User must create their breakfast items which will be turned into buttons. The buttons can also be deleted. When the user wants to track their breakfast, they must select their breakfast items/buttons and then they will submit their breakfast log. Their log will be displayed in the log section along with the date and time the log was created. Users can edit their logs by clicking the edit button. A pop-up alert will appear when the user will edit their breakfast items, then click "Ok," then the alert will ask them to edit the date and time. After the user clicks "Ok" the log should be updated. The user can also delete logs by clicking the delete button.


## App Development

The main branch was successfully running the attendance app. I created a breakfastBuddy branch off of the main branch to do my work. I used Git Bash and Visual Studio Code to work on my repository locally. I then pushed my code to Github when I was finished and merged breakfastBudddy onto main: Issue #1.
I used Google Cloud Platform to restart my PM2. This got my production app running. To get it running on Render, I realized it was currently using my dev branch. I was no longer using my dev branch because it had been pushed to main, so I changed the source branch to main and this helped get my app running. I deleted my dev branch and my breakfastBuddy branch after that. 

## Stack
* node.js
* express.js
* MongoDB
* RESTful API
* nodemon
* dotenv
* Render
* normalize.css
* Bootstrap 5
* jQuery / jQuery UI (optional)
* .yaml (GitHub workflow)
* GCP
