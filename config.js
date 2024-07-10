const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigerria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349127215714";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_14_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMixcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiTG1VTlZaUWpuSFROdUdEejdVQlZuL2F2QWdVei81L3hjZlBKd2tXaTFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0NXNKVWM5TFNlU2pmc3QtTEQ1Q0tRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0N2RlMjlhLWYzNmEtNDAxMy05NmJhLTQ3NTliZDQxMTc2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDc2LFxuICAgICAgMTkwLFxuICAgICAgMTA1LFxuICAgICAgMjI2LFxuICAgICAgMTc1LFxuICAgICAgMjI2LFxuICAgICAgMTQ3LFxuICAgICAgMjgsXG4gICAgICAxODQsXG4gICAgICAzOCxcbiAgICAgIDI1NCxcbiAgICAgIDU0LFxuICAgICAgODQsXG4gICAgICA4MyxcbiAgICAgIDE2NyxcbiAgICAgIDExOSxcbiAgICAgIDIxNyxcbiAgICAgIDEwNSxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTAsXG4gICAgICAyNDksXG4gICAgICAxOTIsXG4gICAgICAxMDIsXG4gICAgICA0MixcbiAgICAgIDE2MSxcbiAgICAgIDY0LFxuICAgICAgMjAsXG4gICAgICAyMTgsXG4gICAgICAyMTQsXG4gICAgICAxMTIsXG4gICAgICA5OSxcbiAgICAgIDE3NixcbiAgICAgIDEyNyxcbiAgICAgIDIzMyxcbiAgICAgIDIxNixcbiAgICAgIDk3LFxuICAgICAgMTI0LFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZEOFZRUzhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI3MjE1NzE0OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRmVzdHVzIEpuclwiLFxuICAgIFwibGlkXCI6IFwiMTg5MDE3NzM1ODY4NjUzOjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09lK3c3QURFS1R6dTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjl0RWhCdURMaEZxNWFRY3JFRlRJQnJmenNBd1FIMkdNMU5JNi9PYU4xaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsbVhGeVNURCtQYlp0QW9vdTdvVWdocWdsUTVJK1U1SU15L1lRekN6MmJWRmxPYXc3a1RIYXk5L3hNMWRFa1hjR2lUajJYVnhuRFJGYmsxV2pIVHRCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1OU5UeEN1YlJ5Sm9YWnhFTXFJdVF3Z2Zyc05EM2xhRGhWZEs0bFlaVGovazExQk5qdGU3N2E5ei9vU1dLSmI4cVQvN1FuL3FkczdnS3F2VHZWdjZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI3MjE1NzE0OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjQ2MDU3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "&",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "suhail-md",
  ownername:process.env.OWNER_NAME|| "Festus Jnr",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
