const { Telegraf , Markup } = require('telegraf');
const { Keyboard, Key } = require('telegram-keyboard')
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    
	ctx.reply('👋')
	ctx.reply(' Bienvenido ' + ctx.from.first_name + ' \n\n💁‍♂️ Aquí puedes ganar TON realizando pequeñas tareas. Presione "Gana criptomonedas" o /earn para comenzar\n\n¿Eres anunciante?\nUtilice el comando /newad para crear sus anuncios aquí en el bot\n✅ Obtén hasta un 9% de bonificación en tus depósitos.\n\nCanales oficiales: Noticias/Actualizaciones (https://t.me/) \n Transacciones (https://t.me/)');
	ctx.reply('🔝 Menú Principal', Markup
		.keyboard([
			[`📜 Ganar criptomonedas`],
			['💰 Balance', '⛄ Retirar', ' Referidos'],
			['📚 Mis Anuncios', '⚙ Ajustes'],
            ['/start']
		])
		.oneTime()
		.resize()
	)

})

bot.hears('📜 Ganar criptomonedas', (ctx) => {

	const msg = `Elige una opción para comenzar a ganar tu TON 👇\n\nTareas disponibles: 🖥 (0) | 📣 (0) 👀 (0) 🔗(0)`;

	const keyboard = Keyboard.make([
		[
			Key.callback('🖥 Visitar Sitios', 'tme'),
			Key.callback('📣 Unirse un Canal', 'tme'),
			Key.callback('🤖 Iniciar un Bot', 'tme'),
		
		],[
			Key.callback('👀 Visualizar Post', 'tme'),
			Key.callback('🔗 Clickear Link', 'tme')
		]
	  ])

	ctx.reply(msg, keyboard.inline());
	
})

bot.command('earn', (ctx) => {
    
})

bot.on('text', (ctx) => {
	ctx.reply(`❌ Comando Desconocido!\n Has enviado un mensaje directamente en el chat del Bot. \nℹ️ No envíes mensajes directamente al Bot o reinicia el Menú pulsando /start`)
})

bot.launch()
console.log('✅ El bot esta corriendo correctamente')
module.exports = bot