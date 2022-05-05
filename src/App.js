import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Watches from "./Pages/Watches/Watches";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./contexts/AuthProvider";
import Purchase from "./Pages/Purchase/Purchase";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <AuthProvider>
                    <Router>
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
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <PrivateRoute path="/purchase/:id">
                                <Purchase />
                            </PrivateRoute>
                            <PrivateRoute path="/dashboard">
                                <Dashboard></Dashboard>
                            </PrivateRoute>
                            <Route path="/login">
                                <Login></Login>
                            </Route>
                            <Route path="/register">
                                <Register></Register>
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Router>
                </AuthProvider>
            </div>
        </HelmetProvider>
    );
}

export default App;
