export default class Alert
{
  constructor(element)
  {
    this.alert = $(element)
    this.closeButtons = this.alert.children('.close')

    const _this = this

    this.closeButtons.each(function() {
      $(this).click(() => {
        _this.closeDialog()
      })
    })
  }

  closeDialog() {
    this.alert.addClass('opacity-0')

    setTimeout(() => {
      this.alert.remove()
    }, 150)
  }
}
