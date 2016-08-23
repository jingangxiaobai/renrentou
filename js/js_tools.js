// JavaScript Document

//在屏幕内部随意拖动
function drge(box,title){
		var handle;
		title ? handle = title : handle = box;
		handle.onmousedown=function(ev){
			var oEv=ev || window.event;
			var disX=oEv.clientX-box.offsetLeft;
			var disY=oEv.clientY-box.offsetTop;
			document.onmousemove=function(ev){
				var oEv=ev || window.event;
				var l=oEv.clientX-disX;
				var h=oEv.clientY-disY;
				if(l<0)l=0;
				if(h<0)h=0;
				if(l>document.documentElement.clientWidth-box.offsetWidth)l=document.documentElement.clientWidth-box.offsetWidth;
				if(h>document.documentElement.clientHeight-box.offsetHeight) h=document.documentElement.clientHeight-box.offsetHeight;
					box.style.left=l+"px";
					box.style.top=h+"px";
			}	
			return false;
		}
		handle.onmouseup=function(){
			document.onmousemove=null; 
		}	
}
//设置弹出显示居中的函数
function popShow(elm){
	elm.style.display="block";
	var l=(document.documentElement.clientWidth-elm.offsetWidth)/2;
	var h=(document.documentElement.clientHeight-elm.offsetHeight)/2;
	elm.style.left=l+'px';
	elm.style.top=h+'px';
		
}
//选项卡------------------------------------------------------------
function hxsd_tab(id,autoplay){//tab盒子的id，  autoplay：true false
	
	var oTab=document.getElementById(id);
	var aLi=oTab.getElementsByTagName('li');
	var aDiv=oTab.getElementsByTagName('div');
	
	var autoPlay_num=0;//自动播放 传入的编号
	var timer;//计时器用变量
	
	//选项卡
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';	
				aDiv[i].style.display="none";
			};		
			this.className='ac';
			aDiv[this.index].style.display="block";
			autoPlay_num=this.index;
		};	
	};
	
	function autoPlay(){
		function auto_run(){
		timer=setInterval(function(){
			function tab_change(index){
				for(var i=0;i<aLi.length;i++){
					for(var i=0;i<aLi.length;i++){
						aLi[i].className='';	
						aDiv[i].style.display="none";
					};		
					aLi[autoPlay_num].className='ac';
					aDiv[autoPlay_num].style.display="block";
				};
			};
			
			tab_change(autoPlay_num);
				autoPlay_num++;
				if(autoPlay_num==3) autoPlay_num=0;
			},1000);
		};
		auto_run();
		
		oTab.onmouseover=function(){
			clearInterval(timer);
		};
		oTab.onmouseout=function(){
			auto_run();
		};
	};
	
	if(autoplay) autoPlay(); 

}
//placeholder------------------------------------------------------------

function placeholder(element,text){//标签    文本
		element.value=text;
		element.style.color="#ccc";
	
		element.onfocus=function(){
			if(this.value==text){
				this.value="";
				this.style.color="#000";
			}
		};
		element.onblur=function(){
			if(this.value==""){
				this.value=text;
				this.style.color="#ccc";
			}
		};
	};
