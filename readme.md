## whistle插件
合并combo请求的响应内容


## 配置规则
//xxx.com/source/??a.js,language/en.js comboshot://http://30.18.110.44/build/??a.js,language/en.js


## 说明
线上请求：//xxx.com/source/??a.js,language/en.js  
本地任务：//30.18.110.44/build/a.js  内容为： console.log("I am a.js");  
        ////30.18.110.44/build/language/en.js 内容为：console.log("I am en.js");  
拦截请求，合并多次响应内容：  
comboshot:////30.18.110.44/build/??a.js,language/en.js  
合并后内容为： console.log("I am a.js");console.log("I am en.js");  

## npm地址
https://www.npmjs.com/package/whistle.comboshot