var form = window.document.getElementById('form-contato');

if (form.addEventListener/* P/ browsers modernos*/) { 
    form.addEventListener("submit"/*Nome do evento*/, validaCadastro/* funcao*/)
}
else if(form.attachEvent/* P/IE8 e seus antecessores*/){
    form.attachEvent("onsubmit", validaCadastro);
}
function validaCadastro(evt){
    var nome = document.getElementById("gNome");
    var years = document.getElementById("gIdade");
    var email = document.getElementById("gEmail");
    var nasc = document.getElementById("gDate");
    var rua = document.getElementById("gRua");
    var num = document.getElementById ("gNum");
    var cep = document. getElementById("gCep");
    var bairro = document. getElementById("gBairro");
    var cidade = document.getElementById("gCid");
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro = 0;

    caixa_nome = document.querySelector('.alertNome');
    if(nome.value == ""){
        caixa_nome.innerHTML = 'Campo Obrigatório!';
        caixa_nome.style.display = 'block';
        contErro == 1;
    }
    else{
        caixa_nome.style.display = 'none';
    }

    caixa_idade = document.querySelector('.alertIdade');
    if(years.value == "") {
        caixa_idade.innerHTML = 'Campo Obrigatório!';
        caixa_idade.style.display = 'block';
        contErro == 1;
    }
    else {
        caixa_idade.style.display = 'none';
    }

    caixa_email = document.querySelector('.alertEmail');
    if(email.value == "") {
        caixa_email.innerHTML = 'Campo Obrigatório!';
        caixa_email.style.display = 'block';
        contErro == 1;
    }
    else{
        caixa_email.style.display = 'none';
    }

    caixa_nasc = document.querySelector('.alertNasc');
    if(nasc.value == "") {
        caixa_nasc.innerHTML = 'Campo Obrigatório!';
        caixa_nasc.style.display = 'block';
        contErro == 1;
    }
    else{
        caixa_nasc.style.display = 'none';
    }

    caixa_rua = document.querySelector('.alertRua');
    if(rua.value == "") {
        caixa_rua.innerHTML = 'Campo Obrigatório!';
        caixa_rua.style.display = 'block';
        contErro == 1;
    }
    else {
        caixa_rua.style.display ='none';
    }

    caixa_numero = document.querySelector('.alertNum');
    if(num.value == "") {
        caixa_numero.innerHTML = 'Campo Obrigatório!';
        caixa_numero.style.display = 'block';
        contErro == 1;
    }
    else{
        caixa_numero.style.display = 'none';
    }

    caixa_cep = document.querySelector('.alertCep');
    if(cep.value == ""){
        caixa_cep.innerHTML = 'Campo Obrigatório!';
        caixa_cep.style.display = 'block';
        contErro == 1;
    }
    else{
        caixa_cep.style.display = 'none';
    }

    caixa_bairro = document.querySelector('.alertBairro');
    if(bairro.value == "") {
        caixa_bairro.innerHTML = 'Campo Obrigatório!';
        caixa_bairro.style.display = 'block';
        contErro == 1;
    }
    else{
        caixa_bairro.style.display = 'none';
    }

    caixa_cid = document.querySelector('.alertCid');
    if(cidade.value == ""){
        caixa_cid.innerHTML = 'Campo Obrigatório!';
        caixa_cid.style.display = 'block';
        contErro == 1;
    }
    else{
        caixa_cid.style.display = 'none';
    }

    console.log(contErro)
    if(!contErro) {
        evt.preventDefault();
    }
}