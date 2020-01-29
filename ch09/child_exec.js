var childProcess = require('child_process');
var options = {maxBuffer:100*1024, encoding:'utf8', timeout:5000};
var child = childProcess.exec('dir ~', options,
    function (error, stdout, stdErr) {
        if (error) {
            console.log(error.stack);
            console.log('Error Code: '+error.code);
            console.log('Error Signal: '+error.signal);
        }
        console.log('Results: \n' + stdout);
        if (stdErr.length){
            console.log('Errors: ' + stdErr);
        }
    });
child.on('exit', function (code) {
    console.log('Completed with code:'+code);
});