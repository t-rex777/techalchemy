import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RestaurantDetails from "./components/RestaurantDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurant/:restaurantId" exact component={RestaurantDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
