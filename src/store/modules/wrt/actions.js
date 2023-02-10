import http from "../../../services/http";

const actions = {
    fetchWrtList: async ({ state, commit }, payload) => {
        commit("setPreloadWrtList", true)
        commit("setWrtList", [])
        try {
            let search = state.wrtList.search
            let region = state.wrtList.region
            let type = state.wrtList.type
            if (region == 1) {
                region = ""
            }
            const response = await http.get('/wrt', {params: {
                per_page:100,
                search: search,
                type: type,
                region_id: region
            }});
            commit("setWrtList", response.data.data)
            if(response.data.data == null){
                commit("setWrtList", [])
            }
            commit("setPreloadWrtList", false)
        } catch (error) {
            console.log(error)
            commit("setPreloadWrtList", false)
        }
    },

    fetchUpdateWrtDetail: async ({ commit, dispatch}, payload) => {
        try {
            const response = await http.get("/wrt/"+payload.id)
            if(response.data.data) {
                let items = response.data.data
                commit("setUpdateWrtForm",{
                    type: items.type,
                    code: items.code,
                    name: items.name,
                    region: items.region.description,
                    note: items.note,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default actions;

