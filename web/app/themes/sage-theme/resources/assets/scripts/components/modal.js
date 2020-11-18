export default class Modal {
    constructor(element) {
        this.dialog = document.querySelector(element.dataset.modal)
        this.closeButtons = this.dialog.querySelectorAll('.js-close-modal')

        element.addEventListener('click', event => {
            event.preventDefault()
            this.openDialog()
        })

        this.closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.closeDialog()
            })
        })
    }

    openDialog() {
        this.dialog.classList.add('is-active')
    }

    closeDialog() {
        this.dialog.classList.remove('is-active')
    }
}
