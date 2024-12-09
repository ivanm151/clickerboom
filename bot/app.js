import { Telegraf, Markup} from 'telegraf'


const token = '7958621269:AAEjQkrlGwN6njPpiQlP8tMPfyxGZWziJBA'
const webAppUrl = 'https://clickclick-37f6b.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press to start the app', Markup.inlineKeyboard([
            Markup.button.webApp(
                'Open mini app',
                `${webAppUrl}?ref=${ctx.payload}
            `)
        ])
    )


})

bot.launch()