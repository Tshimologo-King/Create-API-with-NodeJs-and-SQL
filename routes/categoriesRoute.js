const express = require("express");
const router = express.Router();
const con = require("../library/db_connec");

//Getting all the categories from the db
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM categories", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Getting all the categories by id
router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM categories WHERE category_id=${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Adding a new category into the db
router.post("/", (req, res) => {
  const { category_id, name, description, thumbnail } = req.body;

  try {
    con.query(
      `INSERT INTO categories (category_id, name, description, thumbnail) VALUES ("${category_id}", "${name}", "${description}", "${thumbnail}")`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Edit and Update by id
router.put("/:id", (req, res) => {
  const { name, description, thumbnail } = req.body;
  try {
    con.query(
      `UPDATE categories SET name = "${name}", description = "${description}",thumbnail = "${thumbnail}" WHERE category_id=${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Delete category using id
router.delete("/:id", (req, res) => {
  try {
    con.query(
      `DELETE FROM categories WHERE category_id=${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
module.exports = router;
