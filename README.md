# hr-calculator
Тестовое задание для компании New shift

Приложение для тестирования кандидатов
### Текст задания
Задача: разработать интерактивный калькулятор на JS, считающий вероятность того, примем ли мы человека на работу.

Описание калькулятора: 

Визуал можно использовать любой, главное, чтобы было понятно как им пользоваться;
Изначальная вероятность равна 0% и с каждым вопросом она либо уменьшается, либо увеличивается. Ниже 0% вероятность опуститься не может, даже если при вычитании получаются отрицательные числа. Также вероятность не может превышать 100%.
Вероятность должна изменяться сразу же при ответе на вопрос без перезагрузки страницы.
Калькулятор имеет древовидную структуру, то есть в зависимости от ответа на тот или иной вопрос будут различаться последующие ответы. 
Некоторые вопросы имеют коэффициенты в зависимости от предыдущих ответов пользователя.
После ответа на последний вопрос должно выводиться одно из трёх сообщений в зависимости от количества набранных процентов:
От 0 до 50 — К сожалению, нам с тобой не по пути.
От 51 до 80 — Ну если больше никто не придёт, то возьмём тебя
От 81 до 100 — Проверь почту, там уже лежит оффер

Структура вопросов:

Для начала давай определимся на какую вакансию ты претендуешь?
Веб-дизайнер
Тестировщик
Джуниор фронтенд разработчик
Есть ли у тебя опыт?
Больше 5 лет работаю по этой специальности (+20)
Ну немножко поработать успел (+10)
Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу (+0)

Если пользователь в первом вопросе выбрал ответ “Дизайнер” предлагаем ему следующую ветку вопросов:

В какой программе делаешь макеты?
Figma (+15)
Photoshop (-10)
В такой, о которой вы не слышали (0)
Любишь играться со шрифтами?
Я живу этим (+20)
Если очень попросите (+10)
Я сам/сама создаю шрифты (+30)
Нет, в игры не играю (-5)
А белый цвет сможешь белее сделать?
Я же говорил(а), что этого заказчика забанить надо (+15)
Пусть заказчик приедет и на Ретине посмотрит ещё разок (+5)
Конечно сделаю, если #fff недостаточно (-10)
Последний вопрос: в какую стороны расти планируешь?
До арт-дира, естественно (+20)
В какую-то одну сферу хочу, но пока не знаю какую (+10)
Пока расту в ширину (+5)

Если общий балл после этих вопросов <50 или =50, то показываем результат. Если >50, то задаём дополнительный вопрос:

Кстати, а оценку задач ты как даёшь?
По часам (умножаем сумму баллов на 1,5 с округлением до целого)
По дням (умножаем сумму баллов на 1,2 с округлением до целого)
По наитию (умножаем сумму баллов на 0,7 с округлением до целого)

Если пользователь в начале выбрал ответ “Тестировщик”, выводим ему сообщение “Прости, но такой вакансии пока нет, может на кого-то другого хочешь попробоваться?” и кнопку “Возможно”, которая возвращает к первому вопросу теста.

Если пользователь выбрал ответ “Джуниор фронтенд разработчик” выводим ему следующую ветку вопросов:

Начнём с простого, div от span отличишь?
Естественно, первый для контейнеров, второй для текста (+15)
Код пишут компьютеры, пусть они и отличают (+10)
Думаю, что да (-5)

Окей, а с JS у тебя как?
Я как-то больше по JQuery (-30)
Норм, прошёл курс (+5)
На чистом JS уже не первый год пишу (+20)

Насколько ты любишь PHP?
	Вместо вариантов ответа инпут для ввода цифр, с пояснительным текстом “Введите число от 0 до 10, где 0 — это совершенно не люблю, а 10 — обожаю”. Если пользователь вводит 0 добавляем ему +20 баллов, всё кроме нуля — -50 баллов. Валидация в инпуте: только ввод цифр, нельзя вводить числа не входящие в промежуток 0-10.

Сколько дней в неделю планируешь ходить в офис?
Я хочу работать удалённо (-20)
3-4 дня в неделю будет норм (+5)
Я перееду в ваш офис, крепитесь (+20)

Если общий балл после этих вопросов <40 или =40, то показываем результат. Если >40, то задаём дополнительный вопрос:

Кстати, а оценку задач ты как даёшь?
По часам (умножаем сумму баллов на 1,8 с округлением до целого)
По дням (умножаем сумму баллов на 1,3 с округлением до целого)
По наитию (умножаем сумму баллов на 0,6 с округлением до целого)

### Основная идея

Чтобы не хранить вопросы в клиенте, было решено разделить приложение на серверную и клиентскую части.

#### server
Сервер написан на node.js с использованием Express и GraphQL.
Вопросы хранятся в файле data.js
###### GraphQL Схема:
	type Question {
        id: ID, // id вопроса
        categoryID: Int, // id категории(Js, дизайнер, тестировщик, стартовый вопрос)
        text: String, // текст вопроса
        countModifier: String, // addition/multiplication
        criticalValue: Int, // минимальное значение щетчика для отображения вопроса
        minValue: Int, // минимальное вводимое значение в input вопросах
        maxValue: Int, // максимальное вводимое значение в input вопросах
        questionType: String, // тип вопроса: radio/input
        answers: [Answer] // массив ответов
    }
    type Answer {
        text: String, // текст ответа
        value: Float, // значение ответа
        condition: Condition // условие совпадения введёного значения в input вопросах
    }
    type Condition {
        from: Int, // минимальное значение совпадения
        to: Int // максимальное значение совпадения
    }
    type Query {
        getCategoryQuestions(categoryID: Int): [Question]
    }

###### client
Клиент написан на React.
Было решено отказаться от redux в пользу связки useReducer + useContext.
Для обращений к серверу используется библиотека Apollo Client( а так же для мемоизации запросов и получения статуса загрузки).
### Запуск
Сервер и клиент устанавливаются и запускаются отдельно из своих директорий командами npm install и npm start соответственно.
Сервер открывается на порту 5000 и доступен по ссылке: http://localhost:5000/,
GraphiQL по ссылке: http://localhost:5000/graphql.

Слиент открывается на 3000 порту и доступен по ссылке: http://localhost:3000/.
