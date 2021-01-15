import User from './User.js'

const Users = {
    data() {
        return {
            user: {
                id: '',
                username: ''
            },
            users: [],
        };
    },
    methods: {
        newUser() {
            const user = {
                id: Date.now(),
                username: faker.name.findName()
            };
            this.users.unshift(user);
            this.$emit("user", this.users[0].username);
        },
    },
    mounted() {
        setInterval(this.newUser, 2000);
    },
    template: `
        <div class='users'>
            <h4>Utilisateurs connecté</h4>
            <div v-for="user in users">
                <User
                    :user="user"
                />
            </div>
        </div>
    `,
    components: {
        User
    }
};

export default Users;