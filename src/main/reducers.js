import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import { reducer as toasterReducer } from "react-redux-toastr"

import DashboardReducer from "../dashboard/dashboard_reducer"
import TabReducer from "../common/tab/tabReducer"
import BilliCicleReducer from "../billiCicle/billiCicleReducer"


const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCicle: BilliCicleReducer,
    form: formReducer,
    toastr: toasterReducer
})

export default rootReducer