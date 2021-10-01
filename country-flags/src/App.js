import { Route } from "wouter";
import CountriesList from "./pages/CountriesList";
import CountryDetail from "./pages/CountryDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/">
        <CountriesList />
      </Route>
      <Route path="/country/:id">
        {(params) => <CountryDetail id={params.id} />}
      </Route>
    </>
  );
}

export default App;
