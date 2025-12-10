#!name=自用模块
#!desc=2025-12-10

 [Header Rewrite]
# if-none-match返回304状态码
http-request ^https:\/\/(spclient\.wg\.spotify\.com|.*-spclient\.spotify\.com(:443)?)\/user-customization-service\/v1\/customize$ header-del if-none-match
 
[Script]
###》酷安去广告
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

###》Spotify
 spotify-json = type=http-request,pattern=^https:\/\/(spclient\.wg\.spotify\.com|.*-spclient\.spotify\.com(:443)?)\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/,requires-body=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js
spotify-proto = type=http-response,pattern=^https:\/\/(spclient\.wg\.spotify\.com|.*-spclient\.spotify\.com(:443)?)\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$,requires-body=1,binary-body-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js,script-update-interval=0
spotify歌词翻译 = type=http-response,pattern=^https:\/\/spclient\.wg\.spotify\.com\/color-lyrics\/v2\/track\/,requires-body=1,binary-body-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-lyric.js,enable={{{歌词翻译}}},argument=appid={{{翻译账户}}}&securityKey={{{翻译密钥}}}

 ###》百度贴吧
  # 贴吧 JSON 广告去除规则
tieba-json =type=http-response, pattern=^http(s:\/\/tiebac|:\/\/c\.tieba)\.baidu\.com\/(c\/(s\/sync|f\/(ad\/getSplashAd|frs\/(page|threadlist|generalTabList)|pb\/(pic)?page|excellent\/personalized))$|tiebaads\/commonbatch\?), script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/tieba-json.js, requires-body=true

# 贴吧 ProtoBuf 广告去除规则
tieba-proto =type=http-response, pattern=^http(s:\/\/tiebac|:\/\/c\.tieba)\.baidu\.com\/c\/(b\/ad\/adBid|f\/(frs\/(page|threadlist|generalTabList)|ad\/getFeedAd|pb\/page|excellent\/personalized))\?cmd, script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/tieba-proto.js, requires-body=true, binary-body-mode=true

[MITM]



hostname = %APPEND% api.coolapk.com, tiebac.baidu.com, spclient.wg.spotify.com, *spclient.spotify.com





