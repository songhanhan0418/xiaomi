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