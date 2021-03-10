const exec = require('../../child_process/commands')

/**
 * Update
 */
exports.update = async (req, res, next) => {
    let status = await exec.updateModbus();
    if (status == true)
        return res.status(200).json({ message: "Modbus Güncellendi" })
    return res.status(200).json({ message: "Modbus Güncellemede Hata Oluştu" })
}