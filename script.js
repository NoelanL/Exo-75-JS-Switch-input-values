let button = document.getElementById('switch');

function maFonction() {
    let input1 = document.getElementById('input1').value;
    console.log('Vous avez saisi ' + input1);

    let input2 = document.getElementById('input2').value;
    console.log('Vous avez saisi ' + input2);

    document.getElementById(input1).value = input2;
    document.getElementById(input2).value = input1;
}

button.addEventListener("click", maFonction);
console.log(button);

