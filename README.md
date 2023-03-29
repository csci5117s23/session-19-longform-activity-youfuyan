# Session 19 Starter

This starter project was made using the create-react-app command, and then basically copied into a git repo.
The goal of this is to build a simple flash-card system.
I don't think you'll be able to build anything FULL FEATURED in one sitting, but you should be able to get a few key components built and beuild some confidence in your react skills.

This can also be a good opportunity to find out what pieces of the react puzzle you're still missing, which can lead to more direct discussion of the technology with the professor!

Feel free to work on this independently or with a small group of your choosing.
If you have problems feel free to ask around you, and if oyu can't resolve them in a minute or two, raise your hand and we can discuss it together.

## Important commands

* `npm install` you'll need to run this once to get the core requirements for this project loaded.
* `npm run start` should start the development server on [http://localhost:3000](http://localhost:3000)
* `npm run build` should compile a production-ready version of your application into the `build` folder.

## Initial steps.

1. Install react
2. Build a production-ready version of the application
3. Deploy it as a website on github.io (if you don't remember how to do this, we did it in [session 2](https://canvas.umn.edu/courses/355584/pages/session-02-project-management-and-our-first-website)!)

## Build a FlashCard component

1. Create a new file "flashcard.js" and set it up as a flashcard widget.
2. Add state to remember if the card is on the front or the back.
3. Add properties to this widget for the front and back of the card.
4. Make the card render the front or the back. Try to use CSS so it's clear which side is which.
5. Make clicking flip the card front-to-back (and back again!)

These steps are _basically_ the same as the ones we did last week in-class. Don't forget to add a flashcard widget to the app for testing!

## Build a FlashCardList component

This component should have a property which is a list of flash cards (javascript objects with front and back properties -- there is a boring example of this in the App.js file)
It should use a loop to render each card into a flashcard component.

Extra features you can think about at this point:

* Can we add pagination (so maybe show 12 flashcards per page with next/previous buttons...)
* Can we have a nice grid layout for out flashcards?
* Can we make only one flash card flip at a time? (How would doing this change the data model for flipped?)

Don't forget to add this to App.js you also may want to update/upgrade the questions in the app...

## Build a FlashCardBuilder component

1. Write a form for adding a flash card.
2. Hook the form up to components (see [https://react.dev/reference/react-dom/components/input](https://react.dev/reference/react-dom/components/input) for more information)
3. add a prop "onAdd" to the component -- this will be a function you can call when the user builds a new flashcard!
4. Add a "build" button that calls the onAdd with the new front and back, and then clears the form.

Extra features you could look at here:

* A live preview
* Adding pictures of colors to flash cards

## Make the flash card list in App.js change.

1. Make the flash card list itself a state variable
2. Add the flash card builder component to the page somewhere.
3. when the flash card builder component fires it's onAdd event update the state variable for your question list to the new question list
4. If you make it this far -- see if you can come up with a good way to allow flash cards to be deleted!