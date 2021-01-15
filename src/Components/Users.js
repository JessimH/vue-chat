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
            <div style="margin-top: 30px">
                <User
                    :user="user"
                    v-for="user in users"
                />
            </div>
        </div>
    `,
    components: {
        User
    }
};

export default Users;