"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookStoreService = /** @class */ (function () {
    function BookStoreService() {
        this.data = [
            { id: 1, title: 'harry potter 1' },
            { id: 2, title: 'harry potter 2' },
            { id: 3, title: 'harry potter 3' },
            { id: 4, title: 'harry potter 4' },
            { id: 5, title: 'harry potter 5' },
            { id: 6, title: 'harry potter 5' },
            { id: 7, title: 'harry potter 6' },
        ];
    }
    BookStoreService.prototype.list = function () {
        return this.data;
    };
    BookStoreService.prototype.get = function (id) {
        return this.data.filter(function (d) { return d.id == id; });
    };
    return BookStoreService;
}());
exports.BookStoreService = BookStoreService;
