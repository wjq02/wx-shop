
Component({
    properties: {
        title: {
            type: String,
            value: 'storeList Component',
        },
        addresses: {
            type: Object,
            value: {},
            observer(newValue) {
                console.log('newValue12', newValue);
            }
        },
        isOrderDetail: {
            type: Boolean,
            value: false
        },
        homeDeliveryTimes: {
            type: Array,
            value: [],
            observer(newValue) {
                console.log('newValue15', newValue);
            }
        },
        address: { // 确认订单数据
            type: Object,
            value: {},
        },
        updateEnable: { // 可修改门店
            type: Boolean,
            value: true,
        }
    },

    data: {
        index: 0
    },

    methods: {
        bindPickerChange(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value);
            this.setData({
                index: e.detail.value
            });
        },
    }
});

