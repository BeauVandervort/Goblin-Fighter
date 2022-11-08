![wireframe](/assets/wireframe.png)

# Plan

### HTML elements (page load)

        -input for adding new (character) with a button
        -span for tracking added levels
        -span for tracking trainer HP
        -character list

### State

        -array of characters (object with new character id, name, hp)
        -number of leveled up characters
        -trainer hp
        -currentID (in order to create new characters with id)

### Events

        -each character is clickable
            -on click...
                possibly decrement the character hp
                possibly decrement the trainer hp
                possibly increment the leveled character
                update the DOM with new character and trainer hp and leveled characters state
        -new character form (on submit)
            -user supplied name and submit form
            -make new character object
            -add object to characters array
            - "update list display"
                -clear out the list DOM
                -loop through the characters
                -render a new character element for each item
                -append each el to the container el

### Functions

        -displayCharacters - clear out the list and render the character element for each item
        -renderCharacter - create a check element for the specific character object
        -characterClickHandler - take care of the game logic which characters are clicked

### Slices

        1 - rendering characters list to page
        2 - form to create new chicks
        3 - gamification (resulting impacts to HP on user clicks)
