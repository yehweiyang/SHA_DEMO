myApp.service('archivesService', function() {

    this.sorter = {
        columnName: null,
        descending: false
    };

    this.sortByColumnName = function(columnName) {
        this.sorter.descending = columnName === this.sorter.columnName ? !this.sorter.descending : false;
        this.sorter.columnName = columnName;
    };

    this.pager = {
        itemsPerPage: 20,
        pagerMaxSize: 7,
        firstItemDataNum: 0,
        currentPage: 1
    };

    this.changePager = function() {
        this.pager.firstItemDataNum = (this.pager.currentPage - 1) * this.pager.itemsPerPage;
    };



});