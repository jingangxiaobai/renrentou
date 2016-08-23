/**
 * Created by hxsd on 2016/7/8.
 */

var jd={
    //淘宝菜单
    "menu":function(oMenu,oMenuCont){
        var oMenu=document.getElementById(oMenu);//把菜单元素赋值给变量oMenu
        var aLi=oMenu.getElementsByTagName('li');//获取菜单中所有的li
        var oMenuCont=document.getElementById(oMenuCont);//把子菜单元素赋值给变量oMenuCont
        var show_t,hide_t,move_t;//计时器备用变量
        for(var i=0; i<aLi.length; i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(){//绑定事件，鼠标点击菜单时设置的操作
                clearTimeout(hide_t);//清除关闭
                clearTimeout(move_t);//清除鼠标移动
                show_t=setTimeout(function(){//显示子菜单时设置定时
                    oMenuCont.style.display="block";//鼠标点击时设置显示子菜单
                },200);


            };
            aLi[i].onmouseout=function(){//鼠标移出菜单时设置的操作
                clearTimeout(show_t);//清除显示
                hide_t=setTimeout(function(){//隐藏子菜单时设置定时
                    oMenuCont.style.display="none";//鼠标移出时设置隐藏子菜单
                },100);
            };

            oMenuCont.onmouseover=function(){//鼠标点击子菜单时设置的操作
                clearTimeout(hide_t);//清除关闭
                clearTimeout(move_t);//清除鼠标移动
                this.style.display="block";

            };
            oMenuCont.onmouseout=function(){//鼠标移出子菜单时设置的操作
                var _this=this;
                move_t=setTimeout(function(){//鼠标移动时延时关闭
                    _this.style.display="none";
                },50);
            }

        }
    },
    //轮播图
    "slide":function(id,showNum){
        var sld=document.getElementById(id);
        console.log(sld);
        var ol=sld.getElementsByTagName('ol')[0];
        var oUl=sld.getElementsByTagName('ul')[0];
        var aLi=oUl.children;
        var numBtn=ol.children;
        var prevBtn=sld.children[0];
        var nextBtn=sld.children[1];

        //ol插li
        for(var i=0; i<aLi.length; i++){
            var li=document.createElement('li');
            if(showNum)li.innerHTML=i+1;
            if(i==0) li.className="ac";
            ol.appendChild(li);
        };
        var show_num=0;//当前图片的索引


        //点击数字按钮 滚动图片
        //数字按钮切换
        var li_w=getStyle(aLi[0], 'width')//取li的宽度

        oUl.style.width=li_w*aLi.length+'px';


        for(var i=0; i<numBtn.length; i++){
            numBtn[i].index=i;//发牌照

            numBtn[i].onclick=function(){
                for(var j=0; j<numBtn.length; j++){
                    numBtn[j].className='';
                };
                this.className='ac';

                show_num=this.index;

                //图片移动
                hxsd_move(oUl,'left',-li_w*show_num,500)
            }
        };
        //左右按钮滚动图片
        //右按钮
        nextBtn.onclick=function(){
            show_num++;
            if(show_num>=aLi.length-1) show_num=aLi.length-1;
            hxsd_move(oUl,'left',-li_w*show_num,500);

            for(var j=0; j<numBtn.length; j++){
                numBtn[j].className='';
            };

            numBtn[show_num].className='ac';
        };
        //左按钮
        prevBtn.onclick=function(){
            show_num--;
            if(show_num<=0) show_num=0;
            hxsd_move(oUl,'left',-li_w*show_num,500);

            for(var j=0; j<numBtn.length; j++){
                numBtn[j].className='';
            };

            numBtn[show_num].className='ac';
        };
        sld.onmouseover=function(){
            nextBtn.style.display="block";
            prevBtn.style.display="block";
        };
        sld.onmouseout=function(){
            nextBtn.style.display="none";
            prevBtn.style.display="none";
        };
        //循环播放时执行的操作
        function tab_change(show_num) {
            for (var i = 0; i < numBtn.length; i++) {
                for (var j = 0; j < numBtn.length; j++) {
                    numBtn[j].className = " ";
                    //aLi[j].style.display = "none";
                }
                numBtn[show_num].className = "ac";
                //aLi[show_num].style.display = "block";
                hxsd_move(oUl,'left',-li_w*show_num,500);
            }
        }

        function auto_run() {
            time = setInterval(function () {//设置执行选项卡间隔时间
                tab_change(show_num);
                show_num++;
                if (show_num == 6) show_num = 0;//播放到最后一个选项卡时，从开始重新播放，选项卡计数器重设为0
            }, 1000);

        }

        auto_run();
        sld.onmouseover = function () {//绑定事件，点击box时执行的操作
            clearInterval(time);//清除轮播

        };
        sld.onmouseout = function () {//绑定事件，移出box时执行的操作
            auto_run();//执行轮播

        };


    },
//选项卡
    "card":function(cardsorce,item){
        var  card=document.getElementsByClassName(cardsorce);
        //var  aLi=card.getElementsByTagName('li');
        //var  aItem=document.getElementsByClassName('item');
        for(var i=0;i<card.length;i++){

            (function(index){
                var card_item=card[index].getElementsByTagName('li');
                for(var n=0;n<card_item.length;n++){
                    card_item[n].index=n;
                    card_item[n].onmouseover=function(){
                        for( var j=0;j<card_item.length;j++){
                            card_item[j].className=" ";
                            //aItem[j].style.display="none";
                        }
                        //var index=this.getAttribute('data-index');//获取自定义属性值
                        //index-=0;
                        this.className="ac";
                        //aItem[index].style.display="block";
                    }
                };

            })(i);//直接触发此函数，把i传递给index

        };
    }

}
