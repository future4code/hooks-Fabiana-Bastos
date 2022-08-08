tarefas = ['lavar roupa', 'comprar ovos', ]

const listaTarefas = process.argv[2]
const adicionarTarefas = [...tarefas, listaTarefas]

console.log(adicionarTarefas)