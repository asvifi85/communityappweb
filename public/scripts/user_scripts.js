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
                         tableRow += "<td>"+usersData[i].phone+"</td></tr>";
                      table.push(tableRow);
                     
                 }
                 var tablerows = table.join();
                 
                 $("#usersList table tbody").html(tablerows);
});