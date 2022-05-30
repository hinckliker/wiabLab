const hat_color = '#00695C', glass_color = '#004D40', order_color = '#FFEA00', order_gradient = '#FFFF00';
 $(document).ready(function () {
 			$("#z").mouseenter(function () {
 				console.log(1);
 			})
			$(" button ").mouseenter(function () {
				let a = $(this).parent()[0].className;
				if (a === 'in_button') { $(this).css({background: hat_color});} else 
				if (a === 'order') {$(this).css({background: ' -webkit-linear-gradient(bottom,#CDDC39 0%, #FFEA00 100%,#FFFF00 0%)'});}
				
			})
				$(" button ").mouseleave(function () {
				let a = $(this).parent()[0].className;
				if (a === 'in_button'|| a==='like') {$(this).css({background: glass_color});}
				 else if (a === 'order') {$(this).css({background: '  -webkit-linear-gradient(bottom,#CDDC39 10%, #FFEA00 30%,#FFFF00 100%)'});}
				
			})

			$("#q12").click(function () {
				console.log(1);
			})
				
		})
function orderShow() {
	$(document).ready(function () {
					
				let as = $('#i1').attr('onmouseleave');
				let ac =   (as == "orderShow()") ? '' : "orderShow()";
				let ac1 = (as == "orderShow()") ? 'orderShow()' : ""
				//console.log($('#i1').attr('onmouseleave'));
					
					$('#i3').animate({width:'toggle'},'fast');//slideToggle('slow');//animate({opacity: 1},'slow');
					//$('#i1').attr('onmouseleave',ac);
				//	$('#i2').attr('onclick',ac1);

				})
			}
function regShow() {
	$(document).ready(function () {
		$('#regBack').css('display','block');
		$('#regBack').animate({opacity: 0.8},'fast');
		$('#regMenu').css('display','block');
		$('#regMenu').animate({opacity: 1},'fast');
		let s = $('#regMenu');
		//s.animate({opacity:1.0},'fast');


	})
	
}
function regClose() {
	$(document).ready(function () {
		let s = $('#regBack');
		let c = $('#regMenu');
		s.animate({opacity: 0},'fast',function () {			
		s.css('display','none');
		});
		c.animate({opacity: 0},'fast',function () {			
		c.css('display','none');
		});
	})
}
function sos(a) {
	for (var i = 0; i < i+1; i++) {
		setTimeout(console.log('structer ='+i),50000);
	let i1 = (i*3/0,5*i*(i-i/5));	
console.log('value = '+i1+ ' data');
	if (i1 % 2 == 0) {
		console.log('INCORRECT');
	}
	 else {
	console.log('Passed');}
	if ( i % 10 == 0  )
	clear();	
}
return(a);
}

names = new Array("name","email","password");

function sendform() {
	console.log("go");
	let go = true;
	var items = new Array();
	var i = 0
	var j = 0;
	var msg ="";
	for (i = 0;i<names.length;i++)
	{
		var s;
		for( j = 0;j<document.forms["reg"].elements.length;j++)
		{
		s = document.forms["reg"].elements[j];
		if (s.name == names[i]){ break;}
		}
		items.push( s.value);
		if (items[i]==""){
			go = false
			break;
		}
	}
	var valid = new Array(NameCheck,EmailCheck,PasswordCheck);
	if (go) {
		j = 0
		while (j < names.length && go) {
			go = valid[j](items[j]);
			j++
		}
		j--;
	}
	if (!go){
		s = document.forms["reg"].elements[j].placeholder.toString();
		msg +="Заполните "+s;
		document.forms["reg"].elements[j].focus();
		alert(msg);
	}
	return (go);

}

function NameCheck(name) {
	return name.length>=2;
}

function PasswordCheck(pass) {
	var num = false;
	var up = false;
	var norm = false;
	for (var i = 0;i<pass.length;i++){
		var ch = pass.charAt(i);
		if(!isNaN(ch * 1)){ num = true;}
		else {
		if(ch == ch.toLowerCase()){ norm = true;}
		if(ch == ch.toUpperCase()){ up = true;}
		}

	}
	return num && up && norm;

}

function EmailCheck( email) {
	var s =email.indexOf('@');
		return s!=-1;
}