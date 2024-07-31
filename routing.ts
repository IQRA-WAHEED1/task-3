// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ProductList} exact />
            </Switch>
        </Router>
    );
}

export default App;
