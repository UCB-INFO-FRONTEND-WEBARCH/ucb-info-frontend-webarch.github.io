# Assignment 5
## Power your site with React

Your task is to take the website you have been building into React

**Note: PLEASE CREATE A FOLDER CALLED "assignment5" in your assignment repo that you created**

## Set up your environment
 - Copy your assignment 4 code to assignment 5

## Requirements

1. We want to power all of the interactive functionality that we had in assignment 3 including the following: Contact Us and Comment Forms
    1. Contact Us and Comment data  should work as expected. All content should be saved in the state that resides in the component
    2. Contact Us and Comment data should also be saved in localStorage as was done in assignment 
    3. As you change the state of your component when a new comment or contact us form submission occurs, you should also afterwards update the appropriate variables in localStorage.
    4. Contact Us should also have functioning validations as assignment 3 had as well
    5. On startup, comments and contact us data should be loaded from localStorage, and in the case of comments should be loaded to the screen

2. We want to ensure that no page loads occur when links are clicked to new pages. The website should load once. 
    1. This will require that all links should have a click event that changes the state of the correct component in order to change the page. The Header and Footer should stay the same.

3. (extra credit) You can create a new page that contains all of the information people fill out when someone submits the contact us page. In short, in addition to all of the validations that you have done for the contact us page, on submit the website should go to the home page, and a link on the footer should lead to a page that displays all of the contact us submissions.


## Things to consider
1. Think about how components will nest into each other and how they will interact with each other. Check out the lecture notes from this week for help
