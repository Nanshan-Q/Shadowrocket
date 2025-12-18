#!name=Loon模块转换
#!desc=将可莉插件中心转换给小火箭使用

[General]
force-http-engine-hosts = %APPEND% script.hub, *.script.hub
[Body Rewrite]
http-response ^https://(hub|pluginhub)\.kelee\.one/list\.json "loon://import\?plugin=(https://kelee.one/Tool/Loon/Lpx/(.+).lpx)" "shadowrocket://install?module=http://script.hub/file/_start_/$1/_end_/$2.sgmodule%3Ftype%3Dloon-plugin%26target%3Dshadowrocket-module%26del%3Dtrue%26jqEnabled%3Dtrue"

[Script]
Script Hub: 前端 = type=http-request, pattern=^https?:\/\/script\.hub\/($|edit\/|reload), script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/script-hub.js, timeout=300

Script Hub: 重写转换 = type=http-request, pattern=^https?:\/\/script\.hub\/file\/_start_\/.+type=(?:qx-rewrite|surge-module|loon-plugin|all-module), script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/Rewrite-Parser.js, timeout=300

Script Hub: 规则集转换 = type=http-request, pattern=^https?:\/\/script\.hub\/file\/_start_\/.+type=rule-set, script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/rule-parser.js, timeout=300

Script Hub: 脚本转换 = type=http-request, pattern=^https?:\/\/script\.hub\/convert\/, script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/script-converter.js, timeout=300

[MITM]
hostname = %APPEND% hub.kelee.one, pluginhub.kelee.one, script.hub, *.script.hub






