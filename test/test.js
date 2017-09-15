let Sample = require('../index.js');
let Person = Sample.Person;

let chai = require('chai');
let assert = chai.assert;

(function () {
    'use strict';
    describe('SampleJS Test', function () {
      it('生成', function () {
        let instance = new Person();
        assert.strictEqual(instance.fullname, "annonymous");
        assert.strictEqual(instance.age, 20);
      });
  
      it('姓名を変更', function () {
        let instance = new Person();
        instance.firstname = "Taro"
        instance.lastname = "Suzuki"
        assert.strictEqual(instance.fullname, "Taro Suzuki");
      });

      it('姓のみ変更', function () {
        let instance = new Person();
        instance.firstname = "Taro"
        assert.strictEqual(instance.fullname, "Taro ");
      });

      it('名のみ変更', function () {
        let instance = new Person();
        instance.lastname = "Suzuki"
        assert.strictEqual(instance.fullname, " Suzuki");
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
        instance.firstname = "Jiro"
        instance.lastname = "Sato"
        instance.age = 24
        assert.strictEqual("Hello! I'm Jiro Sato! I'm 24 years old.", instance.hello());
      });
    });
  })();
  