let Sample = require('../index.js');
let Person = Sample.Person;

let chai = require('chai');
let assert = chai.assert;

(function () {
    'use strict';
    describe('SampleJS Test', function () {
      it('生成', function () {
        let instance = new Person();
        assert.strictEqual(instance.name, "annonymous");
        assert.strictEqual(instance.age, 20);
      });
  
      it('名前変更', function () {
        let instance = new Person();
        instance.name = "Taro"
        assert.strictEqual(instance.name, "Taro");
      });
      
      it('年齢変更', function () {
        let instance = new Person();
        instance.age = 30
        assert.strictEqual(instance.age, 30);
      });
  
      it('次の年齢取得', function () {
        let instance = new Person();
        instance.age = 30
        assert.strictEqual(instance.nextage, 31);
      });
  
      it('自己紹介', function () {
        let instance = new Person();
        instance.name = "Jiro"
        instance.age = 24
        assert.strictEqual("Hello! I'm Jiro! I'm 24 years old.", instance.hello());
      });
    });
  })();
  