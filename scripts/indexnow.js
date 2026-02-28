const https = require("https");

const key = "a0bf1e37ff7349b99df98736ab383c0f";
const host = "https://perbaikansaluranmampet.com";

const urls = ["/"];

const data = JSON.stringify({
  host: "perbaikansaluranmampet.com",
  key: key,
  keyLocation: `${host}/${key}.txt`,
  urlList: urls.map((url) => host + url),
});

const options = {
  hostname: "api.indexnow.org",
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(data),
  },
};

const req = https.request(options, (res) => {
  console.log("IndexNow Status:", res.statusCode);

  res.on("data", (chunk) => {
    console.log("Response:", chunk.toString());
  });
});

req.on("error", (error) => {
  console.error("IndexNow Error:", error);
});

req.write(data);
req.end();