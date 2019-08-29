// Add your code here
// let destinationURL = "http://localhost:3000/dogs"

// let configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         name,
//         email
//     })
// };
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(function(json) {
        document.body.innerHTML = json["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}

// function handleStuff(object) {
//     document.body.innerHTML = object["id"]
// }

// fetch(destinationURL, configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });
