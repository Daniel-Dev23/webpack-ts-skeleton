const DevServer = () => {

    return {
        port: 8081,
        liveReload: true,
        hot: false,
        open: true,
        watchFiles: ['src/**/*.js', 'build/**/*']
    }

}

module.exports = DevServer;