const pool = require("../data/connectDB");
const { vigenereEncrypt ,vigenereDecrypt } = require("../demoMaHoa");
const connected = require("../data/connectDB")
const jwt = require("jsonwebtoken");

let getHome = async (req,res)=>{
  res.render("home.ejs")
}

let login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    console.log("pass da nhap vo la ", password);

    
    // Giả sử mật khẩu đã lưu trong cơ sở dữ liệu là đã được mã hóa
    const [rows, fields] = await pool.execute(
      "select * from account where email = ?",
      [username]
      );

      const mat_khau = vigenereDecrypt(rows[0].password,"KEY")

    if (rows.length === 1) {
      console.log(password , mat_khau)
      if (password === mat_khau) {
        console.log("post thanh cong ");

        // Set cookie with the token
        var token = jwt.sign(
          { userId: rows[0].id, email: rows[0].email },
          "shhhhh"
        );
        var tokenUserName = jwt.sign(rows[0].email,"shhhhh")
        res.cookie("tokenUser", token);
        res.cookie("username", tokenUserName);

        return res.status(200).json("thanh cong post login");
      } else {
        res.status(500).json("dang nhap that bai");
      }
    } else {
      res.status(500).json("dang nhap that bai");
    }
  } catch (error) {
    console.error("Error during sign out:", error);
    res.status(500).json("Internal Server Error");
  }
};

let getLogin = (req,res) =>{
  res.render("login.ejs")
}
let getSignup = (req,res )=>{
  res.render("signup.ejs")
}
let getForgotPassword = (req,res) =>{
  res.render("forgotPassword.ejs")
}

let signup = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const cfpassword = req.body.cfpassword
    console.log(username , password , cfpassword)
    const mahoa = vigenereEncrypt(password, "KEY");
    console.log(mahoa)
    const [rows, fields] = await pool.execute(
      "INSERT INTO account (email, password) VALUES (?, ?)",
      [username, mahoa]
    );

    if (rows.affectedRows > 0) {
      res.status(200).json("đăng ký thành công");
    } else {
      res.status(500).json("đăng ký thất bại");
    }
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json("Internal Server Error");
  }
};

let home = (req, res) => {
    // Xóa cookie 'tokenUser'
    res.clearCookie('tokenUser');
  
    // Xóa cookie 'username'
    res.clearCookie('username');
  
    return res.status(200).json("Đã đăng xuất thành công");
  };

module.exports = {
  login,
  signup,
  home , 
  getLogin ,
  getSignup ,
  getForgotPassword,
  getHome
};
