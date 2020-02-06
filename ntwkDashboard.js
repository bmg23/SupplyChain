//Financial Year
jexcel(document.getElementById('financial_year'), {
    data:[{"Financial Year" : "FY 22"}],
    columns: [{ title:"Financial Year", width:width }]
});

var width = 75; 

//Header data for each table. 
var facility_headers = [{title:"Facility (Pkgs '000)",  width:width}];  
var service_level_zone_headers = [{title:"Service Level",  width:width}];  
var service_level_day_headers = [{title:"Service Level",  width:width}];  
var zone_headers = [{title:"Zone",  width:width}]; 
var day_headers = []; 

//
var data_zone = []; 

//Add ZONES
for (var i = 2; i < 9; ++i) {
    //Make zone names, ex. Zone 1
    var zone_str = "Zone " + i; 
    var zone_obj = {title:zone_str, width:width}; 
    var zone_array = [zone_str]; 

    //Add Zone name to header arrays
    facility_headers.push(zone_obj);
    service_level_zone_headers.push(zone_obj);

    data_zone.push(zone_array); 
}

//Add DAYS
for (var i = 1; i < 10; ++i) {
    //Make zone names, ex. Zone 1
    var day_str = i + " Day";
    
    if(i==9) {
        day_str = "9+ Day"
    }
    
    var day_obj = {title:day_str, width:width}; 

    //Add Zone name to header arrays
    service_level_day_headers.push(day_obj);
    zone_headers.push(day_obj);
    day_headers.push(day_obj);
}


//Add 'Total' twice to the arrays
for(var i = 0; i < 2; ++i) {
    facility_headers.push({title:"Total", width:width});
    service_level_zone_headers.push({title:"Total", width:width});
    service_level_day_headers.push({title:"Total", width:width});
}
//Add 'Total' once to the arrays
zone_headers.push({title:"Total", width:width});

  

/*FACILITY TABLE*/ 
var data_facility = [
    ["Chicago, IL (600)"],
    ["Total"],
    ["Total"]
]; 

jexcel(document.getElementById("facility"), {
    data:data_facility,
    columns:facility_headers
});



/*SERVICE LEVEL ZONE TABLE*/ 
var data_service_level_zone = [
    ["2-Day"],
    ["Ground"], 
    ["Next Day"],
    ["Sure Post"],
    ["Total"],
    ["Total"]
]; 
jexcel(document.getElementById("service_level_zone"), {
    data:data_service_level_zone,
    columns:service_level_zone_headers
});


/*SERVICE LEVEL DAY TABLE*/ 
var data_service_level_day = [
    ["2-Day"],
    ["Ground"], 
    ["Next Day"],
    ["Sure Post"],
    ["Total"],
    ["Total"]
]; 


jexcel(document.getElementById("service_level_day"), {
    data:data_service_level_day,
    columns:service_level_day_headers
});


/*ZONE TABLE*/ 

jexcel(document.getElementById("service_level_day"), {
    data:data_zone,
    columns:zone_headers
});


/*DAYS TABLE*/ 
var data_days = []; 


jexcel(document.getElementById("days"), {
    data:data_days,
    columns:day_headers
});


