const User = {
    props: ['user'],
    template: `
    <div class='user'>
        {{user.username}}
    </div>
    `,
};

export default User;