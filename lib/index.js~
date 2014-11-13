
module.exports= function(server,app){
	var io = require('socket.io').listen(server,{log:false});//need to search for what is log here
	io.on('connection',function(socket){
		
		socket.on('msg', function(data){
			var mes = data.msg;
			io.sockets.emit('new msg',{data:mes});	
		});

	})
}
