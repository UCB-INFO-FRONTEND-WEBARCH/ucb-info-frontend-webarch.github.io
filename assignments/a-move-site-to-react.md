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
3. There should be components created for each "section" of the site
    1. For example, reusable components would include:
        1. Header
        2. Footer
        3. BlogPost1
        4. BlogPost2
        5. ContactUs
        6. AboutUs
        7. And so on
    2. This should all be rendered in your single index.js file. You will need to swap out the component that displays the content of a specific page (e.g. BlogPost1, ContactUs) based on the given state of your React Application
        

## Things to consider
1. Think about the different React Components that will  be a part of your app. For example, a header and a footer would make great React Components.
2. Think about how you are going to display a new page/blog post via a link. You will need to capture a click event for a link and use that to modify the state of the component you have that contains your content.

## Note! ##

This assignment will require that you need figure out how to route url paths (e.g. localhost:3000/aboutus) to render specific react components. There are several ways to do this, many beyond what we have covered at this point. However, here's a simple way of achieving this goal using the elements of React that we covered and doing some search within JavaScript:

```
import React from 'react';
import './App.css';

// Defining a quick Header component. Note that it has two links: / for the home page and /page2 for another page
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <a href="/">Homepage</a><br />
        <a href="/page2">Page2</a>
      </div>
    )
  }
}

// Defining a home page component. This component will contain content specific to the home page
class HomePage extends React.Component {
  render() {
    return (
      <h1>HomePage</h1>
    )
  }
}

// Defining a Page2 Component. This component will contain content specific to whatever Page2 is
class Page2 extends React.Component {
  render() {
    return (
      <h1>Page2</h1>
    )
  }
}

// Quick Footer component
class Footer extends React.Component {
  render() {
    return (
      <h1>Footer</h1>
    )
  }
}

// This is the main Component that index.js is going to render. This is responsible for rendering the correct components for each given
// Page
class App extends React.Component {

  constructor(props) {
    super(props)
    // here's the special sauce: window.location.pathname gives you the path of the current url outside of the domain.
    // For example, if your current url is "localhost:3000/page2", window.location.pathname will equal "/page2"
    this.state = {'currentPage':  window.location.pathname }
  }

  // This render function now looks at the current state (set by window.location.pathname), and renders the correct components
  render() { 

    // If there's no path, render the home page (i.e. http://localhost:3000/)
    if (this.state.currentPage === "/") {
      return (
        <div>
          <Header />
          <HomePage />
          <Footer /> 
        </div>
      )
    }

    // If the path is /page2 (i.e. http://localhost:3000/page2, then render the page with Page2 content)
    else if (this.state.currentPage === "/page2") {
      return (
        <div>
          <Header />
          <Page2 />
          <Footer /> 
        </div>
      )
    }
      
  }
}
```

Please note that this is not the most efficient routing method since we are reloading the page on every click and there are ways to prevent our need to do so. However this way uses what you learned so far.

Also note: `window.location.pathname` is pure JavaScript, not React. Actually the entire "window" object is pure JavaScript and is available within any browser.