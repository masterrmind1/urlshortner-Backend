module.exports = {
    apps: [{
        script: 'src/js/app.js',
        watch: '.'
    }, {
        name: 'PM2-node',
        script: 'npm',
        args: 'start',
        watch: ['src']
    }],

    deploy: {
        production: {
            user: 'SSH_USERNAME',
            host: 'SSH_HOSTMACHINE',
            ref: 'origin/master',
            repo: 'GIT_REPOSITORY',
            path: 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env prod',
            'pre-setup': ''
        }
    }
};