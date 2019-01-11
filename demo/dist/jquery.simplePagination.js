var cid = '';
var lists = [];
var pageSize =2;//每页加载个数
var len = 0;//总个数
var pageNum = 1;//点击加载的页数
$(document).on('click', '#paging li a', function(){
  console.log($(this))
  if($(this).hasClass('prev')){
    console.log('orev')
  }
  pageNum = $(this).html();
  console.log(pageNum);
  pageFlip(pageNum,pageSize);
})
pageFlipSet(pageSize)
function pageFlipSet(pageSize){
  var json = {
    order:"ASC",
    pageNum:1,
    pageSize:pageSize
  }
  var result = '';
  $.ajax({
    url:callurl+'/web/newlist',
    type:'post',
    data:JSON.stringify(json),
    contentType: 'application/json',
    dataType: "json",
    success: function(data){
      len = data.data.total;
/*       var page0 = len / pageSize
      var page = parseInt(Number.isInteger(page0) ? page0 : page0 + 1) */
      console.log(len)
      $("#paging").pagination({
        items: len,//总个数
        itemsOnPage: pageSize,//每页加载个数
        cssStyle: 'light-theme'
      });
      var arrLen = data.data.list.length;
      if(arrLen > 0){
        var lists = data.data.list;
        console.log(lists)
        for(var i=0; i<arrLen; i++){
          result += ` 
            <li class="news-item clearfix" data-id=${lists[i].cid} data-newitemid=${lists[i].id}>
              <a class="news-item-img" data-newitemid=${lists[i].id} href="javascript:;">
                  <img src=${lists[i].pic} alt=${lists[i].title} title=${lists[i].title} onerror="this.src='./images/newsList-3.jpg'"/>
              </a>
              <div class="news-item-div">
                  <p class="title fs20">${lists[i].title}</p>
                  <p class="date mt10 fs20"></p>
              </div>
            </li>   
            `
        }
        $('.lists').append(result);// 插入数据到页面，放到最后面
      }
    }
  });
}

var pageNow = 1;
var methods = {
  init: function (options) {
    var o = $.extend({
      items: 1,
      itemsOnPage: 1,
      pages: 0,
      displayedPages: 5,
      edges: 2,
      currentPage: 1,
      hrefTextPrefix: '#page-',
      hrefTextSuffix: '',
      prevText: '<',
      nextText: '>',
      ellipseText: '&hellip;',
      cssStyle: 'light-theme',
      selectOnClick: true,
      onPageClick: function (pageNumber, event) {},
      onInit: function () {}
    }, options || {});
    var self = this;
    o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
    o.currentPage = o.currentPage - 1;
    o.halfDisplayed = o.displayedPages / 2;
    this.each(function () {
      self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
      methods._draw.call(self);
    });
    o.onInit();
    return this;
  },
  selectPage: function (page) {
    methods._selectPage.call(this, page - 1);
    return this;
  },
  prevPage: function () {
    var o = this.data('pagination');
    if (o.currentPage > 0) {
      methods._selectPage.call(this, o.currentPage - 1);
    }
    return this;
  },
  nextPage: function () {
    var o = this.data('pagination');
    if (o.currentPage < o.pages - 1) {
      methods._selectPage.call(this, o.currentPage + 1);
    }
    return this;
  },
  getPagesCount: function () {
    return this.data('pagination').pages;
  },
  getCurrentPage: function () {
    return this.data('pagination').currentPage + 1;
  },
  destroy: function () {
    this.empty();
    return this;
  },
  redraw: function () {
    methods._draw.call(this);
    return this;
  },
  disable: function () {
    var o = this.data('pagination');
    o.disabled = true;
    this.data('pagination', o);
    methods._draw.call(this);
    return this;
  },
  enable: function () {
    var o = this.data('pagination');
    o.disabled = false;
    this.data('pagination', o);
    methods._draw.call(this);
    return this;
  },
  _draw: function () {
    var o = this.data('pagination'),
      interval = methods._getInterval(o),
      i;
    methods.destroy.call(this);
    var $panel = this.prop("tagName") === "UL" ? this : $('<ul></ul>').appendTo(this);
    if (o.prevText) {
      methods._appendItem.call(this, o.currentPage - 1, {
        text: o.prevText,
        classes: 'prev'
      });
    }
    if (interval.start > 0 && o.edges > 0) {
      var end = Math.min(o.edges, interval.start);
      for (i = 0; i < end; i++) {
        methods._appendItem.call(this, i);
      }
      if (o.edges < interval.start && (interval.start - o.edges != 1)) {
        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
      } else if (interval.start - o.edges == 1) {
        methods._appendItem.call(this, o.edges);
      }
    }
    for (i = interval.start; i < interval.end; i++) {
      methods._appendItem.call(this, i);
    }
    if (interval.end < o.pages && o.edges > 0) {
      if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
        $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
      } else if (o.pages - o.edges - interval.end == 1) {
        methods._appendItem.call(this, interval.end++);
      }
      var begin = Math.max(o.pages - o.edges, interval.end);
      for (i = begin; i < o.pages; i++) {
        methods._appendItem.call(this, i);
      }
    }
    if (o.nextText) {
      methods._appendItem.call(this, o.currentPage + 1, {
        text: o.nextText,
        classes: 'next'
      });
    }
  },
  _getInterval: function (o) {
    return {
      start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
      end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
    };
  },
  _appendItem: function (pageIndex, opts) {
    var self = this,
      options, $link, o = self.data('pagination'),
      $linkWrapper = $('<li></li>'),
      $ul = self.find('ul');
    pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);
    options = $.extend({
      text: pageIndex + 1,
      classes: ''
    }, opts || {});
    if (pageIndex == o.currentPage || o.disabled) {
      if (o.disabled) {
        $linkWrapper.addClass('disabled');
      } else {
        $linkWrapper.addClass('active');
      }
      $link = $('<span class="current">' + (options.text) + '</span>');
    } else {
      // $link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
      $link = $('<a href="javascript:;" class="page-link">' + (options.text) + '</a>');
      $link.click(function (event) {
        console.log('第几页:',options.text)
        if($link.hasClass('prev')){//点击上一页
          pageNow--
        } else if($link.hasClass('next')){//点击下一页
          pageNow++
        } else {//点击其它
          pageNow = options.text
        }
        pageFlip(pageNow,pageSize);
        methods._selectPage.call(self, pageIndex, event);
      });
    }
    if (options.classes) {
      $link.addClass(options.classes);
    }
    $linkWrapper.append($link);
    if ($ul.length) {
      $ul.append($linkWrapper);
    } else {
      self.append($linkWrapper);
    }
  },
  _selectPage: function (pageIndex, event) {
    var o = this.data('pagination');
    o.currentPage = pageIndex;
    if (o.selectOnClick) {
      methods._draw.call(this);
    }
    return o.onPageClick(pageIndex + 1, event);
  }
};
$.fn.pagination = function (method) {
  if (methods[method] && method.charAt(0) != '_') {
    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
  } else if (typeof method === 'object' || !method) {
    return methods.init.apply(this, arguments);
  } else {
    $.error('Method ' + method + ' does not exist on jQuery.pagination');
  }
};


function pageFlip(pageNum,pageSize){
  var json = {
    order:"ASC",
    pageNum:pageNum,
    pageSize:pageSize
  }
  var result = '';

  $.ajax({
    url:callurl+'/web/newlist',
    type:'post',
    data:JSON.stringify(json),
    contentType: 'application/json',
    dataType: "json",
    success: function(data){
      console.log(data)
      var arrLen = data.data.list.length;
      if(arrLen > 0){
        result = '';
        var lists = data.data.list;
        console.log(lists)
        for(var i=0; i<arrLen; i++){
          result += ` 
            <li class="news-item clearfix" data-id=${lists[i].cid} data-newitemid=${lists[i].id}>
              <a class="news-item-img" data-newitemid=${lists[i].id} href="javascript:;">
                  <img src=${lists[i].pic} alt=${lists[i].title} title=${lists[i].title} onerror="this.src='./images/newsList-3.jpg'"/>
              </a>
              <div class="news-item-div">
                  <p class="title fs20">${lists[i].title}</p>
                  <p class="date mt10 fs20"></p>
              </div>
            </li>   
            `
        }
      }
      $('.lists').html('')
      $('.lists').html(result);// 插入数据到页面，放到最后面
    },
    error: function(xhr, type){
    }
  });
}