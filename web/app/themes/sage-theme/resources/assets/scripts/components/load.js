import Hello from './hello'
import Modal from './modal'
import Alert from './alert'

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
  {
    class: Alert,
    selector: '.js-alert-dismissible',
  },
]

// components.forEach(component => {
  // if (document.querySelector(component.selector)) {
    // document.querySelectorAll(component.selector).forEach(element => new component.class(element, component.options))
  // }
// })

$.each(components, (_, component) => {
  if ($(component.selector).length) {
    $(component.selector).each(function(_, element) {
      new component.class(element, component.options)
    })
  }
})

