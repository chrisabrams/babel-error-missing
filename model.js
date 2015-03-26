class Model {

  constructor() {

    this.getSomethingElse()

  }

  getSomethingElse() {

    return new Promise( (resolve, reject) => {
      console.log("getSomethingElse")

      //Should be: this.getMoreStuff()
      return getMoreStuff()

    })

  }

  getMoreStuff() {

    return new Promise( (resolve, reject) => {
      console.log("getMoreStuff")
      return resolve()

    })

  }

}

module.exports = Model
