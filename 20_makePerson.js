
/* 
    Make a Person
    
    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)
*/

function Person(firstAndLast) {
    
    let fullName = firstAndLast;
    let splitName = fullName.split(' ');

    // get first and last
    this.getFirstName = function() {
        return splitName[0];
    }
    this.getLastName = function() {
        return splitName[1];
    }


    // set first and last anme
    this.setFirstName = function(first) {
        splitName[0] = first;
    }

    this.setLastName = function(last) {
        splitName[1] = last;
    }

    // get full name
    this.getFullName = function(fullName) {
        return `${this.getFirstName()} ${this.getLastName()}`
    }

    // set full anme
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
        splitName = fullName.split(" ");
    }

}

const bob = new Person("Bob Ross")
bob.setFullName("Heskell Ross")

console.log(Object.keys(bob).length);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

