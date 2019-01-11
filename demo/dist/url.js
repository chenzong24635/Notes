var callurl = "http://61.155.169.77:10002";// 接口
var imgurl = "http://61.155.169.77:10005/";// 图片获取


function isPhone(val){//手机验证
    var valnew = val.replace(/(^\s*)|(\s*$)/g, "");
    if(valnew.match(/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/) || valnew.match(/^(0[0-9]{2,3}\-)([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/)) {
       return true
    }else{
       return false
    }
};
function isEmail(val){//邮箱验证
    var reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    var  res=reg.test(val);
    if(res){
       return true
    }else{
       return false
    }
}
function pswLen(val){//密码验证
    var reg = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]+$/;//6位数 、字母+数字
    var bool = reg.test(val)
    var  len = val.length;
    console.log(val)
    if(len>=6&&bool){
        console.log("ok");
        return true
    }else{
        console.log("no");
        return false
    }
}



//点击账户 购物袋 ，判断是否登录\
$(document).on("click",".account-to",function(){
    if($(this).hasClass("gwd")){
        sessionStorage.setItem('returnLink', './shoppingCart.html')
    }    
    if($(this).hasClass("my")){
        sessionStorage.setItem('returnLink', './vip.html')
    }
    $.ajax({
        url:callurl + '/member/detail',
        type:'post',
        dataType:'JSON',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Access-Auth-Token", cookie.get("accessToken"));
        },
        success:function (res) {
            console.log(res);
            console.log("成功");
            sessionStorage.setItem("pic01",res.data.pic );
            sessionStorage.setItem("realname01",res.data.realname );
        },
        error:function (xml) {
            console.log(xml)
            if(xml.status == 500){
                window.location.href="./login.html"
            }
        }
    });    
})

// 登录
var userName = sessionStorage.getItem("username");
if(userName){
        $.ajax({
            url:callurl + '/member/detail',
            type:'post',
            dataType:'JSON',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Access-Auth-Token", cookie.get("accessToken"));
            },
            success:function (res) {
                console.log(res)
            },
            error:function (xml) {
                    sessionStorage.clear();
                    cookie.delete("accessToken");
                    alert("账户异地登陆,请重新登录");
                    window.location.href="./login.html";
            }
        })
}else{
// 未登录状态下，点击账户、购物车等跳转goin.html
    var link = window.location.href
    console.log(link.indexOf('signUp.html') || link.indexOf('login.html'))
    if(link.indexOf('signUp.html')>=0 || link.indexOf('login.html') >=0 ||link.indexOf('resetPassword.html') >=0){
       
    } else{
         sessionStorage.setItem('returnLink', link)
    }
    $(".account-to a").attr("href",'./login.html');
    $(document).on("click",".addtocart",function () {
        $(this).parent("a").attr("href","login.html")
    })
}


// 获取购物车列表----------首页搜索关键词
$(document).on("click",".search-ipt .search-btn",function () {
    var furl = "product.html" ;
    var keyword = $(".search-ipt input").val();
    var seokeyword = "seokeyword";
    console.log(keyword)
    if(seokeyword&&keyword!=""){
        window.location.href = furl+"?"+seokeyword+'='+ encodeURI(keyword);
    }else {
        alert("请输入关键词！")
    }

});

//回车键搜索
$(".search-ipt input").on('keypress', function(e) {  
    var furl = "product.html" ;
    var keycode = e.keyCode;
    var searchName = $(this).val();
    console.log(keycode)
    if(keycode == '13') { //触发list()事件
        var keyword = $(".search-ipt input").val();
        var seokeyword = "seokeyword"
        console.log(keyword)
        if(seokeyword&&keyword!=""){
            window.location.href = furl+"?"+seokeyword+'='+ encodeURI(keyword);
        }else {
            alert("请输入关键词！")
        }     
    }

});


// 物流活动-满多少免邮
getexpresslist();
function getexpresslist() {
    $.ajax({
        type:"post",
        url:callurl+"/config/syssetlist",
        async:true,
        dataType:"json",
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Access-Auth-Token", cookie.get("accessToken"));
        },
        success:function (res) {
            console.log("物流活动",res)
            sessionStorage.setItem("yunfei",res.data[0].value);//满多少包邮
            sessionStorage.setItem("muqianwl",res.data[1].value);//运费
        },
        error:function (xml) {
            console.log(xml)
        }
    });
}
var muqianwl = sessionStorage.getItem("muqianwl");//运费
var yunfei = sessionStorage.getItem("yunfei");//满多少包邮
console.log(muqianwl,yunfei)

    function getGG(gg){
        var gg_str;
        if(gg===1){
            gg_str="g"
        }else if(gg===2){
            gg_str="ml"
        }else if(gg===3){
            gg_str="礼盒"
        }
        return gg_str
    }