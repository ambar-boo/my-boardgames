import { createRoot } from 'react-dom/client';
import styles from './notification.module.scss';
interface NotifyProps {
    type: 'success' | 'error',
    message: string
}

const showNotification = ({ type, message }: NotifyProps) => {
    const containerNotification = document.createElement('div');
    document.getElementById('notifications')?.appendChild(containerNotification);
    const rootNotification = createRoot(containerNotification!);
    rootNotification.render(<div className={styles.notification}>{message}</div>);

    setTimeout(() => {
        document.getElementById('notifications')?.removeChild(containerNotification);
    }, 5000);
};

export default showNotification;