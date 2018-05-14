const async = require("async");

async.parallel([
    function(callback) {
        setTimeout(function() {
            console.log('one');
            callback(null, 'one');
        }, 200);  // เพื่อกำหนดการทำงาน
    },
    function(callback) {
        setTimeout(function() {
            console.log('two');
            callback(null, 'two');
        }, 100); // เพื่อกำหนดเวลาการทำงาน
    },
    function(callback) {
        setTimeout(function() {
            console.log('three');
            callback("ERROR-STEP-3", 'three');
        }, 150); // เพื่อกำหนดเวลาการทำงาน
    }    

],
// optional callback
function(err, results) {
    console.log(err);
    console.dir(results);
});
