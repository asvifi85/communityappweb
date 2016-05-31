 firebase.database().ref('/users').on('value', function(snapshot) {
                 console.log( snapshot.val());
                 $("#usersList").html(JSON.stringify(snapshot.val()));
});