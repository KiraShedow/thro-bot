const TelegramApi = require('node-telegram-bot-api');

const tocen = '5388226270:AAFrK8M9v_-tjqXGOqmxBcBnoOkRShgDjdQ';

const bot = new TelegramApi(tocen, { polling: true });

const botOption = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '🌏 Товар 🌏', callback_data: 'Товар' }, { text: '🚀 Город 🚀', callback_data: 'Город' }]
            // [{text: '👀 На главную 👀', callback_data: 'На главную'}]
        ]
    })
}

const backOptionRun = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '👀 На главную 👀', callback_data: 'На главную' }]
        ]
    })
}

const cityOptionRun = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '🌞 Краснодар 🌞', callback_data: 'Краснодар' }],
            [{ text: '🌧 Санкт Петербург 🌧', callback_data: 'Санкт Петербург' }],
            [{ text: '🌕 Москва 🌕', callback_data: 'Москва' }],
            [{ text: '🌴 Сочи 🌴', callback_data: 'Сочи' }],
            [{ text: '👀 На главную 👀', callback_data: 'На главную' }]
        ]
    })
}

// создаем кнопки с районами "Краснодара"
const areaProductKrd = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '💣 Юбилейный 💣', callback_data: 'Юбилейный' }],
            [{ text: '👏 Центр 👏', callback_data: 'Центр' }],
            [{ text: '🎹 Западный обход 🎹', callback_data: 'Западный обход' }],
            [{ text: '🌼 Пашкавский 🌼', callback_data: 'Пашкавский' }],
            [{ text: '🚶 Гидрострой 🚶', callback_data: 'Гидрострой' }],
            [{ text: '✊ 40 лет победы ✊', callback_data: '40 лет победы' }],
            [{ text: '🍀 Московская 🍀', callback_data: 'Московская' }],
            [{ text: '💎 Яблановский 💎', callback_data: 'Яблановский' }],
            [{ text: '👀 На главную 👀', callback_data: 'На главную' }]
        ]
    })
}

// создаем кнопки с районами "Питера"
const areaProductPet = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '💣 Адмиралтейский район 💣', callback_data: 'Район Питера 1' }],
            [{ text: '👏 Мурино 👏', callback_data: 'Район Питера 2' }],
            [{ text: '🎹 Московский район 🎹', callback_data: 'Район Питера 3' }],
            [{ text: '🌼 Петроградский район 🌼', callback_data: 'Район Питера 4' }],
            [{ text: '🚶 Пушкинский район 🚶', callback_data: 'Район Питера 5' }],
            [{ text: '✊ Фрунзенский район ✊', callback_data: 'Район Питера 6' }],
            [{ text: '🍀 Центральный район 🍀', callback_data: 'Район Питера 7' }],
            [{ text: '💎 Невский район 💎', callback_data: 'Район Питера 8' }],
            [{ text: '👀 На главную 👀', callback_data: 'На главную' }]
        ]
    })
}

// создаем кнопки с районами "Москвы"
const areaProductMsc = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '💣 Центральный 💣', callback_data: 'Район Москвы 1' }],
            [{ text: '👏 Северный 👏', callback_data: 'Район Москвы 2' }],
            [{ text: '🎹 Северо-Восточный 🎹', callback_data: 'Район Москвы 3' }],
            [{ text: '🌼 Восточный 🌼', callback_data: 'Район Москвы 4' }],
            [{ text: '🚶 Юго-Восточный 🚶', callback_data: 'Район Москвы 5' }],
            [{ text: '✊ Южный ✊', callback_data: 'Район Москвы 6' }],
            [{ text: '🍀 Юго-Западный 🍀', callback_data: 'Район Москвы 7' }],
            [{ text: '💎 Западный 💎', callback_data: 'Район Москвы 8' }],
            [{ text: '👀 На главную 👀', callback_data: 'На главную' }]
        ]
    })
}

// создаем кнопки с районами "Сочи"
const areaProductSochi = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '💣 Центральный 💣', callback_data: 'Район Сочи 1' }],
            [{ text: '👏 Хостинский 👏', callback_data: 'Район Сочи 2' }],
            [{ text: '🎹 Лазаревский; 🎹', callback_data: 'Район Сочи 3' }],
            [{ text: '🌼 Адлерский 🌼', callback_data: 'Район Сочи 4' }],
            [{ text: '🚶 Вишневая 🚶', callback_data: 'Район Сочи 5' }],
            [{ text: '✊ Дагомыс ✊', callback_data: 'Район Сочи 6' }],
            [{ text: '🍀 Заречный 🍀', callback_data: 'Район Сочи 7' }],
            [{ text: '💎 Новый Сочи 💎', callback_data: 'Район Сочи 8' }],
            [{ text: '👀 На главную 👀', callback_data: 'На главную' }]
        ]
    })
}

function started() {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendMessage(chatId, '🔄 Меню успешно загружено. Удачных покупок!');
            await bot.sendPhoto(chatId, 'img/5.jpeg');
            await bot.sendMessage(chatId, '😼КисиМяУ SHOP😼 \n \n 🔝Большой ассортимент веселья и \n удовольствия для вашего отдыха🔝  \n \n 🧬 🧪 🧬 🧪 🧬 🧪 🧬 🧪 🧬 \n \n 💲Появился способом экономить с \n помощью покупок за BTC ☀️ \n \n 💎 ❄️ 💎 ❄️ 💎 ❄️ 💎 ❄️ 💎 \n \n НЕ УПУСКАЙ МОМЕНТ И ДЕЛАЙТЕ \n ПОКУПКУ ЗА 💰Bitcoin(BTC)💰 \n И ПРИ ЭТОМ ЭКОНОМЬТЕ 1️⃣0️⃣% \n СВОИХ ДЕНЕЖНЫХ СРЕДСТВ💰💰 \n ━━━━━━━🔥━━━━━━━  \n 🍬С УВАЖЕНИЕМ🍬 \n 🍄КисиМяУ SHOP🍄', botOption);
        }
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        const userCity = 'Город';
        const userPurc = 'Оплата';

        const backRun = 'На главную';

        const userHome = 'Ваш район';

        const userKrd = 'Краснодар';
        const userPet = 'Санкт Петербург';
        const userMsc = 'Москва';
        const userSochi = 'Сочи';

        if (data === userKrd) {
            bot.sendMessage(chatId, 'Выберите район', areaProductKrd);
        }
        if (data === userPet) {
            bot.sendMessage(chatId, 'Выберите район', areaProductPet);
        }
        if (data === userMsc) {
            bot.sendMessage(chatId, 'Выберите район', areaProductMsc);
        }
        if (data === userSochi) {
            bot.sendMessage(chatId, 'Выберите район', areaProductSochi);
        }

        // KRD 

        const areaKrd1 = 'Юбилейный';
        const areaKrd2 = 'Центр';
        const areaKrd3 = 'Западный обход';
        const areaKrd4 = 'Пашкавский';
        const areaKrd5 = 'Гидрострой';
        const areaKrd6 = '40 лет победы';
        const areaKrd7 = 'Московская';
        const areaKrd8 = 'Яблановский';

        // PET

        const areaPet1 = 'Район Питера 1';
        const areaPet2 = 'Район Питера 2';
        const areaPet3 = 'Район Питера 3';
        const areaPet4 = 'Район Питера 4';
        const areaPet5 = 'Район Питера 5';
        const areaPet6 = 'Район Питера 6';
        const areaPet7 = 'Район Питера 7';
        const areaPet8 = 'Район Питера 8';

        // MSC

        const areaMsc1 = 'Район Москвы 1';
        const areaMsc2 = 'Район Москвы 2';
        const areaMsc3 = 'Район Москвы 3';
        const areaMsc4 = 'Район Москвы 4';
        const areaMsc5 = 'Район Москвы 5';
        const areaMsc6 = 'Район Москвы 6';
        const areaMsc7 = 'Район Москвы 7';
        const areaMsc8 = 'Район Москвы 8';

        // SOH

        const areaSochi1 = 'Район Сочи 1';
        const areaSochi2 = 'Район Сочи 2';
        const areaSochi3 = 'Район Сочи 3';
        const areaSochi4 = 'Район Сочи 4';
        const areaSochi5 = 'Район Сочи 5';
        const areaSochi6 = 'Район Сочи 6';
        const areaSochi7 = 'Район Сочи 7';
        const areaSochi8 = 'Район Сочи 8';

        const Product = 'Товар';

        if (data === userCity) {
            return bot.sendMessage(chatId, 'Наличие товаров: ', cityOptionRun);
        }

        if (data === userPurc) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, 'Оплата Bitcoin: 1vv0eeebddd1aa0b00rr1f0eee000dvvdrrrrd1', backOptionRun);
        }

        if (data === backRun) {
            await bot.sendPhoto(chatId, 'img/5.jpeg');
            await bot.sendMessage(chatId, '😼КисиМяУ SHOP😼 \n \n 🔝Большой ассортимент веселья и \n удовольствия для вашего отдыха🔝  \n \n 🧬 🧪 🧬 🧪 🧬 🧪 🧬 🧪 🧬 \n \n 💲Появился способом экономить с \n помощью покупок за BTC ☀️ \n \n 💎 ❄️ 💎 ❄️ 💎 ❄️ 💎 ❄️ 💎 \n \n НЕ УПУСКАЙ МОМЕНТ И ДЕЛАЙТЕ \n ПОКУПКУ ЗА 💰Bitcoin(BTC)💰 \n И ПРИ ЭТОМ ЭКОНОМЬТЕ 1️⃣0️⃣% \n СВОИХ ДЕНЕЖНЫХ СРЕДСТВ💰💰 \n ━━━━━━━🔥━━━━━━━  \n 🍬С УВАЖЕНИЕМ🍬 \n 🍄КисиМяУ SHOP🍄', botOption);
        }

        if (data === Product) {
            return bot.sendMessage(chatId, 'Укажите ваш город ', cityOptionRun);
        }



        function homeUserFunc() {

            // KRD 

            if (data === areaKrd1) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaKrd2) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaKrd3) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaKrd4) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaKrd5) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaKrd6) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaKrd7) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaKrd8) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
             // PET

             if (data === areaPet1) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaPet2) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaPet3) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaPet4) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaPet5) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaPet6) {  
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaPet7) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaPet8) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }

             // MSC 

             if (data === areaMsc1) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaMsc2) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaMsc3) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaMsc4) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaMsc5) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaMsc6) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaMsc7) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaMsc8) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }

            //  SOH

            if (data === areaSochi1) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaSochi2) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaSochi3) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaSochi4) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaSochi5) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaSochi6) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaSochi7) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
            if (data === areaSochi8) {
                bot.sendMessage(chatId, 'Выберите товар', botProduct)
            }
        }
        homeUserFunc()
        const prduct8 = 'товар_8';
        const prduct9 = 'товар_9';
        const prduct10 = 'товар_10';
        const prduct11 = 'товар_11';
        const prduct12 = 'товар_12';
        const prduct13 = 'товар_13';
        const prduct14 = 'товар_14';
        const prduct15 = 'товар_15';
        const prduct16 = 'товар_16';
        const prduct17 = 'товар_17';
        const prduct18 = 'товар_18';

        function priceProduct() {

        }
        priceProduct()
        if (data === prduct8) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 3300₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }
        if (data === prduct9) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 3200₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct10) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 3300₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct11) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 2400₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct12) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 6500₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct13) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 3800₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct14) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 3200₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct15) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 2700₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct16) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 2700₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct17) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 12000₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }

        if (data === prduct18) {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/677/a2b/677a2b2a-ff09-484a-bfa1-645a753b2b19/256/34.webp');
            return bot.sendMessage(chatId, ' \n Переведите на BTC-кошелек \n 19LcqS9pEgrXZwAcTS982xKn5kzew98aqc \n  Сумма к оплате: 4200₽. \n  Важно пополнить ровную сумму. \n ‼️ У вас есть 30 мин на оплату, после чего платёж не будет зачислен \n ‼️ Перевёл неточную сумму - оплатил чужой заказ', backOptionRun);
        }
    })
}
started()

const botProduct = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '💙 afa pvp синий лёд 1.0г  📦 3300 💙', callback_data: 'товар_8' }],
            [{ text: '💗 afa pvp розовый лёд 1.0г  📦 3200 💗', callback_data: 'товар_9' }],
            [{ text: '🤍 afa pvp КРБ 1.0г 📦 3300 🤍', callback_data: 'товар_10' }],
            [{ text: '🚬 Гашишь 1.0г 📦 2400 🚬', callback_data: 'товар_11' }],
            [{ text: '🍄 Грибы 5.0г 📦 6500 🍄', callback_data: 'товар_12' }],
            [{ text: '🍀 Шишки 2.0г 📦 3800 🍀', callback_data: 'товар_13' }],
            [{ text: '💎 Mef white crystal 1.0г 📦 3200 💎', callback_data: 'товар_14' }],
            [{ text: '💨 Mef мука 1.0г  📦 2700 💨', callback_data: 'товар_15' }],
            [{ text: '🌪 FEN pink 1.0г   📦 2700 🌪', callback_data: 'товар_16' }],
            [{ text: '🌨 Kokain 1.0г 📦 12000 🌨', callback_data: 'товар_17' }],
            [{ text: '💊 LSD skitels 3.0г  📦 4200 💊', callback_data: 'товар_18' }],
            [{ text: '👀 На главную 👀', callback_data: 'На главную' }]
        ]
    })
} 