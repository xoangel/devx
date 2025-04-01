import { Telegraf } from "telegraf";
import fs from "fs";
import process from "process";
import dotenv from 'dotenv';
dotenv.config();


export const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);

const USERS_FILE = "./users.json";

const getUsers = (): number[] => {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
};

const addUser = (chatId: number) => {
  const users = getUsers();
  if (!users.includes(chatId)) {
    users.push(chatId);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users));
  }
};

bot.start((ctx) => {
  addUser(ctx.chat.id);
  ctx.reply("Вы подписаны на уведомления!");
});

export const sendMessageToAll = async (message: string) => {
  const users = getUsers();
  for (const chatId of users) {
    try {
      await bot.telegram.sendMessage(chatId, message, { parse_mode: "Markdown" });
    } catch (error) {
      console.error(`Ошибка отправки в ${chatId}:`, error);
    }
  }
};
