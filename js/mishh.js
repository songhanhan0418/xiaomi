

handleCart();
handleShop();
handleele();
handleCarousel();
handleTimeDown();

//购物车
function handleCart(){
	//1.获取元素
	var oCart = document.querySelector('.cart');
	var oCartBox = document.querySelector('.cart-box');
	var oCartA = oCart.querySelector('.cart-a');
	var oCartContent = document.querySelector('.cart-content');
	var oLoader = document.querySelector('.cart-content .loader');
	var oEmpty = document.querySelector('.cart-content .cart-empty');

	oCartBox.onmouseenter = function(){
		oCart.style.backgroundColor = '#fff';
		oCartA.style.color = '#ff6700';
		oLoader.style.display = 'block';
		animate(oCartContent,{height:98},true,function(){
			oEmpty.style.display = 'block';
			oLoader.style.display = 'none';
		});
	}

	oCartBox.onmouseleave = function(){
		oCart.style.backgroundColor = '#424242';
		oCartA.style.color = '#b0b0b0';
		animate(oCartContent,{height:0},true,function(){
			oLoader.style.display = 'none';
			oEmpty.style.display = 'none';
		});
	}
}
//导航栏
function handleShop(){
	var aShopNav = document.querySelectorAll('.shop .shop-ul-li');
	var oShopContent = document.querySelector('.header-content');
	var aShopContent = document.querySelectorAll('.header-content li');
	var timer = 0;
	var loadTimer = 0;
	for(var i = 0;i<aShopNav.length-2;i++){
		aShopNav[i].index = i;
		aShopNav[i].onmouseenter = function(){
			clearTimeout(timer);
			oShopContent.style.borderTop = '1px solid #b0b0b0';
			oShopContent.innerHTML = '<div class="loader"></div>'
			animate(oShopContent,{height:200},true,function(){
				oShopContent.style.overflow = 'visible';
			});
			clearTimeout(loadTimer);
			var index1 = this.index;
			loadTimer = setTimeout(function(){
				loadData(index1);
			},1000);
		}
		aShopNav[i].onmouseleave =oShopContent.onmouseleave= function(){
			timer = setTimeout(function(){
				animate(oShopContent,{'height':0},true,function(){
					oShopContent.style.borderTop = 'none';
				});
				oShopContent.style.overflow = 'hidden';
			},500);
		}
		oShopContent.onmouseenter = function(){
			clearTimeout(timer);
			animate(oShopContent,{'height':200},true,function(){
				oShopContent.style.overflow = 'visible';
			});
		}
	}
	function loadData(index){
		var data = aShopItem[index];
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
		html +='<li>';
		html +='	<div class="img-box">';
		html +='		<a href="'+data[i].url+'">';
		html +='			<img src="'+data[i].img+'" alt="">';
		html +='		</a>';
		html +='	</div>';
		html +='	<a class="product-name" href="'+data[i].url+'">'+data[i].name+'</a>';
		html +='	<p class="product-price">'+data[i].price+'元起</p>';
		if(data[i].tag){
			html +='	<span class="product-tag">'+data[i].tag+'</span>';
		}
		html +='</li>';
		}
		html += '</ul>';
		oShopContent.innerHTML = html;
	}
}
//轮播图
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg'],
		width:1226,
		height:460,
		playDuration:2000
	})
}
//左边电话卡
function handleele(){
	var oBannerBox = document.querySelector('.banner-box');
	var aSelectList = document.querySelectorAll('.banner-ad-ul-li');
	var oBannerContent = document.querySelector('.banner-content');

	for(var i = 0 ;i<aSelectList.length;i++){
		aSelectList[i].index = i;
		aSelectList[i].onmouseenter = function(){
			for(var j = 0;j<aSelectList.length;j++){
				aSelectList[j].className = 'banner-ad-ul-li';
			}
			oBannerContent.style.display = 'block';
			this.className = 'banner-ad-ul-li active'
			LoadData(this.index);
		}

	}
	oBannerBox.onmouseleave = function(){
		for(var j = 0;j<aSelectList.length;j++){
			aSelectList[j].className = 'banner-ad-ul-li';
		}		
		oBannerContent.style.display = 'none';
	}
	function LoadData(index){
		var data = aBannerContent[index];
		var html = '<ul>'
		for(var i = 0 ;i<data.length;i++){
			html +='<li>';
			html +='	<a href="'+data[i].url+'">';
			html +='	<img src="'+data[i].img+'" alt="">';
			html +='		<span>'+data[i].name+'</span>';
			html +='	</a>';
			html +='</li>';
		}
		html += '</ul>';
		oBannerContent.innerHTML = html;
	}
}
function handleTimeDown(){
	var aFlashTime = document.querySelectorAll('.flash-time-span');
	
	aFlashTime[0].innerHTML = 
	aFlashTime[1].innerHTML = 
	aFlashTime[2].innerHTML = 
}