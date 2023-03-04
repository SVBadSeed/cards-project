import React from 'react'
import styles from './AlertWindow.module.css'

const AlertWindow: React.FC = () => {
    const [active, setActive] = React.useState(true)

    return (
        <div className={active ? styles.alert : styles.alertHide}>
            <div className={styles.content}>
                <div className={styles.text}>Карточек больше не осталось</div>
                <button onClick={() => setActive(false)}
                        className={styles.button}> Закрыть
                </button>
            </div>
        </div>
    )
}

export default AlertWindow