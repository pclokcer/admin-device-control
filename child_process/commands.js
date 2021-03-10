const exec = require('./index')

module.exports = {
    async updateModbus() {
        return await new Promise((resolve, reject) => {
            const wait = exec("make update_Modbus", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return reject(false);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                }
            });
            wait.on("exit", resolve(true))
        })
    }
}
