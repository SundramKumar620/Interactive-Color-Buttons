let input = document.getElementById('inputcolour');
let createbtn = document.getElementById('button');
let createbuttondiv = document.getElementById('createbuttondiv');

createbtn.addEventListener('click', () => {
    if (input.value == "") {
        alert("Please Enter Colour");
    } else {
        function createButton(color) {
            let newbutton = document.createElement('button');
            newbutton.innerText = color;  
            newbutton.style.backgroundColor = color;  

            // Closure: The inner function remembers 'color' from the outer scope
            newbutton.addEventListener('click', () => {
                document.body.style.backgroundColor = color;  // Using color from lexical scope
            });

            createbuttondiv.appendChild(newbutton);
        }

        // Call the createButton function with the value from the input field
        createButton(input.value);

    }

    input.value = ""; // Reset the input field after creating the button
});
