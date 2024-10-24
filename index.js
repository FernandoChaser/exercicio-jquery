$(document).ready(function() {

    $('#adicionar-tt').click(function() {

    var tarefa = $('#tarefa').val();

    if (tarefa !== '') {

    $('#list-tarefas').append('<ul>' + tarefa + '</ul>');
    
    $('#tarefa').val('');

    } else {
        alert('Por favor ,Digite uma Tarefa!');

    } 

    });


});