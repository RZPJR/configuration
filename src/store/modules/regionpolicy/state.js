const state = {
  regionPolicyList: {
    isLoading: false,
    table_headers: [
        {
          text:'Region',
          class: 'grey--text text--darken-4',
          sortable: false,
        },
        {
            text:'Maximum Day Delivery Date',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            text:'Weekly Day Off',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            text:'Order Time Limit',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            text:'Default Price Set',
            class: 'grey--text text--darken-4',
            sortable: false
        },
        {
            width: "5%",
            sortable: false
        },
    ],
    data: [],
  },

  updateRegionPolicy:{
    order_time_limit:'',
    form:{
        max_day_delivery_date: 0,
        weekly_day_off: 0,
        order_time_limit: '',
        default_price_level: '',
    },
  }
};

export default state;
