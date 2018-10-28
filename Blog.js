$('button').on('click', (event) => {
  let titulek = $('#1').val()
  let text = $('#2').val()

  fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    let idNovehoClanku = 0;

    if (savedPosts === null) {
      idNovehoClanku = 1;
    }
    else {
      idNovehoClanku = savedPosts.length;
    }
    
    $('.Posts').append("<h2>" + titulek + "</h2>" + "<p>" + text + "</p>");
    let path = "posts/" + idNovehoClanku;
    let dataToSave = {
      title: titulek,
      text: text
    };
    fb.ref(path).set(dataToSave);
  });




});


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyEVfRJDyFY3Luq6eN1km0qWPdoFp3ZSU",
  authDomain: "greenfoxacademy.firebaseapp.com",
  databaseURL: "https://greenfoxacademy.firebaseio.com",
  projectId: "greenfoxacademy",
  storageBucket: "greenfoxacademy.appspot.com",
  messagingSenderId: "780221909059"
};
firebase.initializeApp(config);
fb = firebase.database();
