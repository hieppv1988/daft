window.define(function (require) {
  var Daft = window.Daft

  // SETUP OUR HEADER NAMESPACE
  var Header = new Daft.Namespace('header', {
    onTitleUpdate: function (data) {
      console.log(this.namespace + ' ' + data.key + ' changed from ' + data.previous + ' to ' + data.value)
    }
  })

  // ONLOAD
  Header.onload(function (err) {
    if (err) Daft.error('Error loading eader namespace') // IF WE GET AN ERROR

    Daft.info('Header namespace loaded')

    var self = this
    var data = self.domData

    // data.title.value = 'Daft.js - Loaded'
  })
})
