module.exports = {

    staging: {
        host: 'staging55.bmw.intesys.it',
        username: 'web',
        password: 'huberSpara',
        path: '/home/httpd/serie5.bmw'
    },

    production: {
        host: 'prod55.bmw.intesys.it',
        username: 'web',
        password: 'huberSpara',
        path: '/home/httpd/serie5.bmw'
    },

    externalHost: 'belaja.intesys.it',

    //remote host of developer box for mobile debug with weinre
    devbox: {
        ports: {
            weinre: 8080,
            connect: 8000 //optional port for standalone static server
        }
    }
};