module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/scss/_color.scss";
                    @import "@/scss/_typo.scss";
                `
            }
        }
    }
}
