import api from 'utils/api';
import { parseScene, go, autoNavigate_ } from 'utils/util';
import { CONFIG } from 'constants/index';
// 获取应用实例
const app = getApp();

Component({
    properties: {
        productsList: {
            type: Object,
            value: {},
            observer(newVal) {
                if (!newVal) { return }
                const { content, setting, title, type, id } = newVal;
                this.setData({
                    scrollLeft: 0,
                    content,
                    setting,
                    title,
                    type,
                    id
                });
            }
        },
        themeColor: {
            type: Object,
            value: {}
        },
        globalData: {
            type: Object,
            value: {}
        },
        products: {
            type: Array,
            value: [],
            observer(newVal) {
                if (!newVal || !newVal.length) { return }
                const { products, isLastModule, content = [] } = this.data;
                // const newContent = content.concat(products);
                if (isLastModule) {
                    this.setData({
                        content: products
                    });
                }
            }
        },
        isLastModule: {
            type: Boolean,
            value: false,
        }
    },

    lifetimes: {
        attached: function() {
            const config = wx.getStorageSync(CONFIG);
            this.setData({ config });
        },
    },

    methods: {
        goMore() {
            const { setting = {}, id } = this.data;
            const { orderby = '', product_category_id = '' } = setting;
            if (setting.promotion_type === 'groupon_enable') {
                autoNavigate_({ url: '/pages/miaoshaList/miaoshaList?type=groupon&module_id=' + id + '&orderby=' + orderby + '&categoryId=' + product_category_id });
            }
            if (setting.promotion_type === 'bargain_enable') {
                autoNavigate_({ url: '/pages/miaoshaList/miaoshaList?type=bargain&module_id=' + id + '&orderby=' + orderby + '&categoryId=' + product_category_id });
            }
            if (setting.promotion_type === 'seckill_enable') {  // 秒杀
                autoNavigate_({ url: '/pages/miaoshaList/miaoshaList?type=seckill&module_id=' + id + '&orderby=' + orderby + '&categoryId=' + product_category_id });
            }
            if (setting.promotion_type === 'miaosha_enable') {
                autoNavigate_({ url: '/pages/miaoshaList/miaoshaList?type=miaosha&module_id=' + id + '&orderby=' + orderby + '&categoryId=' + product_category_id });
            }
            if (!setting.promotion_type) {
                autoNavigate_({ url: '/pages/productList/productList?module_id=' + id + '&orderby=' + orderby + '&categoryId=' + product_category_id });
            }
        }
    }
});