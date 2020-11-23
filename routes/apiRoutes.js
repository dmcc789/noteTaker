// const fs = require("fs");
// const path = require("path");
const uniqid = require("uniqid");
const dbNotesData = require("../db/db.json");


module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(dbNotesData);
  });

  app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    newNote.id = uniqid();
    dbNotesData.push(newNote);
    res.json(dbNotesData);
  });

  app.delete("/api/notes/:id", function(req, res) {
    let uniqueNote = req.params.id;
    
    for (let i = 0; i < dbNotesData.length; i++) {
      let note = dbNotesData[i];

      if (uniqueNote === note.id) {
        dbNotesData.splice(i, 1);
      }      
    }
    res.json(dbNotesData);
  });
};


// // 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// const moreThan5Array = originalArray.filter(num => num > 5);