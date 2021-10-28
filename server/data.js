module.exports = {
  questions: [
    /*
            Общие вопросы
        */
    {
      id: 1,
      categoryID: 0,
      text: "Для начала давай определимся на какую вакансию ты претендуешь?",
      countModifier: null,
      criticalValue: 0,
      questionType: "categorySelection",
      answers: [
        { text: "Веб-дизайнер", value: 1 },
        { text: "Тестировщик", value: 3 },
        { text: "Джуниор фронтенд разработчик", value: 2 },
      ],
    },

    /*
            Дизигнер
        */
    {
      id: 100,
      categoryID: 1,
      text: "Есть ли у тебя опыт?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Больше 5 лет работаю по этой специальности",
          value: 20,
        },
        {
          text: "Ну немножко поработать успел",
          value: 10,
        },
        {
          text: "Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу",
          value: 0,
        },
      ],
    },

    {
      id: 101,
      categoryID: 1,
      text: "В какой программе делаешь макеты?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Figma",
          value: 15,
        },
        {
          text: "Photoshop",
          value: -10,
        },
        {
          text: "В такой, о которой вы не слышали",
          value: 0,
        },
      ],
    },
    {
      id: 102,
      categoryID: 1,
      text: "Любишь играться со шрифтами?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Я живу этим",
          value: 20,
        },
        {
          text: "Если очень попросите",
          value: 10,
        },
        {
          text: "Я сам/сама создаю шрифты",
          value: 30,
        },
        {
          text: "Нет, в игры не играю",
          value: -5,
        },
      ],
    },
    {
      id: 103,
      categoryID: 1,
      text: "А белый цвет сможешь белее сделать?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Я же говорил(а), что этого заказчика забанить надо",
          value: 15,
        },
        {
          text: "Пусть заказчик приедет и на Ретине посмотрит ещё разок",
          value: 5,
        },
        {
          text: "Конечно сделаю, если #fff недостаточно",
          value: -10,
        },
      ],
    },
    {
      id: 104,
      categoryID: 1,
      text: "Последний вопрос: в какую сторону расти планируешь?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "До арт-дира, естественно",
          value: 20,
        },
        {
          text: "В какую-то одну сферу хочу, но пока не знаю какую",
          value: 10,
        },
        {
          text: "Пока расту в ширину",
          value: 5,
        },
      ],
    },
    {
      id: 105,
      categoryID: 1,
      text: "Кстати, а оценку задач ты как даёшь?",
      countModifier: "multiplication",
      criticalValue: 50,
      questionType: "radio",
      answers: [
        {
          text: "По часам",
          value: 1.5,
        },
        {
          text: "По дням",
          value: 1.2,
        },
        {
          text: "По наитию",
          value: 0.7,
        },
      ],
    },

    /*
            Манки-патчер
        */
    {
      id: 200,
      categoryID: 2,
      text: "Есть ли у тебя опыт?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Больше 5 лет работаю по этой специальности",
          value: 20,
        },
        {
          text: "Ну немножко поработать успел",
          value: 10,
        },
        {
          text: "Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу",
          value: 0,
        },
      ],
    },

    {
      id: 201,
      categoryID: 2,
      text: "Начнём с простого, div от span отличишь?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Естественно, первый для контейнеров, второй для текста",
          value: 15,
        },
        {
          text: "Код пишут компьютеры, пусть они и отличают",
          value: 10,
        },
        {
          text: "Думаю, что да",
          value: -5,
        },
      ],
    },
    {
      id: 202,
      categoryID: 2,
      text: "Окей, а с JS у тебя как?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Я как-то больше по JQuery",
          value: -30,
        },
        {
          text: "Норм, прошёл курс",
          value: 5,
        },
        {
          text: "На чистом JS уже не первый год пишу",
          value: 20,
        },
      ],
    },
    {
      id: 203,
      categoryID: 2,
      text: "Насколько ты любишь PHP?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "input",
      minValue: 0,
      maxValue: 10,
      answers: [
        {
          condition: { from: 0, to: 0 },
          value: 20,
        },
        {
          condition: { from: 1, to: 10 },
          value: -50,
        },
      ],
    },
    {
      id: 204,
      categoryID: 2,
      text: "Сколько дней в неделю планируешь ходить в офис?",
      countModifier: "addition",
      criticalValue: 0,
      questionType: "radio",
      answers: [
        {
          text: "Я хочу работать удалённо",
          value: -20,
        },
        {
          text: "3-4 дня в неделю будет норм",
          value: 5,
        },
        {
          text: "Я перееду в ваш офис, крепитесь",
          value: 20,
        },
      ],
    },
    {
      id: 205,
      categoryID: 2,
      text: "Кстати, а оценку задач ты как даёшь?",
      countModifier: "multiplication",
      criticalValue: 40,
      questionType: "radio",
      answers: [
        {
          text: "По часам",
          value: 1.8,
        },
        {
          text: "По дням",
          value: 1.3,
        },
        {
          text: "По наитию",
          value: 0.6,
        },
      ],
    },
  ],
};
