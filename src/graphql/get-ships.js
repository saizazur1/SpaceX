import gql from "graphql-tag";

const GET_SHIPS = gql`
  query ships($limit: Int) {
    ships(limit: $limit) {
      id
      name
      image
      class
    }
  }
`;

export default GET_SHIPS;
