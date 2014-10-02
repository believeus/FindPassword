var api={
	//检测是否为国内手机号码
	isMobileNo : function(mobile){
		var mobile = $.trim(mobile);
		var reg =/^0{0,1}(13[0-9]|15[0-9]|18[0-9])[0-9]{8}$/; 
		if(mobile){
			if(!reg.test(mobile))
				return false;
			else
				return true;
		} else {
			return false;
		}
	},
	//检测是否为邮箱
	isMail:function(mailAdress){
		var mailAdress = $.trim(mailAdress);
		var mailreg=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(mailAdress){
			if(!mailreg.test(mailAdress))
				return false;
			else
				return true;
		} else {
			return false;
		}
	}
}

/*注册页面校验begin*/
	
	//文本框示输入内容在焦点进入时清楚默认提示
	textOnFocusVali=function(tipInfo,objId){//tipInfo提示内容,元素对象的ID号
		var value=$("#"+objId).val();
		if(value==tipInfo){
			$("#"+objId).val("");
		} 
	}
	//与上同类，在文本框失去焦点时若无内容加上默认的提示
	textBlurVali=function(tipInfo,objId){//tipInfo提示内容,元素对象的ID号
		var value=$("#"+objId).val();
		if(value==""){
			$("#"+objId).val(tipInfo);
		} 
	}
	//密码框长度校验
	pwdLength=function(lowerNum,upperNum,elementID,hideTipElemtID,showTipElemtID){
		//lowerNum最小长度值,upperNum最大长度值,elementID元素ID名,hideTipElemtID要隐藏元素的ID,showTipElemtID要显示元素的ID
		var val=$("#"+elementID).val();
		$("#lsq_passWord01_status03").hide();
		$("#"+showTipElemtID).siblings().hide();
		if((val.length>upperNum||val.length<lowerNum)&&val.length!=0){
			$("#"+showTipElemtID).css({"display":"inline-block"});
		}else{
			$("#"+showTipElemtID).hide();
			if(val.length!=0){
				$("#lsq_passWord01_status03").css({"display":"inline-block"});
			}
		}
	};
	//确认密码框校验
	surePwd=function(firstPwdID,selfPwsID){//firstPwdID第一次输入密码的文本框ID,selfPwsID确认密码的框元素ID
		$("#lsq_passWord02_status02").siblings().hide();
		$("#lsq_passWord02_status02").hide();
		if(($("#"+firstPwdID).val()===$("#"+selfPwsID).val())&&$.trim($("#"+selfPwsID).val())!=''){
			$("#lsq_passWord02_status02").css({"display":"inline-block"});
		}else{
			$("#lsq_passWord02_status03").css({"display":"inline-block"});
		}
	}
	//判断用户是否是邮箱或手机号
	isMailOrMobile=function(){
		var value=$.trim($("#lsq_userName").val());
		if(value=='邮箱/手机号'){
			$("#lsq_userName_status03").hide();
			$("#lsq_userName_status03").siblings().hide();
			return;
		}
		if(value.indexOf("@")!=-1){
			if(!api.isMail(value)){
				$("#lsq_userName_status03").siblings().hide();
				$("#lsq_userName_status03").html("请输入正确的邮箱地址");
				$("#lsq_userName_status03").css({"display":"inline-block"});
			}else{
				$("#lsq_userName_status01").siblings().hide();
				$("#lsq_userName_status01").css({"display":"inline-block"});
			}
		}else{
			if(!api.isMobileNo(value)){
				$("#lsq_userName_status03").siblings().hide();
				$("#lsq_userName_status03").html("请输入正确手机号");
				$("#lsq_userName_status03").css({"display":"inline-block"});
			}else{
				$("#lsq_userName_status01").siblings().hide();
				$("#lsq_userName_status01").css({"display":"inline-block"});
			}
		}
	}
	//注册页面第一个密码输入框得焦点时调用
	lsq_passWord01Focus=function(){
		$("#lsq_passWord01_status01")
		$("#lsq_passWord01_status01").siblings().hide();
		$("#lsq_passWord01_status01").css({"display":"inline-block"});
	}
	//注册页面确认密码输入框得焦点时
	lsq_passWord02Focus=function(){
		$("#lsq_passWord02_status02").siblings().hide();
	}
	//完成注册提交前的检验
	//lsq_registerSubmit
	registerVal=function(){
		var userName=$.trim($("#lsq_userName").val());
		var pwd1=$.trim($("#lsq_passWord01").val());
		var pwd2=$.trim($("#lsq_passWord02").val());
		if(userName.length==0||userName=='邮箱/手机号'){
			$("#lsq_userName_status03").html("请输入邮箱/手机号");
			$("#lsq_userName_status03").css({"display":"inline-block"});
		}
		if(pwd1==''){
			$("#lsq_passWord01_status02").html("请输入密码");
			$("#lsq_passWord01_status02").css({"display":"inline-block"});
		}
		if(pwd2==''){
			$("#lsq_passWord02_status03").html("请输入密码");
			$("#lsq_passWord02_status03").css({"display":"inline-block"});
		}
	}
/*注册页面校验end*/

/*找回密码第二步校验*/
	chooseFindPwdWay=function(thisObj){
		var index=thisObj.selectedIndex;
		if(thisObj.options[index].value==1){
			$("#lsq_chooseMail").siblings().hide();
			$("#lsq_chooseMail").show();
			$("#sendFindPwdMail").siblings().hide();
			$("#sendFindPwdMail").show();
		}else if(thisObj.options[index].value==2){
			$("#lsq_chooseMobile").siblings().hide();
			$("#lsq_chooseMobile").show();
			$("#nextStep").siblings().hide();
			$("#nextStep").show();
		}
	}	