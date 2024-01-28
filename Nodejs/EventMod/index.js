const EventEmitter = require("events");
const events = new EventEmitter();
events.on('sayName', (sc,msg) => {
    console.log(`Abhishek Tiwari ${sc} ${msg}`);
})
events.emit('sayName',200,'ok');