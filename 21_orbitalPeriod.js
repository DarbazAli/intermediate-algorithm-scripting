/* 
    Map the Debris
    Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

    The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

    The values should be rounded to the nearest whole number. The body being orbited is Earth.
*/

const orbitalPeriod = (arr) => {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    
    return arr.map( function(obj) {
        return {
            name: obj.name,
            orbitalPeriod: Math.round( 2 * Math.PI * Math.sqrt( Math.pow(earthRadius + obj.avgAlt, 3) / GM ) )
        }
    });
}
  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

