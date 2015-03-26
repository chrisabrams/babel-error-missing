var Model = require('./model')

class Controller {

  constructor() {

    // Should be: this.fire()
    this.fetch()

  }

  fetch() {

    return new Promise( (resolve, reject) => {

      var model = new Model()

      return model.getSomething()

    })

  }

}

module.exports = Controller
