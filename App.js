import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 className="head">Namaste React</h1>

/***
 *  Functional Component - a JS function return JSX
 *      - Component always start with Capital letter - (Headding)
 * 
 * */
    
const Heading1 = ()=> <h1 className="heading1">This is heading One</h1>;

const Heading2 = ()=> (
    <h1 className="heading2">
        This ia heading two
    </h1>
);

const Heading3 = ()=> {
    return <h1 className="heading3">This is heading three</h1>;
}

const HeaddingComponent = ()=> (
    <div id="container">
        <Heading1/>
        <Heading2/>
        <Heading3/>
        <p>this is paragraph</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaddingComponent/>);