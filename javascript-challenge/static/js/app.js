var tableData = data;

tbody = d3.select("tbody")

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

var cityInputText = d3.select("#city")
var button = d3.select("filter-btn")

var stateInputText = d3.select("#state")
var button = d3.select("filter-btn")

var countryInputText = d3.select("#country")
var button = d3.select("filter-btn")

var shapeInputText = d3.select("#shape")
var button = d3.select("filter-btn")

// filter

function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(new_table);
}

function clickSelect1(){
    d3.event.preventDefault();
    console.log(cityInputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.city===cityInputText.property("value"))
    displayData(new_table);
}

function clickSelect2(){
    d3.event.preventDefault();
    console.log(stateInputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.state===stateInputText.property("value"))
    displayData(new_table);
}

function clickSelect3(){
    d3.event.preventDefault();
    console.log(countryInputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.country===countryInputText.property("value"))
    displayData(new_table);
}

function clickSelect4(){
    d3.event.preventDefault();
    console.log(shapeInputText.property("value"));
    var new_table = tableData.filter(sighting => shape.city===shapeInputText.property("value"))
    displayData(new_table);
}

dateInputText.on("change", clickSelect)
cityInputText.on("change", clickSelect1)
stateInputText.on("change", clickSelect2)
countryInputText.on("change", clickSelect3)
shapeInputText.on("change", clickSelect4)