import axios from "axios"
import { toastr } from "react-redux-toastr"
import { reset as resetForm } from "redux-form"

const BASE_URL = "http://localhost:3003/api"

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: "BILLING_CICLES_FETCHED",
        payload: request
    }
}

export function create(values) {

    return dispath => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(response => {
                toastr.success('Sucesso', 'Salvo com sucesso.')
            }).catch(error => {
                error.response.data.errors.forEach(e => {
                    toastr.error('Erro', e)
                });
            })
    }


}