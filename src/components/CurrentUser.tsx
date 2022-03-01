import * as React from 'react';
import {useLazyLoadQuery } from "react-relay/hooks";
import userQuery, { CurrentPersonQuery } from './__generated__/CurrentPersonQuery.graphql';

export const CurrentUser = () => {
  let data = useLazyLoadQuery<CurrentPersonQuery>(
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
