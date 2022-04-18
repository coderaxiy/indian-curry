import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './root';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root tab="home" />);

