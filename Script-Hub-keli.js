[General]
force-http-engine-hosts = %APPEND% script.hub, *.script.hub

[Body Rewrite]
^https:\/\/(hub|pluginhub)\.kelee\.one\/list\.json "loon:\/\/import\?plugin=https:\/\/kelee\.one\/Tool\/Loon\/Lpx\/(.+?)\.lpx" "shadowrocket:\/\/install?module=http:\/\/script.hub\/file\/_start_\/hub\/_end_\/$1.sgmodule?type=loon-plugin&target=shadowrocket-module"

[MITM]
hostname = %APPEND% script.hub, *.script.hub, hub.kelee.one, pluginhub.kelee.one


