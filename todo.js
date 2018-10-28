$('#button').on('click', (event) => {
  $('ul').append(
    `<li>${$('#input').val()} </li>`
  );
  $('#input').val("");
});
