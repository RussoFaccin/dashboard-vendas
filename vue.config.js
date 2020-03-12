module.exports = {
    publicPath: './',
    lintOnSave: false,
    pwa: {
        themeColor: '#eb1e23',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            name: 'Dashboard Faturamento',
            short_name: 'Dashboard',
            start_url: '.',
            display: 'standalone',
            orientation: 'portrait'
        }
    }
}  