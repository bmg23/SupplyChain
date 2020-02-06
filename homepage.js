console.log("Hey from homepage."); 
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
var data1 = 0; 
//Current Network 
jexcel(document.getElementById("current_network"), {
    data:data1,
    columns:current_ntwk_headers
});

//Cost 
jexcel(document.getElementById("cost1"), {
    data:data1,
    columns:cost_table_headers
});



/*FUTURE NETWORK TABLE*/ 
var data2 = 0; 

jexcel(document.getElementById("future_network"), {
    data:data2,
    columns:future_ntwk_headers
});

//Cost 
jexcel(document.getElementById("cost2"), {
    data:data1,
    columns:cost_table_headers
});


/*LOCATION RANK TABLE*/ 
var data3 = 0; 


jexcel(document.getElementById("location_rank"), {
    data:data3,
    columns:location_rank_headers
});

//Cost 
jexcel(document.getElementById("cost3"), {
    data:data1,
    columns:cost_table_headers
});

