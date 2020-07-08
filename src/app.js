const app = angular.module('myApp', [])

app.controller('searchCtrl', function($scope) {
    $scope.ordering = function(ordvar, by) {
        ordvar = !ordvar
        $scope.ordstatus = ordvar
        $scope.ord = by
        return ordvar
    }

    $scope.students = [
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

})