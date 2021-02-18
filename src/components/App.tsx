import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import '../assets/images/favicons/favicon.ico';
// import '../assets/images/favicons/favicon-16x16.png';
// import '../assets/images/favicons/favicon-32x32.png';
// import '../assets/images/favicons/android-chrome-192x192.png';
// import '../assets/images/favicons/android-chrome-512x512.png';
// import '../assets/images/favicons/apple-touch-icon.png';
import '../manifest.json';
import Home from "./Home";
import About from "./About";
import {GlobalStyle} from "../styles/Global.styled";

const App: FC = () => {

    return (
        <Router>
            <GlobalStyle/>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;