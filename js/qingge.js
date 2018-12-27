

herder();
herdop();
herdol()



//购物车
function herder(){
	var oCart = document.querySelector('.cart');
	var oCartlink = document.querySelector('.cart-a');
	var oCartb = document.querySelectorAll('.cart-b')[0];
	var oLoader = oCartb.querySelector('.loder');
	var oBosscart = oCartb.querySelector('.boss-cart');
		oCart.onmouseover = function(){
			oCart.style.background = '#fff';
			oCartlink.style.color = '#ff6700';
			// oCartb.style.height = '111px;'
			// console.log(oCartb);
			oLoader.style.display = 'block'
			animate(oCartb,{height:90},true,function(){
				oLoader.style.display = 'none';
				oBosscart.style.display = 'block';
			});
		}
		oCart.onmouseleave = function(){
			oCart.style.background = '#424242';
			oCartlink.style.color = '#b0b0b0';
			animate(oCartb,{height:0},true);
		}
}
//顶部下拉部分
function herdop(){
	var aNnan = document.querySelectorAll('.header .shop .shop-ul-li');
	var aMotok = document.querySelector('.header .hdert .hdert-b');
	var aMasd = aMotok.querySelector('.header .hdert .hdert-b .hdert-sds');
	var hiddertime = 0;
	var lodertime = 0;
	for (var i = 0; i < aNnan.length; i++){
		aNnan[i].index = i;
		aNnan[i].onmouseenter = function(){
			clearTimeout(hiddertime);
			 aMotok.style.borderTop = '1px solid #ccc';
			 aMasd.innerHTML = '<div class="loder"></div>';
			 animate(aMotok,{height:180},true,function(){
			 		aMotok.style.overflow = 'visible';
			 });
			 var index = this.index;
			 clearTimeout(lodertime) ;
			 lodertime = setTimeout(function(){
			 	oLodaDate(index);
			 },1000);
			 
		}
		aNnan[i].onmouseleave = function(){
			hiddertime = setTimeout(function(){
				aMotok.style.overflow = 'hidden';
			 	animate(aMotok,{height:0},true,function(){
			 		aMotok.style.borderTop = 'none';
			 });
			},500)	
		}
	}
	aMotok.onmouseenter = function(){
		clearTimeout(hiddertime);
	}
	aMotok.onmouseleave = function(){
		hiddertime = setTimeout(function(){
			aMotok.style.overflow = 'hidden';
		 	animate(aMotok,{height:0},true,function(){
		 		aMotok.style.borderTop = 'none';
		 });
		},500)	
	}
	function oLodaDate(index){
		var hu = aNavItime[index];
		var html = '<ul>';
			for (var i = 0; i < hu.length; i++) {
				html +=	'<li>';
				html +=		'<div class="img-box">';
				html +=			'<a href="'+hu[i].url+'">'
				html +=					'<img src="'+hu[i].img+'" alt="">'
				html +=				'</a>';
				html +=			'<p class="box-name">'+hu[i].name+'</p>';
				html +=			'<p class="box-jiage">'+hu[i].jiage+'元起</p>';
				if(hu[i].tag){
						html +=	'<span class="tag">'+hu[i].tag+'</span>';
				}
				html +=		'</div>';
				html +=	'</li>';
			}
			html += '</ul>';
		aMasd.innerHTML = html;

	}
}
function herdol(){
	new Carousel({
		id:'carousel',
		aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg'],
		width:1226,
		height:460,
		playDuration:1000
	});
}