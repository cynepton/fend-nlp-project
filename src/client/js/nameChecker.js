function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Isaac"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
