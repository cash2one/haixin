﻿!function(a){var b={isChinese:function(a){return/^[\u4E00-\u9FA5]+$/.test(a)},isEmail:function(a){return/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a)},isMobile:function(a){return/^1[3|4|5|7|8][0-9]{9}$/.test(a)},gDomain:function(){var b=a.location.host.split(".");return b[b.length-2]+"."+b[b.length-1]},go:function(a){("string"!=$.type(a)||""==a)&&(a=window.location.href),a.indexOf("#")>=0&&(a=a.substring(0,a.indexOf("#"))),window.location.href=a}},c={preajax:function(a,b){a.attr("id","btn-loading"),a.html('<img width="30" height="30" src="'+passport.env.mHost()+'/static/image/loading.gif" alt=""/>'+b),a.attr("disable",!0)},aftajax:function(a,b){a.html(b),a.attr("id",""),a.attr("disable",!1)},showErr:function(a){$("#j-login-box .error-tips").addClass("check-wrong"),$("#j-login-box .error-tips").html(a)},AutoComplete:function(){$.AutoComplete("#email")}},d={ppt_cookie_name:"_jm_ppt_id",ppt_have_checked:"_jm_ppt_hc",xdomain:null,err:{e_0:"成功",e_1010001:"帐号格式错误",e_1010002:"请输入6-16个字符（英文、数字、特殊字符）",e_1010003:"帐号或密码错误",e_1010005:"帐号未激活",e_1010007:"帐号已注册",e_1010009:"帐号未登录",e_1010099:"服务繁忙。请稍后重试。"},gErr:function(a){return d.err["e_"+a]}};d.checkAccount=function(a){return b.isEmail(a)||b.isMobile(a)?($("#email").attr("style",""),!0):(c.showErr(d.gErr(1010001)),$("#email").css("border-color","#F12b15"),!1)},d.checkPassword=function(a){return/^[\S]{6,16}$/.test(a)?!0:(c.showErr(d.gErr(1010002)),!1)},d.logincb=function(){b.go("")},d.login=function(a,e,f){var g,h;return $.isFunction(f)&&(d.logincb=f),"null"!=$.type($.cookie(d.ppt_cookie_name))?(b.go(""),!0):("undefined"==$.type(e)&&(e=""),g=""==e?window.location.href:e,h=[],h.push('<div class="login-box-title">'),h.push("   <em>登录</em>"),h.push('   <span class="login-box-close">'),h.push('       <a class="box-close" href="javascript:void(0)" onclick="passport.sdk.close()"></a>'),h.push("   </span>"),h.push("</div>"),h.push('<div class="login-box">'),h.push('   <form action="'+passport.env.mHost()+'/user/logindo" class="login-box-form" method="post">'),h.push('   <input type="hidden" name="from" value="'+a+'" />'),h.push('   <input type="hidden" name="backurl" value="'+e+'" />'),h.push("   <ul>"),h.push('       <li class="error-tips-view">'),h.push('           <p class="error-tips"></p>'),h.push("       </li>"),h.push("       <li>"),h.push("           <div>"),h.push('               <input type="text" name="account" class="input-text" id="email" placeholder="邮箱/手机号" autocomplete="off" maxlength="50" datatype="e|m" nullmsg="请填写帐号！" errormsg="帐号格式错误！" onblur="passport.sdk.checkAccount($(this).val())" />'),h.push("           </div>"),h.push("       </li>"),h.push("       <li>"),h.push("           <div>"),h.push('               <input type="password" name="password" class="input-text" placeholder="密码" maxlength="16" autocomplete="off" plugin="passwordStrength" datatype="*6-16" nullmsg="请输入密码！" errormsg="请输入6-16个字符（英文、数字、特殊字符）" onblur="passport.sdk.checkPassword($(this).val())">'),h.push("           </div>"),h.push("       </li>"),h.push('       <li class="code">'),h.push("           <div>"),h.push('               <input type="text" id="verify_code" name="verify_code" class="input-text input-code" maxlength="4" autocomplete="off" datatype="s4" nullmsg="请输入验证码" errormsg="验证码错误" />'),h.push('               <img id="verify_img" class="code-img" src="'+passport.env.mHost()+'/wapi/verifycode.json" title="看不清楚？点击此处刷新" onclick="this.src=passport.env.mHost()+\'/wapi/verifycode.json?r=\'+Math.random();" />'),h.push("           </div>"),h.push("       </li>"),h.push('       <li class="check-view">'),h.push('           <span class="input-name"></span>'),h.push("           <div>"),h.push('               <p class="fl">'),h.push('                   <input type="checkbox" name="remember" id="autologin" checked="true">'),h.push("                   <label>两周内自动登录</label>"),h.push("               </p>"),h.push('               <p class="fr">'),h.push('                   <a target="_blank" href="'+passport.env.mHost()+'/user/fgpassword">忘记密码？</a>'),h.push("               </p>"),h.push("           </div>"),h.push("       </li>"),h.push("       <li>"),h.push('           <span class="input-name"></span>'),h.push('           <button type="button" class="login-btn" onclick="passport.sdk.logindo()">登录</button>'),h.push("       </li>"),h.push("   </ul>"),h.push("   </form>"),h.push('       <div class="login-sns">'),h.push("           <h3>社交帐号登录</h3>"),h.push('               <a href="'+passport.env.mHost()+"/oauth/login?oauth_from=wb&from="+a+"&backurl="+encodeURIComponent(g)+"&r="+Math.random()+'" class="login-weibo"><i class="ui-icon"></i></a>'),h.push('               <a href="'+passport.env.mHost()+"/oauth/login?oauth_from=qq&from="+a+"&backurl="+encodeURIComponent(g)+"&r="+Math.random()+'" class="login-qq"><i class="ui-icon"></i></a>'),h.push('               <a href="'+passport.env.mHost()+"/oauth/login?oauth_from=wx&from="+a+"&backurl="+encodeURIComponent(g)+"&r="+Math.random()+'" class="login-wx"><i class="ui-icon"></i></a>'),h.push("       </div>"),h.push('       <div class="reg-link">'),h.push('           <p>没有帐号?  <a target="_blank" href="'+passport.env.mHost()+"/user/regist?from="+a+"&backurl="+encodeURIComponent(e)+'">立即注册</a></p>'),h.push("       </div>"),h.push("</div>"),$("body").append('<div class="j-bg"></div><div class="j-login-box" id="j-login-box">'+h.join("\n")+"</div>"),$('input[name="account"]').focus(),$("#j-login-box").on("keydown",function(a){""!=$('input[name="account"]').val()&&""!=$('input[name="password"]').val()&&13==a.keyCode&&passport.sdk.logindo()}),c.AutoComplete(),void 0)},d.close=function(){$(".j-bg").remove(),$(".j-login-box").remove()},d.loginxc=function(a){var f,c=a.xdomain.length,e=0;if(c>1)for(;e++<c;)f="http://passport."+a.xdomain[e-1]+"/xc.php?xc="+a.xc+"&e="+a.expire,$.get(f,{},function(){if(e>=c)if("string"==$.type(a.go)&&""!=a.go)b.go(a.go);else try{$.isFunction(d.logincb)?(d.logincb(),d.close()):b.go("")}catch(f){b.go("")}},"jsonp");else if("string"==$.type(a.go)&&""!=a.go)b.go(a.go);else try{$.isFunction(d.logincb)?(d.logincb(),d.close()):b.go("")}catch(g){b.go("")}},d.logindo=function(){return d.checkAccount($('input[name="account"]').val())&&d.checkPassword($('input[name="password"]').val())?(c.preajax($(".login-btn"),"登录中..."),$.get(passport.env.mHost()+"/user/logindo?"+$(".login-box-form").serialize(),{},function(a){"y"==a.status?d.loginxc(a):("verify_code"==a.name&&($(".code").addClass("show"),$("#verify_code").focus()),$("#verify_img").click(),c.showErr(a.info),c.aftajax($(".login-btn"),"登录"))},"jsonp"),void 0):(c.showErr(d.gErr(1010003)),!1)},d.logoutcb=function(){b.go("")},d.logoutxc=function(a,c){var g,e=a.rs.xdomain.length,f=0;if(e>1)for(;f++<e;)g="http://passport."+a.rs.xdomain[f-1]+"/xc.php?xc=&e="+((new Date).getTime()-3600),$.get(g,{},function(){if(f>=e)if("string"==$.type(c)&&""!=c)b.go(c);else try{$.isFunction(d.logoutcb)?(d.logoutcb(),d.close()):b.go("")}catch(a){b.go("")}},"jsonp");else if("string"==$.type(c)&&""!=c)b.go(c);else try{$.isFunction(d.logoutcb)?(d.logoutcb(),d.close()):b.go("")}catch(h){b.go("")}},d.logout=function(a,e){return $.isFunction(e)&&(d.logoutcb=e),"null"==$.type($.cookie(d.ppt_cookie_name))?(b.go(""),!0):($.get(passport.env.mHost()+"/wapi/logout.json",{},function(b){0===b.code?d.logoutxc(b,a):c.showErr(d.gErr(1010099))},"jsonp"),void 0)},d.isLogin=function(){if("null"!==$.type($.cookie(d.ppt_have_checked)))return"null"===$.type($.cookie(d.ppt_cookie_name))?!1:!0;var a=passport.env.mHost()+"/wapi/islogin.json?cb=?";$.get(a,{},function(a){return 0!==a.code?($.cookie(d.ppt_have_checked,1,{expires:.01,path:"/",domain:"."+b.gDomain()}),!1):($.get("http://passport."+b.gDomain()+"/xc.php?xc="+a.rs.xc[d.ppt_cookie_name]+"&e="+a.rs.expire,{},function(){return $.cookie(d.ppt_have_checked,1,{expires:.01,path:"/",domain:"."+b.gDomain()}),!0},"jsonp"),void 0)},"jsonp")},d.isOnline=function(){},d.init=function(){},a.passport.ui=c,a.passport.sdk=d}(window),$(function(){passport.sdk.init()});