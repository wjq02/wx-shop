import { createCurrentOrder } from 'utils/pageShare';
const app = getApp();

Component({
    options: {
        multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        product: {
            type: Object,
            value: {},
        },
        quantity: {
            type: Number,
            value: 1,
        },
    },
    data: {
        themeColor: {},
        selectedString: '',
        selectedPrice: 0,
        optionList: [],  // 选项总列表
        seletedList: [],  // 选中项列表
        selectedSku: {},  // 选中的SKU
        seletedRelations: [],  // 选中的关联商品列表
        selectedSpecials: [],  // 选中的特殊属性
        currentOrderItems: [],  // 订单请求传递数据
        productQuantity: 1,  // 选中数量
    },
    observers: {
        // 选中项
        'seletedList': function(options) {
            let selectedString = '',
                skuList = [],
                relationList = [],
                specialList = [];

            options.forEach(item => {
                selectedString += (item.value + '；');
                item.type === 'sku' && skuList.push(item);
                item.type === 'relation' && relationList.push(item);
                item.type === 'special' && specialList.push(item);
            });
            this.getSelectedSku(skuList);
            this.getSelectedRelation(relationList);

            this.getProductPrice();
            this.setData({
                selectedString,
                selectedSpecials: specialList,
            });
            this.getProductPosts();
        },
        'product': function(value) {
            this.setDefaultOptions(value);
        },
        'quantity': function(value) {
            this.setData({ productQuantity: value });
            this.getProductPosts();
        },
    },
    lifetimes: {
        attached() {
            let { themeColor } = app.globalData;
            this.setData({ themeColor });

        },
    },

    methods: {
        // 设置默认选项列表
        setDefaultOptions(e) {
            let {
                properties = [],  // SKU库存
                related_product = [],  // 关联商品
                special_attributes = [],  // 特殊属性
            } = e;

            // SKU数组
            let skuList = properties.map(item => {
                let { name, items: valueList = [] } = item;
                let type = 'sku';
                let values = valueList.reduce((acc, cur) => {
                    acc.push(cur.name);
                    return acc;
                }, []);
                return { name, values, type };
            });

            // 关联商品数组
            let relateList = related_product.map(item => {
                let { key: name, value: valueList = [] } = item;
                let type = 'relation';
                let values = valueList.reduce((acc, cur) => {
                    acc.push(cur.title);
                    return acc;
                }, []);
                return { name, values, type };
            });

            // 特殊属性数组
            let specialList = special_attributes.map(item => {
                let { key: name, value: valueList } = item;
                let type = 'special';
                let values = valueList.reduce((acc, cur) => {
                    acc.push(cur);
                    return acc;
                }, []);
                return { name, values, type };
            });
            let optionList = [...skuList, ...relateList, ...specialList];

            // 设置列表默认项
            let seletedList = optionList.map(item => {
                let { name, values: [value = ''], type } = item;
                return { name, value, type };
            });
            this.setData({ optionList, seletedList });

        },

        // 更改订单的某个选项
        onSeletedRadio(e) {
            let { seletedList } = this.data,
                { index, value } = e.currentTarget.dataset;

            seletedList[index].value = value;
            console.log('seletedList', seletedList);
            this.setData({
                seletedList,
            });
        },

        // 获取选中SKU信息
        getSelectedSku(skuList) {
            let { skus = [] } = this.data.product;
            let skuName = skuList.reduce((acc, cur) => {
                let { name, value } = cur;
                return acc + `${name}:${value};`;
            }, '');
            let selectedSku = skus.find(item => item.property_names === skuName) || {};
            this.setData({ selectedSku });
        },

        // 获取选中的关联商品信息
        getSelectedRelation(relationList) {
            let { related_product = [] } = this.data.product;
            // 扁平化关联商品列表
            let mapRelatedProduct = related_product.flatMap(item => item.value);
            let seletedRelations = relationList.map(item => {
                let { value } = item;
                let seleted = mapRelatedProduct.find(product => product.title === value);
                return seleted;
            });
            this.setData({ seletedRelations });
        },

        // 获取选中的商品价格
        getProductPrice() {
            let { selectedSku, seletedRelations, product } = this.data;
            let relationPrice = seletedRelations.reduce((acc, cur) => acc + cur.price, 0);
            let selectedPrice = (selectedSku.price || product.price) + relationPrice;
            if (!Number.isInteger(selectedPrice)) {
                selectedPrice = Number.parseFloat(selectedPrice).toFixed(2);
            }
            this.setData({ selectedPrice });
        },

        // 获取商品请求参数
        getProductPosts() {
            let { selectedSku, seletedRelations, selectedSpecials, productQuantity, product } = this.data;
            let shipping_type = 2;
            // 特殊属性
            let specialAttributes = selectedSpecials.map(item => ({ key: item.name, value: item.value }));
            let { items = [] } = createCurrentOrder({
                selectedSku,
                quantity: productQuantity,
                product,
            });
            // 额外参数
            items[0] = Object.assign(items[0], {
                related_posts: seletedRelations,
                special_attributes: specialAttributes,
                shipping_type,
            });
            // console.log('currentOrderItems', items);
            this.setData({ currentOrderItems: items });
        },
    },
});