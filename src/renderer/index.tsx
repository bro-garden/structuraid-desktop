import { createRoot } from 'react-dom/client';
import App from 'renderer/app';
import invariant from 'tiny-invariant';

const container = document.getElementById('root');
invariant(container, 'root container not found');

const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
