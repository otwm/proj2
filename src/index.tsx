import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from 'components';
// import './index.css';

ReactDOM.render(
    <Hello name="TypeScript" />,
    document.getElementById('root') as HTMLElement
);
