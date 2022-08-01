let people = [];
const users = document.getElementById("listOfUsers");

fetch("http://localhost:6969")
    .then((res) => res.json())
    .then((data) => {
        people = data;
        console.log(data);
        displayUsers(data);
});


function displayUsers(users) {
  //create a variable that will get the id in html
  
  listOfUsers.innerHTML = "";
  //Loop through users to get values onto the screen
  users.forEach((user) => {
    //html display
    listOfUsers.innerHTML += `
        <div>
        <h4>${user[i].id}</h4>
        <h4>${user[i].full_name}</h4>
        <h4>${user[i].email}</h4>
        <h4>${user[i].password}</h4>
        <h4>${user[i].billing_address}</h4>
        <h4>${user[i].default_shipping_address}</h4>
        </div>
    `;
  });
}
displayUsers(users);
