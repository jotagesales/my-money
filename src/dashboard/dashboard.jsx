import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import ContendHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from "../common/widget/value_box"
import { getSummary } from "./dasboard_actions"


class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const {credit, debt} = this.props.summary
        return (
            <div>
                <ContendHeader title='Dashboard' subtitle='Versão 1.0' />
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

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
