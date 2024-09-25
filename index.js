let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection',(socket) => {

    socket.on('disconnect', () => {
        console.log('Usuario : ' + socket.id + ' se desconectou.');
    })

    socket.on('msg', (data) => {
        io.emit('showmsg',data);
    })
})


app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index');
})

http.listen(8080, () => {
    console.log('App rodando.');
})