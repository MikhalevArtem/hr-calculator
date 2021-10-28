const { buildSchema } = require("graphql");

const schema = buildSchema(`

    type Question {
        id: ID,
        categoryID: Int,
        text: String,
        countModifier: String,
        criticalValue: Int,
        minValue: Int,
        maxValue: Int,
        questionType: String,
        answers: [Answer]
    }

    type Answer {
        text: String,
        value: Float,
        condition: Condition
    }

    type Condition {
        from: Int,
        to: Int
    }

    type Query {
        getCategoryQuestions(categoryID: Int): [Question]
    }

`);

module.exports = schema;
