const mongoose=require('mongoose')

async function dbconn(){
    try{
    await mongoose.connect('mongodb://localhost:27017/studentapp');
    console.log("Database connected succssfully!!!")
    }catch(err){
        console.log(err.message);
    }
}
module.exports=dbconn;