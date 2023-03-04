import React from 'react'
import styles from "../../App.module.css"

type ButtonProps = {
    setVisible: (number: any) => void
}
const Button: React.FC<ButtonProps> = ({setVisible}) => {

    return (
        <button className={styles.button}
                onClick={() => setVisible(prevState => prevState + 16)}>
            Показать еще
            <svg width="18" height="10"
                 viewBox="0 0 17 11"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M1.11707 1.954L8.07108 9.14214L15.0251 1.954" stroke="#00A0AB" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

export default Button