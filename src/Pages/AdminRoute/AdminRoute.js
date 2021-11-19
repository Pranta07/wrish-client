import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    const [admin, setAdmin] = React.useState(false);

    const [done, setDone] = React.useState(false);

    React.useEffect(() => {
        setDone(false);
        fetch(`https://frozen-inlet-30875.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((user) => {
                // console.log(user.role);
                if (user.role === "admin") setAdmin(true);
            })
            .finally(() => setDone(true));
    }, [user.email]);

    if (loading || !done) {
        return <CircularProgress />;
    } else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location },
                            }}
                        />
                    )
                }
            />
        );
    }
};

export default AdminRoute;
