import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getList } from "./billiCicleActions"

class BillingCicleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    render() {
        const list = this.props.list || []
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(billing_cicle => (
                            <tr key={billing_cicle._id}>
                                <td>{billing_cicle.name}</td>
                                <td>{billing_cicle.month}</td>
                                <td>{billing_cicle.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({ list: state.billingCicle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCicleList)