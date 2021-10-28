const data = require("../data");

const root = {
  getCategoryQuestions: ({ categoryID }) => {
    return data.questions.filter((x) => x.categoryID === categoryID);
  },
};

module.exports = root;
