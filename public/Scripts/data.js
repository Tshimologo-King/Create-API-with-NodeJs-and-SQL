//create an array
let people = [];
const users = document.getElementById("listOfUsers");

//Fetch method to get the data
fetch("http://localhost:6969")
  .then((res) => res.json())
  .then((data) => {
    people = data;
    console.log(data);
    displayUsers(data);
  });

function displayUsers(users) {
  listOfUsers.innerHTML = "";
  //Loop through users to get values onto the screen
  users.forEach((user) => {
    //html display
    listOfUsers.innerHTML += `
        <div>
        <h4>${user.id}</h4>
        <h4>${user.full_name}</h4>
        <h4>${user.email}</h4>
        <h4>${user.password}</h4>
        <h4>${user.billing_address}</h4>
        <h4>${user.default_shipping_address}</h4>
        </div>
    `;
  });
}
displayUsers(users);
