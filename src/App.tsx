import React from "react"
import axios from "axios"
import {Watch} from 'react-loader-spinner'

import styles from "./App.module.css"
import CardItem from "./components/cardItem/CardItem"
import Button from "./components/UI/Button"
import AlertWindow from "./components/alert/AlertWindow"

const App: React.FC = () => {
    const [cards, setCards] = React.useState([])
    const [visible, setVisible] = React.useState(16)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
            .then(response => {
                response.data.forEach((data: object) => {
                    data['image'] = 'https://source.unsplash.com/random'
                })
                setCards(response.data)
                setLoading(false)
            })
    }, [setCards])

    return (
        <div className="App">
            <div className={styles.container}>
                <div className={styles.title}>Похожие объявления</div>
                <div className={styles.items}>
                    {loading && <Watch height="200" width="200" color="green" ariaLabel="loading"/>}
                    {cards.slice(0, visible).map((item: any) => (
                        <CardItem key={item.id} {...item}/>
                    ))}
                </div>
                {visible <= 100 && <Button setVisible={setVisible}/>}
            </div>
            {visible >= 100 && <AlertWindow/>}
        </div>
    )
}

export default App
