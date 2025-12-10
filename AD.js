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

###》什么值得买
 # > 搜索框填词@ddgksf2013
smzdm-search-keyword =type=http-response, pattern=^https?:\/\/s-api\.smzdm\.com\/sou\/search_default_keyword, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 好价详情页去广告@blackmatrix7
smzdm-detail-ad =type=http-response, pattern=^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/other_modul, script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/general/reject.js, requires-body=true

# > 好价详情页红包小助手@blackmatrix7
smzdm-redpacket =type=http-response, pattern=^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/user_related_modul, script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/general/reject.js, requires-body=true

# > Wiki@blackmatrix7
smzdm-wiki =type=http-response, pattern=^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/wiki_related_modul, script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/general/reject.js, requires-body=true

# > 开屏去广告@blackmatrix7@ddgksf2013
smzdm-loading1 =type=http-response, pattern=^https?:\/\/app-api\.smzdm\.com\/util\/loading, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true
smzdm-loading2 =type=http-response, pattern=^https?:\/\/.*zdmimg\.com\/cpm\/api\/v\d\/advert_distribution\/get_all_advertise, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 首页去广告@blackmatrix7@ddgksf2013
smzdm-home =type=http-response, pattern=^https?:\/\/homepage-api\.smzdm\.com\/v3\/home, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 好价去广告@blackmatrix7
smzdm-haojia =type=http-response, pattern=^https?:\/\/haojia-api\.smzdm\.com\/home\/list, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 好价详情页去广告@blackmatrix7
smzdm-detail-article =type=http-response, pattern=^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 百科去广告@blackmatrix7
smzdm-baike =type=http-response, pattern=^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 搜索结果去广告@blackmatrix7
smzdm-search-list =type=http-response, pattern=^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 搜索标签去广告@blackmatrix7
smzdm-search-tags =type=http-response, pattern=^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true

# > 值会员权益中心banner广告@blackmatrix7
smzdm-vip-banner =type=http-response, pattern=^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/smzdm_json.js, requires-body=true


                                               
[MITM]



hostname = %APPEND% api.coolapk.com, tiebac.baidu.com, spclient.wg.spotify.com, *spclient.spotify.com, app-api.smzdm.com, *.zdmimg.com, homepage-api.smzdm.com, haojia-api.smzdm.com, haojia.m.smzdm.com, baike-api.smzdm.com, s-api.smzdm.com, zhiyou.m.smzdm.com






