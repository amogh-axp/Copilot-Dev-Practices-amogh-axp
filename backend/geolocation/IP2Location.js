/**
 * IP2Location module for geolocation.
 * @module IP2Location
 * @requires ip2location-nodejs
 * @see {@link https://www.npmjs.com/package/ip2location-nodejs|ip2location-nodejs}
 */

// Import the IP2Location module
const { IP2Location } = require("ip2location-nodejs");

// Create a new IP2Location object
const ip2location = new IP2Location();
ip2location.open("./geolocation/IP2LOCATION-LITE-DB3.BIN");

/**
 * Function for IP geolocation.
 * @function ipLoc
 * @param {string} IP - The IP address to geolocate.
 * @returns {Object} An object containing the geolocation information for the given IP address.
 * @property {string} ip - The IP address that was geolocated.
 * @property {string} country - The country where the IP address is located.
 * @property {string} city - The city where the IP address is located.
 */
module.exports.ipLoc = function (IP) {
    // Define function-specific variables
    const _func = "ipLoc";
    const debug = true;
    let result, returnObj;

    // Log debug information
    if (debug) {
        console.log(`${_func}: entry`);
    }

    try {        
        {
            //Find the geolocation using the IP input from the local file, and return ip, country and city
            result = ip2location.getAll(IP);
            returnObj = {
                ip: IP,
                country: result.country_short,
                city: result.city
            };

            // Log debug information
            if (debug) {
                console.log(`${_func}: result -> ${JSON.stringify(returnObj)}`);
            }

            // Return the object
            return returnObj;
        }        

    } catch (err) {
        // Log any errors that occur
        console.log(`${_func}: error -> ${err}`);
    }
};
