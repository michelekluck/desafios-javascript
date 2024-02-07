const vestibular = {
	institution: "UFPR",
	year: 2024,
	books: [
			{
				name: "Liras de Marília de Dirceu",
				author: "Tomás Antônio Gonzaga",
				publisher: "Penguin & Companhia das Letras"
			},
			{
				name: "Noite na taverna",
				author: "Álvares de Azevedo",
				publisher: "Pince-Nez"
			},
			{
				name: "A falência",
				author: "Julia Lopes de Almeida",
		        publisher: "Principis"
			},
			{
				name: "Sagarana",
				author: "Guimarães Rosa",
				publisher: "Nova Fronteira"
			},
			{
				name: "Morte e vida severina",
				author: "João Cabral de Melo Neto",
				publisher: "Alfagara"
			},
			{
				name: "Quarto de despejo",
				author: "Carolina Maria de Jesus",
				publisher: "Ática"
			},
			{
				name: "Nove noites",
				author: "Bernardo Carvalho",
				publisher: "Companhia de Bolso"
			},
			{
				name: "O livro das semelhanças",
				author: "Ana Martins Marques",
				publisher: "Companhia das Letras"
			}
	]
}

function vestBooks(vestibular){
    for(let i=0; i < vestibular.books.length; i++ ) {
        console.log(vestibular.books[i])
    }
}

vestBooks(vestibular)