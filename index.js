/**
 * Sample project code
 */


class Person {
  constructor () {
    this.firstname = ""
    this.lastname = ""
    this.age = 20
  }

  hello () {
    return `Hello! I'm ${ this.fullname }! I'm ${ this.age } years old.`
  }

  get nextage () {
    return this.age + 1
  }

  get fullname () {
    if (this.firstname == "" && this.lastname == "") return "annonymous"
    return this.firstname + " " + this.lastname
  }
}

module.exports = {
  Person: Person
}