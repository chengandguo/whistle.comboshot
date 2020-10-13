## whistle.comboshot插件

当我们需要代理combo请求，例如这样的请求：//xxx.com/source/??a.js,language/en.js  
但是我们本地的服务却是多个单独的请求：  
//30.18.110.44/build/a.js   
// 30.18.110.44/build/language/en.js  
这个时候，我们可以使用该插件来将多个本地服务的响应合并返回给客户端，来解决这个小问题  

## 配置规则
  
//xxx.com/source/??a.js,language/en.js comboshot://http://30.18.110.44/build/??a.js,language/en.js  


## 说明
  
线上请求：//xxx.com/source/??a.js,language/en.js  
本地任务：//30.18.110.44/build/a.js  内容为： console.log("I am a.js");  
        //30.18.110.44/build/language/en.js 内容为：console.log("I am en.js");  
拦截请求，合并多次响应内容：  
comboshot:////30.18.110.44/build/??a.js,language/en.js  
合并后内容为： console.log("I am a.js");console.log("I am en.js");  

## npm地址
  
https://www.npmjs.com/package/whistle.comboshot
