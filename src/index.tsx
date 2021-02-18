import { hydrate, render } from "react-dom";
import React from "react";
import App from './components/App';

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}