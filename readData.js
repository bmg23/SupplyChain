
/*********************************READ IN DATA*************************************/
/*Still need to figure out how to pass 
 *multiple args to a function inside 
 *of a .then(). Three functions is ugly. 
 */

//Global Arrays to hold data
var Customer_Orders = []; 
var Shipment_Data = []; 
var Zone_Map = []; 

//Functions to fill arrays
function fillCustomerOrders(data) {
    for(line of data) {
        Customer_Orders.push(line); 
    }
}

function fillShipmentData(data) {
    for(line of data) {
        Shipment_Data.push(line); 
    }
}

function fillZoneMap(data) {
    for(line of data) {
        Zone_Map.push(line); 
    }
}


//Read in data from CSV Files
d3.csv("../CSV_Data/CustomerOrders.csv").then( fillCustomerOrders ); 

d3.csv("../CSV_Data/ShipmentData.csv").then( fillShipmentData ); 

d3.csv("../CSV_Data/ZoneMap.csv").then( fillZoneMap ); 