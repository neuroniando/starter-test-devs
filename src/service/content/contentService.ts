import { gql } from '@apollo/client';

export const GET_CONTENT_LIST = gql`
  query MyQuery($limit: Int, $nextToken: String, $filter: ModelContentFilterInput) {
    listContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        active
        isPremium
        type
        ageRange
        thumbnail
        State {
          id
          name
        }
      }
      nextToken
    }
  }
`;