import Message from './Message.js'
import Users from './Users.js'

const Chat = {
    data() {
        return {
            username: '',
        };
    },
    methods: {
        newUserName(username) {
            this.username = username
            this.$emit("username", this.username);
        },
    },
    template: `
    <div class='chat'>
        <Users
            @user='newUserName'
        />
        <Message/>
    </div>`,
    components: {
        Message,
        Users
    }
};

export default Chat;