import React, { Component } from "react"
import axios from "axios"

import ContendHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from "../common/widget/value_box"

const BASE_URL = 'http://localhost:3003/api'

class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(response => this.setState(response.data))
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div>
                <ContendHeader title='Dashboard' subtitle='Versão 2.0' />
                <Content>
                    <div className="row">
                        <ValueBox cols="12 4" color="green" value={`R$ ${credit}`} text="Total de créditos" icon="bank" />
                        <ValueBox cols="12 4" color="red" value={`R$ ${debt}`} text="Total de débitos" icon="credit-card" />
                        <ValueBox cols="12 4" color="aqua" value={`R$ ${credit - debt}`} text="Valor consolidado" icon="money" />
                    </div>
                </Content>
            </div>
        )
    }
}

export default Dashboard2
