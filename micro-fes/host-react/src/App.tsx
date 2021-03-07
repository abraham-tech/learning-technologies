import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider } from '@chakra-ui/react';
import "./index.css";
import { load } from "growlers/store";
load("hv-taplist");
import Taps from 'growlers/Taps'
import Search from 'growlers/Search'
import Cart from 'growlers/Cart'


const App = () => 
    <ChakraProvider>
       
        <div style={{ 
            maxWidth: '960px',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: "1fr 3fr",
            gridColumnGap: "1rem"
        }}>
             <div>
            <Search/>
            <Cart/>
        </div>
            <Taps/>
        </div>
    </ChakraProvider>;

ReactDOM.render(<App />, document.getElementById("app"));
