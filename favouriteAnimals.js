let animals = [
    "fennec fox",
    "lobster",
    "frog",
    "crocodile",
    "dog",
    "monkey",
    "manta ray",
    "horse",
    "red panda",
    "lizard",
    "lion",
    "turtle",
    "otter"
];

function createAnimalList(){
    
    animals = [...new Set(animals)];

    // 0. Find the existing list HTML and reset it
    let rootOlNode = document.querySelector("ol");
    rootOlNode.innerHTML = "";

    animals.forEach((animal) => {
        console.log('animal: ' + animal);

        // 1. Create an li element with animal value as it's text
        let newList = document.createElement("li")
        newList.textContent = animal;
        // newList.innerHTML = `<h6> ${animal} </h6>`
        newList.id = animal;

        // 1b. Add a button to remove element from the list
        let removeItemButton = document.createElement("button")

        removeItemButton.onclick = () => removeAnimalFromList(animal);
        removeItemButton.textContent = "Remove animal";

        newList.appendChild(removeItemButton);

        // 2. Find the ol element (where we want to add these list items) that 
        // exists in the page and append the li into it
        
        rootOlNode.appendChild(newList);
        

    });
}


function removeAnimalFromList(targetAnimalId){
    // find element with matching id
    let targetListItem = document.getElementById(targetAnimalId);
    targetListItem.remove();

    // check if it's in the list
    let isAnimalInList = animals.includes(targetAnimalId);
    if (!isAnimalInList) return;

    // remove animal from array
    animals = animals.filter(animal => {
        if (targetAnimalId == animal) {
            return false;
        } else {
            return true;
        }
    })


    // update or wipe and rebuild list
}


function addAnimalToList(event, targetInputId){
    event.preventDefault(); // stops the real form from refreshing the whole page

    // 1 find the input field matching targetInput
    let targetInputField = document.getElementById(targetInputId);

    // 2 get text value from the input field that we found
    let foundInputFiledValue = targetInputField.value;
    console.log("Input filed value to add to list is:" + foundInputFiledValue);

    // 3 push the text value into the animals array
    animals.push(foundInputFiledValue);

    // 4 recreate the animal list
    createAnimalList();
    // make sure this function deletes the existing list first!
}

let fakeFormButton = document.getElementById("fakeform-submit");
fakeFormButton.addEventListener("click", (event) => {addAnimalToList(event, "fakeform-addAnimal")})

let realFormButton = document.getElementById("realform-submit");
realFormButton.addEventListener("click", (event) => {addAnimalToList(event, "realform-addAnimal")})



function inputHelperReveal(targetElementID){
    let hintElement = document.getElementById(targetElementID);
    hintElement.style.display = "inherit";
}

function inputHelperHide(targetElementID){
    let hintElement = document.getElementById(targetElementID);
    hintElement.style.display = "none";
}

let realFormInput = document.getElementById("realform-addAnimal");
realFormInput.addEventListener("focusin", () => {inputHelperReveal("realform-hint")});
realFormInput.addEventListener("focusout", () => {inputHelperHide("realform-hint")});
inputHelperHide("realform-hint");


let fakeFormInput = document.getElementById("fakeform-addAnimal");
fakeFormInput.addEventListener("focusin", () => {inputHelperReveal("fakeform-hint")});
fakeFormInput.addEventListener("focusout", () => {inputHelperHide("fakeform-hint")});
inputHelperHide("fakeform-hint");