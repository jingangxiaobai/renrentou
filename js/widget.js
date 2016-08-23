/**
 * Created by hxsd on 2016/8/12.
 */
function modal_lay(){
    //先创建，后插入
    //封装模块，先创建
    //"<div class='modal' id='black_modal'></div>"
    var modal=document.createElement('div');
    modal.id='black_modal';
    modal.className='modal';
    document.body.appendChild(modal);//插入不能忘
};
function login_lay(){
    modal_lay();
    var oDiv1=document.createElement('div');
    var oTop=document.getElementsByClassName("top")[0];
    oDiv1.id="box";
    oDiv1.className="popBox";
    oDiv1.innerHTML=' <h2></h2>'+
                    '<span>编辑个人信息</span>'+
                    '<a href="javascript:;" id="close_button" class="close_btn">x</a>'+
                    '<div class="edit_email">'+
                    ' <p>邮箱是您在人人投的重要安全凭证，同时也'+
                    '是您在人人投网站 中进行投融资活动的重要沟通工具。所以，'+
                    '为了确保您提供的 邮箱是真实有效</p>'+
                    '</div>'+
                    '<div class="my_confirm_btn fl" id="confirm_btn"><a href="javascript:;">确定</a></div>'+
                    '<div class="my_cancel_btn fl" id="cancel_btn"><a href="javascript:;">取消</a></div>';
    oTop.appendChild(oDiv1);
    var oDiv=document.getElementById('box');//获取登录对话框
    var oModal=document.getElementById('black_modal');//获取蒙版
    var oColse=document.getElementById('close_button');//获取a关闭按钮
    var oTitle=document.getElementsByTagName('h4')[0];//获取标题
    var cancel=document.getElementById('cancel_btn');
    var oCanfirm=document.getElementById('confirm_btn');/*确定按钮*/
    var Tab_person=document.getElementById('tab_person');/*个人设置页面*/
    var Edit_person=document.getElementById('tab_edit_person');/*编辑个人信息的页面*/
    oModal.style.display="block";
    popShow(oDiv);
    drge(oDiv,oTitle);
    oColse.onclick=function(){
        oTop.removeChild(oDiv);
        document.body.removeChild(oModal);//关闭的时候直接关闭，无需引号
    };
    cancel.onclick=function(){
        oTop.removeChild(oDiv);
        document.body.removeChild(oModal);//关闭的时候直接关闭，无需引号
    };
    oCanfirm.onclick=function(){
        oTop.removeChild(oDiv);
        document.body.removeChild(oModal);//关闭的时候直接关闭，无需引号
        Tab_person.style.display='none';
        Edit_person.style.display='block';
    }
};
/*三级菜单的制作函数*/
function three_menu(sec_menu,sec_item,tre_menu,tre_item,oUl){
    for(var i=0;i<sec_menu.length;i++) {
        sec_menu[i].index = i;
        sec_menu[i].onmouseover = function () { //绑事件的时候注意要跟所有的标签都绑上，i必不可少。用匿名函数
            for (var j = 0; j < sec_menu.length; j++) {
                //让每一个选项卡的颜色都变成灰色
                sec_menu[j].className = "tab_activity";
                sec_item[j].style.display = "none";
            }
            this.className = "ace tab_activity";
            sec_item[this.index].style.display = "block";
            var num=this.index;
            var sebMenu=this.getElementsByTagName('ul')[0];
            if(sebMenu){
                sebMenu.style.display="block";
                for( var g=0;g<tre_menu.length;g++){
                    tre_menu[g].index1=g;
                    tre_menu[g].onmousemove=function(){
                        sec_item[num].style.display = "none";
                        for (var j = 0; j < tre_menu.length; j++) {
                            //让每一个选项卡的颜色都变成灰色
                            tre_menu[j].style.backgroundColor='#fff';
                            tre_item[j].style.display = "none";
                        }
                        this.style.backgroundColor='#f2f2f2';
                        tre_item[this.index1].style.display = "block";
                    };
                    tre_menu[g].onmouseout=function(){
                        for (var j = 0; j < tre_menu.length; j++) {
                            tre_item[j].style.display = "none";
                        }
                    }
                }

            }
        }
    };
    for( var i=0;i<tre_item.length;i++){
        tre_item[i].onmouseover=function(){
            oUl.style.display='block';
        };
        tre_item[i].onmouseout=function(){
            oUl.style.display='none';
        };
    }
    /*二级菜单*/
    for(var i=0; i<sec_menu.length;i++){
        sec_menu[i].onmouseout=function(){
            var sebMenu=this.getElementsByTagName('ul')[0];
            if(sebMenu){
                sebMenu.style.display="none";
            }
        }
    };
}
/*登录验证*/
function login(){
    var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
    var matchResult=true;
    if(userName==""||pwd==""){
        alert("请确认是否有空缺项！");
        matchResult=false;
    }else if(userName.length<6||userName.length>20){
        alert("用户名长度应在6到20个字符之间！");
        matchResult=false;
    }else if(pwd.length<6||pwd.length>20||repwd.length<6||repwd.length>20){
        alert("密码长度应在6到20个字符之间！");
        matchResult=false;
    }else if(userName.length<6||userName.length>20){
        alert("用户名长度应在6到20个字符之间！");
        matchResult=false;
    }
    if(matchResult==true){
        if(userName.charAt(0)>=0&&userName.charAt(0)<=9){
            alert("用户名不能以数字字符开始！");
            matchResult=false;
        }
    }
    return matchResult;
}

function switch_person(){
    var oTab_login=document.getElementById("center_members");
    var oUl_login=document.getElementById("top_members");
    oTab_login.onclick=function(){
        oUl_login.style.display="block";
    }
}