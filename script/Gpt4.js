const fonts = {
  a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H",
  i: "I", j: "J", k: "K", l: "L", m: "M", n: "N", o: "O", 
  p: "P", q: "Q", r: "R", s: "S", t: "T", u: "U", v: "V", 
  w: "W", x: "X", y: "Y", z: "Z" 
};

const axios = require('axios');

module.exports.config = {
  name: "ai",
  version: 1.0,
  credits: "aesther",//Api OtinXsandip
  description: "AI",
  hasPrefix: false,
  usages: "{pn} [prompt]",
  aliases: ["ai2", "bot"],
  cooldown: 0,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const prompt = args.join(" ");
    if (!prompt) {
      await api.sendMessage("📝ATH \n━━━━━━━━━━━\n Salut! Comment puis-je vous aider?", event.threadID);
      return;
    }
    const response = await axios.get(`https://ai-chat-gpt-4-lite.onrender.com/api/hercai',=${encodeURIComponent(prompt)}`);
    const answer = response.data.answer;

    let formattedAnswer = "";
    for (let char of answer) {
      if (fonts[char.toLowerCase()]) {
        formattedAnswer += fonts[char.toLowerCase()];
      } else {
        formattedAnswer += char;
      }
    }

    await api.sendMessage(`📝ATH \n━━━━━━━━━━━\n${formattedAnswer} 🔎📝`, event.threadID);
  } catch (error) {
    console.error("Error:", error.message);
  }
};￼Enter
