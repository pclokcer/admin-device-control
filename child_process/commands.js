const exec = require('./index')

module.exports = {
    async updateModbus() {
        return await new Promise(async (resolve, reject) => {
            const wait = await exec("make update_Modbus", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return reject(false);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                }
            });
            resolve(true)
            /*wait.on("exit", function (code, signal) {
                resolve(true)
            })*/
        })
    }
}
