const mutations = {
    // #region Readlist Wrt
    setWrtList: function(state, payload) {
        state.wrtList.data = payload;
        return state;
    },
    setRegionWrtList: function(state, payload) {
        state.wrtList.region = payload;
        return state;
    },
    setWrtTypeList: function(state, payload) {
        state.wrtList.type = payload;
        return state;
    },
    setSearchWrtList: function(state, payload) {
        state.wrtList.search = payload;
        return state;
    },
    setPreloadWrtList: function(state, payload) {
        state.wrtList.isLoading = payload;
        return state;
    },
    // #endregion Readlist Wrt

    // #region Update Wrt
    setUpdateWrtForm: function(state, payload){
        state.updateWrt.form = payload
        return state;
    },
    setUpdateWrtType: function(state, payload){
        state.updateWrt.form.type = payload
        return state;
    }
    // #endregion Update Wrt
};

export default mutations;
