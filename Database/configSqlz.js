require('dotenv').config()

/*const config = {
    db:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        connectionLimit: 10,
    }
};*/
const{Sequelize}=require("sequelize");

//const sequelize =new Sequelize("web_project2", "root","root",{host: "localhost",dialect:'mysql'});
const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  
  sequelize
    .sync()
    .then(() => {
      console.log("Tables created.");
    })
    .catch((err) => {
      console.error("Error creating tables:", err);
    });
module.exports=sequelize;
//DB_HOST = 127.0.0.1
//DB_USER = root
//DB_PASS = root
//DB_NAME = web_project