export default [
    {
        path: '/configuration/wrt',
        name: 'WRT',
        component: () => import("./Index.vue"),
        meta: {
            title: 'WRT'
        }
    },
    {
        path: '/configuration/wrt/update/:id',
        name: 'wrtUpdate',
        component: () => import("./Update.vue"),
        meta: {
            title: 'Update WRT',
            breadcrumbs : [
                {
                    text: 'WRT List',
                    to : '/configuration/wrt'
                },
                {
                    text: 'Update WRT',
                },
            ],
        }
    },
]