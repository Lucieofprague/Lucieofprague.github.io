
let names = ['Zdravko', 'Alexej', 'Lucie']
names.forEach(name => {
    if (name !== 'Lucie') {
        $('ul').append(`<li>${name}</li>`);
    }
    else {
        $('ul').append(`<li><b>${name}</b></li>`);
    }

});



