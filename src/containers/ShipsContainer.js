import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Ship from "../components/Ship";
import GET_SHIPS from "../graphql/get-ships";

function ShipsContainer() {
  const { data: { ships = [] } = {} } = useQuery(GET_SHIPS, {
    variables: { limit: 9 },
  });

  return (
    <div>
      {ships && ships.map((ship) => <Ship key={ships.class} ship={ship} />)}
    </div>
  );
}

export default ShipsContainer;
