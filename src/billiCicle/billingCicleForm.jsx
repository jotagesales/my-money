import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import InputLabel from "../common/form/input_label"

class BillingCicleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={InputLabel} label="Nome" cols="12 4" placeholder="Informe o nome" />
                    <Field name="month" component={InputLabel} type="number" label="Mês" cols="12 4" placeholder="Informe o mês" />
                    <Field name="year" component={InputLabel} type="number" label="Ano" cols="12 4" placeholder="Informe o ano" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>
        )
    }
}


export default reduxForm({ form: 'billingCicleForm', destroyOnUnmount: false })(BillingCicleForm)