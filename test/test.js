'use strict'

const expect = require('chai').expect
const miCumple = require('../src/index').default

describe('# Mi Cumple', function () {

  it('If I was born in 1987-01-02, it was on a Friday ', function () {
    const birthday = miCumple("1987-01-02")
    expect(birthday.dayOfBirth()).to.equal("Friday")
  })

  it('If I was born in 1987-01-02, my age should be above 30', function () {
    const birthday = miCumple("1987-01-02")
    expect(birthday.getMyAge()).be.above(29)
  })
  
  it('If I was born in 1987-01-02, my age after 1990-01-02 and before 1991-01-02 should be 3', function () {
    const birthday = miCumple("1987-01-02")
    expect(birthday.getMyAge('1990-01-01')).to.equal(2)
    expect(birthday.getMyAge('1990-01-02')).to.equal(3)
    expect(birthday.getMyAge('1991-04-22')).to.equal(4)
  })

  it('Next birthDay must be a day of the week', function () {
    const birthday = miCumple("1987-01-02")
    expect(birthday.nextBirthDay()).be.oneOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
  })

})