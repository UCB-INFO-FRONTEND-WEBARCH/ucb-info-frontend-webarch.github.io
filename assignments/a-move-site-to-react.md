# Assignment 4
## Move your site to React

Your task is to take the website you have been building into React

**Note: PLEASE CREATE A FOLDER CALLED "assignment4" in your assignment repo that you created**

## Set up your environment
 - Ensure that you have completed the [instructions here](/class_prep/p-intro-to-react.html)

## Requirements

1. Your webpage will once again not have any interactivity (similar to Assignment 1). So Comments and Contact Us forms are not expected to work.
2. Your site should have all of the features that was developed in Assignment 1, including
	1. Header and footer
	2. Blog posts
	3. Other content pages (e.g. About Us)
	4. Links that open blog posts
3. There should be components created for each "section" of the site, and each page should execute it's own React application containing the appropriate components for each page.
    1. For example, reusable components would include:
        1. Header
        2. Footer
        3. BlogPost1
        4. BlogPost2
        5. ContactUs
        6. AboutUs
        7. And so on
    2. In each individual html file, there should be a script to replace the root div with the appropriate component, like the below
        
```
// Render the BlogPost1Page component, which contains instances of your Header, Footer, and BlogPost1 components
ReactDOM.render(
  <BlogPost1Page />,
  document.getElementById('root'));
```

## Things to consider
1. Think about the different React Components that will  be a part of your app. For example, a header and a footer would make great React Components.
2. Think about how you are going to display a new page/blog post via a link. You will need to capture a click event for a link and use that to modify the state of the component you have that contains your content.
3. Think about how to design the component that will contain all of the contact us form submissions. This component will have state that is being added to every time someone successfully submits a contact us form. Also consider the contact us form as it’s own react component.
4. Think about where you are going to contain the data from the blog posts and the rest of the pages. For this assignment containing each blog post in its own component and then creating a component that switches between those components would be great. Check the starter code for some ideas with this.
