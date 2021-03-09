update_Modbus:
	pm2 stop ../iot-modem/app.js
	git -C ../iot-modem/ pull
	pm2 start ../iot-modem/app.js
