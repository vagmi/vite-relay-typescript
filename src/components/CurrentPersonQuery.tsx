import { graphql } from "relay-runtime";

const userQuery = graphql`
  query CurrentPersonQuery {
    currentPerson {
      fullName
      email
    }
  }
`;

export {};