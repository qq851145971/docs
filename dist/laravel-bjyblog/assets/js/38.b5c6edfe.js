(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{359:function(a,t,e){"use strict";e.r(t);var r=e(46),s=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"env-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env-文件","aria-hidden":"true"}},[a._v("#")]),a._v(" .env 文件:")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("配置项")]),a._v(" "),e("th",[a._v("值")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("APP_NAME")]),a._v(" "),e("td",[a._v("自己的博客名字")])]),a._v(" "),e("tr",[e("td",[a._v("APP_ENV")]),a._v(" "),e("td",[a._v("production")])]),a._v(" "),e("tr",[e("td",[a._v("APP_DEBUG")]),a._v(" "),e("td",[a._v("false")])]),a._v(" "),e("tr",[e("td",[a._v("DEBUGBAR_ENABLED")]),a._v(" "),e("td",[a._v("false")])])])]),a._v(" "),e("p",[a._v("如果安装了 "),e("code",[a._v("redis")]),a._v(" ;"),e("br"),a._v(" "),e("code",[a._v("CACHE_DRIVER")]),a._v(" 改为 "),e("code",[a._v("redis")]),a._v(" ;"),e("br"),a._v("\n如果已经根据 "),e("a",{attrs:{href:"https://laravel-china.org/docs/laravel/5.5/queues/1324",target:"_blank",rel:"noopener noreferrer"}},[a._v("laravel文档"),e("OutboundLink")],1),a._v(" 配置好了队列；"),e("br"),a._v(" "),e("code",[a._v("QUEUE_DRIVER")]),a._v(" 改为 "),e("code",[a._v("redis")]),a._v(" ;")]),a._v(" "),e("h3",{attrs:{id:"composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composer","aria-hidden":"true"}},[a._v("#")]),a._v(" composer")]),a._v(" "),e("p",[a._v("composer install --no-dev --optimize-autoloader")]),a._v(" "),e("h3",{attrs:{id:"配置定时任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置定时任务","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置定时任务")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" -e\n")])])]),e("p",[a._v("添加如下命令；")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("* * * * * "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" /baijunyao.com/artisan "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" php artisan schedule:run "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /dev/null 2"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("1\n")])])]),e("p",[a._v("记得将"),e("code",[a._v("/baijunyao.com")]),a._v("替换为自己的项目目录;")])])},[],!1,null,null,null);t.default=s.exports}}]);