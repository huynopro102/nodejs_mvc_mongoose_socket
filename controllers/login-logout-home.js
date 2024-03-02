const { request } = require("express");
const pool = require("../data/connectDB")

let login = async (req, res) => {
    try {
        const [rows, fields] = await pool.execute(
            "SELECT * FORM `account` WHERE 1",
        );
        if (rows[0]) {
            return res.status(200).json("dang nhap thanh cong");
        }
        else {
            return res.status(500).json("dang nhap that bai");
        }
    } catch (error) {
      console.error("Error during sign out:", error);
      // Handle errors appropriately
      res.status(500).json("Internal Server Error");
    }
}

let signup = async (req, res) => {
    try {
        const [rows, fields] = await pool.execute(
            "SELECT * FORM `account` WHERE 1",
        );
        if (rows[0]) {
            return res.status(200).json("dang nhap thanh cong");
        }
        else {
            return res.status(500).json("dang nhap that bai");
        }
    } catch (error) {
      console.error("Error during sign out:", error);
      // Handle errors appropriately
      res.status(500).json("Internal Server Error");
    }
}