const mutations = {
  // #region Readlist Region Policy
    setRegionPolicyList: function(state, payload) {
      state.regionPolicyList.data = payload;
      return state;
    },
    setPreloadRegionPolicyList: function(state, payload) {
      state.regionPolicyList.isLoading = payload;
      return state;
    },
    // #endregion Readlist Region Policy

    // #region Update Region Policy
    setUpdateRegionPolicyForm: function(state, payload){
      state.updateRegionPolicy.form = payload;
      return state;
    }
    // #endregion Update Region Policy
};

export default mutations;
