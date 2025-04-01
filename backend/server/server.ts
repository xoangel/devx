import express, { Express, Request } from "express";
import cors from "cors";
import { bot, sendMessageToAll } from "./notifications";

const app: Express = express();
app.use(express.json());
app.use(
  cors({
    // origin: "https://travel.magicofbaikal.ru", 
    origin: "*",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);


app.post("/send-message", async (req: Request, res: any) => {
  const data = req.body;

  try {
    const message = `🛎 *Новая заявка*\n\n` +
    `👨 *Имя:* ${data.name}\n` +
    `🏢 *Компания:* ${data.company}\n` +
    `📱 *Номер:* ${data.contact}\n` +
    `📞 *Способ связи:* ${data.type}\n` +
    `✉️ *Сообщение:* ${data.message}\n`

    await sendMessageToAll(message);
    res.json({ success: true, message: "Письмо отправлено!" });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

app.listen(3000, () => {
  bot.launch();
});
