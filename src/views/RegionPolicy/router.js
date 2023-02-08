export default [
    {
        path: '/configuration/region-policy',
        name: 'ConfigurationRegionPolicy',
        component: () => import("./Index.vue"),
        meta: {
            title: 'Region Policy'
        }
    },
    {
        path: '/configuration/region-policy/update/:id',
        name: 'RegionPolicyUpdate',
        component: () => import("./Update.vue"),
        meta: {
            title: 'Update Region Policy',
            breadcrumbs : [
                {
                    text: 'Region Policy List',
                    to : '/configuration/region-policy'
                },
                {
                    text: 'Update Region Policy',
                },
            ],
        }
    },
]