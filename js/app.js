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

// Valida Nº
let iptNum = document.getElementById("num");
iptNum.onblur = function() {
    let regexNum = /^[0-9]*$/;
    let msgNumError = document.querySelector(".msg-num.msg-error");
    let msgNumOK = document.querySelector(".msg-num.msg-success");

    if (regexNum.test(iptNum.value)) {
        msgNumError.style.display = "none";
        msgNumOK.style.display = "block";
    } else {
        msgNumOK.style.display = "none";
        msgNumError.style.display = "block";
    }
}

// Valida RG
let iptRg = document.getElementById("rg");
iptRg.onblur = function() {
    let regexRg = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]{1}$/;
    let msgRgError = document.querySelector(".msg-rg.msg-error");
    let msgRgOK = document.querySelector(".msg-rg.msg-success");

    if (regexRg.test(iptRg.value)) {
        msgRgError.style.display = "none";
        msgRgOK.style.display = "block";
    } else {
        msgRgOK.style.display = "none";
        msgRgError.style.display = "block";
    }
}

// Valida Senha
let iptNum = document.getElementById("num");
iptNum.onblur = function() {
    let regexNum = /^[0-9]*$/;
    let msgNumError = document.querySelector(".msg-num.msg-error");
    let msgNumOK = document.querySelector(".msg-num.msg-success");

    if (regexNum.test(iptNum.value)) {
        msgNumError.style.display = "none";
        msgNumOK.style.display = "block";
    } else {
        msgNumOK.style.display = "none";
        msgNumError.style.display = "block";
    }
}

// Valida Confirma senha
let iptNum = document.getElementById("num");
iptNum.onblur = function() {
    let regexNum = /^[0-7]*$/;
    let msgNumError = document.querySelector(".msg-num.msg-error");
    let msgNumOK = document.querySelector(".msg-num.msg-success");

    if (regexNum.test(iptNum.value)) {
        msgNumError.style.display = "none";
        msgNumOK.style.display = "block";
    } else {
        msgNumOK.style.display = "none";
        msgNumError.style.display = "block";
    }
}



