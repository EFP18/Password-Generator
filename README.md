# Password-Generator

Link: https://efp18.github.io/Password-Generator/

![Screenshot](./Assets/03-javascript-homework-demo.png)

This password generator takes a keyboard input regarding the length of a password, and then following some prompts, the user can choose what characters he wants to include in his code, so that the password generator can provide him with a passphrase. 

In order to write this code, I had to create a function with JavaScript and link it to the pre-existing CSS and HTML files. 

In order to create this algorithm, I had to create several if statements to make sure that the user inputs the write character, in this case a number, for the password length, and not a letter or a symbol that would return a potential error. 
Additionally, I created a prompt for every choice that the user is given, which I then concatenated into an array that was pulling the data from individual character arrays. Then, with the help of Math.floor and Math.random, the code picked randomly the number of password length requested items from that large array, which I then again concatenated and printed with the help of join("").

