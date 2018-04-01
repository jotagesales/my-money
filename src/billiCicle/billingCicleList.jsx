import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getList, showUpdate } from "./billiCicleActions"

class BillingCicleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    render() {
        const list = this.props.list || []
        return (
            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(billing_cicle => (
                            <tr key={billing_cicle._id}>
                                <td>{billing_cicle.name}</td>
                                <td>{billing_cicle.month}</td>
                                <td>{billing_cicle.year}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning" onClick={() => this.props.showUpdate(billing_cicle)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => this.props.showUpdate(billing_cicle)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
}
const mapStateToProps = state => ({ list: state.billingCicle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCicleList)