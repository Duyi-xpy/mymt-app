/**
 * 同步数据库模型操作
 * 
 * 
 */

 require("./Admin")
 require("./Menutype")
 require("./SearchHot")
 require("./User")
 const sequelize = require("./dbcon");
 sequelize.sync({
     alter:true
 }).then(()=>{
     console.log("数据模型同步完成");
 })