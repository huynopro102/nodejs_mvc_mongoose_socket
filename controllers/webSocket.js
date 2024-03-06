const User = require("../data/user.model");
async function userSumbitLogin(message) {
  try {
    console.log("day la message ", message);
  } catch (error) {
    console.error("Error during userSumbit:", error);
  }
}
async function userSumbitSignup(message) {
  try {
    const avatar = `https://avatar.iran.liara.run/public/${message[2] === `male` ? `boy` : `girl`}`;
    console.log(avatar);
    console.log("day la message ", message[0]);
    console.log("day la message ", message[1]);
    console.log("day la message ", message);

    // // Tạo đối tượng User từ message
    const newUser = new User({
      email: message[0],
      password: message[1],
      gender: message[2] === 'male' ? 'male' : 'female',
      profilePicture: avatar , // Nếu không có profilePicture, mặc định là ""
    });
    // Lưu đối tượng User vào cơ sở dữ liệu
    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);
  } catch (error) {
    console.error("Error during userSumbit:", error);
  }
}
module.exports = {
  userSumbitLogin,
  userSumbitSignup,
};