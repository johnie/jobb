var jobb;

$(function() {
  var el, hours;
  if (document.querySelector) {
    el = document.querySelector('h2 span');
    hours = (new Date).getHours();
    if (hours >= 12) {
      el.innerHTML = (hours > 17 ? "God Kväll! " : "God Eftermiddag! ");
    }
  }
  return $(".spam-email").each(function(i) {
    var protectedEmail;
    protectedEmail = $(this).html();
    protectedEmail = protectedEmail.replace(" [at] ", "@");
    protectedEmail = protectedEmail.replace(" [dot] ", ".");
    $(this).html(protectedEmail).replaceWith("<a href=\"mailto:" + $(this).text() + "\">" + $(this).text() + "</a>");
  });
});

jobb = angular.module("jobb", []);

jobb.controller("JobbController", function($scope) {
  var nightMode;
  nightMode = false;
  if (localStorage["isNightMode"] === "" || (localStorage["isNightMode"] == null)) {
    $scope.isNightMode = nightMode;
  } else {
    $scope.isNightMode = JSON.parse(localStorage["isNightMode"]);
  }
  return $scope.$watch("isNightMode", (function() {
    localStorage["isNightMode"] = JSON.stringify($scope.isNightMode);
  }), true);
});
