const async = require("async");

async.waterfall([
    function(callback) {
        callback("ERROR-STEP-1", 'one', 'two'); //null เก็บ error ของตัวแปร
        // 'one' คือ result ที่ 1 ที่ได้จาก function
       // 'two' คือ result ที่ 2 ที่ได้จาก function
    },

    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log("Step 2")
        callback(null, 'three');
    },

    function(arg1, callback) {
        // arg1 now equals 'three'
        console.log("Step 3")        
        callback(null, 'done');
    },
  function(arg1, callback) {
        // arg1 now equals 'three'
        console.log("Step 4")        
        callback(null, 'final');
    }    
    
], function (err, result) {
    // result now equals 'done'
    console.log("final step")    
    if(err){
        console.log(err);
    }    
    console.log(result);
});

