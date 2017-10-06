// Setup basic express server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var XLSX = require('xlsx');
var server = require('http').createServer(app);
var fs = require('fs');
var util = require('util');
var port = process.env.PORT || 8765;

const workbook_file = "tasks.xlsx";
const ws_name = "Tasks";

/**************************************************/
// Start the Server
/**************************************************/
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

/**************************************************/
// Routing
/**************************************************/
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

app.post('/', function (req, res) {
    updateWorkbook(req.body);

    res.send('Thanks for the data.')
});

function updateWorkbook(data) {
    // We have a single sheet in our Excel file:  "Tasks"
    //   the data is in cells A1:F31 (the header row is A1:F1, actual tasks are A2:F31)
    //   Due Date is in Column D
    //   Completion Date is in Column E
    //   RowID is in Column F

    // Open our Excel file & see how many rows there are
    let workbook = XLSX.readFile(workbook_file);
    let ws = workbook.Sheets[ws_name];
    let rows = XLSX.utils.sheet_to_json(ws).length;

    // Iterate through all the data items we need to update
    for (let d = 0; d < data.length; d++) {
        let rowToUpdate = data[d].id.replace("row_","").split("_")[0];
        let fieldToUpdate = data[d].id.replace("row_","").split("_")[1];
        let newValue = data[d].value;
        
        for (let r = 0; r < rows; r++) {
            let cellAddress = {c: 5, r: 1+r};          // Offset from F1 (the header cell) and is 0 indexed
            let cellRef = XLSX.utils.encode_cell(cellAddress);
            let activeCell = ws[cellRef];

            // We've found the row in our Excel file with matching rowID
            // Let's update the cell in this row for the corresponding field/column
            if(activeCell.v == rowToUpdate){
                let targetAddress;
                let targetCellRef;
                let targetCell;

                switch (fieldToUpdate) {
                    case "dueDate":
                        targetAddress = {c: 3, r: 1+r};
                        break;

                    case "completionDate":
                        targetAddress = {c: 4, r: 1+r};
                        break;
                
                    default:
                        break;
                }

                targetCellRef = XLSX.utils.encode_cell(targetAddress);
                targetCell = ws[targetCellRef];

                targetCell.v = newValue;
            }
        }
        

    }

    XLSX.writeFile(workbook, workbook_file, { cellDates: true });
    console.log("Just saved our Excel file data!");
}