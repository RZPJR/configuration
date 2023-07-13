import http from "../../../services/http";

const actions = {
    fetchRegionPolicyList: async ({ state, commit }, payload) => {
        commit("setPreloadRegionPolicyList", true)
        commit("setRegionPolicyList", [])
        try {
            const response = await http.get('/region_policy', {params: {
                per_page:100,
            }});
            commit("setRegionPolicyList", response.data.data)
            if(response.data.data === null){
                commit("setRegionPolicyList", [])
            }
            commit("setPreloadRegionPolicyList", false)
        } catch (error) {
            console.log(error)
            commit("setPreloadRegionPolicyList", false)
        }
    },

    fetchUpdateRegionPolicyDetail: async ({ commit, dispatch}, payload) => {
        try {
            const response = await http.get("/region_policy/"+payload.id)
            if(response.data.data) {
                let items = response.data.data
                commit("setUpdateRegionPolicyForm",{
                    order_time_limit: items.order_time_limit,
                    max_day_delivery_date: items.max_day_delivery_date,
                    weekly_day_off: items.weekly_day_off,
                    name : items.region.description,
                    default_price_level: items.default_price_level,
                    price_level_id: items.default_price_level.id,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default actions;

