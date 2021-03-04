let createNewRocket = () => {
  return {
    fuel: 0,
    addFuel(gallons) {
      this.fuel += gallons
      console.log(`The new fuel amount is: ${this.fuel}`)
    },
    fire() {
      // Check and see if there is fuel in the fuel property.
      if(this.fuel > 0) {
        // If there is, subtract 1 from the fuel property, print that the engines have been fired, print the rocket's current fuel count, and return true.
        this.fuel -= 1
        console.log("The engines have been fired!")
        console.log(`The current fuel is ${this.fuel}`)
        return true
      } else {
        // If there is not, print that the engines failed to fire and return false.
        console.log("The engines failed to fire! Oh no!")
        return false
      }
    }
  }
}

export default createNewRocket