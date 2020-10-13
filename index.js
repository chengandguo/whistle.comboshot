const http = require("http");

module.exports = server => {
  server.on("request", async (req, res) => {
    const rule = req.originalReq.ruleValue;
    res.end(await mergeRes(rule));
  });
}

/*
  @params: comboUrl: comboshot://http://x.x.x.x:8080/build/??lang/id.js,social-accounts.js
  @return: [//x.x.x.x:8080/build/lang/id.js, 
    //x.x.x.x:8080/build/social-accounts.js]
*/
function splitUrl (comboUrl) {
  let [prefix, compose=""] = comboUrl.split("??");
  return compose.split(",").map(item => prefix + item);
}

async function mergeRes (url) {
  let urlList = splitUrl(url);
  let result = await Promise.all(urlList.map(url => request(url)));
  return result.join("");
}

function request(url) {
  return new Promise( (resolve, reject) => {
    http.get(url, res => {
      const { statusCode } = res;
      if(statusCode !== 200) {
        console.error(`Request Failed.Status Code: ${statusCode}`);
        res.resume();
        return;
      }

      let data = "";
      res.on("data", chunk => {
        data += chunk;
      }).on("end", () => {
        resolve(data);
      }).on("error", e => {
        console.error(`Got error: ${e.message}`);
        reject();
      })
    });
  });
}