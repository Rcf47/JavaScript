const dayStart = "07:30"
const dayEnd = "17:45"

//not working solution
function scheduleMeeting(startTime, durationTime) {
  let [dayStartHour, dayStartMinutes] = dayStart.split(":").map(el => +el)
  let [dayEndHour, dayEndMinutes] = dayEnd.split(":").map(el => +el)
  let [startTimeHour, startTimeMinutes] = startTime.split(":").map(el => +el)
  let endTimeHour;
  let endTimeMinutes

  if (startTimeHour < dayStartHour) {
    return false
  }
  if (startTimeHour === dayStartHour & startTimeMinutes < dayStartMinutes) {
    return false
  }
  if (startTimeHour > dayEndHour) {
    return false
  }
  if (startTimeHour === dayEndHour & startTimeMinutes > dayEndMinutes) {
    return false
  }
  if (durationTime >= 60) {
    endTimeHour = Math.floor(durationTime / 60) + startTimeHour
    endTimeMinutes = durationTime % 60 + startTimeMinutes
    console.log(endTimeMinutes)
  }

  return true
}

//new solution with minutes
function scheduleMeeting2(startTime, durationTime) {
  let [dayStartHour, dayStartMinutes] = dayStart.split(":").map(el => +el)
  let [dayEndHour, dayEndMinutes] = dayEnd.split(":").map(el => +el)
  let [startTimeHour, startTimeMinutes] = startTime.split(":").map(el => +el)
  let startTimeWithMinutes = startTimeHour * 60 + startTimeMinutes
  let dayStartWithMinutes = dayStartHour * 60 + dayStartMinutes
  let endTimeWithMinutes = startTimeWithMinutes + durationTime
  let dayEndWithMinutes = dayEndHour * 60 + dayEndMinutes

  if (startTimeWithMinutes < dayStartWithMinutes) {
    return false
  }
  if (endTimeWithMinutes > dayEndWithMinutes) {
    return false
  }
  return true
}

console.log(scheduleMeeting2("11:50", 30)) // true

console.log(scheduleMeeting2("11:50", 80)); // true
console.log(scheduleMeeting2("7:00", 15)); // false
console.log(scheduleMeeting2("7:15", 30)); // false
console.log(scheduleMeeting2("7:30", 30)); // true
console.log(scheduleMeeting2("11:30", 60)); // true
console.log(scheduleMeeting2("17:00", 45)); // true
console.log(scheduleMeeting2("17:30", 30)); // false
console.log(scheduleMeeting2("18:00", 15)); // false
