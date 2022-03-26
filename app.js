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


