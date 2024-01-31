const squad = {
    name: "developers",
    members: [
        {
            name: "pedro",
            salary: 200
        },
        {
            name: "marcos",
            salary: 150
        },
        {
            name: "michele",
            salary: 300
        },
        {
            name: "joana",
            salary: 450
        },
        {
            name: "junior",
            salary: 130
        },
    ]
}

salario(squad)

function salario(squad) {
	for (let i = 0 ; i < squad.members.length; i++) {
		if(squad.members[i].salary >= 200) {
			console.log(`Nome: ${squad.members[i].name}, Salario: ${squad.members[i].salary}\n`);
	    } else {
            console.log(`Essa pessoa precisa de um aumento: ${squad.members[i].name}\n`)
        }
    }
} 
