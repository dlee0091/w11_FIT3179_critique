var vg_1 = "js/hw9.vg.json"; 
vegaEmbed("#map_chart", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "js/hw10.vg.json";  
vegaEmbed("#bubble_plot", vg_2).then(function(result) {
    // Access the Vega view instance for the bubble plot
}).catch(console.error);

// var vg_3 = "js/not_grouped_bar_chart.vg.json";  
// vegaEmbed("#dea", vg_3).then(function(result) {
//     // Access the Vega view instance for the grouped bar chart
// }).catch(console.error);

var vg_4 = "js/radial.vg.json";  
vegaEmbed("#radial_chart", vg_4).then(function(result) {
    // Access the Vega view instance for the grouped bar chart
}).catch(console.error);

var vg_5 = "js/grouped_bar_chart.vg.json";  
vegaEmbed("#grouped_bar_chart", vg_5).then(function(result) {
    // Access the Vega view instance for the grouped bar chart
}).catch(console.error);


var vg_6 = "js/bubble_chart.vg.json";  
vegaEmbed("#bubble_chart", vg_6).then(function(result) {
    // Access the Vega view instance for the grouped bar chart
}).catch(console.error);


var vg_7 = "js/malaysia_map.vg.json";  
vegaEmbed("#malaysia_map", vg_7).then(function(result) {
    // Access the Vega view instance for the grouped bar chart
}).catch(console.error);
