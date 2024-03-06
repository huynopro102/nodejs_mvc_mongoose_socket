const mongoose = require('mongoose');
require("dotenv").config();

const URL = process.env.MONGOOSE_URL;

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const connection = await mongoose.connect(URL, options);
    console.log('Kết nối với MongoDB thành công');
    return connection;  // Trả về đối tượng Mongoose đã kết nối
  } catch (error) {
    console.error('Lỗi khi kết nối với MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;