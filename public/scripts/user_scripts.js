    // Initialize Firebase
   var config = {
    apiKey: "AIzaSyAj4jnNhVMNREWAwrXb_rDmXEBrxxeRoqI",
    authDomain: "community-app.firebaseapp.com",
    databaseURL: "https://community-app.firebaseio.com",
    storageBucket: "firebase-community-app.appspot.com",
  };
   var fbref = firebase.initializeApp(config);
 firebase.database().ref('/users').on('value', function(snapshot) {
                 console.log( snapshot.val());
                 var usersData = snapshot.val();
                 var table = [];
                 var tableRow = "";
                 for(var i in usersData){
                        console.log(i);
                        tableRow += "<tr><td><input type='checkbox' id='"+i+"' /></td>";
                        tableRow += "<td>"+usersData[i].name+"</td>";
                        tableRow += "<td>"+usersData[i].email+"</td>";
                         tableRow += "<td>"+usersData[i].phone+"</td>";
                         tableRow += "<td>"+usersData[i].community+"</td></tr>";
                      table.push(tableRow);
                     
                 }
                 var tablerows = table.join();
                 
                 $("#usersList table tbody").html(tablerows);
});
$("#submitNotice").click(function(e){
		e.preventDefault();
		
		var notice = $("#noticebox").val();
		var messageListRef =  firebase.database().ref('/nofications');
		console.log(messageListRef)
    messageListRef.push({ 'posted-date':Date(), 'text':notice }, function(error) {
  if (error) {
    alert("Data could not be saved." + error);
  } else {
    alert("Data saved successfully.");
	$("#postnotice").submit();
  }
});
});