/**
 * 工具方法库
 */

var utils={};

/*
JSON操作
 */
utils.json={
	/* 输出格式化的json文本 */
	prettify:function(jsonObj,spr) {
		spr=spr||'  ';
		return JSON.stringify(jsonObj,'',spr)
	}
};

module.exports=utils;