import {handleNovoItem} from  './componentes/criarTarefa.js'


const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', handleNovoItem)