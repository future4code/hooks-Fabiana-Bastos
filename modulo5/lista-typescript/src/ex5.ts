enum ROLE {
    ADMIN = "admin",
    NORMAL = "user"
}

type infoUsuarios = {
    name: string,
    email: string,
    role: ROLE
}

let array: infoUsuarios[] =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.NORMAL},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.NORMAL},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.NORMAL},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.NORMAL},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

let filterRole = array.filter((item)=>{
    return item.role === ROLE.ADMIN 
})

console.log(filterRole)
