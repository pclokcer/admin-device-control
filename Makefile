update_Modbus:
	pm2 stop ../iot-modem/app.js
	git -C ../iot-modem/ pull https://pclokcer:1282645_gh@github.com/pclokcer/iot-modem
	pm2 start ../iot-modem/app.js