const express = require("express");
const router = express.Router();
const con = require("../library/db_connec");

//Get all orders from db
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM orders", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Getting all the orders by id
router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM orders WHERE order_id=${req.params.id}`,
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

//Adding a new order into the db
router.post("/", (req, res) => {
  const {
    order_id,
    user_id,
    amount,
    shipping_address,
    order_email,
    order_date,
    order_status,
  } = req.body;

  try {
    con.query(
      `INSERT INTO orders (order_id, user_id, amount, shipping_address, order_email, order_date, order_status) VALUES ("${order_id}", "${user_id}", "${amount}", "${shipping_address}", "${order_email}", "${order_date}", "${order_status}")`,
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
  const {
    order_id,
    user_id,
    amount,
    shipping_address,
    order_email,
    order_date,
    order_status,
  } = req.body;
  try {
    con.query(
      `UPDATE orders SET order_id = "${order_id}", user_id = "${user_id}", amount = "${amount}", shipping_address = "${shipping_address}", order_email = "${order_email}", order_date = "${order_date}", order_status = "${order_status}" WHERE order_id=${req.params.id}`,
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
      `DELETE FROM orders WHERE order_id=${req.params.id}`,
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
