let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
    $('.item-east').css("background", color);
}

if (number > 100) {
    $('.item-north').text('whoah, thats a big number');
}
else {
    $('.item-north').text('just a regular number, please');
}

if (word === "cool") {
    $('.item-south').text('Power of DOM');
}
else {
    $('.item-west').text('Power of DOM');
}




