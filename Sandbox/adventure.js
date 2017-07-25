var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3,
            "third": 4
        },
        "choiceText": "choose 1",
        "title": "The Argentine Villa",
        "description": "You are a missionary serving in Argentina. You are looking for a less active member that lives in a villa, or shanti-town ghetto. This is where your story begins..."
    },
    {
        "id": 2,
        "choices": {
            "first": 5,
            "second": 6,
            "third": 4
        },
        "choiceText": "Go Left (choice 1)",
        "title": "The Long Passageway",
        "description": "You find yourself looking at slightly bending passageway, about as wide as 1.5 people. It's dark, silent, and dirty."
    },
    {
        "id": 3,
        "choices": {
            "first": 7,
            "second": 8,
            "third": 4
        },
        "choiceText": "Go Right (choice 2)",
        "title": "The Fork in the road",
        "description": "Do you go right, or left? Both seems to wind around. Also, the furthur you go, the more you get lost, and the further from the safe entrance you are."
    },
    {
        "id": 5,
        "choices": {
            "first": 9,
            "second": 10,
            "third": 4
        },
        "choiceText": "Go Back (Choice 1)",
        "title": "The Drug Lord",
        "description": "The drug lord followed you in, and now has you prisoner. GAME OVER"

    },
    {
        "id": 6,
        "choices": {
            "first": 4,
            "second": 4,
            "third": 4
        },
        "choiceText": "Go Forward (Choice 2)",
        "title": "The Less Actve Member!",
        "description": "You have found the less active member sweeping the passageway a couple of meters ahead! You win!"

    }];




// return whole section for certain id
function getItem(instructions, id) {
for (var i=0; i < instructions.length; i++)
    if (instructions[i].id == id){
        return instructions[i]}
}

//requires the id of the new set of instructions
function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);

    //then we need to update the screen with the main description
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);
    var choice3 = getItem(instructions, instruction.choices.third);

    //check to see if they are endpoints

    //if endpoints then end the game


    //if not update those sections on the screen with the choiceText
    function updateElement(part, instruction) {
        var part1 = document.getElementById(part);
        part1.innerHTML=instruction;
    }

    // displays 'Go Left', 'Go Right'
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);

    // makes nextStep(choice.id)
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);
    updateButton('restart', choice3.id);
}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element

//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.

//updateButton: sets the onclick event for a button with the id of the item it chooses

function updateButton(button, choice) {
    var button = document.getElementById(button);
    if (choice != 4) {
        button.setAttribute('onclick', "nextStep(" + choice + ")");}
    else {
        button.setAttribute('onclick', "nextStep(" + 1 + ")");
    }
}


nextStep(1);
//2. then create and use a function to initialize the game to step 1

//3. other needed functions
//restart: resets the game back to the beginning.

//happy ending: does whatever we want it to do when they end in a good place

//sad ending: does whatever we want it to do if they end at a bad place
