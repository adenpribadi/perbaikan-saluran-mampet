const https = require("https");
const xml2js = require("xml2js");

const key = "a0bf1e37ff7349b99df98736ab383c0f";
const host = "https://perbaikansaluranmampet.com";
const sitemapUrl = `${host}/sitemap.xml`;

https.get(sitemapUrl, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    xml2js.parseString(data, (err, result) => {
      if (err) {
        console.error("Gagal parse sitemap:", err);
        return;
      }

      const urls =
        result.urlset.url.map((u) => u.loc[0]) || [];

      if (!urls.length) {
        console.log("Tidak ada URL ditemukan di sitemap.");
        return;
      }

      const payload = JSON.stringify({
        host: "perbaikansaluranmampet.com",
        key: key,
        keyLocation: `${host}/${key}.txt`,
        urlList: urls,
      });

      const options = {
        hostname: "api.indexnow.org",
        path: "/indexnow",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      };

      const req = https.request(options, (res) => {
        console.log("IndexNow Status:", res.statusCode);

        res.on("data", () => {});
        res.on("end", () => {
          console.log("IndexNow selesai.");
        });
      });

      req.on("error", (error) => {
        if (error.code === "ECONNRESET") {
          console.log("Connection closed by server (normal).");
        } else {
          console.error("IndexNow Error:", error);
        }
      });

      req.on("error", (error) => {
        console.error("IndexNow Error:", error);
      });

      req.write(payload);
      req.end();
    });
  });
});