'use strict';

let banco = [
    {tarefaBanco: "Pagar a luz", status: ""},
    {tarefaBanco: "Comprar leite", status: "checked"},
    {tarefaBanco: "Passear com o cachorro", status: ""},
    {tarefaBanco: "Consertar a bicicleta", status: "checked"}
]

const criarTarefa = (textoTarefa, status) => {
    const tarefa = document.createElement('div');
    tarefa.classList.add('novaTarefa');
    tarefa.innerHTML = `
        <div class = "checkboxLabel">
        <input id="checkbox" type="checkbox" ${status}>
        <label>${textoTarefa}</label>
        </div><span class="lixeira">delete_outline</span>`;

    document.getElementById('containerLista').appendChild(tarefa);
}

const limparTarefas = () => {
    const container = document.getElementById('containerLista');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas ();
    banco.forEach (tarefa => criarTarefa(tarefa.tarefaBanco, tarefa.status));
} 

const inserirItem = () => {
    const texto = document.getElementById('txtTarefa').value;
    
    if (texto === '') {
        return alert('O campo está em branco. Digite alguma tarefa!');
    }
    
    banco.push ({'tarefaBanco': texto, 'status': ''});
    document.getElementById('txtTarefa').value = '';
    document.getElementById('txtTarefa').focus();
    atualizarTela();

}

atualizarTela();

document.getElementById('btnConfirma').addEventListener('click', inserirItem);