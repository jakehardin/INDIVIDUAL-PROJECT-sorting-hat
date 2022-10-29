# The Sorting Hat Project  [![Netlify Status](https://api.netlify.com/api/v1/badges/4ab7e730-7ed3-4cfd-a988-66195e79a991/deploy-status)](https://app.netlify.com/sites/drt-sortinghat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

For this project we were required to make a Sorting Hat from the Harry Potter Movies. This project forced me to grow immensely in my coding skills while working on it and gave me the chance to finally publish a multi-faceted set of code. The Sorting Hats greets you when the page initially loads and has a button named sort that will make a bootstrap form appear requiring the users name. This data is then randomly assigned a house name using the Math.random function and then displayed on the DOM in a bootstrap styled card. You then have the option to click the expel located on the newly created student card and you can move this student to a different array casting them out to join Voldemorts Army. As of 10-28-22 This site can only expel up to two student cards before not being able to function.

[View App](#your-link)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
app.addEventListener('click', (e) => {
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");
  
      
      const index = students.findIndex(e => e.id === Number(id));
      
      const darkSiding = students.splice(index, 1);
      
      expelledStudents.push(darkSiding[0]);
      console.log(expelledStudents);
      voldysArmy(expelledStudents)
     
  
      
      renderToDom('#expelledContainer', voldysArmy());
    }
  });

## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is a teacher
- They have students in their classrooms that they would like to put into random groups and they have a love and passion of Harry Potter
- The problem this app solves for them is it allows them to get their students involved and excited about being in random groups. The students have felt that the groups have not been so random and based on favorites.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#your-link)
- [Wireframes](#your-link)
- [Project Board](#your-link)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [YOUR NAME](https://github.com/your-github-url)
