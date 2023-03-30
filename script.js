$(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        var cnpj = $('#cnpj').val().replace(/[^\d]+/g,'');

        //chamando o ajax
        $.ajax({
            //url da api
            url: 'https://receitaws.com.br/v1/cnpj/' + cnpj,
            dataType: 'jsonp',
            //executa se der certo
            success: function(data) {
                //se estiver ok
                if(data.status === 'OK') {
                    // resultados
                    $('#numero-cnpj').html('<p>CNPJ: ' + data.cnpj + '</p>');
                    $('#nome-cnpj').html('<p>Razão Social: ' + data.nome + '</p>');
                    $('#municipio').html('<p>Município: ' + data.municipio + '</p>');
                    $('#bairro').html('<p>Bairro: ' + data.bairro + '</p>');
                    $('#logradouro').html('<p>Logradouro: ' + data.logradouro + '</p>');
                    $('#numero').html('<p>Número: ' + data.numero + '</p>');
                    $('#cep').html('<p>CEP: ' + data.cep + '</p>');
                    $('#telefone').html('<p>Telefone: ' + data.telefone + '</p>');
                    $('#email').html('<p>E-mail: ' + data.email + '</p>');
                    $('#situacao').html('<p>Situação: ' + data.situacao + '</p>');
                } else {
                    //erro
                    alert('Número inválido. Tente novamente');
                }
            },
            //funcao de erro
            error: function() {
                $('#resultado').html('<p>erro</p>');
            }
        }); 
    });
});





