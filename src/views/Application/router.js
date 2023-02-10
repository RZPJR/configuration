export default [
    {
        path: '/configuration/application',
        name: 'Application',
        component: () => import("./Index.vue"),
        meta: {
            title: 'Application'
        }
    },
    {
        path: '/configuration/application/update/:id',
        name: 'ApplicationUpdate',
        component: () => import("./Update.vue"),
        meta: {
            title: 'Update Application',
            breadcrumbs : [
                {
                    text: 'Application List',
                    to : '/configuration/application'
                },
                {
                    text: 'Update Application',
                },
            ],
        }
    },
]