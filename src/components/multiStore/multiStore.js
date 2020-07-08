import api from 'utils/api';
import { auth, getDistance } from 'utils/util';
import proxy from 'utils/wxProxy';

const app = getApp();

Component({
    data: {
        latitude: '', // 纬度
        longitude: '', // 经度
        originStoreList: [],  // 原始门店列表
        storeList: [],  // 门店列表
        currentStore: {},  // 当前门店
    },
    properties: {
        multiStoreEnable: {
            type: Boolean,
            value: false,
            observer(newValue) {
                if (newValue) {
                    this.updateStore();
                }
            }
        },
    },
    pageLifetimes: {
        show: function () {
            const { multiStoreEnable } = this.data;
            multiStoreEnable && this.updateStore();
        },
    },
    lifetimes: {
        attached: function() {
            // console.log('22222222222222222');
            // this.updateStore();
        },
    },
    methods: {
        // 切换门店
        onChangeStore(e) {
            wx.navigateTo({
                url: '/pages/multiStoreList/multiStoreList'
            });
        },

        // 更新门店
        async updateStore() {
            await this.getCurrentStore();
            let { currentStore } = this.data;
            if (currentStore && currentStore.name) {
                app.globalData.currentStore = currentStore;
                this.triggerEvent('updatestore', {}, {});
            } else {
                this.triggerEvent('updatestore', {}, {});
                let { confirm } = await proxy.showModal({
                    title: '温馨提示',
                    content: '附近没有合适的门店',
                    showCancel: false,
                });
                if (confirm) {
                    wx.navigateTo({ url: '/pages/multiStoreList/multiStoreList' });
                }
            }
        },

        // 获取门店
        async getCurrentStore() {
            let { currentStore } = app.globalData;
            let store = {};
            if (currentStore.name) {
                // 优先获取全局数据
                store = currentStore;
            } else if (currentStore.id) {
                // 获取分享门店
                store = await this.getSingleStore(currentStore.id);
            }
            else {
                // 获取最近门店
                await this.getFinalStoreList();
                let { storeList = [] } = this.data;
                store = storeList.find(item => !item.isoutofrange) || {};
            }
            this.setData({
                currentStore: store,
            });
        },

        // 获取排序后的门店列表
        async getFinalStoreList() {
            let { storeList } = app.globalData;
            if (storeList && storeList.length) {
                this.setData({
                    originStoreList: storeList,
                });
            } else {
                await this.getOriginStoreList();
            }
            await this.getLocationData();
            this.computeDistance();
        },

        // 获取原始门店列表
        async getOriginStoreList() {
            let data = await api.hei.getMultiStoreList();
            let { stores = [] } = data;
            this.setData({
                originStoreList: stores,
            });
        },

        // 获取单个ID门店
        async getSingleStore(id) {
            let data = await api.hei.getMultiStoreDetail({
                store_id: id,
            });
            let { store = {}} = data;
            let str = `ID：${id}，门店：`;
            console.log(str, store);
            return store;
        },

        // 获取授权地址
        async getLocationData() {
            try {
                const res = await auth({
                    scope: 'scope.userLocation',
                    ctx: this,
                    isFatherControl: true
                });
                if (res) {
                    const data = await proxy.getLocation();
                    console.log(data, 'data');
                    let { latitude, longitude } = data;
                    this.setData({
                        latitude,
                        longitude,
                    });
                }
            } catch (e) {
                const { platform, locationAuthorized, locationEnabled } = wx.getSystemInfoSync();
                console.log(platform, 'platform');
                console.log(locationAuthorized, 'locationAuthorized');
                console.log(locationEnabled, 'locationEnabled');
                console.log(e);
                if (platform !== 'devtools' && (!locationEnabled || !locationAuthorized)) {
                    await proxy.showModal({
                        title: '温馨提示',
                        content: '请检查手机定位是否开启、是否允许微信使用手机定位',
                        showCancel: false
                    });
                    return;
                }
            }
        },

        // 计算距离获取地址
        computeDistance() {
            let { originStoreList, latitude, longitude } = this.data;
            originStoreList.forEach((item) => {
                let distance = getDistance(latitude, longitude, Number(item.latitude), Number(item.longtitude));
                item.distance = Number(distance).toFixed(2);
                item.isoutofrange = Number(item.distance) >= item.distance_limit;
            });

            originStoreList.sort((a, b) => {
                return Number(a.distance) - Number(b.distance);
            });
            console.log('storeList', originStoreList);
            this.setData({
                storeList: originStoreList,
            });
        },

        // 授权取消
        onAuthModalCancel() {
            console.log('取消授权');
            this.setData({
                'authModal.isShowModal': false
            });
        },

        // 授权确认
        onAuthModalConfirm() {
            this.setData({
                'authModal.isShowModal': false
            });
        }
    },

});
