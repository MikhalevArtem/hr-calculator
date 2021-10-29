import { gql } from "@apollo/client";
const LOAD_CATEGORY = gql`
  query GetCategoryQuestions($categoryID: Int) {
    getCategoryQuestions(categoryID: $categoryID) {
      id
      categoryID
      text
      countModifier
      criticalValue
      minValue
      maxValue
      questionType
      answers {
        text
        value
        condition {
          from
          to
        }
      }
    }
  }
`;

export { LOAD_CATEGORY };
