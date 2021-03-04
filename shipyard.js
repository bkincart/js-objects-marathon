// YOUR CODE GOES HERE
import createNewSpaceship from "./createNewSpaceship.js"
import createNewCrewMember from "./createNewCrewMember.js"
import createNewRocket from "./createNewRocket.js"

let launchpad = (ship, crewMembers, rocket) => {
  console.log("Starting our preflight process")
  // console.log("Welcome to the " + ship)
  console.log(`Welcome to the ${ship.name}`)
  ship.loadCrew(crewMembers);
  let randomCaptain = ship.captain()
  console.log(`The captain this time around is ${randomCaptain.name}`)
  // console.log(rocket);
  ship.mountPropulsion(rocket)
  rocket.addFuel(5)
  ship.takeoff()
}


const trainCrew = (crew) => {
  // let newCrew = crew.map(crewMember => {
    //   return createNewCrewMember(crewMember)
    // })
    // newCrew.forEach(member => {
      //   member.trained = true
      // })
      // console.log("initial array: ", crew);

      let newCrew = crew.map(personName => {
    let crewMemberObj = createNewCrewMember(personName)
    crewMemberObj.trained = true
    return crewMemberObj
  })

  return newCrew
}

let crewNames = ["Cappy", "Barlow", "Skullz"]
let ourShip = createNewSpaceship("Voyager3")
let crew = trainCrew(crewNames)
let ourFirstRocket = createNewRocket()
// console.log(ourFirstRocket);

// console.log("the crew:")
// console.log(crew)

// console.log("initial ship", ourShip);
// ourShip.loadCrew(crew)
// console.log("crewedShip", ourShip)
launchpad(ourShip, crew, ourFirstRocket)