// When you click the button, generate a random number between 1-6 in the box
function rollTheDice(event) {
event.preventDefault()
let x = Math.floor((Math.random() * 6) + 1);
document.getElementById("placeholder").innerHTML = x;

console.log("rollTheDice")
}

// Make the random number vary depending on which radio button has been selected
function rollTheDice2(event,form) {
    event.preventDefault()
    console.log(form.faceqty.value)
    let x = Math.floor((Math.random() * form.faceqty.value) + 1);
    document.getElementById("placeholder").innerHTML = x;
    
    console.log("rollTheDice")
    }


// Store the value generated by the radio button selection
// function getValue() {
//     var value = document.querySelector('input[name="face-qty"]:checked').value;
//     console.log(value);
//   }


// Function to roll the dice
// function rollTheDice(number) {
//     var placeholder = 
// document.getElementById("placeholder");
//     placeholder.innerHTML = number;
// }


