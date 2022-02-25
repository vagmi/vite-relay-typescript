import React from 'react';
import {graphql, useLazyLoadQuery } from "react-relay/hooks";
import { CurrentUserQuery } from "./__generated__/CurrentUserQuery.graphql";

const userQuery = graphql`
  query CurrentUserQuery {
    currentPerson {
      fullName
      email
    }
  }
`;

export const CurrentUser = () => {
  let data = useLazyLoadQuery<CurrentUserQuery>(
    userQuery,
    {},
    { fetchPolicy: "store-or-network" }
  );

  return (
    <div>
      <p>username: {data.currentPerson?.fullName}</p>
      <p>email: {data.currentPerson?.email}</p>
    </div>
  );
};
