// pages/shopDetail/index.js

import api from 'utils/api';
const app = getApp();


Page({
  /**
   * 页面的初始数据
   */
  data: {
    product: {
    'id': 7,
    'type': 1,
    'post_type': 'product',
    'status': 'publish',
    'views': 202,
    'icon': '',
    'title': '测试商品',
    'excerpt': 'a:1:{i:0;s:154:"http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2023/03/1678087530-8989ed0a6d4eea3d70b47b6103b8828d.jpg?orientation=portrait&width=1280&height=1923";}',
    'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509699-%E7%BB%98%E7%94%BB.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
    'user_id': 28,
    'timestamp': 1659952052,
    'time': '7月前',
    'date': '2022-08-08',
    'day': '08月08日',
    'modified_timestamp': 1678353535,
    'modified_time': '23小时前',
    'modified_date': '2023-03-09',
    'name': 'adf',
    'post_url': '/?product=adf',
    'images': [
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509699-%E7%BB%98%E7%94%BB.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509699-%E7%BB%98%E7%94%BB.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 152,
            'thumbnail_width': 400,
            'height': 152,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509699-%E7%BB%98%E7%94%BB.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509700-%E7%90%86%E8%B4%A2.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509700-%E7%90%86%E8%B4%A2.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 120,
            'thumbnail_width': 400,
            'height': 120,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509700-%E7%90%86%E8%B4%A2.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712639-image.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712639-image.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 750,
            'thumbnail_width': 400,
            'height': 750,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712639-image.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712589-1664350714089-1.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712589-1664350714089-1.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 635,
            'thumbnail_width': 400,
            'height': 496,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712589-1664350714089-1.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712589-1664350693336-1.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712589-1664350693336-1.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'portrait',
            'width': 660,
            'thumbnail_width': 400,
            'height': 862,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/08/1665712589-1664350693336-1.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509916-%E8%81%8C%E5%9C%BA.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509916-%E8%81%8C%E5%9C%BA.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 152,
            'thumbnail_width': 400,
            'height': 152,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509916-%E8%81%8C%E5%9C%BA.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509916-%E7%BA%A6%E9%A5%AD.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509916-%E7%BA%A6%E9%A5%AD.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 160,
            'thumbnail_width': 400,
            'height': 152,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509916-%E7%BA%A6%E9%A5%AD.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509700-%E8%84%B1%E5%8D%95.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509700-%E8%84%B1%E5%8D%95.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 160,
            'thumbnail_width': 400,
            'height': 152,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509700-%E8%84%B1%E5%8D%95.png?imageMogr2/auto-orient/format/webp#'
        },
        {
            'large': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509699-%E6%9B%B4%E5%A4%9A.png?imageMogr2/auto-orient/thumbnail/!1200x1200r/gravity/Center/crop/1200x1200/format/webp#',
            'thumbnail': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509699-%E6%9B%B4%E5%A4%9A.png?imageMogr2/auto-orient/thumbnail/!400x400r/gravity/Center/crop/400x400/format/webp#',
            'orientation': 'landscape',
            'width': 152,
            'thumbnail_width': 400,
            'height': 152,
            'thumbnail_height': 400,
            'full': 'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2022/09/1664509699-%E6%9B%B4%E5%A4%9A.png?imageMogr2/auto-orient/format/webp#'
        }
    ],
    'product_category': [
        {
            'id': 60,
            'taxonomy': 'product_category',
            'name': '家用电器',
            'count': 1,
            'description': '',
            'slug': '%e5%ae%b6%e7%94%a8%e7%94%b5%e5%99%a8',
            'parent': 0
        }
    ],
    'content': [
        'http://cdn2.wpweixin.com/wp-content/uploads/sites/6749/2023/03/1678087530-8989ed0a6d4eea3d70b47b6103b8828d.jpg?imageMogr2/auto-orient/thumbnail/750x/format/webp#'
    ],
    'comment_sticky': true,
    'comment_read': true,
    'reply_type': 'all',
    'comment_count': 0,
    'comment_status': 'open',
    'comments': [],
    'fav_count': 0,
    'fav_status': 'open',
    'is_faved': false,
    'sku_no': 'sdfdfs',
    'stp': 3331,
    'price': 213,
    'cost': 100,
    'stock': 45000,
    'sales': 111,
    'product_no': 'sdfdfs',
    'highest_price': 213,
    'discount': 0.06,
    'is_multi_sku': true,
    'properties': [
        {
            'name': '颜色',
            'items': [
                {
                    'name': '红色',
                },
                {
                    'name': '绿色',
                    'thumbnail': '',
                    'large': '',
                    'image': ''
                },
                {
                    'name': '黄色',
                    'thumbnail': '',
                    'large': '',
                    'image': ''
                },
                {
                    'name': '天青色',
                    'thumbnail': '',
                    'large': '',
                    'image': ''
                },
                {
                    'name': '天蓝色',
                    'thumbnail': '',
                    'large': '',
                    'image': ''
                }
            ]
        },
        {
            'name': '型号',
            'items': [
                {
                    'name': '型号一'
                },
                {
                    'name': '型号二'
                },
                {
                    'name': '型号三'
                },
                {
                    'name': '型号四'
                }
            ]
        }
    ],
},
    actions: [
      {
        type: 'onBuy',
        text: '立即购买',
      },
    ],
    isShowSkuModal: true,
  },

  async initPage() {
    // console.log('000');
    // const { id } = this.options;
    // console.log(id, 'ii1');
    // const data = await api.hei.fetchProduct({ id });
    // console.log(data, 'data');
    // const { config, share_title, share_image } = data;
    // this.config = config;
    // wx.setNavigationBarTitle({
    //   title: data.page_title,
    // });
    // this.setData({ product, isShowSkuModal: true });
  },

  handleClick() {
      console.log(11221);
      this.setData({ ...this.data, isShowSkuModal: true });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('===');
    console.log('091');
    this.initPage();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
