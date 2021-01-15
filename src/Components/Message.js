const Message = {
    data() {
        return {
            message: {
                id: Date.now(),
                username: '',
                message: '',
                date: '',
            },
            messages: []
        }
    },
    methods: {
        addMessage() {
            const message = {
                id: Date.now(),
                username: 'Jessim',
                message: this.message.message,
                date: new Date(Date.now()).toLocaleTimeString(),
            };
            this.messages.push(message);
            this.message.id = Date.now();
            this.message.username = "";
            this.message.message = "";
            this.message.date = ""
        },
    },
    template: `
    <div class='message'>
        <div class="message__messageDisplay">
            <div class="message__info">
                <p>Jessim</p>
                <p class='time'>@Jess</p>
            </div>
            <p class='message__first'>Ceci est un message auquel il faut répondre</p>
            <div v-for='message in messages' class='message__content'>
                <p>{{message.message}}</p>
                <p class='timestamp'>{{message.date}}</p>
            </div>
        </div>
        <div class="message__input">
            <form @submit.prevent='addMessage'>
                <input v-model="message.message" type="text" placeholder="écrivez un message">
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </div>`,
};

export default Message;