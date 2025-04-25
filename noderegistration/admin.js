const express=require('express');
const cors=require('cors');
const fs=require('fs').promises;
const port=3001;

const app=express();
app.use(express.json());
app.use(cors());
app.get("/search/:email",async (req,res)=>{
    let arr=[];
    const {email}=req.params;
    console.log(email)
     const data1=await fs.readFile('student.json',{encoding:'utf-8'});
     arr=JSON.parse(data1);
      let filedata=arr.find(ele=>ele.email==email);
     if(!filedata){
        res.send("Data not found");
     }
     res.status(200).json(filedata);
})


app.delete("/delete/:email",async(req,res)=>{
        let arr=[];    
        const {email} =req.params;
        console.log(email)
        const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
           arr=JSON.parse(fdata);
           let index=arr.findIndex(ele=>ele.email==email);
           if(index==-1){
            return res.send("No data available to delete");
           }
           arr.splice(index,1);
           await fs.writeFile('student.json',JSON.stringify(arr));
           res.status(200).json(JSON.stringify({msg:"Data deleted successfully"}))

})
app.listen(port,()=>{
    console.log("Express server is running on::"+port)
})

