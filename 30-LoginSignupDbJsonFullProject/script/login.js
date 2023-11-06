let formLogin = document.querySelector(".formLogin");
let usernameInp = document.querySelector("#name");
let passwordInp = document.querySelector("#pass");


formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    axios.get("http://localhost:3000/users")
    .then((res) => {
        let users = res.data;
        let found = users.find(user => user.username === usernameInp.value && user.password === passwordInp.value);
        if (found) {
            document.location.href = "./meals.html";
        } else {
            swal.fire({
                icon: "error",
                title: "Login failed",
                text: "Wrong username or password"
            });
        }
    })
    .catch(error => {
        console.error(error);
    });
});