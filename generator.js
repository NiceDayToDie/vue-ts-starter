module.exports = (api, opts) => {
    api.extendPackage({
        "scripts": {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint",
            "dist": "serve ./dist"
        },
        "dependencies": {
            "axios": "^0.21.2",
            "core-js": "^3.6.5",
            "js-cookie": "^2.2.1",
            "lodash": "^4.17.21",
            "view-design": "^4.3.2",
            "vue": "^2.6.11",
            "vue-class-component": "^7.2.3",
            "vue-property-decorator": "^8.4.2",
            "vue-router": "^3.2.0",
            "vuex": "^3.4.0",
            "vuex-class": "^0.3.2"
        },
        "devDependencies": {
            "@types/js-cookie": "^2.2.6",
            "@types/lodash": "^4.14.161",
            "@types/mockjs": "^1.0.2",
            "@vue/cli-plugin-babel": "~4.5.11",
            "@vue/cli-plugin-router": "~4.5.11",
            "@vue/cli-plugin-typescript": "~4.5.11",
            "@vue/cli-plugin-vuex": "~4.5.11",
            "@vue/cli-service": "~4.5.11",
            "iview-loader": "^1.3.0",
            "mockjs": "^1.1.0",
            "raw-loader": "^4.0.1",
            "sass": "^1.49.8",
            "sass-loader": "^10.2.1",
            "serve": "^11.3.2",
            "typescript": "~3.9.3",
            "vue-template-compiler": "^2.6.11"
        }
    });

    // 删除 vue-cli3 默认目录
    api.render(files => {
        Object.keys(files)
            .filter(path => path.startsWith("src/") || path.startsWith("public/"))
            .forEach(path => delete files[path])
    });

    api.render("./template");

    // 屏蔽 generator 之后的文件写入操作
    // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
    api.onCreateComplete(() => {
        process.env.VUE_CLI_SKIP_WRITE = true
    })
};
