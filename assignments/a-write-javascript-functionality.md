# Assignment 2
## Write JavaScript Functionality

Our assignments are going to be built around building a blog from the ground up and eventually hosting your blog in the cloud. For this second assignment, you will write independent JavaScript functions that will be used to power your website.

You will create a JavaScript file called script.js that will contain the following functions. Please implement them. 

**Note: PLEASE CREATE A FOLDER CALLED "assignment2" in your assignment repo that you created and put your script.js file in this folder.** If you create an html file to test your code you can leave it in this folder as well.

You will need to do the following:

**Create a function with the following characteristics:**
 - Name of Function: getSubmission
 - Parameters: to, from, subject, message
 - All parameters are strings
 - Returns: Object with fields "to, from, subject, message".

 Example
```javascript
 let submission = getSubmission("kay@kay.com", 
    "mary@mary.com", 
    "Welcome to INFO 253!", 
    "Introductory message for those in INFO 253");

 /* 
    submission = { 
    to: "kay@kay.com", 
    from: "mary@mary.com", 
    subject: "Welcome to INFO 253!", 
    message: "Introductory message for those in INFO 253"}
*/
```
 
 **Create a class with the following characteristics:**
 - Name of Class: Comment
 - Instance Variables: name, message
 - Functions associated with class: 
    - constructor(name, message) 
        - sets the name and message of the comment
    - setName(name)
        - sets the name instance variable
    - getName()
        - returns the name instance variable
    - setMessage(message)
        - sets the message instance variable
    - getMessage()
        - returns the message instance variable


 **Create another function with the following characteristics:**
 - Name of Function: addComment
 - Parameters: list_of_comments, comment 
 - list_of_comments is an array of values with type Comment, comment is a parameter of type Comment
 - Returns: list_of_comments
 - AddComment should add comment to list_of_comments. It should add the new comment to the end of the list_of_comments
