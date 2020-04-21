import { PLATFFORM_ENV, HOST_ARRAY } from 'constants/index';
import { textToValue } from 'utils/util';

/**
 * path: 接口路径
 * method: 请求方法，默认GET
 * isForceToken: 是否需要带token，默认false
 * requestType: 默认request, [request, uploadFile]
 * contentType: 默认x-www-form-urlencode, 可配置json
 **/

export const host = textToValue(HOST_ARRAY, PLATFFORM_ENV);

export const apis = {
    login: {
        // path: `api/mag.auth.signon.json?appid=${APPID}`,
        path: 'api/mag.auth.signon.json',
        method: 'POST',
    },
    fetchHome: {
        path: 'api/mag.shop.home.json?v2'
    },
    fetchShopExtra: {
        path: 'api/mag.shop.extra.json',
        isForceToken: true
    },
    fetchProductList: {
        path: 'api/mag.product.list.json',
    },
    fetchProduct: {
        path: 'api/mag.product.get.json?v2'
    },
    fetchCartList: {
        path: 'api/mag.cart.get.json',
        isForceToken: true,
    },
    addCart: {
        path: 'api/mag.cart.add.json',
        method: 'POST',
        isForceToken: true,
    },
    updateCart: {
        path: 'api/mag.cart.update.json',
        method: 'POST',
        isForceToken: true,
    },
    removeCart: {
        path: 'api/mag.cart.remove.json',
        method: 'POST',
        isForceToken: true,
    },
    clearCart: {
        path: 'api/mag.cart.clear.json',
        method: 'POST',
        isForceToken: true,
    },
    fetchOrderList: {
        path: 'api/mag.order.list.json',
        isForceToken: true,
    },
    fetchOrder: {
        path: 'api/mag.order.get.json',
        isForceToken: true,
    },
    fetchOrderCount: {
        path: 'api/mag.order.counts.json',
        isForceToken: true,
    },
    createOrderAndPay: {
        path: 'api/mag.order.create.json?pay&v2',
        method: 'POST',
        isForceToken: true,
    },
    createOrder: {
        path: 'api/mag.order.create.json',
        method: 'POST',
        isForceToken: true,
    },
    orderPrepare: {
        path: 'api/mag.order.prepare.json',
        method: 'POST',
        isForceToken: true,
    },
    payOrder: {
        path: 'api/mag.order.pay.json?pay&v2',
        method: 'POST',
        isForceToken: true,
    },
    peanutPayOrder: {
        path: 'api/mag.order.pay.peanut.json',
        method: 'POST',
        isForceToken: true,
    },
    closeOrdery: {
        path: 'api/mag.order.close.json',
        method: 'POST',
        isForceToken: true,
    },
    confirmOrder: {
        path: 'api/mag.order.confirm.json',
        method: 'POST',
        isForceToken: true,
    },
    refund: {
        path: 'api/mag.order.refund.json',
        method: 'POST',
        isForceToken: true,
    },
    fetchLogistic: {
        path: 'api/mag.order.logistic.json',
        isForceToken: true,
    },
    fetchCategory: {
        path: 'api/mag.product.category.list.json',
    },
    createGroupon: {
        path: 'api/mag.groupon.create.json?pay&v2',
        method: 'POST',
        isForceToken: true,
    },
    joinGroupon: {
        path: 'api/mag.groupon.join.json?pay&v2',
        method: 'POST',
        isForceToken: true,
    },
    fetchGroupon: {
        path: 'api/mag.groupon.get.json',
        isForceToken: true,
    },
    fetchCouponList: {
        path: 'api/mag.coupon.list.json',
        method: 'GET',
        isForceToken: true,
    },
    fetchMyCouponList: {
        path: 'api/mag.coupon.my.json?v2',
        method: 'POST',
        isForceToken: true,
    },
    receiveCoupon: {
        path: 'api/mag.coupon.receive.json',
        method: 'POST',
        isForceToken: true,
    },
    upload: {
        path: 'api/mag.upload.media.json',
        isForceToken: true,
        method: 'POST',
        requestType: 'uploadFile',
    },

    // 文章详情
    articleDetail: {
        path: 'api/mag.article.get.json',
        method: 'GET',
    },

    // 文章列表
    articleList: {
        path: 'api/mag.article.list.json',
        method: 'GET',
    },

    // 收藏
    fav: {
        path: 'api/mag.article.fav.json',
        method: 'POST',
        isForceToken: true,
    },

    // 取消收藏
    unfav: {
        path: 'api/mag.article.unfav.json',
        method: 'POST',
        isForceToken: true,
    },

    // 收藏列表
    queryFavList: {
        path: 'api/mag.article.fav.list.json',
        method: 'GET',
        isForceToken: true,
    },

    // 评论
    createReply: {
        path: 'api/mag.article.reply.json',
        method: 'POST',
        isForceToken: true,
    },
    // 商品评论
    productComment: {
        path: 'api/mag.product.reply.json',
        method: 'POST',
        isForceToken: true,
    },
    // 商品评论列表
    productCommentList: {
        path: 'api/mag.product.reply.list.json',
        method: 'GET',
        isForceToken: true,
    },
    deleteReply: {
        path: '',
        method: 'POST',
        isForceToken: true,
    },
    submitFormId: {
        path: 'api/mag.form_id.json',
        method: 'POST',
    },
    receiveCouponAll: {
        path: 'api/mag.coupon.batch.receive.json',
        method: 'POST',
        isForceToken: true,
    },
    fetchRedpacket: {
        path: 'api/mag.redpacket.shared.get.json',
    },
    receiveRedpacket: {
        path: 'api/mag.redpacket.receive.json',
        method: 'POST',
        isForceToken: true,
    },
    silentLogin: {
        path: 'api/mag.user.login.json',
        method: 'POST',
    },
    getUserInfo: {
        path: 'api/mag.user.info.json',
        method: 'POST',
        isForceToken: true,
    },
    wallet: { // 消费记录所调接口
        path: 'api/mag.wallet.logs.json',
        isForceToken: true,
    },
    myFare: {
        path: 'api/mag.shop.my.json',
        isForceToken: true,
    },
    // 推广中心
    shareUserInfo: {
        path: 'api/mag.affiliate.member.get.json',
        isForceToken: true
    },
    joinShareUser: {
        path: 'api/mag.affiliate.join.json',
        method: 'POST',
        isForceToken: true
    },
    getWelcomeShare: {
        path: 'api/mag.affiliate.welcome.json',
        method: 'GET',
        isForceToken: true
    },
    getShareMoney: {
        path: 'api/mag.affiliate.withdraw.json',
        method: 'POST',
        isForceToken: true
    },
    showMoneyLog: {
        path: 'api/mag.affiliate.member.logs.json',
        method: 'POST',
        isForceToken: true
    },
    getMoneyLog: {
        path: 'api/mag.wallet.withdrawals.json',
        method: 'GET',
        isForceToken: true
    },
    getShareOrderList: {
        path: 'api/mag.affiliate.order.list.json',
        method: 'GET',
        isForceToken: true
    },
    getShareCustomerList: {
        path: 'api/mag.affiliate.member.list.json',
        method: 'GET',
        isForceToken: true
    },
    getShareQrcode: {
        path: 'api/mag.affiliate.qrcode.json',
        method: 'POST',
        isForceToken: true
    },
    getShopQrcode: {
        path: 'api/mag.shop.qrcode.json',
        method: 'POST',
        isForceToken: true
    },
    getShareProductList: {
        path: 'api/mag.affiliate.product.list.json',
        method: 'GET',
        isForceToken: true
    },
    bindShare: {
        path: 'api/mag.affiliate.bind.json',
        method: 'POST',
        isForceToken: true
    },
    liftList: {
        path: 'api/mag.order.liftingaddress.json',
        method: 'GET',
        isForceToken: true
    },
    payDirect: {
        path: 'api/mag.order.pay.direct.json',
        method: 'POST',
        isForceToken: true
    },
    crowdList: {
        path: 'api/mag.order.crowd.list.json',
        isForceToken: true
    },
    crowdCreate: {
        path: 'api/mag.order.crowd.pay.create.json',
        method: 'POST',
        isForceToken: true
    },
    crowdRefund: {
        path: 'api/mag.order.crowd.refund.json',
        method: 'POST',
        isForceToken: true
    },
    crowdPay: {
        path: 'api/mag.order.crowd.pay.json',
        method: 'POST',
        isForceToken: true
    },
    config: {
        path: 'api/mag.shop.config.json',
        method: 'GET',
        isForceToken: true
    },
    getRule: {
        path: 'api/mag.component.article.get.json',
        method: 'GET',
        isForceToken: true
    },
    orderQuery: {
        path: 'api/mag.order.query.json',
        method: 'POST',
        isForceToken: true
    },
    // 上传身份信息
    uploadIdentity: {
        path: 'api/mag.shop.user.profile.update.json',
        method: 'POST',
        isForceToken: true
    },
    // 获取身份信息
    getIdentityInfo: {
        path: 'api/mag.shop.user.profile.get.json',
        isForceToken: true
    },
    favProduct: {
        path: 'api/mag.product.fav.json',
        method: 'POST',
        isForceToken: true
    },
    unFavProduct: {
        path: 'api/mag.product.unfav.json',
        method: 'POST',
        isForceToken: true
    },
    getFavProductList: {
        path: 'api/mag.product.fav.list.json',
        isForceToken: true
    },
    // 开通会员,充值金额
    joinMembership: {
        path: 'api/mag.membership.pay.json',
        isForceToken: true,
        method: 'POST'
    },
    // 签到
    signIn: {
        path: 'api/mag.shop.checkin.json',
        isForceToken: true
    },
    // 规则
    getShopRule: {
        path: 'api/mag.shop.rule.json',
        isForceToken: true
    },
    // 会员中心-储值卡
    membershipCard: {
        path: 'api/mag.membership.home.json',
        isForceToken: true
    },
    // 可充值金额
    rechargePrice: {
        path: 'api/mag.membership.store.cards.json',
        isForceToken: true
    },
    // 删除会员
    test: {
        path: 'api/mag.membership.test.json',
        isForceToken: true
    },
    // 会员中心积分列表
    getIntegralList: {
        path: 'api/mag.membership.log.json',
        isForceToken: true
    },
    // 推广中心更新用户名
    updateUserInfo: {
        path: 'api/mag.affiliate.update.userinfo.json',
        method: 'POST',
        isForceToken: true
    },
    // 推广中心浏览用户
    getVisitorData: {
        path: 'api/mag.affiliate.browse.user.list.json',
        isForceToken: true
    },
    recordAffiliateBrowse: {
        path: 'api/mag.affiliate.browse.record.json',
        isForceToken: true,
        method: 'POST'
    },
    // 会员分享
    shopShare: {
        path: 'api/mag.shop.share.json',
        method: 'POST',
        isForceToken: true
    },
    // 获取用户手机号
    getUserPhoneNumber: {
        path: '/api/mag.weapp.user.phone.json',
        method: 'POST',
        isForceToken: true
    },
    // 绑定h5
    bindWeb: {
        path: 'api/user_center/bind.json',
        method: 'POST',
        isForceToken: true
    },
    // 送货上门
    orderHomeDelivery: {
        path: 'api/mag/order.deliveryaddress.json',
        isForceToken: true
    },
    getWeappQrcode: {
        path: 'api/weapp/qrcode/code.json',
        method: 'POST',
        isForceToken: true
    },
    // 秒杀
    seckillOrderCreate: {
        path: 'api/mag.seckill.order.create.json?pay&v2',
        isForceToken: true,
        method: 'POST'
    },
    // 发起砍价
    createBargain: {
        path: 'api/mag.bargain.mission.create.json',
        method: 'POST',
        isForceToken: true
    },
    // 砍价活动详情
    bargainDetail: {
        path: 'api/mag.bargain.mission.get.json',
        isForceToken: true
    },
    // 我的砍价列表
    bargainList: {
        path: 'api/mag.bargain.mission.list.json',
        isForceToken: true
    },
    // 助力砍价
    bargainHelp: {
        path: 'api/mag.bargain.mission.assist.json',
        method: 'POST',
        isForceToken: true
    },
    // 砍价下单接口
    bargainOrder: {
        path: 'api/mag.bargain.order.create.json?pay&v2',
        method: 'POST',
        isForceToken: true
    },
    // 助力者列表
    bargainActor: {
        path: 'api/mag.bargain.mission.actor.list.json',
        isForceToken: true
    },
    // 会员续费
    renewalPay: {
        path: 'api/mag.membership.renew.pay.json',
        method: 'POST',
        isForceToken: true
    },
    // 地区列表
    fetchRegionList: {
        path: 'api/mag.region.list.json',
        method: 'GET'
    },
    // 邮费计算
    postageCalculate: {
        path: 'api/mag.shipment.calculate.json',
        method: 'POST'
    },
    subscribe: {
        path: 'api/weapp/templates/subscribe.json',
        method: 'POST',
        isForceToken: true,
        contentType: 'json'
    },
    newHome: {
        path: 'api/module/page.json',
        method: 'GET'
    },
    getReceiverList: {
        path: 'api/mag.platform_user.receiver.list.json',
        isForceToken: true
    },
    addReceiverInfo: {
        path: 'api/mag.platform_user.receiver.add.json',
        method: 'POST',
        isForceToken: true
    },
    getReceiverInfo: {
        path: 'api/mag.platform_user.receiver.get.json',
        method: 'POST',
        isForceToken: true
    },
    updateReceiverInfo: {
        path: 'api/mag.platform_user.receiver.update.json',
        method: 'POST',
        isForceToken: true
    },
    deleteReceiverInfo: {
        path: 'api/mag.platform_user.receiver.delete.json',
        method: 'POST',
        isForceToken: true
    },
};
