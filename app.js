var mysql = require('mysql');
let date_ob = new Date();
const fs = require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
	 input: process.stdin,
    output: process.stdout
});


// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();


try {
	
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "root",    // user name to your mysql database
  password: "",  // corresponding password
  database: "alarm"
});
// access elements
var simdi = hours + ':' + minutes;
var gunluk = date + '/' + month + '/' + year;
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  con.query("SELECT * FROM gorevListe where Statu='0'", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
	
	 Object.keys(result).forEach(function(key) {
      var row = result[key];
	  var gorevtarih = row.tarih;
  if(gunluk == row.tarih){
	  //ses
console.log("\007");	

//mesaj 
console.log('\n \n-------------------------------------------------------');
console.log('Task : \x1b[36m%s\x1b[0m', '' + row.gorev);
console.log('------------------------------------------------------- \n');
console.log('Date : \x1b[36m%s\x1b[0m', '' + row.tarih);

console.log('------------------------------------------------------- \n');
console.log('Detail : \x1b[36m%s\x1b[0m', '' + row.ayrinti);
console.log('------------------------------------------------------- \n');
console.log('ID : \x1b[36m%s\x1b[0m', '' + row.ID);
console.log('------------------------------------------------------- \n \n');
var upet = "UPDATE gorevListe SET Statu='1' WHERE id=" + row.ID + "";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
 
function deneme(){
 console.log(" 1-) Delete Task \n 2-) Task Dont needed \n 3-)Change  date \n 4-)Change Task Detail \n 5-)See All")

rl.question("Select ", function(sec1) {
    rl.question("Whic ID or ID:VALUE", function(sec2) {
	
      if(sec1 == '1'){
      var upet = "DELETE FROM gorevListe WHERE ID='" + sec2 + "'";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
       
		  console.log("Deleted..");
	  }else if(sec1 == '2'){
      var upet = "UPDATE gorevListe SET Statu='1' WHERE id=" + sec2 + "";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
		  console.log("ok");
	  }else if(sec1 == '3'){
		 var myarr = sec2.split(":");
var upet = "UPDATE gorevListe SET tarih='" + myarr[1] + "' WHERE id=" + myarr[0] + "";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
			 console.log("Date Change ok : " + myarr[1] + " ...");
		
	  }else if(sec1 == '5'){
		  con.query("SELECT * FROM gorevListe where Statu='0'", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
	
	 Object.keys(result).forEach(function(key) {
      var row = result[key];
	  var gorevtarih = row.tarih;

	  //ses
console.log("\007");	

//mesaj 
console.log('\n \n-------------------------------------------------------');
console.log('Task : \x1b[36m%s\x1b[0m', '' + row.gorev);
console.log('------------------------------------------------------- \n');
console.log('Date : \x1b[36m%s\x1b[0m', '' + row.tarih);

console.log('------------------------------------------------------- \n');
console.log('Detail : \x1b[36m%s\x1b[0m', '' + row.ayrinti);
console.log('------------------------------------------------------- \n');
console.log('ID : \x1b[36m%s\x1b[0m', '' + row.ID);
console.log('------------------------------------------------------- \n \n');
  });
	  });
	  }
	  else{
		 	 var myarr = sec2.split(":");
var upet = "UPDATE gorevListe SET ayrinti='" + myarr[1] + "' WHERE id=" + myarr[0] + "";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
			 console.log("Detail change ok : " + myarr[1] + "...");
		
	  }
      rl.close(); 
    });
});
 }
while(true){
	return deneme();
}

  }else{
	  console.log(" 1-) Task Delete \n 2-) Task none \n 3-)Task date change \n 4-)Task Detail cahgne \n 5-)See All")

	  rl.question("Hangi İşlemi yapmak istersiniz ", function(sec1) {
    rl.question("Hangi ID VEYA ID:DEGER", function(sec2) {
	
          if(sec1 == '1'){
      var upet = "DELETE FROM gorevListe WHERE ID='" + sec2 + "'";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
       
		  console.log("Deleted..");
	  }else if(sec1 == '2'){
      var upet = "UPDATE gorevListe SET Statu='1' WHERE id=" + sec2 + "";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
		  console.log("ok");
	  }else if(sec1 == '3'){
		 var myarr = sec2.split(":");
var upet = "UPDATE gorevListe SET tarih='" + myarr[1] + "' WHERE id=" + myarr[0] + "";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
			 console.log("Date Change ok : " + myarr[1] + " ...");
		
	  }else if(sec1 == '5'){
		  con.query("SELECT * FROM gorevListe where Statu='0'", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
	
	 Object.keys(result).forEach(function(key) {
      var row = result[key];
	  var gorevtarih = row.tarih;

	  //ses
console.log("\007");	

//mesaj 
console.log('\n \n-------------------------------------------------------');
console.log('Task : \x1b[36m%s\x1b[0m', '' + row.gorev);
console.log('------------------------------------------------------- \n');
console.log('Date : \x1b[36m%s\x1b[0m', '' + row.tarih);

console.log('------------------------------------------------------- \n');
console.log('Detail : \x1b[36m%s\x1b[0m', '' + row.ayrinti);
console.log('------------------------------------------------------- \n');
console.log('ID : \x1b[36m%s\x1b[0m', '' + row.ID);
console.log('------------------------------------------------------- \n \n');
  });
	  });
	  }
	  else{
		 	 var myarr = sec2.split(":");
var upet = "UPDATE gorevListe SET ayrinti='" + myarr[1] + "' WHERE id=" + myarr[0] + "";
 con.query(upet, function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
 });
			 console.log("Task Detail Change : ${sec3}...");
		
	  }
      rl.close(); 
    });
});
	  console.log("Not Today..");
  }
    // if there is no error, you have the result
    //console.log(result);
  });
});
});

} catch (err) {
  console.error(err);
}


console.log(simdi);
