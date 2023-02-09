const state = {
    wrtList: {
        isLoading: false,
        search : "",
        data: [],
        region : "",
        type : "",
        table_headers: [
            {
                text:'Code',
                class: 'grey--text text--darken-4',
                sortable: false,
            },
            {
                text:'Region',
                class: 'grey--text text--darken-4',
                sortable: false
            },
            {
                text:'Note',
                class: 'grey--text text--darken-4',
                sortable: false
            },
            {
                text:'WRT Type',
                class: 'grey--text text--darken-4',
                sortable: false
            },
            {
                width: "5%",
                sortable: false
            },
        ],
    },

    updateWrt:{
        form:{
            type: '',
        },
    }
};

export default state;
