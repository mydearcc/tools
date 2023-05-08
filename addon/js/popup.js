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
var _URL='https://www.fly63.com';
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
	for(var i in classify){
		var item=classify[i];
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
	var value=this.value.trim();
	var searchContent = getD('searchContent');
	var closekeyword = getD('closekeyword');
	var shtml = '';
	value = value.toLowerCase(); //输入值
	if (value == '') {
		searchContent.innerHTML = '';
		closekeyword.style.display= 'none';
		return;
	}
	closekeyword.style.display= 'block';
	for (var i in classify) {
		for (var j in classify[i].list) {
			var li = classify[i].list[j];
			if (!!li.name && li.name.toLowerCase().indexOf(value) > -1) {
				shtml += `<div class="ssli" idx="${i}_${j}" class="${li.hot==1 ? 'hot' : ''}" title="${li.name}">${li.name}</div>`; 
			}
		}
	}
	searchContent.innerHTML = shtml;
}
function toHref(dom){
	var idx=dom.getAttribute('idx');
	var url=dom.getAttribute('url');
	if(!!idx){
		idx=idx.split('_');
		var data=classify[idx[0]].list[idx[1]];
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
initData();