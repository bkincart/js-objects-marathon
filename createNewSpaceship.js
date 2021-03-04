let createNewSpaceship = (name) => {
  return {
    name: name,
    crew: [],
    propulsion: null,
    loadCrew(crewMemberObjects) {
      // console.log("crewMemberObjects", crewMemberObjects);
      //this.crew = this.crew.concat(crewMemberObjects)
      crewMemberObjects.forEach(crewMemberObject => {
        this.crew.push(crewMemberObject)
        // let name = crewMemberObject.name
        let { name } = crewMemberObject
        console.log(`${name} is now aboard the ${this.name}.`);
      })
    },
    captain() {
      const randomNumber = Math.floor(Math.random() * this.crew.length)
      return this.crew[randomNumber]
    },
    mountPropulsion(rocket) {
      this.propulsion = rocket
      console.log("Your propulsion has been mounted!")
    },
    takeoff() {
      // fires the propulsion drives.
      if(this.propulsion.fire()) {
        // If the engines successfully fire, print a really convincing takeoff noise.
        console.log("VROOOOOOOOOOOM")
      } else {
        // If the engines fail to fire, print that takeoff was unsuccessful.
        console.log("Your engines failed to fire :(")
      }
    }
  }
}

export default createNewSpaceship