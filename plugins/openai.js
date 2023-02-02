import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
if (!text) throw "[!] Apa Yang Mau Anda Cari Tuan?"
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
    }
handler.help = ['ai', 'openai']
handler.tags = ['info', 'fun']
handler.command = /^(ai|openai)$/i
export default handler