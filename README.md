# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > The code that executes the "click" event when a child's name is clicked on can be found in the kids.js module. 
   In our kids.js module we have to start off by getting the value returned by the `getChildren()` function from our database.js module, which is 
   a copy of the array[] `children`, and assigning it to the variable `children` so we now have somewhere to store our list of child objects.
   Next, we use the `document.addEventListener("click", (clickEvent) => {...})` and what this line of code does is sets up an event listener that listens for any
   "click" events on the entire document and whenever that happens it triggers our function inside the curly braces.
   Now the next line, inside our click event handler, gets the element that was clicked and stores it in the `itemClicked` variable.
   Once we have our variable that stores the element that was clicked, we extract the `data-id` attribute from the clicked element and store it in the `kidId` variable. Before we start iterating through our array[] of children, we need to make sure that the item clicked what in fact a child. To do so we set up an if () statement `if (itemClicked.dataset.type === 'child')` to see if our item clicked has a `data-type` attribute equal to the string "child", if it does we can then move on to our for...of loop `for (const child of children)` which is going to iterate through each child object in the array[] `children`. Inside of our loop, we have in if() statement `if (child.id === parseInt(kidId))` that is going to check if the `id` of the current child matches the `kidId` from the item clicked. The `parseInt(kidId)` converts `kidId` from a string to an integer. If the condition of our if() statement is true, the next line of code will execute, which is `window.alert(`${itemClicked.textContent} wish is ${child.wish}.`)` and this is what is going to show our alert with a message containing the `itemClicked.textContent` (which is the element that was clicked, and the text inside that element) and the child's wish.
   
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > It is necessary call `findCelebrityMatch()` inside the loop to dynamically find and use the correct celebrity for each kid as you iterate through the kids array. Without doing this, you wouldn't be able to create accurate pairings and generate the correct HTML for each combination if celebrities and kids.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > I assigned a variable `celebrities` equal to the returned value of the function `getCelebrities()` which gives stores the array[] of celebrity objects, which give me access to call on the properties, and following the same algorithm used I used in the `kids.js` module, create a window alert calling on the `celebrity.sport` property.

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > This algorithm is used to generate and display HTML dynamically within a webpage. Starting with `const mainContainer = document.querySelector("#container")`
   Selects the HTML element with the `id` of `container` and stores it in the `mainContainer` variable. This is where the generated HTML content will be placed on the web page. 

   const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`
Next is a constructed string that contains the structure of the HTML that is stored in the `applicationHTML` variable
The string contains a title withing the <h1> tag, which displays the heading on the page. Then is the <article class="details">: which is creating a section of the page dedicated to displaying details. Now using the <section class="detail--column list details__kids"> we are creating a specific section for displaying this 
list of kids. Inside this section we have a <h2> subheading reading "Kids" and we also dynamically insert the HTML returned by the `Kids()` function, which generates our list of kids. Same thing for the next part, we set up a new section <section class="detail--column details__celebrities">: which is now creating a section for our list of celebrities to go. Inside here we have our <h2> subheading letting us know that these are the celebrities and we then insert our `Celebrities()` function to get our generated list of celebrities. Now, we make a new section using the <article> tag and assigning it the class "assignments".
This is where our list of pairings of kids and celebrities will go. Inside we have the <h2> subheading telling us this is our pairings, and now we dynamically insert our `Pairings()` function to get our generated list of pairings. Lastly, `mainContainer.innerHTML = applicationHTML` this is where the code takes all the HTML it built and actually places it onto the web page.



