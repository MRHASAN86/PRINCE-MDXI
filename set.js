
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW46jRhTdS/3aGvOyAUstBTAYjB/42TbRfJShgGrzclVhG48sjZT8ZwNZxqxidjHKRiLc3dOjSJl0+Crqce6595x7P4G8wBS5qAb9T6Ak+AQZapasLhHoA72KIkRAG4SQQdAHLSPa+0dFs6wIQipt6mUv7KnONIRmUZYcHPVi7EIa2bb2AG5tUFb7FAc/AVTN1cjmdlcTtnw8zdXZZJRIvl1YsxV3LjsXa+vsj9eMW/PxA7g1iBATnMdmmaAMEZi6qPYgJu+jL4xP9phfJ3JPCReHY7ZT+WW4uPbsHbc0Twcp4wTZmLcIy99J31wl+sYfuQKnr7fVcjz0XeYppwk3785CPw00SMly4B/DC32mT3Gco9AJUc4wq99ddzoZGKK71Zz1Jap9pOdzP1Cno7Sz4J2TM4dBlVsde1qv+fn7iMsOivbDKtLoQbo41ye5GrNeqJ4OdFJd8WiwrVQZjQblrN79SNwjr145/J+6U0vN99axHj22Ouk4V8bdMsvmC0wnKcEinHWCzvZJOK6QSN9Hf7gbWJdULeTUYrHE2MZaez5PeWsPq6iK/cDplMcpJ3jc5I0+ZBX5GcvRunvctgxB365l29pKobOTUQ4VPT2eV49eMpxMjZkRxdlQtePD7LAVsl01ti5re0ovK82QXazp52swKMMsYtgfFI9Joj3cMzqg2glBn7+1AUExpoxAhov8vidwbQDD0xIFBLF7ecFSHq5tw03KzfQ06FC+8Ls9O0vJwuyYPVOwCQtb4wgtr8X6AbRBSYoAUYpCG1NWkHqCKIUxoqD/68c2yNGFPQvXhBP5NogwoWydV2VawPBV1ddDGARFlbNlnQdGs0AE9Lm3bcQYzmPa1LHKIQkSfEJGAhkF/QimFH3PEBEUgj4jFfretUYRNoXf8Ia6MUcT0AbZXRAcNqNAEHmVE3hZkvi+LP1CP5wbWFiWH3LEQBvksLkNvv757cvny7cvf3z9/Ndvv4M2SO/PeUVRFVESepLU7YpSg9Ac3L4zbwKFiEGcUtAHhrvS5KqwTA9zMZ0Ph5oZa0asgbdMXy3zLElpEmtQrDw0DJR5bzqlEocfnypJsydq97Hj19WoO9frXedwl+SfIKAPZuVgcxRNzR3uXJpwpDvuefoyGZs7nmjxfnNA5n7hmNw5DaJFMl+NzgO3shX+Giar7tGLNgs5EOrC9c+LuaiLMk2sWDs/NNFCdMIB+jFYWu2nOpRyx7KdQ45jeZFmk9ZG8bvSJJyM95tyZXIGrcfZNlbzTQaZUkdPhb98XCtsQSU7nYQEuhqd6kmcqISX59FT/GzmezOlL0MM323WaNj8RhjdZ8KLVv+p6TPxxnrcrf0DxsuU+ZdO1eHCvcx75lVMcs+cPa32s6mTFnKl6VcPbU5CQDBaa0HmdS1wu31sgzKFLCpI1gyjbA9BG5Ciaozs5FHxk0iG5jiD+XPaKaRMe2uOFc4QZTArQZ+Xu6LQVXqC/HzLI0VpQ5qAPhAXqi+qjdNrrSyXDLLXXgNa8+mKCG5/A8dwHFmHBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "+923190217441", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
