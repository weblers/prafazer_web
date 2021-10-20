'use strict';

let banco = [];

const criarTarefa = (textoTarefa, status, indice) => {
    const tarefa = document.createElement('div');
    tarefa.classList.add('novaTarefa');
    tarefa.innerHTML = `
        <div class = "checkboxLabel">
        <input id="checkbox" type="checkbox" ${status} data-indice=${indice}>
        <label>${textoTarefa}</label>
        </div><span id = "deletar" class="lixeira" data-indice=${indice}>delete_outline </span>`;

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
    banco.forEach ((tarefa, indice) => criarTarefa(tarefa.tarefaBanco, tarefa.status, indice));
} 

const inserirItem = () => {
    const texto = document.getElementById('txtTarefa').value;
    
    if (texto === '') {
        return alert('O campo está em branco. Digite alguma tarefa!');
    }
    
    banco.push ({'tarefaBanco': texto, 'status': ''});
    apagarTxt();
    atualizarTela();
}

const apagarTxt = () => {
    document.getElementById('txtTarefa').value = '';
    document.getElementById('txtTarefa').focus();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    const indice = elemento.dataset.indice;

    if (elemento.type === "checkbox") {

        if (banco[indice].status === "checked") {
            banco[indice].status = "";
        }else  {
            banco[indice].status = "checked";
        } 
              
    }else if (elemento.tagName === "SPAN") {
        banco.splice(indice, 1);
        atualizarTela();
    }
}
  
atualizarTela();

document.getElementById('btnConfirma').addEventListener('click', inserirItem);
document.getElementById('btnCancela').addEventListener('click', apagarTxt);
document.getElementById('containerLista').addEventListener('click', clickItem);