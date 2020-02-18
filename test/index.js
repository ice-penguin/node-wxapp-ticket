var appid = '';//微信应用appID
var appsecret = '';//微信公众号appsecret

/**
 * 初始化微信公众号开发客户端
 * @author penguinhj
 * @param    {[String]}                 appid [微信公众号appid]
 * @param    {[String]}                 appsecret [微信公众号appsecret]
 */
var wxapp = require('../index').initClient({
	appid:appid,//微信公众号appid
	appsecret:appsecret//微信公众号appsecret
});


console.log("wxapp",wxapp);

//根据code获取授权用户的openId
/**
 * @param    {[String]}         code [微信code]
 */
var getOpenId = function(){
    wxapp.getOpenId(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

//根据code获取授权用户的小程序openId
/**
 * @param    {[String]}         code [微信code]
 */
var getOpenId_xcx = function(){
    wxapp.getOpenId_xcx(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}


//从微信获取 用户信息 授权access_token
/**
 * @param    {[String]}         code [微信code]
 */
var getInfoAccess_token = function(){
    wxapp.getInfoAccess_token(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

//通过openid获取用户信息
/**
 * @param    {[String]}         web_access_token [用户授权token]
 * @param    {[String]}         code [微信code]
 */
var getInfo = function(){
    wxapp.getInfo(web_access_token,code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

//通过code获取用户信息
/**
 * @param    {[String]}         code [微信code]
 */
var getInfoByCode = function(){
    wxapp.getInfoByCode(code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

//获取 公众号开发 授权access_token
var getAccess_token = function(){
    wxapp.getAccess_token()
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

//通过access_token获取网页js开发票据，jsapi_ticket
/**
 * @param    {[String]}         access_token [公众号开发授权token]]
 */
var getJsTicket = function(){
    wxapp.getJsTicket(access_token)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

//获取网页js调用所需注册参数
/**
 * 
 * @param {String} jsapi_ticket [网页js开发票据]
 * @param {String} url [需要使用jssdk的网址]
 */
var getJsParams = function(){
    wxapp.getJsParams(jsapi_ticket,url)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

//服务号推送
/**
 * 
 * @param {Arr} tousers [推送的用户与公众号的openid数组]
 * @param {String} template_id [微信模板id]
 * @param {String} url [点击页面跳转路径]
 * @param {Arr} data [模版参数，参考微信文档]
 */
var signPush = function(){
    wxapp.signPush(tousers,template_id,url,data)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}