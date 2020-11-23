const fs = require("fs");
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
    fs.writeFile('db.json', dbNotesData, function (err) {
      if (err) throw err;
      console.log('New note added and new file written');
    });
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
    fs.writeFile('db.json', dbNotesData, function (err) {
      if (err) throw err;
      console.log('Note deleted and new file written');
    });
    res.json(dbNotesData);
  });
};


