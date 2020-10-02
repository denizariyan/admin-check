var platform = require("os").platform();

function _check() {
    return new Promise(resolve => {
        if (platform == "win32" || platform == "win64") {
            require('child_process').exec('net session', function (err, stdout, stderr) {
                if (err) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        } else {
            throw new Error('Can not determine if admin priviliges are present or not')
        }
    });
}


exports.check = async function () {
    var result = await _check();
    return result

}