export default [
    {
        path: '/configuration/region-policy',
        name: 'ConfigurationRegionPolicy',
        component: () => import("./Index.vue"),
    },
    {
        path: '/configuration/region-policy/update/:id',
        name: 'RegionPolicyUpdate',
        component: () => import("./Update.vue"),
    },
]