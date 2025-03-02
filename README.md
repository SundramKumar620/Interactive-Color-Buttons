# Interactive-Color-Buttons

"Dynamic Color Closure" is a web app where users can input a HEX color code to create a button. When clicked, the button changes the page's background color to the color it represents. The app uses **closures** and **lexical scoping** to dynamically create buttons and retain the color information even when the button is clicked later.

### **How Closures and Lexical Scoping are Used:**

- **Lexical Scoping**: Variables are accessible based on where the function is defined. Each dynamically created button has access to its color value through the scope where it was created.
- **Closures**: The event handler for each button "remembers" the color value due to closures. Even after the button is created and the execution context is finished, the handler still has access to the color it was created with, allowing it to change the background color when clicked.

This combination allows for the dynamic creation of buttons with their own behavior, demonstrating how closures can capture and preserve values in JavaScript.
