import { createRoot } from 'react-dom/client';
interface NotifyProps {
    type: 'success' | 'error',
    message: string
}

const showNotification = ({ type, message }: NotifyProps) => {
    const containerNotification = document.createElement('div');
    document.body.appendChild(containerNotification);
    const rootNotification = createRoot(containerNotification!);
    rootNotification.render(<div>{message}</div>);

    setTimeout(() => {
        document.body.removeChild(containerNotification);
    }, 5000);
};

export default showNotification;