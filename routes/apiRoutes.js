const fs = require("fs");
const path = require("path");
const uniqueid = require('uniqueid');
const dbNotesData = require("../db/db.json");


module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(dbNotesData);
  });

  app.post("/api/notes", function(req, res) {
    let newNote = req.body;

    
    
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;
    res.json({ ok: true });
  });
};


// function renderHTML(filePath, res) {
//   return fs.readFile(__dirname + filePath, function(err, data) {
//     if (err) throw err;
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }