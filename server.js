var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017"
var nodemailer = require('nodemailer');
var express=require('express');
var app= express();
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ksdrao7@gmail.com',
    pass: '@Deepika16022002'
  }
});
app.use(express.static('public'));
app.post('/Support_Us',urlencodedParser,function(req,res){
	response={
		name:req.body.name,		
		mail_id:req.body.mail_id,
		date_v:req.body.date_v,
		age:req.body.age,
		no_of_mem:req.body.no_of_mem,
		occu:req.body.occu,
		activity:req.body.activity,
		opinion:req.body.opinion,
		topic:req.body.topic
	};
	console.log(response);
	MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
	if(err) throw err;
		var dbo=db.db('mylib');
		dbo.collection('data').insertOne(response,function(err,res){
			console.log('db connected')
			if(err) throw err;
			var mailOptions = {
				from: 'ksdrao7@gmail.com',
				to: req.body.mail_id,
				subject: 'Surakha Orphan Home',
				text: `   		Welcome to the Suraksha Orphan Society. `+response.name.toUpperCase()+` ,you truly have a great heart.And your vist to the orphanage on  `+response.date_v+` for `+response.activity+` has been confirmed by the management.
		And hope you will have a fun time with kids`
			};
			transporter.sendMail(mailOptions, function(err, info){ 
				if (err) throw err;
				console.log('Email sent to ' +response.name);
			});
			console.log("Document Inserted");
			db.close();
		})
	});
	
});
app.post('/Donate_Us',urlencodedParser,function(req,res){
	response={
		name:req.body.name,		
		mail_id:req.body.mail_id,
		phone_no:req.body.phon,
		ammount:req.body.ammount,
		payment:req.body.payment,
		comment:req.body.comment
	};
	console.log(response);
	MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
	if(err) throw err;
		var dbo=db.db('mylib');
		dbo.collection('donations').insertOne(response,function(err,res){
			if(err) throw err;
			var mailOptions = {
				from: 'ksdrao7@gmail.com',
				to: response.mail_id,
				subject: 'Surakha Orphan Home',
				text: `   		Hello `+response.name.toUpperCase()+` ,your transaction of Rs.`+response.ammount +` has been done sucessfully. Thanks for donating. Your effort really means a lot to all of our kids.Thank You  `
			};
			transporter.sendMail(mailOptions, function(err, info){ 
				if (err) throw err;
				console.log('Email sent to ' +response.name);
			});
			console.log("Document Inserted");
			db.close();
		})
	});

});
app.post('/Contact_Us',urlencodedParser,function(req,res){
	response={
		name:req.body.name,		
		mail:req.body.mail,
		message:req.body.message
	};
	console.log(response);
	MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
	if(err) throw err;
		var dbo=db.db('mylib');
		dbo.collection('donations').insertOne(response,function(err,res){
			if(err) throw err;
			console.log("Document Inserted");
			db.close();
		})
	});

});
app.listen(5000,()=>console.log('Server Running Successfully'));
