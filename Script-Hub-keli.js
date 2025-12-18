#!name=Loon模块转换
#!desc=将可莉插件中心转换给小火箭使用
  
[General]
force-http-engine-hosts = %APPEND% script.hub, *.script.hub

[Body Rewrite]
^https:\/\/(hub|pluginhub)\.kelee\.one\/list\.json "loon:\/\/import\?plugin=https:\/\/kelee\.one\/Tool\/Loon\/Lpx\/(.+)\.lpx" "shadowrocket:\/\/install?module=http:\/\/script.hub\/file\/_start_\/hub\/_end_\/$1.sgmodule?type=loon-plugin&target=shadowrocket-module&del=true&jqEnabled=true"

[MITM]
hostname = %APPEND% script.hub, *.script.hub, hub.kelee.one, pluginhub.kelee.one




