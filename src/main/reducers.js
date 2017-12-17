import { combineReducers } from "redux"
import DashboardReducer from "../dashboard/dashboard_reducer"
import TabReducer from "../common/tab/tabReducer"
import BilliCicleReducer from "../billiCicle/billiCicleReducer"

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCicle: BilliCicleReducer
})

export default rootReducer