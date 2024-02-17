/* Alterar Cor de Fundo */

/* 1º criar os obj para elementos que serão manipulados */
const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

/* 2º Adicionar o evento para chamar a função: */
obj_sel_fundo.addEventListener('change', FunMudaCorFundo)

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFundo() {
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value)
}

/* Alterar Cor da Fonte */

/* 1º Criar os objetos/arrays para os elementos que serão manipulados: */
const obj_rb_fonte_array = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')

/* 2º Adicionar os eventos para chamar a função: */
for (obj_rb_fonte of obj_rb_fonte_array) {
    obj_rb_fonte.addEventListener('click', FunMudaCorFonte)
}

/* 3º Declarar a função para executar as ações: */
function FunMudaCorFonte() {
    for (obj_rb_fonte of obj_rb_fonte_array) {
        if (obj_rb_fonte.checked) {
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }else {
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }
}

/* Decorar com linha no meio e borda */ 

/* 1º criar os obj para elementos que serão manipulados */
const obj_cb_linha_meio = document.querySelector('#cb_linha_meio')
const obj_cb_borda = document.querySelector('#cb_borda')
 
/* 2º Adicionar o evento para chamar a função: */
obj_cb_linha_meio.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)

/* 3º Declarar a função para executar as ações: */
function FunLinhaMeio() {
    if (obj_cb_linha_meio.checked) {
        obj_div_area_teste.classList.add(obj_cb_linha_meio.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_linha_meio.value)
    }
}

function FunBorda() {
    if (obj_cb_borda.checked) {
        obj_div_area_teste.classList.add(obj_cb_borda.value)
    } else {
        obj_div_area_teste.classList.remove(obj_cb_borda.value)
    }
}

/* Trocar o texto */

/* 1º criar os obj para elementos que serão manipulados */
const obj_txt_texto_novo = document.querySelector('#txt_texto_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')

/* 2º Adicionar o evento para chamar a função: */
obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)

/* 3º Declarar a função para executar as ações: */
function FunTrocaTexto() {
    
    if (obj_txt_texto_novo.value != '') {
        obj_div_area_teste.innerText = obj_txt_texto_novo.value
    }else {
        alert('Digite algo no campo!')
    }
}

/* Fim parte superior */

/* Inicio parte inferior */

const obj_cabecalhofnd = document.querySelector('#cabecalhofnd')
const obj_cabecalho = document.querySelector('#cabecalho')

obj_cabecalhofnd.addEventListener('change', FunMudaCorCabecalho)

function FunMudaCorCabecalho() {
    obj_cabecalho.setAttribute('class', obj_cabecalhofnd.value)
}

const obj_imgfnd = document.querySelector('#imgfnd')
const obj_AreaTesteFnd = document.querySelector('#AreaTesteFnd')

obj_imgfnd.addEventListener('click', FunImagemFundo)

function FunImagemFundo() {
    if (obj_imgfnd.checked){
        obj_AreaTesteFnd.classList.add(obj_imgfnd.value)
    }else {
        obj_AreaTesteFnd.classList.remove(obj_imgfnd.value)
    }
}

const obj_OpacidadeTransp = document.querySelector('#OpacidadeTransp')
const obj_javaimg = document.querySelector('#javaimg')

obj_OpacidadeTransp.addEventListener('click', FunOpacidadeTransp)

function FunOpacidadeTransp() {
    if (obj_OpacidadeTransp.checked){
        obj_javaimg.classList.add(obj_OpacidadeTransp.value)
    }else {
        obj_javaimg.classList.remove(obj_OpacidadeTransp.value)
    }
}

const obj_Audiowide = document.querySelector('#Audiowide')
const obj_Monoton = document.querySelector('#Monoton')
const obj_AreaTesteFonte = document.querySelector('#AreaTesteFonte')

obj_Audiowide.addEventListener('click', FunAudiowide)
obj_Monoton.addEventListener('click', FunMonoton)

function FunAudiowide() {
    obj_AreaTesteFonte.innerText = 'Fonte: AudioWide'
    obj_AreaTesteFonte.setAttribute('class', obj_Audiowide.value)
}

function FunMonoton() {
    obj_AreaTesteFonte.innerText = 'Fonte: Monoton'
    obj_AreaTesteFonte.setAttribute('class', obj_Monoton.value)
}