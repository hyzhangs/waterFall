window.onload=function(){
	var oMain = document.getElementById('main');
	var oBox = document.getElementsByClassName("box");
	
	//已知当前共有六列，每列width200px，计算出oMain的width
	var mainWidth;
	if(oBox){
		var mainWidth = (oBox[0].offsetWidth)* 6;
		/*设置main的width的宽度*/
		oMain.style.width = mainWidth+'px';
	}
	/*获取行数*/
	var rows = Math.floor(oBox.length/6);
//	console.log(rows)
	
	/*获取第一行图片的高度*/
	arrH=new Array();
	for(i=0;i<oBox.length;i++){
		if(i<6){
			arrH.push(oBox[i].offsetHeight);//讲第一行的高度存起来
		}else{
			var minH = Math.min.apply(null,arrH);//获取最小的高度
			var index = minIndex(arrH,minH);//获取当前最小高度的小标
			oBox[i].style.position='absolute';//设置第二行及以后box为绝对定位
			oBox[i].style.top = minH+'px';//设置第二行以后的box的top
			oBox[i].style.left = oBox[index].offsetLeft+'px';//设置当前oBox[i]的left
			
			arrH[index]+= oBox[i].offsetHeight;//将当前高度赋值给，数组minH
		}
	}
	/*获取当前index*/
	function minIndex(arr,val){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==val){
				return i;
			}
		}
	}
	
}
