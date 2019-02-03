// bootshine.js locale configuration
// locale : Persian
// author : Touhid Arastu

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../bootshine'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../bootshine'));
    } else {
        factory(global.bootshine);
    }
}(this, function (bootshine) {
    bootshine.addLocale('fa', {
        OK      : 'قبول',
        CANCEL  : 'لغو',
        CONFIRM : 'تایید'
    });
}));