import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './Pages/App';
import { ColorModeScript } from "@chakra-ui/react"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
