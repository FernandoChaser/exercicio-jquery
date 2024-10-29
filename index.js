$(document).ready(function() {

    $('#adicionar-tt').click(function() {

    $('#list-tarefas').click(function() {

    $(this).toggleClass('completa');

    var tarefa = $('#tarefa').val();

    if (tarefa !== '') {

    $('#list-tarefas').append('<ul>' + tarefa + '</ul>');
    
    $('#tarefa').val('');

    


    } else {
        alert('Por favor ,Digite uma Tarefa!');

    } 

        });

    });

});

