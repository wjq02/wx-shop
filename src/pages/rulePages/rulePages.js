import api from 'utils/api';
import { onDefaultShareAppMessage } from 'utils/pageShare';

const WxParse = require('utils/wxParse/wxParse.js');

const app = getApp();

Page({

    data: {
        id: 0,
        isLoading: true,
        type: 'topic',
        topic: null,
        user: null,
        page_title: '',
        share_title: ''
    },

    onLoad({ id }) {
        const { globalData: { themeColor }, systemInfo: { isIphoneX }} = app;
        this.setData({
            isIphoneX,
            themeColor
        });
        this.getDetail(id);
    },

    async getDetail(id) {
        const { post, share_title, page_title } = await api.hei.getRule({
            id: id,
        });
        const { themeColor } = this.data;
        const fomatedContent = post.content.replace(/class="product-card-button"/g, `class="product-card-button" style="background-color: ${themeColor.primaryColor}"`);

        WxParse.wxParse(
            'article_content',
            'html',
            fomatedContent,
            this,
        );

        this.setData({
            id,
            article: post,
            share_title: share_title,
            isLoading: false
        });
        if (page_title) {
            wx.setNavigationBarTitle({
                title: page_title,
            });
        }
    },
    wxParseTagATap(e) {
        wx.navigateTo({
            url: '/' + e.currentTarget.dataset.src,
        });
    },

    onShareAppMessage: onDefaultShareAppMessage,
});