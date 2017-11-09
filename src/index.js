'use strict'

const moment = require('moment')
exports.default = function (strDate) {
  const myBirthDay = moment(strDate)
  
  function dayOfBirth() {
    return myBirthDay.format('dddd')
  }

  function nextBirthDay() {
    const age = moment().diff(myBirthDay, 'year') + 1
    const nextBD = moment(strDate).add(age, 'years')
    return nextBD.format('dddd')
  }

  function getMyAge(strDate) {
    const date = strDate ? moment(strDate) : moment()
    const age = date.diff(myBirthDay, 'year')
    
    if (age <= 0) {
      return "You haven't been born yet"
    }

    return age
  }

  function getMyAgeDetails() {
    const now = moment()
    let diffDuration = moment.duration(now.diff(myBirthDay));
    
    return {
      years: diffDuration.years(),
      months: diffDuration.months(),
      days: diffDuration.days(),
      hours: diffDuration.hours(),
      minutes: diffDuration.minutes(),
      seconds: diffDuration.seconds(),
      milliseconds: diffDuration.milliseconds()
    }
  }

  return {
    dayOfBirth,
    nextBirthDay,
    getMyAge,
    getMyAgeDetails
  } 
}
