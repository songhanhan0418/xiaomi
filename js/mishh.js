
handleCart();
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
