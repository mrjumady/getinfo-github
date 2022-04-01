// GET INFORMATION GITHUB USER BY USERNAME

const fetch = require("node-fetch");
const readlineSync = require("readline-sync");
const async = require("async");

const GetInfo = (username) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });

(async () => {
  console.log("------------ GET INFORMATION USER GITHUB -------------\n");
  const username = readlineSync.question("[?] ur username: ");
  const InfoMaszeh = await GetInfo(username);
  console.log("------------------------------------------------------\n");
  if (InfoMaszeh.message == "Not Found") {
    console.log(`[!] ur Username ${InfoMaszeh.message}, Please read documentation ${InfoMaszeh.documentation_url}`);
  } else {
    console.log(`[*] Username: ${InfoMaszeh.login}`);
    console.log(`[*] Name: ${InfoMaszeh.name}`);
    console.log(`[*] Followers: ${InfoMaszeh.followers}`);
    console.log(`[*] Username: ${InfoMaszeh.following}`);
  }
  console.log("--------------------- THANKS! -----------------------\n");
})();
