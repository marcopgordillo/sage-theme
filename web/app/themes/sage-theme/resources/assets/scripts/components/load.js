import Hello from './hello'
import Modal from './modal'

/*
* Define components and initialize them if they exist
*/


const components = [
    {
        class: Hello,
        selector: '.js-hello',
    },
    {
        class: Modal,
        selector: '.js-modal-trigger',
    },
]

components.forEach(component => {
  if (document.querySelector(component.selector)) {
    document.querySelectorAll(component.selector).forEach(element => new component.class(element, component.options))
  }
})

