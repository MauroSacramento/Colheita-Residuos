
//fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//.then()

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )
    .then( states => {
        
        for (const state of states){
             ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
       
    })
}

populateUFs();

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const value = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/municipios`

    fetch(url)
    .then(res => res.json() )
    .then( cities => {
        citySelect.innerHTML = "<option value=''>Selecione uma opção</option>"
        citySelect.disabled = true;
        for (const city of cities){
             citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
       citySelect.disabled = false;
    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)

// Seleção dos itens
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem);
}

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target;

    // Adicionar ou remover uma classe
    itemLi.classList.toggle("selected");

    // Verificar se existem itens selecionados, se sim
    //Pegar os itens selecionados

    //Se já estiver selecionado tirar da selecção
    //Se não estiver selecionado, adicionar à selecção

    // Actualizar o campo escondido com os itens selecionados
}