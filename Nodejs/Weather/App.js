const http = require("http");
// const axios = require("axios");
const fs = require("fs");
const request = require("requests");
const celcius = (a, b) => {
    return (a - b).toFixed(1);
}
const sunset = (sunsetTimestamp) => {
    const sunriseDate = new Date(sunsetTimestamp * 1000);
    const sunsetTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return sunsetTime;
}
const indexHtml = fs.readFileSync("index.html", "utf-8"); 
const replaceVal = (tempVal, origval) => {
    let data = tempVal.replace("{%temp%}", celcius(origval.main.temp, 273.15));
    data = data.replace("{%contry%}", origval.sys.country);
    data = data.replace("{%city%}", origval.name);
    data = data.replace("{%sunrice%}", sunset(origval.sys.sunrise));
    data = data.replace("{%sunset%}", sunset(origval.sys.sunset));
    data = data.replace("{%feellike%}", celcius(origval.main.feels_like, 273.15));
    data = data.replace("{%temomax%}", celcius(origval.main.temp_max, 273.15));
    data = data.replace("{%tempmin%}", celcius(origval.main.temp_min, 273.15));
    data = data.replace("{%Humidity%}", origval.main.humidity);
    data = data.replace("{%main%}", origval.weather[0].main);
    data = data.replace("{%image%}", `https://openweathermap.org/img/wn/${origval.weather[0].icon}.png`);
    return data;
}
const server = http.createServer((req, resp) => {
    if (req.url == '/') {
        request('https://api.openweathermap.org/data/2.5/weather?q=patna&appid=3e5e9660aa9001aa6bfcbab023b951f4')
            .on('data', (chunk) => {
                const objdata = JSON.parse(chunk);
                const data = replaceVal(indexHtml, objdata).toString();
                resp.write(data);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                resp.end();
            });
    }
});
server.listen(8000, "127.0.0.1");