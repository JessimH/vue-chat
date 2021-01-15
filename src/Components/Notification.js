const Notification = {
    props: ['username'],
    template: `
    <div class='notification'>
        <p>{{username}} a rejoins la chatroom!</p>
    </div>
    `,
};

export default Notification;