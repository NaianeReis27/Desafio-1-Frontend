import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/components/ContainerInput/styles.sass"
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


