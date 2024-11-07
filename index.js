$(document).ready(function() {

    $('#adicionar-tt').click(function() {

        var tarefa = $('#tarefa').val();

        if (tarefa !== '')  {

            $('#list-tarefas').append('<li>' + tarefa + '</li>');
    
            $('#tarefa').val('');

        } else {
            alert('Por favor ,Digite uma Tarefa!');

        } 

            $('#list-tarefas').on('click','li',function (){
          
                $(this).toggleClass('completa');
                
            });

    });

});
