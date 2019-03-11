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
 kaishila:"START",

 //  主游戏
 zongtouzhu:"Total: %{zongtouzhu}",
 wotouzhu:"Me: %{wotouzhu}",
 zichan: "Assets: %{zichan}",
 zhunbeijin:"Bankroll: %{zhunbeijin}",
 yuebuzu: "Insufficient balance. Please deposit.",
 touzhu:"Current Bet Limit: %{touzhu}",
 denglu:"Please sign in from the menu on the top right.",
 tuichuliebiao:"Cancel Application",
 kanzhuangliebiao:"Banking Applications",
 szshibai:"Banking application failed.",
 szchenggong:"Applied to bank.",
 xzchenggong:"Applied to un-bank.",
 shangzhuang:"Bank the Table",
 xuanzhong:"The number of rounds should be larger than 0 when auto-recharge is on.",
 zbjinshangxian:"To bank the table, your bankroll cannot be under %{zbjinshangxian}.",
 dengdai:"Waiting for next round...", // 记得加上...
 jipai:"Tile Counting",
 jihaozhuo:"Table %{jihaozhuo}", // x号桌

 zhanghu: "Account: %{zhanghu}",
 wujilu: "No records",
 paomadeng:"Congrats to %{yonghu} on winning %{etcjiang}!",
 
 // 上庄
 paixu:"Rank",
 yonghu:"Player",
 jine:"Bankroll",
 jineZhushi:"* Ranking based on bankroll amount",
 qian1lun:"Prior 1",
 qian1lun:"Prior 2",
 qian1lun:"Prior 3",
 qian1lun:"Prior 4",
 qian1lun:"Prior 5",
 shenglv:"Win Rate",
 shenglvZhushi:"* Win rate calculated on results of prior 100 rounds",
 zhuang:"Banker",
 // 坐庄
 shezhijine:"Set Bankroll of Banker",
 zidongbuzu:"Auto recharge for ", // 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
 zidongbuzuci:"round(s)",// 自动补足坐庄金额 xx 次 翻译的时候注意一下是放在下面还是上面
 zuozhuangzhushi:"* When the bankroll is insufficient, it will be automatically recharged from your account balance.上庄金额不足时，系统自动扣除您的余额并补足上庄金额",
 // 结算
 jiesuantou:"Top 5",
 lianzhuang:"Continue Banking",
 xiazhuang:"Un-bank",

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
 yindao_login:"Sign In",
 yindao_android:"Android App",
 yindao_yuyan:"Languages",
 yindao_logout:"Sign Out",
 yindao_music:"Sound",
 yindao_help:"Support",
 yindao_rank:"Leaderboard",
 // 维护
 weihuzhong:"The game is under maintenance. Please come back later.",

 // 夺宝规则
 guizewenzi:`How to Play:
All bets need to be placed on the table within given time.
Every player with a balance larger than a certain amount can apply to bank the table.
After game starts, each player (including Banker) receives 2 face-down Mahjong tiles. After tiles are flipped over, the winner will be decided by comparing the Banker hand with the other hands one by one.
Mahjong Suits:
The game uses 1 to 9 Dots and White Dragons from a set of Mahjong tiles to stand for 1 to 10 points. When a hand of tiles exceeds a total of 9, the number will be adjusted by dropping the first digit, which means only the ones digit will be counted.
Ranking: Pair &gt; Top-Kong &gt; 9 &gt; 8 &gt; 7 &gt; 6 &gt; 5 &gt; 4 &gt; 3 &gt; 2 &gt; 1 &gt; 0.
Pair: 2 identical tiles. The White Dragon Pair has the highest rank.
Top-Kong: 2 Dots + 8 Dots.
Comparing Rules: The points of hands are compared first. If two hands have the same Pair or score, the higher-value tile of each hand will be compared. (e.g.: 9+2=1 &gt; 8+3=1)
If both hands have the exact same suits, Banker wins.
Ranking Details:
Pair:
Pairs have the highest ranks in this game. Between two Pair hands, the value of the tiles will be compared. The White Dragon Pair has the highest rank.
 
Dots:
Except for Pairs and Top-Kongs, all other hands are Dots. The ones digit of a Dots hand determins its rank. Subsequently, the value of single tiles will be compared.
 
Top-Kong:
Top-Kong is made up with a 2 Dots tile and a 8 Dots tile. It ranks under all Pairs, but is higher than all Dots.
 
Coingame reserves the final interpretation of the game. Any queries please contact:
Email: support@coingame.com 
QQ: 468631374
Kakao: Coingame Korea
（<u click="clickme1" >https://open.kakao.com/o/shleVM3</u>）
Telegram: <u click="clickme2" >https://t.me/Coingame_official</u>
`,
};
