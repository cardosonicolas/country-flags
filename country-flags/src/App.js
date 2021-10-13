import { Route } from "wouter";
import CountriesList from "./pages/CountriesList";
import CountryDetail from "./pages/CountryDetail";

import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Route path="/">
        <CountriesList />
      </Route>
      <Route path="/country/:id">
        {(params) => <CountryDetail id={params.id} />}
      </Route>
    </Layout>
  );
}

export default App;
