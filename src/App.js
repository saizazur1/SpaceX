import React from "react";
import "./App.css";
import ShipsContainer from "./containers/ShipsContainer";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main>
          <ShipsContainer />
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
