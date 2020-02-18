var _ = require('lodash');
var wxUtil = require('./wxutil');
var request = require('request');

var appid = 'wx10f0dc99be1b32a7';//微信应用appID,服务号
var appsecret = '1e0e566ce31745e53c3e7d6a080d3292';//微信公众号appsecret ,服务号

var promise = new Promise((resolve,reject) => {
	resolve();
})

//根据code获取授权用户的openId
/**
 * @param    {[String]}         code [微信code]
 */
var getOpenId = function(code){
	return new Promise(function(resolve,reject){
		request({url:"https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appid+"&secret="+appsecret+"&code="+code+"&grant_type=authorization_code",json:true},function(error, response, body){
			if(error || (body.errcode && body.errmsg)){
				reject(body);
			}
			resolve(body.openid);
		});
	});
};

//根据code获取授权用户的小程序openId
/**
 * @param    {[String]}         code [微信code]
 */
var getOpenId_xcx = function(code){
	console.log("get web_access_token");
	return new Promise(function(resolve,reject){
		request({url:"https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+appsecret+"&js_code="+code+"&grant_type=authorization_code",json:true},function(error, response, body){
			if(error || (body.errcode && body.errmsg)){
				reject(body);
			}
			resolve(body.openid);
		});
	});
	
};

//从微信获取 用户信息 授权access_token
/**
 * @param    {[String]}         code [微信code]
 */
var getInfoAccess_token = function(code){
    var now = new Date();
	return new Promise(function(resolve,reject){
		request({url:"https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appid+"&secret="+appsecret+"&code="+code+"&grant_type=authorization_code",json:true},function(error, response, body){
			if(error || (body.errcode && body.errmsg)){
				reject(body);
			}
			var info={
				web_access_token : body.access_token,
				web_token_expires_in : new Date(now.getTime()+(body.expires_in-20)*1000),
				web_refresh_token : body.refresh_token,
				openid : body.openid
			};
			resolve(info);
		});
	});
};

//通过openid获取用户信息
/**
 * @param    {[String]}         web_access_token [用户授权token]
 * @param    {[String]}         code [微信code]
 */
var getInfo = function(web_access_token,openid){
	return new Promise(function(resolve,reject){
        request({url:"https://api.weixin.qq.com/sns/userinfo?access_token="+web_access_token+"&openid="+openid+"&lang=zh_CN",json:true},function(error, response, body){
            if(error || (body.errcode && body.errmsg)){
                reject(body);
            }
            resolve(body);
        });
    });
};

//通过code获取用户信息
/**
 * @param    {[String]}         code [微信code]
 */
var getInfoByCode = function(code){
	return getInfoAccess_token(code)
	.then(function(info){
		return new Promise(function(resolve,reject){
			request({url:"https://api.weixin.qq.com/sns/userinfo?access_token="+info.web_access_token+"&openid="+info.openid+"&lang=zh_CN",json:true},function(error, response, body){
				if(error || (body.errcode && body.errmsg)){
					reject(body);
				}
				resolve(body);
			});
		});
	});	
};

//获取 公众号开发 授权access_token
var getAccess_token = function(){
	var now = new Date();
	console.log("get access_token");
	return new Promise(function(resolve,reject){
		request({url:"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+appid+"&secret="+appsecret,json:true},function(error, response, body){
			if(error || (body.errcode && body.errmsg)){
				console.log(body);
				reject(body);
			}

			var obj={
				access_token : body.access_token,
				token_expires_in : new Date(now.getTime()+(body.expires_in-20)*1000)
			};
			
			resolve(obj);
		});
	});
	
};

//通过access_token获取网页js开发票据，jsapi_ticket
/**
 * @param    {[String]}         access_token [公众号开发授权token]]
 */
var getJsTicket = function(access_token){
	var now = new Date();

	return new Promise(function(resolve,reject){
        request({url:"https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+access_token+"&type=jsapi",json:true},function(error, response, body){
            if(error || (body.errcode && body.errmsg)){
                reject(body);
            }
            var obj={
                jsapi_ticket : body.ticket,
                ticket_expires_in : new Date(now.getTime()+(body.expires_in-20)*1000)
            };

            resolve(obj);
        });
    });
	
};

//服务号推送
/**
 * 
 * @param {Arr} tousers [推送的用户与公众号的openid数组]
 * @param {String} template_id [微信模板id]
 * @param {String} url [点击页面跳转路径]
 * @param {Arr} data [模版参数，参考微信文档]
 */
var signPush = function(tousers,template_id,url,data){
	var arr=[]
	_.each(tousers,function(touser){
		var sendObj = {
			"touser":touser,//与公众号的openid
			"template_id":template_id,//模板id
			"url":url,//点击页面跳转路径
			"data":data
		};
		arr.push(sendObj);
	});
	
	var now = new Date();
	var promise = new Promise(function(resolve,reject){
		resolve();
	});

	return promise
	.then(function(){
		_.each(arr,function(sendObj){
			request.post({url:"https://api.weixin.qq.com/cgi-bin/message/template/send?access_token="+access_token+"&type=jsapi",body:sendObj,json:true},function(error, response, body){
				console.log(body)
			});
		});
	})
	
};

//获取网页js调用所需注册参数
/**
 * 
 * @param {String} jsapi_ticket [网页js开发票据]
 * @param {String} url [需要使用jssdk的网址]
 */
var getJsParams = function(jsapi_ticket,url){
    var now = new Date();
    var info = {
        noncestr:wxUtil.randomString(20),
        jsapi_ticket:jsapi_ticket,
        timestamp:now.getTime(),
        url:url
    };
    var ticketInfo = {
        appId: appId, // 必填，公众号的唯一标识
        timestamp: info.timestamp, // 必填，生成签名的时间戳
        nonceStr: info.noncestr, // 必填，生成签名的随机串
        signature: '',// 必填，签名，见附录1
    };
    ticketInfo.signature = wxUtil.sha1(wxUtil.sortKey(info));
    
    return promise
    .then(function(){
        return ticketInfo;
    })
}


/**
 * 初始化微信支付客户端
 * @author penguinhj
 * @param    {[String]}                 appid [微信公众号appid]
 * @param    {[String]}                 appsecret [微信公众号appsecret]
 */
exports.initClient = function (params){
	if(!params){
		console.log("can't found params. 缺少初始化参数");
		return ;
	}
	if(!params.appid){
		console.log("can't found appid. 缺少公众号appid");
		return ;
	}
	if(!params.appsecret){
		console.log("can't found appsecret. 缺少应用appsecret");
		return ;
	}

	appid = params.appid;
	apiKey = params.apiKey;

	return {
        getOpenId:getOpenId,//获取公众号openid
        getOpenId_xcx:getOpenId_xcx,//获取小程序openid
        getInfoAccess_token:getInfoAccess_token,//获取 用户信息 授权access_token(web_access_token)
        getInfo:getInfo,//通过openid获取用户信息
        getInfoByCode:getInfoByCode,//通过code获取用户信息
        getAccess_token:getAccess_token,//获取 公众号开发 授权access_token
        getJsTicket:getJsTicket,//通过access_token获取网页js开发票据，jsapi_ticket
        getJsParams:getJsParams,//获取网页js调用所需注册参数
        signPush:signPush//服务号推送
	};
};