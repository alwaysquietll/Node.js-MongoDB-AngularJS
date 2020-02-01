var dns = require('dns');
console.log("Resolving www.baidu.com...");
dns.resolve4('www.baidu.com', function (err, address) {
    console.log('IPv4 address; ' + JSON.stringify(address, false, ' '));
    address.forEach(function (addr) {
        dns.reverse(addr, function (err, domains) {
            console.log('Reverse for ' + addr + ': ' + JSON.stringify(domains));
        });
    });
});