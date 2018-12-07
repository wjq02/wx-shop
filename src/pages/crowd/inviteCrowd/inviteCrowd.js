import api from 'utils/api';
const app = getApp();

Page({
    data: {
        isLoading: true,
        maxlength: 50,  // 输入框最大字数
        pageShareStatus: false,
        defaultWord: '就差一点点了，快来助我一臂之力吧'
    },

    async onLoad(options) {
        console.log(options);
        const { globalData: { themeColor }, systemInfo: { isIphoneX }} = app;
        wx.setNavigationBarTitle({
            title: '请朋友代付'
        });
        this.setData({
            themeColor,
            isIphoneX,
            order_no: options.id,
            crowd_pay_no: options.crowd_pay_no
        });
        await this.loadOrder(options.id);
    },
    async loadOrder(id) {
        const { order } = await api.hei.fetchOrder({ order_no: id });

        // -----------------处理价格显示
        let info = {};
        info.finalPay = Number(order.amount); // 付款价格
        info.finalPayDispaly = Number(info.finalPay).toFixed(2);
        // -----------------End

        this.setData({
            items: order.items,
            finalPayDispaly: info.finalPayDispaly,
            isLoading: false,
            crowd: order.crowd
        });
    },
    bindTextAreaBlur(e) {
        let content = e.detail.value;
        let len = parseInt(content.length, 0);
        this.setData({
            content,
            len
        });
    },

    async onShow() {
        const { pageShareStatus, order_no, content, defaultWord } = this.data;
        if (pageShareStatus) {
            const res = await api.hei.crowdCreate({
                order_no,
                word: content ? content : defaultWord,
            });
            this.setData({ pageShareStatus: false });
        }
    },

    // 分享弹窗
    showShareModal() {
        let { crowd, crowd_pay_no } = this.data;
        let routeQuery = {
            crowd_pay_no: crowd_pay_no ? crowd_pay_no : crowd.crowd_pay_no
        };

        let { shareModal } = this.data;
        shareModal ? shareModal = false : shareModal = true;
        this.setData({
            shareModal,
            routeQuery
        });
    },

    async onShowProductDetailShareModal() {
        this.setData({
            isShowProductDetailShareModal: true,
            shareModal: false
        });
        const { order_no, content, defaultWord } = this.data;
        const res = await api.hei.crowdCreate({
            order_no,
            word: content ? content : defaultWord,
        });
    },
    onCloseProductDetailShareModal() {
        this.setData({
            isShowProductDetailShareModal: false
        });
    },

    onShareAppMessage() {
        let { content, crowd_pay_no, defaultWord, crowd } = this.data;
        let shareMsg = {
            title: content ? content : defaultWord,
            path: `/pages/crowd/crowdProgress/crowdProgress?crowd_pay_no=${crowd_pay_no}`,
            imageUrl: crowd.image || ''
        };
        this.setData({ pageShareStatus: true });
        return shareMsg;
    },
});
