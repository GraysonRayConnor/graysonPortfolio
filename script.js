

function codeWars(){
fetch("https://www.codewars.com/api/v1/users/TOOTS")
.then(data => {
    console.log(data.json());
    });
}

codeWars();