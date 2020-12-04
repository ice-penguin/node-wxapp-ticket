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

/**
 * 获取小程序图片并存储至本地
 * @param {String} access_token [公众号开发授权token]
 * @param {Obejct} opt [二维码参数]
 * opt详见
 * 属性			类型	默认值	必填	说明
 * imageUrl 	string 		是 	图片存储地址，请使用绝对地址
 * scene		string			是	最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
 * page			string	主页	否	必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
 * width		number	430		否	二维码的宽度，单位 px。最小 280px，最大 1280px
 * auto_color	boolean	false	否	自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调
 * line_color	Object	{"r":0,"g":0,"b":0}	否	auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
 * is_hyaline	boolean	false	否	是否需要透明底色，为 true 时，生成透明底色的小程序码
 */
var getQrCode = function(token,opt){
	console.log(opt)
    wxapp.getQrCode(token,opt)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}