//统计
(function () {
	var params = {};
	if(document) {
		params.domain = (window.location.host.split('.')[1]+'.'+window.location.host.split('.')[2]) || '';
		params.url = document.URL || '-';
		params.title = '-';
		params.referrer = document.referrer || '-';
		params.subdomain	= window.location.host.split('.')[0];
		params.from			= '-';
		var reg1  = /\/article\/(\d+).html*/;
		var reg2 = /\/video\/[0-9a-zA-Z=]+.html*/;
		var reg3 = /\/lists\/([0-9]+).html*/;
		var reg4 = /\/video\/lists\/([0-9]+)_([0-9]+).html*/;
		var reg5 = /\/article\/(\d+)_(.*).html*/;
		if(document.location.pathname == '/'){
			params.id		= 1000000000;
			if(params.referrer.indexOf('sina.com')!= -1){
				params.from	 = 'sina';
			}else if(params.referrer.indexOf('sohu.com')!= -1){
				params.from	 = 'sohu';
			}else if(params.referrer.indexOf('qq.com')!= -1){
				params.from	 = 'qq';
			}else if(params.referrer.indexOf('163.com')!= -1){
				params.from	 = '163';
			}else{
				params.from	 = '-';
			}
			params.cate		=  '0';
			params.type		=  'video'
		}else if(reg5.test(params.url)){
			params.id		=  reg5.exec(params.url)[1];
			params.from		=  reg5.exec(params.url)[2];
			params.cate		=  '-';
			params.type		=  'article'
			if(params.id < 10000) return ;
		}else if(reg1.test(params.url)){
			params.id		=  reg1.exec(params.url)[1];
			params.cate		=  '-';
			params.type		=  'article'
		}else if(reg2.test(params.url)){
			if(typeof(aid) == 'undefined'){
				params.id		=  '-';
				params.cate		=  '-';
				params.type		=  '-';
			}else{
				params.id		=  aid;
				params.cate		=  '-';
				params.type		=  'video';
			}
		}else if(reg3.test(params.url)){
			params.id		=  '-';
			params.cate		=  reg3.exec(params.url)[1];
			params.type		=  'article'
		}else if(reg4.test(params.url)){
			params.id		=  '-';
			params.cate		=  reg4.exec(params.url)[1];
			params.type		=  'video'
		}else{
			return ;
		}		
	}
	if(window && window.screen) {
		params.sh = window.screen.height || 0;
		params.sw = window.screen.width || 0;
		params.cd = window.screen.colorDepth || 0;
	}
	if(navigator) {
		params.lang = navigator.language || '';
	}
	var args = '';
	for(var i in params) {
		if(args != '') {
			args += '&';
		}
		args += i + '=' + encodeURIComponent(params[i]);
	}
	var img = new Image(1, 1);
	img.src = 'http://ta2.jiemian.com/stat?' + args;

})();