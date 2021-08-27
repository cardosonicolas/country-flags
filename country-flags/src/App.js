import { Route } from "wouter";
import CountriesList from "./pages/CountriesList";
import CountryDetail from "./pages/CountryDetail";
import "./App.css";

function App() {
  return (
    <>
      <Route path="/">
        <CountriesList />
      </Route>
      <Route path="/detail">
        <CountryDetail />
      </Route>
    </>
  );
}

export default App;
