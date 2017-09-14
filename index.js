/**
 * Sample project code
 */


class Person {
  constructor () {
    this.name = "annonymous"
    this.age = 20
  }

  hello () {
    return `Hello! I'm ${ this.name }! I'm ${ this.age } years old.`
  }

  get nextage () {
    return this.age + 1
  }
}

module.exports = {
  Person: Person
}