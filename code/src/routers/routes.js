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
    {
        path: '/share',
        exact: true,
        isPrivate: false,
        component: import('../containers/Share'),
    },
    {
        path: '/text-speech',
        exact: true,
        isPrivate: false,
        component: import('../containers/TextToSpeech'),
    },
    {
        path: '/firebase/firestore',
        exact: true,
        isPrivate: false,
        component: import('../containers/firebase/DBFS'),
    },
    // {
    //     path: '/map',
    //     exact: true,
    //     isPrivate: false,
    //     component: import('../containers/Map'),
    // },
]