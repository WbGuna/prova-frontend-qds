let form = document.getElementById("form")
let iptName = document.getElementById("name")
selectPais = document.getElementById("pais");

form.onsubmit = function(event) {
    event.preventDefault();
}


iptName.onblur = function() {
    console.log("desfocou")
}


// Valida Email
let iptEmail = document.getElementById("email");

iptEmail.onblur = function() {
    var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let msgEmail = document.querySelector(".msg-email");
    let msgEmailOk = document.querySelector(".msg-email.ok");

    if (regexMail.test(iptEmail.value)) {
        msgEmail.style.display = "none";
        msgEmailOk.style.display = "block";
    } else {
        msgEmailOk.style.display = "none";
        msgEmail.style.display = "block";
    }
}

// Valida CPF
let iptCpf = document.getElementById("cpf");
iptCpf.onblur = function() {
    let regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let msgCpfError = document.querySelector(".msg-cpf.msg-error");
    let msgCpfOK = document.querySelector(".msg-cpf.msg-success");

    if (regexCpf.test(iptCpf.value)) {
        msgCpfError.style.display = "none";
        msgCpfOK.style.display = "block";
    } else {
        msgCpfOK.style.display = "none";
        msgCpfError.style.display = "block";
    }
}

// Valida CNPJ
let iptCnpj = document.getElementById("cnpj");
iptCnpj.onblur = function() {
    let regexCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    let msgCnpjError = document.querySelector(".msg-cnpj.msg-error");
    let msgCnpjOK = document.querySelector(".msg-cnpj.msg-success");

    if (regexCnpj.test(iptCnpj.value)) {
        msgCnpjError.style.display = "none";
        msgCnpjOK.style.display = "block";
    } else {
        msgCnpjOK.style.display = "none";
        msgCnpjError.style.display = "block";
    }
}

// Valida data
let iptData = document.getElementById("data");
iptData.onblur = function() {
    let regexData = /^(((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|10|12)[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))|((0?[1-9]|[12]\d|30)[\.\-\/] (0?[469]|11)[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/](19[7-9]\d|2[0-2][0-9]\d))|(29[\.\-\/]0?2[\.\-\/]((19[7-9]\d|2[0-2][0-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))$/;
    let msgDataError = document.querySelector(".msg-data.msg-error");
    let msgDataOK = document.querySelector(".msg-data.msg-success");

    if (regexData.test(iptData.value)) {
        msgDataError.style.display = "none";
        msgDataOK.style.display = "block";
    } else {
        msgDataOK.style.display = "none";
        msgDataError.style.display = "block";
    }
}


// Valida CEP
let iptCep = document.getElementById("cep");
iptCep.onblur = function() {
    let regexCep = /^[0-9]{5}-[0-9]{3}$/;
    let msgCepError = document.querySelector(".msg-cep.msg-error");
    let msgCepOK = document.querySelector(".msg-cep.msg-success");

    if (regexCep.test(iptCep.value)) {
        msgCepError.style.display = "none";
        msgCepOK.style.display = "block";
    } else {
        msgCepOK.style.display = "none";
        msgCepError.style.display = "block";
    }
}


// Valida Celular
let iptCelular = document.getElementById("celular");
iptCelular.onblur = function() {
    let regexCelular = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    let msgCelularError = document.querySelector(".msg-celular.msg-error");
    let msgCelularOK = document.querySelector(".msg-celular.msg-success");

    if (regexCelular.test(iptCelular.value)) {
        msgCelularError.style.display = "none";
        msgCelularOK.style.display = "block";
    } else {
        msgCelularOK.style.display = "none";
        msgCelularError.style.display = "block";
    }
}

// Valida Telefone
let iptFone = document.getElementById("fone");
iptFone.onblur = function() {
    let regexFone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    let msgFoneError = document.querySelector(".msg-fone.msg-error");
    let msgFoneOK = document.querySelector(".msg-fone.msg-success");

    if (regexFone.test(iptFone.value)) {
        msgFoneError.style.display = "none";
        msgFoneOK.style.display = "block";
    } else {
        msgFoneOK.style.display = "none";
        msgFoneError.style.display = "block";
    }
}

