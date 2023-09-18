export let dbUsers = [
    {
        id: 1,
        user: "Felipe",
        pass: "123456",
        admin: true,
    },
]


JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dbUsers));