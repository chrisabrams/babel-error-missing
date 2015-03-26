class Model {

  constructor() {

    this
      .getSomethingElse()
      .then( () => {
        console.log("I made it")
      }, () => {
        console.log("No I didn't")
      })

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
