
let names = ['Zdravko', 'Alexej', 'Lucie']
names.forEach(name => {
    if (name !== 'Lucie') {
        $('ul').append(`<li>${name}</li>`);
    }
    else {
        $('ul').append(`<li><b>${name}</b></li>`);
    }

});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using javascript's jQuery framework. How awesome!"
};


$('body').append(`<div>
<h1>${additionalBlock["title"]}</h1>
</div>
<div>
<p>${additionalBlock["text"]}</p>
</div>`);



