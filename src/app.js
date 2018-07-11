import { login as wxLogin, checkSession } from 'utils/wxp';
import api from 'utils/api';
import getToken from 'utils/getToken';
import { USER_KEY, TOKEN_KEY, EXPIRED_KEY } from 'constants/index';
import Event from 'utils/event';

App({
    onLaunch() {
        const { windowWidth, windowHeight, pixelRatio, screenWidth, model } = wx.getSystemInfoSync();
        this.systemInfo = {
            windowWidth,
            windowHeight,
            ratio: pixelRatio,
            screenWidth,
            isIphoneX: model.indexOf('iPhone X') >= 0,
            isIphone5: model.indexOf('iPhone 5') >= 0
        };

        const extConfig = wx.getExtConfigSync() || {};
        // const extConfig = { primaryColor: 'red', secondaryColor: 'blue' };
<<<<<<< HEAD
        const { primaryColor, secondaryColor, categoryIndex = 2 } = extConfig;
=======
        console.log(extConfig, 'extConfig');
        const { primaryColor, secondaryColor } = extConfig;
>>>>>>> 187c3c4185f4225654a492f9fd04cafcc13065bc
        this.globalData.themeColor = { primaryColor, secondaryColor };
        this.globalData.categoryIndex = { categoryIndex };
    },

    async silentLogin() {
        const { code } = await wxLogin();
        const { user, access_token, expired_in } = await api.hei.silentLogin({ code });
        const expiredTime = expired_in * 1000 + Date.now();
        wx.setStorageSync(USER_KEY, user);
        wx.setStorageSync(TOKEN_KEY, access_token);
        wx.setStorageSync(EXPIRED_KEY, expiredTime);
    },

    async onShow(options) {
        const { query = {}} = options;
        if (query.vendor) {
            this.globalData.vendor = query.vendor;
        }
        if (options.referrerInfo) {
            this.globalData.extraData = options.referrerInfo.extraData;
        }

        try {
            const token = getToken();
            if (!token) {
                throw new Error('token invalid');
            }
            await checkSession();
        }
        catch (err) {
            await this.silentLogin();
        }
    },

    onError(err) {
        console.error('[APP ERROR]', err);
    },

    globalData: {
        vendor: '',
        currentOrder: {
            items: [],
        },
        orderDetail: {
            items: []
        },
    },

    systemInfo: {},

    event: new Event()
});
