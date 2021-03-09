const modbus_connect = require('../../modbus/connect');
const modbus_write = require('../../modbus/write');
const modbus = require('../../modbus/index');
const state = require('../../state/index');

/**
 * Write Modbus
 */
exports.write = async (req, res, next) => {
    if (modbus.isOpen == false) {
        await modbus_connect.connect(9600, "none", 8, 1);
    }
    modbus.setID(1);
    await modbus_write.singleWrite(1, 5);
    return res.status(200).json("rows")
}

/**
 * Stop Modbus Interval
 */
exports.stopmodbus = async (req, res, next) => {
    state.stopInterval();
    return res.status(200).json("Modbus Durduruldu")
}

/**
 * Run Modbus Interval
 */
exports.runmodbus = async (req, res, next) => {
    state.stopInterval();
    new Promise((resolve, reject) => {
        setTimeout(async () => {
            await state.start();
            resolve();
        }, 200)
    }).then(e => {
        return res.status(200).json("Çalışıyor")
    })
}
