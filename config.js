//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Kitale, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "254782576743";
global.owner = process.env.OWNER_NUMBER || "254782576743";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dvVXM4cTBKdnMvQjhheDV3RkNxQTVmUTRST2ZKeks5d051dUFXQ3IyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHgzRmpNOFRYd0tqb2ZjNHBtbWNXYzFCd2dPbTljVTlSdUppZk9tRXVTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQkhqaDJ0S2NNWEU0WTNpU1BnNW1MV0ZOdmVHY0tvVlhEM0VGSWlwb25nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ZW01RzhBUWxZRHhnWDVYUzFFUENBMnJiMUswZnJKVk9kS0Y1dG96amlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGK3hLOGkrTzNZempMQXI1RWMwekEzcVNjV2pIMEpNd3BSdUFlT1VKa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxFR0w3dUlvZGIvOXQ4ZFQ1QmRMekJQTEl1UnUvajdoSml0Y042QXJ5SHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJmUU8zMFNNYlE2cC9OcGs4cXBNS3YydGF0eTNKTTlkcVRSeVB0Qjgycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmt1RWc0QWZYbFM3NW85U3VsbFpuM1d5b2ZHeDFQbWF0Mm1sUzR1OG9pUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhVYlpMRXNHRnAyQm13MmF6d3JhazJXNjdpYmNwWHZ1MlllQkdsbHNiMmFVcTdXNVBWMFg2a3N5L0dTcVBPUkEvd1dhTkVpRTMwS2NWUVY0VDVLU0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiJ5VmFVci9KMG9JRjZ5eHVQZGRqTTV4bG9qdWNia3BFNWxQM0F6a1JwUlNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOYk8yMFllb1I4aXl1TXZUVmhtRjBBIiwicGhvbmVJZCI6ImQ3NjAwNDk1LTU1ZDgtNGNlYS04NTZiLTAxYjhhNzg1ZWRiNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0N2ZoUjFvSm85eDZXaElKNlNsdEkyY1hsSkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3ZYdHFaMEgrbGdISE9KSk13Uy9nMHhuUVpnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1MUVNDWERBIiwibWUiOnsiaWQiOiIyNTQ3ODI1NzY3NDM6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJwYXNjYWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQUTArTUJFTm5VaWJVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJMem9wWElOTTBGNFVXYVRpVVdMREZNQ2xSYk1lTGNRMmY0RithQm9jR1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjN1MVlPalBiRVBoQU5nQjRiUzRWcXpqL3ZTbFFvcXFTS3BoOGcyOFBkN3hzczc2a3E3bXZyU3lWSWdqb0QrclJES1o3eGpFamthSXFMSmE2bVlBL0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2UkcvL2hKRXZldlNsbGhheitCbVY3OVA1MjV1b3Jyd2xrTFY1Ry9LRWxKSUx1MkgvaitRUE4yRzdzZnk5cnBzZys0MHYxblFxOFVkYzJISWdVZ1lDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MjU3Njc0Mzo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF5ODZLVnlEVE5CZUZGbWs0bEZpd3hUQXBVV3pIaTNFTm4rQmZtZ2FIQm0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5MjAxMDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGx4In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "PASCAL-BOT",
  ownername: process.env.OWNER_NAME || "Pascal",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
