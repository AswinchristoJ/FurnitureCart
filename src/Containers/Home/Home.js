import React, { Component } from 'react';

import CardDeck from '../../Components/Cards/CardDeck'
import Card from '../../Components/Cards/Card'
import data from '../../data'

class Home extends Component {

    state = {
        data: null,
    }

    componentDidMount() {
        this.setState({
            data: data,
        })
    }

    render() {
        let dataVariable = null

        if (this.state.data) {
            dataVariable = data.map((item) => {
                return <Card key={item.id}
                    cost={item.cost} title={item.title}
                    link={item.link} />
            })
        }

        return (
            <CardDeck>
                {dataVariable}
            </CardDeck>
        )
    }
}

export default Home;