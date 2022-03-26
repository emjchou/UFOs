// in this file, we will keep the code that builds the HTML table, and fills it with the data from data.js file.

// import the data from data.js
const tableData=data;

// note: D3 is a javascript library that allows for HRML webpage graphics. used for dashboards or visual data
// reference the HTML table using d3.select tells javascript to go to HTML and search for "tbody" tags. then assign to variable tbody
var tbody = d3.select("tbody");

// simple javascript console.log statement
function printHello(){
    console.log("Hello there!");
};

function buildTable(data){
    // clear data by building an empty table
    tbody.html("");

    // loop thru each object in the data
    // append a row and cells for each value in the row
    // add the forEach function
    data.forEach((dataRow)=>{
        //append a ROW to the table body
        let row=tbody.append("tr");
        
        // loop thru each field in the dataRow arguement
        // and add each value as a table CELL/DATA.
        Object.values(dataRow).forEach((val) =>{
            // create a variable to append data to table
            let cell = row.append("td");

            // add the values -- .text(value) added to a variable, extracts only the text of the value
            cell.text(val)
        });
    });
};

function handleClick(){
    // create a variable to hold date data
    let date  = d3.select("#datetime").property("value")

    // table data is original data as imported from data.js file. 
    // start off the filteredData from a blank state -- no filters, just the original table
    let filteredData=tableData;

    // if a date is entered, filter on that date
    if (date) {
        // apply a filter method that will match the datetime value to the filtered date value
        // i.e. only show rows where the date is equal to the filter date (date).
        // === triple equal sign checks for strict equality (type and value have to match perfectly)
        // -- double equal sign checks for loose equality. the type and value are loosely matched. 
        filteredData=filteredData.filter(row=>row.datetime === date);
    };

    // call the buildTable function with filteredData as the arguement
    // so that only the data that matches the filter is displayed
    buildTable(filteredData);
}

// listen for the event
// use D3 to listen for the button click
d3.selectAll("#filter-btn").on("click", handleClick);
    // "#filter-btn" is the selector string, and it contains the id for another HTML tag.
    // .on("click", handleClick), when filter-btn is "click"ed, execute handleClick function.

// call the build function with the original data imported
// so that the original table loads as soon as the page does
buildTable(tableData);