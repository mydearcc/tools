// 在页面上插入代码
const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
try{
	script.setAttribute('src', chrome.runtime.getURL('js/main.js'));
}catch(e){
	script.setAttribute('src', './js/main.js');
}
document.documentElement.appendChild(script);
script.addEventListener('load', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', 'upgrade-insecure-requests');
    document.getElementsByTagName('head')[0].prepend(meta);
});
function ajax(conf) { 
	var xhr = new XMLHttpRequest();
	xhr.open("GET", conf.url, true);
	xhr.onreadystatechange = function() {
		console.log('xhr',xhr);
		if (xhr && xhr.readyState == 4 && xhr.status == 200) {
			var data=JSON.parse(xhr.response);
			conf.success(data);
		}
	}
	xhr.send();
};
function getWebList(cb){//获取数据
	var result = [
		{"id": 1,"name": "在线转换","type":2,"list": []}, 
		{"id": 2,"name": "加密解密","type":3,"list": []},
		{"id": 3,"name": "站长工具","type":4,"list": []}, 
		{"id": 4,"name": "代码开发","type":5,"list": []}, 
		{"id": 5,"name": "Css样式","type":6,"list": []}, 
		{"id": 6,"name": "二维码","type":7,"list": []}, 
		{"id": 7,"name": "图片相关","type":8,"list": []}, 
		{"id": 8,"name": "生活工具","type":9,"list": []}, 
		{"id": 9,"name": "娱乐工具","type":10,"list": []}, 
		{"id": 10,"name": "文档手册","type":1,"list": []}, 
		{"id": 11,"name": "其他工具","type":20,"list": []},
		{"id": 12,"name": "优惠券领取","type":-1,"list": [
			{"name": "阿里云优惠券","url": "/nav/2907","hot": 0,"img": ""}, 
			{"name": "腾讯云优惠券","url": "/nav/2908","hot": 0,"img": ""},
			{"name": "硅云服务器/虚拟主机","url": "/nav/3219","hot": 0,"img": ""}, 
			{"name": "淘宝/京东/拼多多优惠券","url": "http://tb.fly63.com","hot": 1,"img": ""},
		]
	}]
	ajax({
		url: 'https://api.fly63.com/vue_blog/home.php/Tool/getAllTool',
		success:function(res){
			if(res.httpCode == 2000 && !!res.data){
				var data= res.data;
				for(var i in data){
					for(var j in result){
						if(data[i].type == result[j].type && !data[i].hide){
							result[j].list.push({
								"name": data[i].title,
								"url": data[i].url,
								"hot": data[i].hot || 0,
								"img": data[i].img || "",
							})
						}
					}
				}
				localStorage.setItem('classifyList',JSON.stringify(result));//存储本地
				typeof cb=="function" && cb(result)
			}
		}
	});
}
function getClassify(){
	var result = localStorage.getItem('classifyList');
	if(!!result){
		result = JSON.parse(result);	
	}
	return result || null;
}
function getD(val,type){
	if(!type){
		return document.getElementById(val);
	}
	if(type='class'){
		return document.getElementsByClassName(val);
	}
}
function throttle(fn, delay) {
	delay=delay || 200;
	let timer = null;
	return function () {
		if(timer) return;
		timer = setTimeout(() => {
			fn.apply(this,arguments);
			timer = null;
		})
   }
}
function setSotreList(data){
	var sotreList=localStorage.getItem('list');
	var max=8;
	sotreList=JSON.parse(sotreList || '[]');
	for(let i in sotreList){
		if(sotreList[i].name==data.name){
			sotreList.splice(i,1);
		}
	}
	sotreList.splice(max,sotreList.length-max);
	sotreList.unshift(data);
	localStorage.setItem('list',JSON.stringify(sotreList));
}
var _URL='https://fly63.com';
var classifyList=getClassify();
function initData(){
	var nav=getD('nav'),
		list=getD('list'),
		keyword=getD('keyword'),
		nav_html='',
		list_html='',
		sotreList=localStorage.getItem('list');
	if(!!sotreList){
		sotreList=JSON.parse(sotreList);
		list_html+=`<div class="li"><h2>最近访问</h2><div class="sub">`;
		for(var i in sotreList){
			var li = sotreList[i];
			list_html+=`<div class="sli" url="${li.url}" title="${li.name}">${li.name}</div>`;
		}
		list_html+=`</div></div>`;
	}
	for(var i in classifyList){
		var item=classifyList[i];
		nav_html+=`<a class="li" href="#${item.id}"><span>${item.name}</span></a>`;
		list_html+=`<div class="li"><i id="${item.id}"></i><h2>${item.name}</h2><div class="sub">`;
		for(var j in item.list){
			var li=item.list[j];
			list_html+=`<div class="${li.hot==1 ? 'sli hot' : 'sli'}" idx="${i}_${j}" title="${li.name}">${li.name}</div>`;
		}
		list_html+=`</div></div>`;
	}
	nav.innerHTML=nav_html;
	list.innerHTML=list_html;
	getD("classify").addEventListener("click",setClassify);
	list.addEventListener("click",function(e){
		if(e.target.getAttribute('class').indexOf('sli')>-1){
			toHref(e.target);
		}
	});
	keyword.addEventListener('input', throttle(setSearch));
	keyword.addEventListener('focus', throttle(setSearch));
	keyword.addEventListener('blur', function() {
		setTimeout(function() {
			getD('searchContent').innerHTML = '';
		}, 250)
	});
	getD('closekeyword').addEventListener("click",function(){
		keyword.value='';
		this.style.display= 'none';
	});
	getD('searchContent').addEventListener("click",function(e){
		if(e.target.getAttribute('class')=='ssli'){
			toHref(e.target);
		}
	});
	getD('logo').addEventListener('click',function(e){
		var	url=_URL+'/tool/home.html';
		window.open(url,'_blank');
	});
}
function setSearch(value){
	var value=this.value.trim(),
		searchContent = getD('searchContent'),
		closekeyword = getD('closekeyword'),
		shtml = '';
	value = value.toLowerCase(); //输入值
	if (value == '') {
		searchContent.innerHTML = '';
		closekeyword.style.display= 'none';
		return;
	}
	closekeyword.style.display= 'block';
	for (var i in classifyList) {
		for (var j in classifyList[i].list) {
			var li = classifyList[i].list[j];
			if (!!li.name && li.name.toLowerCase().indexOf(value) > -1) {
				shtml += `<div class="ssli" idx="${i}_${j}" class="${li.hot==1 ? 'hot' : ''}" title="${li.name}">${li.name}</div>`; 
			}
		}
	}
	searchContent.innerHTML = shtml;
}
function toHref(dom){
	var idx=dom.getAttribute('idx'),
		url=dom.getAttribute('url');
	if(!!idx){
		idx=idx.split('_');
		var data=classifyList[idx[0]].list[idx[1]];
		setSotreList(data);
		url=data.url;
	}
	if(!url){
		return;
	}
	if(!(url.indexOf('http://')>-1 || url.indexOf('https://')>-1)){
		url=_URL+url;
	}
	window.open(url,'_blank');
}
function setClassify(){
	var cls=getD('cls'),
		nav=getD('nav'),
		line=getD('line');
	var val=cls.getAttribute('class');
	if(!val){
		cls.setAttribute('class','rotate');
		nav.style.display='block';
		line.style.height='132px';
		return;
	}
	cls.setAttribute('class','');
	line.style.height='44px';
	nav.style.display='none';
}
if(!!classifyList){//数据存在
	initData();
}
getWebList(function(list){//获取网络数据
	if(!classifyList){//数据不存在
		classifyList = list || classify;
		initData();
	}
});
if(!classifyList){//数据获取不成功
	setTimeout(function(){
		if(!classifyList){//数据不存在
			classifyList = classify;
			initData();
		}
	},1000)
}
