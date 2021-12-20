export function beforeStart(options, extensions) {
    options.loadBootResource = function (type, name, defaultUri, integrity) {
        console.log(`Loading: '${type}', '${name}', '${defaultUri}', '${integrity}'`);
        switch (type) {
            case 'dotnetjs':
            case 'dotnetwasm':
            case 'timezonedata':
                return `https://cdn.example.com/blazorwebassembly/5.0.0/${name}`;
        }
    };
}
