(function () { 
    const player = {
        position: 0,
        direction: true,

        moveForward(distance) { 
            if (this.direction === true) {
                this.position += distance;
            } else { 
                this.position -= distance;
            }
        },

        moveBackward(distance) { 
            if (this.direction === true) {
                this.position -= distance;
            } else { 
                this.position += distance;
            }
        },

        turnAround() {   
            if (this.direction === true) { 
                this.direction = false
            } else { 
                this.direction = true
            }
            // this.direction = true ? false : true;
        },

        printLocation() { 
            console.log(this.position);
        }
    }
    // testing 
    console.log(`We are starting at ${player.position}!`); // 0
    player.moveForward(5); 
    player.moveBackward(3); 
    console.log(`Now we are at ${player.position}! Time to turn around.`); // 2
    player.turnAround(); // going negative (false) direction 
    player.moveForward(10); 
    player.moveBackward(5); 
    console.log(`Here we are, finally at ${player.position}!`); //-3
    player.turnAround(); // going positive (true) direction
    player.moveForward(3); 
    console.log(`Testing another turn around to end up here: ${player.position}`) // 0
})();