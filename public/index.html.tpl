<!DOCTYPE html>
<html ng-app="GatlingDebug">
<head>
  <meta charset="utf-8">
  <title>Gatling Debug Timeline</title>

  <!-- Dependencies -->

  <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap-theme.min.css">

  <!-- Application -->

  <link rel="stylesheet" href="/dist/css/gatling-debug.min.css">
</head>
<body draggable>

<div class="container">

  <div ng-controller="positionController" class="text-right">
    <h4>Position:</h4>

    <div>
      <button type="button" class="btn btn-xs btn-default" ng-click="increase()">Shift right</button>
      <button type="button" class="btn btn-xs btn-default" ng-click="decrease()">Shift left</button>
      <button type="button" class="btn btn-xs btn-primary" ng-click="reset()">Reset</button>
    </div>
  </div>

  <div ng-controller="ratioController" class="text-right">
    <h4>Ratio:</h4>

    <div>
      <button type="button" class="btn btn-xs btn-default" ng-click="increase()">Increase</button>
      <button type="button" class="btn btn-xs btn-default" ng-click="decrease()">Decrease</button>
      <button type="button" class="btn btn-xs btn-primary" ng-click="reset()">Reset</button>
    </div>
  </div>

  <div class="timeline" ng-controller="timelineController">
    <div class="timeline-head">
      <div class="timeline-row">
        <div class="timeline-header timeline-col-4">Name<span>Type</span></div>
        <div class="timeline-header timeline-col-2">Duration</div>
        <div class="timeline-header timeline-col-2 sortColumnAsc">Start<span>Start date</span></div>
        <div class="timeline-header timeline-col-2">End<span>End date</span></div>
        <div class="timeline-header timeline-col-14">Timeline<span>In milliseconds</span></div>
      </div>
    </div>
    <div class="timeline-ruler-head">
      <div class="timeline-row">
        <div class="timeline-cell timeline-col-4"></div>
        <div class="timeline-cell timeline-col-2"></div>
        <div class="timeline-cell timeline-col-2"></div>
        <div class="timeline-cell timeline-col-2"></div>
        <div class="timeline-cell timeline-col-14"></div>
      </div>
    </div>
    <div class="timeline-body">
      <div class="timeline-row" ng-repeat="exec in execs">
        <div class="timeline-cell timeline-col-4">{{ exec.name }}<span>{{ exec.type }}</span></div>
        <div class="timeline-cell timeline-col-2">{{ exec.responseTime() | gatlingTimestamp }}</div>
        <div class="timeline-cell timeline-col-2">
          {{ exec.startDeltaTime() | gatlingTimestamp }}<!--
          --><span>{{ exec.requestStartDate | gatlingDate }}</span>
        </div>
        <div class="timeline-cell timeline-col-2">
          {{ exec.endDeltaTime() | gatlingTimestamp }}<!--
          --><span>{{ exec.responseEndDate | gatlingDate }}</span>
        </div>
        <div class="timeline-cell timeline-col-14 timeline-exec">
          <div ng-style="{'margin-left': exec.position() + 'px', 'width': exec.width() + 'px'}"></div><!--
          --><span class="overflowed" timestamp>{{ exec.responseTime() | gatlingTimestamp }}</span>
        </div>
      </div>
    </div>
    <div class="timeline-ruler" ng-controller="rulerController">
      <div class="timeline-col-14">
        <div class="timeline-graduation" ng-class="{'timeline-graduation-mark': graduation.isThousand()}"
             ng-style="{'left': graduation.position() + 'px'}" ng-repeat="graduation in graduations">{{
          graduation.value() }}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Dependencies -->

<script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>

<!-- Application -->

<script type="text/javascript" src="/dist/data/gatling-debug-data.js"></script>
<script type="text/javascript" src="/dist/js/gatling-debug.js"></script>

</body>
</html>
