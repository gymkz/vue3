/**
 * Create By Meng
 * Desc: 
 */

declare let TradingView: any;

export function klineView() {
  new TradingView.widget({
    // "width": 980,
    // "height": 610,
    "symbol": "AAPL",//商品代码
    "interval": "D",//默认周期
    "timezone": "Etc/UTC",//时区
    "theme": "light",//主题 dark
    "style": "1", // k线样式
    "locale": "zh_CN", // 语言
    // "range":"ALL", // 
    "toolbar_bg": "#f1f3f6", // 
    "save_image": true, // 保存快照按钮
    "enable_publishing": false,//启动发布
    "withdateranges": true,//显示底部栏
    "hide_side_toolbar": false,//显示绘图工具
    "hide_top_toolbar": false, // 隐藏顶部工具栏
    "hide_legend": true, // 隐藏商品代码描述
    "allow_symbol_change": true,//可以切换其他商品
    "studies": [
      // "BB@tv-basicstudies",
      // "MACD@tv-basicstudies",
      "MASimple@tv-basicstudies"
    ],
    "watchlist": [], // 自选列表
    "container_id": "trading_58b5d"
  });
}

export function mediumWidget() {
  new TradingView.MediumWidget({
    "symbols": [
      [
        "Apple",
        "AAPL"
      ],
      [
        "Google",
        "GOOGL"
      ],
      [
        "Microsoft",
        "MSFT"
      ]
    ],
    "chartOnly": false, // 仅图表
    "width": 1000,
    "height": 400,
    "locale": "zh_CN",
    "colorTheme": "light",
    "gridLineColor": "#F0F3FA",
    "trendLineColor": "#2196F3",
    "fontColor": "#787B86",
    "underLineColor": "#E3F2FD",
    "isTransparent": false, // 透明背景
    "autosize": false, // 自动大小-根据父布局自适应
    "container_id": "tradingview_431ac"
  });
}