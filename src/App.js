import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./_redux/_store";
import Header from "./_partials/header";
import Footer from "./_partials/footer";
import Dashboard from "./_pages/_dashboard/dashboard";
import { history } from "./_redux/_store/history";
import MachineFindingList from "./_pages/_machineFindingList/machineFindingList";
import RecommendationList from "./_pages/_recommendationList/recommendationList";
import NotFoundPage from "./_pages/_notFoundPage/notFoundPage";
import Support from "./_pages/_support/support";
import FAQ from "./_pages/_faq/faq";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route
                exact
                path="/machinefindinglist/:id"
                component={MachineFindingList}
              />
              <Route
                exact
                path="/recommendationlist/"
                component={RecommendationList}
              />
              <Route
                exact
                path="/support/"
                component={Support}
              />
              <Route
                exact
                path="/faq/"
                component={FAQ}
              />

              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
