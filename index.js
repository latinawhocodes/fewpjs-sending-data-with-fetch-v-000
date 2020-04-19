// Add your code here
function submitData(userName, userEmail) {

    let userData = {
        name: userName,
        email: userEmail
    };

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", configObject)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            document.body.innerHTML = json["id"]
        })
        .catch(function(error) {
            console.log(error.message)
            document.body.innerHTML = "Unauthorized Access"
        })
}