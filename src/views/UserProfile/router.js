export default [
    {
        path: '/configuration/user-profile',
        name: 'UserProfile',
        component: () => import("./Detail.vue"),
    },
    {
        path: '/configuration/user-profile/update',
        name:'UserProfileUpdate',
        component: () => import("./Update"),
    },
    {
        path: '/configuration/user-profile/password',
        name:'UserProfilePassword',
        component: () => import("./UpdatePassword"),
    },
]