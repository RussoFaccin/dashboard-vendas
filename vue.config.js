module.exports = {
    publicPath: './',
    lintOnSave: false,
    productionSourceMap: false,
    pwa: {
        themeColor: '#eb1e23',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
            name: 'Dashboard Faturamento',
            short_name: 'Dashboard',
            start_url: './#/faturamento',
            display: 'standalone',
            orientation: 'portrait'
        }
    }
}  