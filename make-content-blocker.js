
let output = "";

function add(str) {
    output += str;
    print(str);
}

add(`[
    {
        "action": {
            "type": "distraction-control",
            "shadow-roots": [ [ "img#hplogo" ] ]
        },
        "trigger": {
            "url-filter": ".*google.com.*"
        }
    },

    {
        "action": {
            "type": "distraction-control",
            "shadow-roots": [ [ "SHREDDIT-AD-POST" ] ]
        },
        "trigger": {
            "url-filter": ".*reddit.com.*"
        }
    },

    {
        "action": {
            "type": "distraction-control",
            "shadow-roots": [ [ "#credential_picker_container" ] ]
        },
        "trigger": {
            "url-filter": ".*reddit.com.*"
        }
    },

    {
        "action": {
            "type": "distraction-control",
            "shadow-roots": [ [ "DIV.ut_container" ] ]
        },
        "trigger": {
            "url-filter": ".*cbsnews.com"
        }
    },

    {
        "action": {
            "type": "distraction-control",
            "shadow-roots": [ [ "DIV.top-ad-container.lazyloaded" ] ]
        },
        "trigger": {
            "url-filter": ".*cbsnews.com"
        }
    },

    {
        "action": {
            "type": "distraction-control",
            "shadow-roots": [ [ "#d_IL_INSEARCH" ] ]
        },
        "trigger": {
            "url-filter": ".*cbsnews.com"
        }
    }`)


function computePrefixes(i) {
    let results = []
    let prefixes = ["SECTION > DIV >", "BODY > DIV > DIV > DIV > DIV >"];
    for (prefix of prefixes)
        results.push(`"${prefix} DIV:has(IFRAME[id='google_ads_iframe_/8264/aw-cbsnews/home_${i}'])"`);

    return results.join(",");
}

for (var i = 0; i < 100; ++i) {
    add(`,
    {
        "action": {
            "type": "distraction-control",
            "shadow-roots": [ [ ${computePrefixes(i)} ] ]
        },
        "trigger": {
            "url-filter": ".*cbsnews.com"
        }
    }
`);
}

add(']');

JSON.parse(output);