app.directive('userInfo', function() {
  return {
    restrict: 'E',  //Means this directive will be used as new HTML
    scope: {  // We will pass this information through a directive called info
      info: '='  // The = tells the directive to look for an attribute named info in the <userInfo> element
    },
    templateUrl: 'js/directives/appInfo.html'  // Specifies the HTML to use in order to display  the data in scope.info
  };
});
