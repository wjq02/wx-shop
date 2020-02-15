import api from 'utils/api';
import Poster from './poster';
import proxy from 'utils/wxProxy';
import { auth } from 'utils/util';
const app = getApp();

Component({
    properties: {
        posterData: {
            type: Object,
            value: {}
        },
        user: {
            type: Object,
            value: {}
        },
        posterType: {
            type: String,
            value: 'product'
        }
    },
    data: {
        palette: {},
        imagePath: ''
    },
    async attached() {
        try {
            const { themeColor } = app.globalData;
            const { posterData, user, posterType } = this.data;
            wx.showLoading({
                title: '绘制图片中...',
                mask: true
            });

            let requestData = {
                weapp_page: 'pages/webPages/webPages',
                width: 150
            };

            let scene = {};
            if (user && user.afcode) {
                scene.afcode = user.afcode;
            }

            switch (posterType) {
                // 文章海报
                case 'article':
                    scene.aid = posterData.id;
                    break;

                // 砍价帮砍海报
                case 'bargainBuy':
                    scene.bid = posterData.code;
                    break;

                // 邀请拼团海报
                case 'grouponBuy':
                    scene.gid = posterData.id;
                    requestData.post_id = posterData.post_id;
                    requestData.sku_id = posterData.sku_id;
                    break;

                // 代付海报
                case 'crowd':
                    scene.c = posterData.crowd_pay_no;
                    break;

                case 'bargain':
                case 'groupon':
                case 'miaosha':
                case 'product':
                    scene.id = posterData.id;
                    break;
            }

            const { qrcode_url, save_button_title = '', save_success_tips = '', product = {}, current_user = {}} = await api.hei.getShopQrcode({
                ...requestData,
                scene: Object.keys(scene).map(k => (k) + '=' + (scene[k])).join('&')
            });

            let options = {
                qrcode_url,
                product,
                globalData: app.globalData
            };
            const palette = new Poster(
                Object.assign(posterData, options),
                user || current_user,
                posterType
            ).init();

            this.setData({
                palette,
                themeColor,
                save_button_title,
                save_success_tips,
            });

        } catch (err) {
            wx.hideLoading();
            const { confirm } = await proxy.showModal({
                title: '温馨提示',
                content: err.errMsg,
                showCancel: false
            });
            if (confirm) {
                this.onClose();
            }
        }
    },

    detached() {
        this.setData({
            palette: {},
            imagePath: ''
        });
    },

    methods: {
        onClose() {
            this.triggerEvent('onClose');
        },

        onImgOK(e) {
            const imagePath = e.detail.path;
            console.log(imagePath, '-----------------');
            this.setData({
                imagePath
            });
            wx.hideLoading();
        },

        async saveImage() {
            const { imagePath, save_success_tips } = this.data;
            const res = await auth({
                scope: 'scope.writePhotosAlbum',
                ctx: this,
                isFatherControl: true
            });
            if (res) {
                await proxy.saveImageToPhotosAlbum({
                    filePath: imagePath,
                });
                const { confirm } = await proxy.showModal({
                    title: '温馨提示',
                    content: save_success_tips ? save_success_tips : '保存成功，快去分享吧',
                    showCancel: false
                });
                if (confirm) {
                    this.onClose();
                }
            }
        },

        onModalCancel() {
            this.setData({
                'authModal.isShowModal': false
            });
        },

        onModalConfirm() {
            this.setData({
                'authModal.isShowModal': false
            });
        },

        touchmove() {
            console.log('点击穿透阻止');
            return;
        },

    }
});