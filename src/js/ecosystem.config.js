module.exports = {
    apps: [{
        name: "myapp",
        script: "./app.js",
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development",
            "url": "http://142.93.220.213"
        },
        env_production: {
            "PORT": 3000,
            "NODE_ENV": "production",
            "url": "http://142.93.220.213"
        }
    }]
}