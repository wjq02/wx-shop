import api from 'utils/api';
import { formatTime } from 'utils/util';
import { showToast, showModal, chooseImage } from 'utils/wxp';

const app = getApp();
Page({
    data: {
        images: [],
        text: '',
        maxlength: 140,
        rating: 5
    },

    async onLoad(parmas) {
        console.log(parmas);
        const systemInfo = wx.getSystemInfoSync();
        const isIphoneX = systemInfo.model.indexOf('iPhone X') >= 0;
        const { themeColor } = app.globalData;
        this.setData({
            themeColor,
            isIphoneX,
            ...parmas
        });
    },

    async onUpload() {
        const { images } = this.data;
        const { tempFilePaths } = await chooseImage({
            count: 4 - images.length
        });
        try {
            for (let i = 0; i < tempFilePaths.length; i++) {
                const data = await api.hei.upload({
                    filePath: tempFilePaths[i]
                });
                const { url } = JSON.parse(data);
                images.push(url);
                this.setData({ images });
            }
        }
        catch (err) {
            console.log(err);
        }

    },

    rate(ev) {
        const { index } = ev.detail;
        this.setData({
            rating: index
        });
        console.log(this.data.rating);
    },

    bindTextAreaBlur(ev) {
        const { value } = ev.detail;
        let len = parseInt(value.length, 0);
        this.setData({
            text: value,
            len: len
        });
    },

    async formSubmit(ev) {
        console.log(ev);
        const formId = ev.detail.formId;
        this.setData({ formId });
    },

    async onSubmit() {
        const { formId, rating, text, images, id, orderNo } = this.data;
        try {
            if (!text && !images.length) {
                this.setData({
                    text: '此用户没有填写评价'
                });
            }
            let args = {
                rating,
                text: this.data.text,
                images: JSON.stringify(images),
                form_id: formId,
            };
            args.post_id = id;
            const data = await api.hei.productComment({ ...args });

            const { errcode } = data;
            if (errcode === 0) {
                const { confirm } = await showModal({
                    title: '温馨提示',
                    content: '提交成功',
                    showCancel: false,
                    mask: true
                });
                if (confirm) {
                    wx.redirectTo({
                        url: `/pages/orderDetail/orderDetail?id=${orderNo}`
                    });
                }
            }
            else {
                throw new Error(`错误代码：${errcode}`);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    onDeleteImage(ev) {
        const { index } = ev.currentTarget.dataset;
        const { images } = this.data;
        images.splice(index, 1);
        this.setData({ images });
    },

    previewImage(ev) {
        const { index } = ev.currentTarget.dataset;
        wx.previewImage({
            urls: this.data.images,
            current: this.data.images[index]
        });
    }
});