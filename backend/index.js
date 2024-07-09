require('./db')

const express=require('express');
const PORT=process.env.PORT||5000;
const mongoose=require('mongoose');
const cors=require("cors");
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const app=express();
const infoModel=require('./models/info');

app.use(bodyParser.json())
app.use(express.json());

const allowedOrigins=[process.env.FRONTEND_URL]
app.use(cors({
	origin:function(origin,callback){
		if(!origin||allowedOrigins.includes(origin)){
			callback(null,true);
		}else{
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials:true,
	})
);

app.listen(PORT,()=>{
	console.log('Server running at '+PORT);
});

//Retrieves information from the database
app.get('/info',(req,res)=>{
	infoModel.find({location:req.query.location,unit:req.query.unit})
	.then(info=>res.json(info))
	.catch(err=>res.json(err))
})