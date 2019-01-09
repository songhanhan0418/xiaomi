qinghuandu();
herdol();
abc();




//顶部部分
function qinghuandu(){
	var oAbo = document.getElementById('aa-bt-oo');
	var oGubei = document.querySelector('.gubei');
	var oGubeip = document.querySelectorAll('.gubeip');
	var oGnm = document.querySelectorAll('.gubeiy');
		oAbo.onmouseenter = function(){
				oAbo.style.color = '#ff6700';				
				oGubei.style.display = 'block';
			}
			oAbo.onmouseleave = function(){
				oGubei.style.display = 'none';
			}
}
//轮播图
function herdol(){
	new Carousel({
		id:'carousel',
		aImg:['img/qingge2.png','img/qingge3.png','img/qingge4.png'],
		width:1583,
		height:500,
		playDuration:3000
	});
}


//风琴js效果
function abc(){
	var oDko = document.querySelector('.dd-kk-oo');
	var oDkd = document.querySelectorAll('.dd-kk-bb');
	// var oImg = oDkd.getElementsByTagName('img')[0];
	console.log(oDkd)
	for(var i = 0;i<oDkd.length;i++){
		oDkd[i].onmouseenter = function(){
			for(var j = 0;j<oDkd.length;j++){
				console.log()
				oDkd[j].style.width = 249.2 + 'px';
				oDkd[j].children[0].src = 'url(img/jws'+i+'.png)';
			}
			this.style.width = 414 + 'px';
			this.src = 'url(img/qingge'+i+'.png)';
		}
	}
}