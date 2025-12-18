#!name=Loon模块转换
#!desc=将可莉插件中心转换给小火箭使用
[Body Rewrite]
http-response ^https://(hub|pluginhub)\.kelee\.one/list\.json "loon://import\?plugin=(https://kelee.one/Tool/Loon/Lpx/(.+).lpx)" "shadowrocket://install?module=http://script.hub/file/_start_/$1/_end_/$2.sgmodule?type=loon-plugin&target=shadowrocket-module&del=true&jqEnabled=true"

[MITM]
hostname = %APPEND% hub.kelee.one, pluginhub.kelee.one


