export default [
    {
        path: '/',
        exact: true,
        isPrivate: false,
        component: import('../containers/Home'),
    },
    {
        path: '/chatbot',
        exact: true,
        isPrivate: false,
        component: import('../containers/Chatbot'),
    },
    // {
    //     path: '/map',
    //     exact: true,
    //     isPrivate: false,
    //     component: import('../containers/Map'),
    // },
]