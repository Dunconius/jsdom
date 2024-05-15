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
    animals.forEach((animal) => {
        console.log('animal: ' + animal);

        // 1. Create an li element with animal value as it's text
        let newList = document.createElement("li")
        newList.textContent = animal;
        newList.innerHTML = `<h3> ${animal} </h3>`
        newList.id = animal;

        // 1b. Add a button to remove element from the list
        let removeItemButton = document.createElement("button")

        removeItemButton.onclick = () => removeAnimalFromList(animal);
        removeItemButton.textContent = "Remove animal";

        newList.appendChild(removeItemButton);

        // 2. Find the ol element (where we want to add these list items) that 
        // exists in the page and append the li into it
        let rootOlNode = document.querySelector("ol");
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