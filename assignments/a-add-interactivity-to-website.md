# Assignment 3
## Add interactivity to website

**Note: PLEASE CREATE A FOLDER CALLED "assignment3" in your assignment repo that you created**

You will need to do the following:

**Setup**
 - Copy your website from Assignment 1 to this folder
 - Copy your JavaScript file wit from Assignment 2 to this folder
 - Link all html pages to your javascript file

**Create a Contact Us page**

***The page and form***
 - Create a page that contains a form where people can contact you
 - Need to have the following fields: From, Subject, Message
  - From is an email address (should have name="from")
  - Subject (should have name="subject")
  - Message (should have name="message)
 - Must have a submit button
 - Must make all fields required: if user submits form without those fields a message saying which fields need to be filled out at the top of the page.
   - Note: **this is not an alert or any other popup box.** You will need to modify the HTML of the page to place this text at the top of the page.
 - When someone clicks on the submit button, a message should appear on the top of the page saying "Your message has been sent"
   - Note: **this is not an alert or any other popup box.** You will need to programmatically (using JavaScript) modify the HTML of the page to place this text at the top of the page.

***The interactivity***
 - The form on successful submit must use the getSubmission function that you wrote in Assignment 2
 - The form must add the object that getSubmission returns to localStorage.contactSubmissions.

 **PLEASE NOTE: how to save objects and arrays in localStorage**
 - localStorage can only store strings, so you will need to do what is called *serialization* in order to convert your arrays and objects into a string to save in localStorage, and then use *deserialization* in order to convert your string values in localStorage back into objects.

 For example
 ```
let object1 = { "key1": "value1", "key2": "value2"}

let object2 = { "key1": "value3", "key2": "value4"}

let object3 = { "key1": "value5", "key2": "value6"}

let objectArray = [object1, object2, object3]
localStorage.savedObjects = JSON.stringify(objectArray) //serialization

let retrievedObjects = JSON.parse(localStorage.savedObjects) //deserialization

console.log(`${retrievedObjects[0].key1} ${retrievedObjects[1].key1} ${retrievedObjects[2].key1}`)
 ```

**Comments functionality**
 - Write a local comments section at the bottom of each blog post page
 - There should be a form where you can enter your name, and a message
  - Name ,field should have name="name"
  - Message field should have name="message"
 - Should have a submit button
 - **Note** Each blog post should have it's own set of comments. Adding a comment to one blog post should not affect blog posts for any other blog post
 - **Note** Must first create a new instance of the Comment class you created in Assignment 2
 - **Note** Must then use the addComment function you wrote in Assignment 2 to save the new comment to localStorage. Remember to serializae/deserialize as mentioned above. Also remember: comments for one blog post should not interfere with comments from other blog posts.

**Comments display**
 - On page load, must display all comments from localStorage to the end of the page
 - On page submit, new comments must be added to the bottom of displayed comments
 - **NOTE** Remember to serialize your comments before saving to localStorage