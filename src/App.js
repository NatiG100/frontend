import React from 'react';
import NavBar from './components/UIElements/NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import FilterPage from './pages/FilterPage';
import MyUploadsPage from './pages/MyUploadsPage';
import PopularPage from './pages/PopularPage';
import UploadPage from './pages/UploadPage';
import UsersPage from './pages/UsersPage';
import AuthPage from './pages/AuthPage';

const App = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact>
                    <UsersPage />
                </Route>
                <Route path="/auth" exact>
                    <AuthPage />
                </Route>
                <Route path="/books/popular" exact>
                    <PopularPage />
                </Route>
                <Route path="/books/upload" exact>
                    <UploadPage />
                </Route>
                <Route path="/books/filter" exact>
                    <FilterPage />
                </Route>
                <Route path="/books/:userId">
                    <MyUploadsPage />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default App;