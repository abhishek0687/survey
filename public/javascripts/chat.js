var socket = io.connect("http://pinglam.jit.su");

	function newMsg(){
		msg = $('#userName').val();
		if(msg.trim()!=''){
			socket.emit('msg',{msg:msg});
		}
		$('#userName').val('');
	}

/*
	function chat_app(){
		$('#userName').keypress(function(e){
			if(e.keyCode==13){
			  newMsg();
			  e.stopPropagation();
			  e.stopped = true;
			  e.preventDefault();
			}
		})
}
*/

function chat_app(){
	var i=0;
/*	if(i==0){
		socket.on('new socket',function(data){
			document.getElementById('chat').innerHTML='';	
			for(var k=0;k<data.msg.length;k++){
				$('#chat').prepend('<div><span>'+data.msg[k].U_Id  +'  :  </span><span>'+data.msg[k].Message+'</span></div>');
			}
			i++;
		});
	}
*/	
	socket.on('new msg',function(data){
		$('#chat').prepend('<li class="CC">'+data.data +'</li>');	
	});
	
	$('#userName').keypress(function(e){
		if(e.keyCode==13){
		  newMsg();
		  e.stopPropagation();
		  e.stopped = true;
		  e.preventDefault();
		}
	})	
}
