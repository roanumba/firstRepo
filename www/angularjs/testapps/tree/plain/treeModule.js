app.service('treeBuildService',function(){
    var service=this;
    var createLeave = function (item) {
           var html="";
           if (item.templateUrl){
              html='<div ng-include="\''+item.templateUrl+'\'"></div>'
           }
           else if (item.template){
              html= item.template;
           }
           else{
              html='<a href="#" >' +(item.label ? item.label : '') + '</a> ';
           }
           return '<li><i class="fa fa-file-o fa-lg"></i>&nbsp;' + html+  '</li>';

       };

    var createNode = function (item) {
           item.label=item.template || item.label;
           var id = bumpId();
           return '<input class="check-box-value" type="checkbox" id="' + id + '"' +
               (item.expanded ? ' checked="checked" ' : '') + ' />' +
               (item.label ? '<label for="' + id + '">' + item.label + '</label>' : '');
       };
       var itemId = 0;
       var bumpId = function () {
           return "tree-item-" + (itemId++);
       };
    service. createTreeChildren = function (treeItem, body) {
           body.html += "<ul>";
           if (treeItem instanceof Array) {
               treeItem.forEach(function (item) {
                   var children = item.children;
                   if (children && children.length > 0) {
                       body.html += "<li>";
                       body.html += createNode(item);
                       service.createTreeChildren(children, body);
                       body.html += '</li>';
                   }
                   else {

                       body.html += createLeave(item);
                   }

               });
           }
           body.html += "</ul>";

       };
});

app.directive('treeView', function ($templateCache, treeBuildService, $compile) {

    return {
//            templateUrl:'view-template.html',
        link: function (scope, element, attrs) {
            var treeOptions = scope.$eval(attrs.treeView);
            var body = {html: ''};

            treeBuildService.createTreeChildren(treeOptions, body);
            var treeView = angular.element('<div class="css-treeview" >' + body.html + '</div>');

            element.append(treeView);
            $compile(treeView)(scope)

        }
    }
});
