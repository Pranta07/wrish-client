import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Watches from "./Pages/Watches/Watches";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Navigation></Navigation>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/watches">
                            <Watches />
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/notfound">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
