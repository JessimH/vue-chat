import Chat from "./src/Components/Chat.js";
import Notification from "./src/Components/Notification.js";



Vue.createApp({
    data() {
        return {
            username: ''
        };
    },
    methods: {
        userConnected(username) {
            this.username = username
        },
    },
    components: {
        Chat,
        Notification,
    },
    template: `
        <Notification
            v-if='username'
            :username="username"
        />
        <Chat
            @username='userConnected'
        />
    `,
}).mount("#app");
