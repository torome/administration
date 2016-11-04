export default {
    data: () => {
        return {
            recipients: [],
            subject: "demo",
            content: "content"
        }
    },
    ready: function () {
        this.$http.get("send-mail-test.json").then((response) => {
            this.$data = response.body;
        })
    },
    methods: {
        onSubmit: function () {
        },
        onRemove: function (index) {
            this.recipients.splice(index, 1);
        },
        onAdd: function () {
            let value = this.$els.testMail.value;
            this.recipients.push(value);
        }
    }
}
