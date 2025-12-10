[Script]
###酷安去广告
# > 酷安_开屏广告@ddgksf2013
coolapk-init =type=http-response, pattern=^https?:\/\/api\.coolapk\.com\/v6\/main\/init, script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true
# > 酷安_推广广告@ddgksf2013
coolapk-datalist =type=http-response, pattern=^https?:\/\/api\.coolapk\.com\/v6\/dataList, script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true
# > 酷安_首页广告@ddgksf2013
coolapk-index =type=http-response, pattern=^https?:\/\/api\.coolapk\.com\/v6\/main\/indexV8, script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true
# > 酷安_评论广告@ddgksf2013
coolapk-reply =type=http-response, pattern=^https?:\/\/api\.coolapk\.com\/v6\/feed\/replyList, script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true
# > 酷安_商品推广@ddgksf2013
coolapk-feed-detail =type=http-response, pattern=^https?:\/\/api\.coolapk\.com\/v6\/feed\/detail, script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true
# > 酷安_屏蔽热词@ddgksf2013 (reject-200 处理)
coolapk-hotsearch =type=http-response, pattern=^https?:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch, script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/general/reject.js, requires-body=true
# > 酷安_酷品页推广@ddgksf2013
coolapk-page-datalist =type=http-response, pattern=https:\/\/api\.coolapk\.com\/v6\/page\/dataList\?.*title=%E9%85, script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true



  
[MITM]



hostname = %APPEND% api.coolapk.com
