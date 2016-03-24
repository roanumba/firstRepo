var app = angular.module("strapTree", [
    'ep-components',
    'ui.bootstrap'
]) ;

app.   controller("mainCtrl", function ($scope,$timeout) {


    $scope. createOption = function(){return{
                                                    //extensionUrl:''
        treeDefs:{name:"fileName",children:"children",
            leafTemplate: '<div><i class=\'fa fa-send-o\'/><i class=\'fa fa-history\'/><i ng-click="item.entity.isIntegratedToTestSuite = !item.entity.isIntegratedToTestSuite" ng-model="item.entity.isIntegratedToTestSuite" ' +
                        'ng-class="{\'fa fa-check-square-o\':item.entity.isIntegratedToTestSuite, \'fa fa-square-o\':(!item.entity.isIntegratedToTestSuite)}"/></div>'
        },
        data:[],

    width:'50%',
    height:200,
        //openOnLoad:true
/*
    icons:{
        openedClass:'fa fa-folder-open fa-2x',
        closedClass:'fa fa-folder fa-2x',
        leafClass:'fa fa-file-o fa-2x'
    }
*/
    }};
    $scope. getData= function(){  return     {
            "fileName": "Root",
            "isIntegratedToTestSuite": false,
            "children": [
                {
                    "fileName": "1hr Sideletter",
                    "isIntegratedToTestSuite": false,
                    "children": [{
                        "id": 3,
                        "fileUniqueId": 3,
                        "fileName": "test",
                        "parent": null,
                        "isFile": true,
                        "status": "ACTIVE",
                        "version": 1,
                        "versionComment": "",
                        "children": null,
                        "contentType": "",
                        "fileBinary": null,
                        "isDisabled": false,
                        "isTestSuccessful": false,
                        "isIntegratedToTestSuite": false,
                        "createdOn": null,
                        "createdUser": null,
                        "updatedOn": null,
                        "updatedUser": "null"
                    },
                        {
                            "id": 6,
                            "fileUniqueId": 6,
                            "fileName": "Another Child 6",
                            "parent": null,
                            "isFile": true,
                            "status": "ACTIVE",
                            "version": 1,
                            "versionComment": "",
                            "children": [
                                {
                                    "fileName": "Another Child 8",
                                    "isIntegratedToTestSuite": false
                                }   ,
                                {
                                    "fileName": "Another Child 9",
                                    "isIntegratedToTestSuite": false
                                }
                            ],
                            "contentType": "",
                            "fileBinary": null,
                            "isDisabled": false,
                            "isTestSuccessful": false,
                            "isIntegratedToTestSuite": false,
                            "createdOn": null,
                            "createdUser": null,
                            "updatedOn": null,
                            "updatedUser": "null"
                        }
                    ]
                },
                {
                    "fileName": "ASA Television",
                    "isIntegratedToTestSuite": false
                } ,

                {
                    "fileName": "Another Child 18",
                    "isIntegratedToTestSuite": false
                }   ,
                {
                    "fileName": "Another Child 19",
                    "isIntegratedToTestSuite": false
                }
            ]
        }};



    });

app.controller('tree1Ctrl',function($scope,$timeout){

    $scope.treeOpts1=$scope.createOption();
    $scope.treeOpts1.branchContext= {
        scope: $scope,
        placement: 'right',
        title: 'Branch Context',
        content:
        '<div ng-click="startRename()" style="cursor: pointer;">Rename</div>'
    };
    $scope.treeOpts1.leafContext = {
        scope: $scope,
        placement: 'right',
        title: 'Leaf Context',
        content: '<button ng-click="startRename()" style="cursor: pointer;">Rename</button>'
    };

    $scope.startRename = function () {
        $scope.treeOpts1.startNodeRename(function(){
            alert($scope.treeOpts1.selectedItem.fileName)
        });
    };

    $scope.treeOpts1.data=[$scope.getData()];


    $timeout(function(){
    $scope.treeOpts1.expandAll();
    $timeout(function(){
        $scope.treeOpts1.disable('tree1_treeItem4');
        $timeout(function(){
            $scope.treeOpts1.enable('tree1_treeItem4');
            $scope.treeOpts1.addItem('tree1_treeItem4',
                [{
                    "fileName": "Added Node",
                    "isIntegratedToTestSuite": false,
                    "children": []
                }]
            );
            $scope.treeOpts1.removeItem('tree1_treeItem4');

        },1000);

    },1000);
    },1000);


});

app.controller('tree2Ctrl',function($scope,$timeout){
    $scope.treeOpts2=$scope.createOption();
    $scope.treeOpts2.branchContext= {
        scope: $scope,
        placement: 'right',
        title: 'Branch Context',
        content:
        '<div ng-click="treeOpts2.startNodeRename()" style="cursor: pointer;">Rename</div>'
    };    $scope.treeOpts2.leafContext = {
        scope: $scope,
        placement: 'right',
        title: 'Leaf Context',
        content: '<div ng-click="treeOpts2.startNodeRename()" style="cursor: pointer;">Rename</div>'
    };
    $scope.treeOpts2.data=[$scope.getData()];

});