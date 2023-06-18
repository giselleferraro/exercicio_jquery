const form = document.getElementById('form-tarefa');
const tarefas = [];
let linhas ='';

$(document).ready(function () {
    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();
        const inputNomeTarefa = document.getElementById('nome-tarefa');

        if (tarefas.includes(inputNomeTarefa.value)) {
            alert(`A tarefa "${inputNomeTarefa.value}" já foi inserida na lista.`)
        } else {
            tarefas.push(inputNomeTarefa.value);

            let linha = '<tr>'
            linha += `<td>${inputNomeTarefa.value}</td>`;
            linha += `</tr>`
            linhas += linha

            const novoItem = $(`
                <tr>
                    <td>                              
                        <div class="tarefa">
                            <label for="concluido" >${inputNomeTarefa.value}</label>
                        </div>       
                    <td>
                </tr>`);
            novoItem.appendTo('tbody');

            novoItem.on('click', function () {
                $(this).addClass('concluido');
            });
        }
        
        inputNomeTarefa.value = '';

    });
});
