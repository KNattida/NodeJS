/*var http = require('http'); 
http.createServer(function(req,res){ 
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('yes you can\n');
}).listen(8000);
console.log("server running port 8000"); */

require("./foo");
foo();
foo2("v1","v2","v3");

var bar = require('./bar'); 
bar();

var fz = require('./fiz').fiz; 
fz();    //โหลด 1  function เท่านั้นทำให้ memory ไม่เปลือง

var fz2 = require('./fiz').fiz2; 
fz2("xxxxxxxxx");

var fzz = require('./fiz'); 
fzz.fiz();
fzz.fiz2("yyy");   //ใช้กรณีต้องการเรียกหลายฟังก์ชั่น 

var buz = require('./buz'); 
buz.log();
//buz.log2("John");

var baz = require('./baz').Baz; 
baz.log();

var Doo = require('./doo'); 
var doo = new Doo(); 
doo.log();  // Case sensitive Doo not equal doo

var Qux = require('./qux').Qux; 
var qux = new Qux(); 
qux.log();
