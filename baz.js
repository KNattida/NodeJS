var Baz = function () {}; 
Baz.prototype.log = function () 
{ 	
    console.log('baz!'); 
}; 
exports.Baz = new Baz();
//ใช้กรณีต้องการรวบรวม package