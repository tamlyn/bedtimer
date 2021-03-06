import { h, render } from 'preact';
import App from './components/App';

navigator.serviceWorker.register('/service-worker.js')

const mountNode = document.getElementById('root');
render(<App />, mountNode, mountNode.lastChild);