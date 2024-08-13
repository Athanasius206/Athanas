const fonts = {
  a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h",
  i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", 
  p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", 
  w: "w", x: "x", y: "y", z: "z" 
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
    const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
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
};
