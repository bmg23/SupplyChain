//Financial Year
jexcel(document.getElementById('financial_year'), {
    data:[{"Financial Year" : "FY 22"}],
    columns: [{ title:"Financial Year", width:width }]
});

var width = 75; 

//Header data for each table. 
var current_ntwk_headers = [{title:"Current Network",  width:width}, 
                            {title:"Pkgs('000)",  width:width}];  
var future_ntwk_headers = [{title:"Future Network",  width:width}, 
                           {title:"Pkgs('000)",  width:width}];  
var location_rank_headers = [{title:"Location Rank",  width:width}, 
                             {title:"Facility",  width:width}, 
                             {title:"Pkgs('000)",  width:width}];  
var cost_table_headers = [{title:"Cost ('000)",  width:width}]; 


for (var i = 1; i < 9; ++i) {
    //Make zone names, ex. Zone 1
    var zone_str = "Zone " + i; 
    var zone_obj = {title:zone_str, width:width}; 


    //Add Zone name to header arrays
    current_ntwk_headers.push(zone_obj);
    future_ntwk_headers.push(zone_obj);
    location_rank_headers.push(zone_obj);
    cost_table_headers.push(zone_obj);

}

//Add 'Total' to the arrays
current_ntwk_headers.push({title:"Total", width:width});
future_ntwk_headers.push({title:"Total", width:width});
location_rank_headers.push({title:"Total", width:width});
cost_table_headers.push({title:"Total", width:width});

  

/*CURRENT NETWORK TABLE*/ 
var data_current_network = [
    ["2-Day"],
    ["Ground"], 
    ["Next Day"],
    ["Sure Post"],
    ["Total"]
]; 

jexcel(document.getElementById("current_network"), {
    data:data_current_network,
    columns:current_ntwk_headers
});

//Cost 
var data_current_network_cost = []; 

jexcel(document.getElementById("cost1"), {
    data:data_current_network_cost,
    columns:cost_table_headers
});



/*FUTURE NETWORK TABLE*/ 
var data_future_network = [
    ["2-Day"],
    ["Ground"], 
    ["Next Day"],
    ["Sure Post"],
    ["Total"]
]; 

jexcel(document.getElementById("future_network"), {
    data:data_future_network,
    columns:future_ntwk_headers
});

//Cost 
var data_future_network_cost = []; 

jexcel(document.getElementById("cost2"), {
    data:data_future_network_cost,
    columns:cost_table_headers
});


/*LOCATION RANK TABLE*/ 
var data_location_rank = [
    ["2-Day"],
    ["Ground"], 
    ["Next Day"],
    ["Sure Post"],
    ["Total"]
]; 


jexcel(document.getElementById("location_rank"), {
    data:data_location_rank,
    columns:location_rank_headers
});

//Cost 
var data_location_rank_cost = []; 

jexcel(document.getElementById("cost3"), {
    data:data_location_rank_cost,
    columns:cost_table_headers
});


