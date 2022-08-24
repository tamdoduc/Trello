import React from 'react'

import './Column.scss'
import Card from 'components/Card/Card'
import { mapOrder } from 'utilities/sorts'

function Column(props) {
    const { column } = props
    const cards = mapOrder(column.cards, column.cardOrder, 'id')

    return (
        <div className="column">
            <header>
                {column.title}
            </header>
            <ul className="card-list">
                {cards.map((card, index) => <Card key={index} card={card} />)}
            </ul>
            <footer>
                <div className="footer-actions">
                    <i className="fa fa-plus icon" />    Add another card
                </div>
            </footer>
        </div>
    )
}

export default Column