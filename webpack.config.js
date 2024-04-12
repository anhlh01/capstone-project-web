// webpack.config.js
module.exports = {
    resolve: {
        fallback: {
            "crypto": false // Don't include the crypto module in the bundle
        }
    }
};
