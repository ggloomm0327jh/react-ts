// react 应用入口页面
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
if (root) {
    createRoot(root).render(<App />)
}
