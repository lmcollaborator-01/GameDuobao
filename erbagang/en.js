'use strict';

if (!window.i18n) {
    window.i18n = {};
}

if (!window.i18n.languages) {
    window.i18n.languages = {};
}

window.i18n.languages['en'] = {
    /////////////////////////////////////////////////////////////////////////////
    /////////// 请注意 翻译部分 %{xxx} \n <img src='' /> 等 要留意一下 //////////////
    /////////////////////////////////////////////////////////////////////////////
 // 图片文字翻译
 kaishila:"开始啦",

 //  主游戏
 zongtouzhu:"Total: %{zongtouzhu}",
 wotouzhu:"Me: %{wotouzhu}",
 zichan: "Assets%{zichan}",
 zhunbeijin:"Bankroll: %{zhunbeijin}", //准备金？？
 yuebuzu: "Insufficient balance. Please deposit.",
 touzhu:"Current Bet Limit: %{touzhu}",
 denglu:"Please sign in from the menu on the top right.",
 tuichuliebiao:"Exit", //Close??
 kanzhuangliebiao:"上庄列表",
 szshibai:"Failed to bank",
 szchenggong:"申请上庄成功",
 xzchenggong:"申请下庄成功",
 shangzhuang:"Bank the Table",
 xuanzhong:"选中状态设置必须大于0",
 zbjinshangxian:"游戏准备金不能小于上庄限额%{zbjinshangxian}",
 dengdai:"Waiting for next round...", // 记得加上...
 jipai:"记牌", //Card Counting??
 jihaozhuo:"Table %{jihaozhuo}", // x号桌

 zhanghu: "Account: %{zhanghu}",
 wujilu: "No records",
 paomadeng:"恭喜用户%{yonghu}投注%{beishu}倍，获得%{etcjiang}奖励",
 
 // 上庄
 paixu:"Rank",
 yonghu:"Player",
 jine:"Bankroll", //准备金？？
 jineZhushi:"* Ranking based on bankroll amount",
 qian1lun:"前1轮",
 qian1lun:"前2轮",
 qian1lun:"前3轮",
 qian1lun:"前4轮",
 qian1lun:"前5轮",
 shenglv:"Win Rate",
 shenglvZhushi:"* 胜率根据近100局的胜负统计",
 zhuang:"Banker",
 // 坐庄
 shezhijine:"设定庄家上庄金额",
 zidongbuzu:"自动补足坐庄金额", // 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
 zidongbuzuci:"次",// 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
 zuozhuangzhushi:"* 上庄金额不足时，系统自动扣除您的余额并补足上庄金额",
 // 结算
 jiesuantou:"本局收益前五名",
 lianzhuang:"连庄",
 xiazhuang:"下庄",

 //购买弹层
 yueyichang:"Error in account balance. Please contact: support@coingame.com",
 koukuanshibai:"Failed to pay. Please purchase again, or contact: support@coingame.com",
 zhunbeijinbuzu:"Insufficient bankroll",
 kaijiangshibai:"Failed to get result. Please contact: support@coingame.com",
 youxizhong:"Calculating results. Please start later.",

 //提示
 wangluo: "Network unavailable. Please check your network connection.",
 wangluolianjie: "Network error. Please try reconnecting.",
 
 // ui 中设置
 // main
 anniu_tibi: "Withdraw",
 anniu_chongzhi: "Deposit",
 //按钮
 anniu_1: "Confirm",
 anniu_2: "Cancel",
 //新手引导
 yindao_guanwang: "Home Page",
 yindao_login:"Sign Up / Sign In",
 yindao_android:"Android App",
 yindao_yuyan:"Languages",
 yindao_logout:"Sign Out / Switch Account",
 yindao_music:"Sound",
 yindao_help:"Support",
 yindao_rank:"Leaderboard",
 // 维护
 weihuzhong:"The game is under maintenance. Please come back later.",

 // 夺宝规则
 guizewenzi:`How to Play:
All bets need to be placed on the table within given time.
Every player with a balance larger than a certain amount can apply to bank the table.
After game starts, each player (including Banker) receives 2 face-down Mahjong tiles. The Banker hand will be compared with the other hands to decide the winner.

About Mahjong Suits:
The game uses 1-9 Dot-tiles and White Dragons as 1 to 10 游戏使用麻将的1-9筒和白板，计为1-10点。点数总和超过10点，则只算个位数。
牌型大小：豹子&gt;天杠&gt;9点&gt;8点&gt;7点&gt;6点&gt;5点&gt;4点&gt;3点&gt;2点&gt;1点&gt;0点
豹子：2张一样的牌称为豹子，白板豹子最大。
天杠：2筒+8筒。
比较规则：首先比较牌型大小，如遇牌型或点数相同则比较2张麻将牌中点数较大的牌，如9+2=1点&gt;8+3=1点。
若点数和牌型完全一致，庄家失败。

详细牌型:
豹子牌型:
豹子牌型为本游戏中的最大牌型，豹子中单张牌的大小决定豹子的大小，一对白板最大。
 
单点牌型:
除了豹子和天杠外，其余为点数牌，其大小取决于两张牌的总和的个位数大小，其次则是单张牌的大小。
 
天杠牌型:
一个2筒+一个8筒组成了天杠，该牌型小于任何豹子，但大于任意点数牌型。
 
官方拥有该游戏的最终解释权。如有任何疑问请联系官方客服:
Email：support@coingame.com 
QQ：468631374
Kakao：Coingame Korea
（<u click="clickme1" >https://open.kakao.com/o/shleVM3</u>）
Telegram：<u click="clickme2" >https://t.me/Coingame_official</u>
`,
};
