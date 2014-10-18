var myApp = angular.module('sample', []);

myApp.directive('match', function() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, modelCtrl) {
      return modelCtrl.$parsers.push(function(viewValue) {

        var val;
        if (attrs.match == null) {
          return viewValue;
        }
        val = scope.$eval(attrs.match);
        if (val !== viewValue) {
          modelCtrl.$setValidity("match", false);
        } else {
          modelCtrl.$setValidity("match", true);
        }
        return viewValue; 
      });
    }
  };
});
