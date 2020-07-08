const app = angular.module('myApp', [])

app.controller('searchCtrl', function($scope) {
    $scope.students = students
    $scope.pagesizes = [5, 10, 15, 20]
    $scope.pagesize = $scope.pagesizes[0]
    $scope.currentpage = 0
    $scope.pagenumber = Math.ceil($scope.students.length / $scope.pagesize)

    $scope.paging = function(type) {
        if(type == 0 && $scope.currentpage > 0) --$scope.currentpage
        else if(type == 1 && $scope.currentpage < $scope.pagenumber-1) ++$scope.currentpage 
    }

    $scope.$watchCollection('results', function() {
        if($scope.results == undefined) return
        $scope.currentpage = 0
        $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize)
    })

    $scope.changeAction = function() {
        $scope.currentpage = 0
        $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize)
    }

    $scope.ordering = function(ordvar, by) {
        ordvar = !ordvar
        $scope.ordstatus = ordvar
        $scope.ord = by
        return ordvar
    }
})

const students = [
    {name : 'Anang', class: '1A', score: 70},
    {name : 'Ico', class: '1A', score: 50},
    {name : 'Acong', class: '1A', score: 30},
    {name : 'Moko', class: '1A', score: 60},
    {name : 'Doni', class: '2A', score: 70},
    {name : 'Tatang', class: '4A', score: 90},
    {name : 'Nanang', class: '3A', score: 70},
    {name : 'Bobi', class: '2A', score: 80},
    {name : 'Hifzi', class: '4A', score: 30},
    {name : 'Dzawin', class: '3A', score: 50},
    {name : 'Udin', class: '1A', score: 70},
    {name : 'Maman', class: '2A', score: 60},
    {name : 'Indra', class: '3A', score: 80},
    {name : 'Haidi', class: '2A', score: 90},
    {name : 'Anang', class: '1A', score: 70},
    {name : 'Ico', class: '1A', score: 50},
    {name : 'Acong', class: '1A', score: 30},
    {name : 'Moko', class: '1A', score: 60},
    {name : 'Doni', class: '2A', score: 70},
    {name : 'Tatang', class: '4A', score: 90},
    {name : 'Nanang', class: '3A', score: 70},
    {name : 'Bobi', class: '2A', score: 80},
    {name : 'Hifzi', class: '4A', score: 30},
    {name : 'Dzawin', class: '3A', score: 50},
    {name : 'Udin', class: '1A', score: 70},
    {name : 'Maman', class: '2A', score: 60},
    {name : 'Indra', class: '3A', score: 80},
    {name : 'Haidi', class: '2A', score: 90},
]