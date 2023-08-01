//old way
var SpaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet
}

var shuttle1 = new SpaceShuttle("Earth")
// console.log(shuttle1.targetPlanet) //Earth

//new way
class SpaceShuttleNew {
  constructor(targetPlanet) {
    this._targetPlanet = targetPlanet
  }
  get planet() {
    return this._targetPlanet
  }
  set newPlanet(newPlanet) {
    this._targetPlanet = newPlanet
  }
}

const shuttleNew = new SpaceShuttleNew("New Earth")
// console.log(shuttleNew.targetPlanet) // New Earth
console.log(shuttleNew.planet) // New Earth
shuttleNew.newPlanet = "Jupiter"
console.log(shuttleNew.planet) // Jupiter
