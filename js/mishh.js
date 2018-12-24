//多值动画函数
function animate(obj,items,isLinear,fn){
	if(isLinear == undefined){
		isLinear = true;
	}
	var iSpeed = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStopAll = true;
		for(var attr in items){
			var isStop = false;
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current *100);
			}
			if (isLinear) {
				if(current > items[attr]){
					iSpeed = -10;
				}else{
					iSpeed = 10;
				}
				if(Math.abs(items[attr]-current) < Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style[attr] =items[attr]/100;
					}else{
						obj.style[attr] =items[attr] +'px';
					}
					isStop = true;
					
				}else{
					isStopAll = false;
				}
			}else{
				iSpeed = (items[attr] - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(!iSpeed){
					isStop = true;
				}else{
					isStopAll = false;
				}
			}
			if(!isStop){
				if(attr == 'opacity'){
					obj.style[attr] = (current + iSpeed)/100;
				}else{
					obj.style[attr] = current + iSpeed + 'px';
				}
			}
		}
		if(isStopAll){
			clearInterval(obj.timer);
			typeof fn == 'function' && fn();				
		}
	},30);
}
function getScrollTop(){
	return  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;	
}




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
