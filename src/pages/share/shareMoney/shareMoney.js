import { checkPhone, bankCardAttribution } from 'utils/util';
import { BANK_CARD_LIST } from 'utils/bank';
import { onDefaultShareAppMessage } from 'utils/pageShare';
// import { USER_KEY } from 'constants/index';
const app = getApp();
Page({
    data: {
        payStyles: [
            { name: '微信', value: '1', checked: 'true' },
            { name: '银行卡', value: '2' }
        ],

        payStyle: 1,

        index: 0,

        isError: {
            phone: false,
            card: false
        },

        wechatId: '',   // 微信号
        username: '',   // 用户名
        phoneNumber: '',    // 手机号
        bankName: '',   // 银行
        bankNumber: ''  // 银行卡
    },

    onLoad(parmas) {
        console.log(parmas);
        const systemInfo = wx.getSystemInfoSync();
        // const user = wx.getStorageSync(USER_KEY);
        const isIphoneX = systemInfo.model.indexOf('iPhone X') >= 0;
        const { themeColor } = app.globalData;
        this.setData({
            // user,
            isIphoneX,
            themeColor,
            bankNameList: BANK_CARD_LIST
        });

        console.log(this.data.bankNameList);
    },

    /* radio选择改变触发 */
    radioChange(e) {
        this.setData({
            payStyle: e.detail.value
        });
        console.log('radio的value值为：', e.detail.value);
    },

    /* 验证手机 */
    check(e) {
        const { value } = e.detail;
        if (!checkPhone(value)) {
            this.setData({
                'isError.phone': true
            });
        }
    },
    reset() {
        this.setData({
            'isError.phone': false
        });
    },

    getUserIdCardPhoneNumber(e) {
        this.setData({ phoneNumber: e.detail.value });
    },

    getUserWechatId(e) {
        this.setData({ wechatId: e.detail.value });
    },

    getUserIdCardName(e) {
        this.setData({ username: e.detail.value });
    },

    getUserIdCardNumber(e) {
        this.setData({
            bankNumber: e.detail.value
        });
        let temp = bankCardAttribution(e.detail.value);
        console.log(temp);
        if (temp === 0) {
            this.setData({ bankName: '' });
        } else {
            this.setData({ bankName: temp.bankName });
        }
    },

    bindPickerChange(e) {
        this.setData({
            index: e.detail.value,
            bankName: this.data.bankNameList[e.detail.value].bankName
        });
    },

    /* 银行卡提交 */
    submitBank() {
        let that = this;
        if (that.data.username.length === 0) {
            wx.showToast({ title: '用户名不能为空', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (that.data.phoneNumber.length === 0) {
            wx.showToast({ title: '手机号不能为空', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (that.data.phoneNumber.length !== 11) {
            wx.showToast({ title: '手机号长度有误', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (!checkPhone(this.data.phoneNumber)) {
            wx.showToast({ title: '请输入正确的手机号', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (!that.data.bankNumber) {
            wx.showToast({ title: '银行卡号不能为空', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (!that.data.bankName) {
            wx.showToast({ title: '开户行不能为空', icon: 'none', image: '', duration: 1000 });
            return false;
        } else {
            console.log('submitBank');
        }
    },

    submitWechat() {
        let that = this;
        if (that.data.phoneNumber.length === 0) {
            wx.showToast({ title: '手机号不能为空', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (!checkPhone(this.data.phoneNumber)) {
            wx.showToast({ title: '请输入正确的手机号', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (that.data.phoneNumber.length !== 11) {
            wx.showToast({ title: '手机号长度有误', icon: 'none', image: '', duration: 1000 });
            return false;
        } else if (that.data.wechatId.length === 0) {
            wx.showToast({ title: '微信号不能为空', icon: 'none', image: '', duration: 1000 });
            return false;
        } else {
            console.log('submitWechat');
        }
    },

    // 页面分享设置
    onShareAppMessage: onDefaultShareAppMessage,
});
