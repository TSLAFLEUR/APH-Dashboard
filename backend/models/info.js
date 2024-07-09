const mongoose=require('mongoose')
const dotenv=require('dotenv');

const infoSchema = new mongoose.Schema({
	location:{required:true,type:String},
	unit:{required:true,type:Number},
	APH:{required:true,type:Object},
	EV:{required:true,type:Object},
	FIT_160:{required:true,type:Number},
	LIT_160:{required:true,type:Number},
	PIT_160:{required:true,type:Number},
	POCC:{required:true,type:Object},
	Power_Generation:{required:true,type:Object},
	timestamp:{required:true,type:String},
})

const infoModel=mongoose.model(process.env.COL_NAME,infoSchema)

module.exports=infoModel