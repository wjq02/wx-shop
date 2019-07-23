
Component({
    properties: {
        title: {
            type: String,
            value: 'storeList Component',
        },
        addresses: {
            type: Array,
            value: [],
            observer(newValue) {
                console.log('newValue12', newValue);
            }
        },
        isOrderDetail: {
            type: Boolean,
            value: false
        }
    },

    data: {
        index: 0
    },

    methods: {}
});

