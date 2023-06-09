import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/normalize.css';
import './styles/index.css';
import { App } from './app';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
