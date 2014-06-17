$ ->
  if (document.querySelector)
    el = document.querySelector('h2 span')
    hours = (new Date).getHours()

    el.innerHTML = (if hours > 17 then "God Kväll! " else "God Eftermiddag! ")  if hours >= 12

  $(".spam-email").each (i) ->
    protectedEmail = $(this).html()
    protectedEmail = protectedEmail.replace(" [at] ", "@")
    protectedEmail = protectedEmail.replace(" [dot] ", ".")
    $(this).html(protectedEmail).replaceWith "<a href=\"mailto:" + $(this).text() + "\">" + $(this).text() + "</a>"
    return

# Angular
jobb = angular.module("jobb", [])

jobb.controller "JobbController", ( $scope ) ->
  nightMode = false

  if localStorage["isNightMode"] is "" or not localStorage["isNightMode"]?
    $scope.isNightMode = nightMode
  else
    $scope.isNightMode = JSON.parse(localStorage["isNightMode"])

  $scope.$watch "isNightMode", (->
    localStorage["isNightMode"] = JSON.stringify($scope.isNightMode)
    return
  ), true
