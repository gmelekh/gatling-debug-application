var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.Template.Exec = '<td>{{ exec.name }}<span>{{ exec.type }}</span></td>' +
    '<td>{{ exec.responseTime }} ms</td>' +
    '<td>{{ exec.startDeltaTime }} ms<span>{{ exec.startTimestamp }}</span></td>' +
    '<td>{{ exec.endDeltaTime }} ms<span>{{ exec.endTimestamp }}</span></td>' +
    '<td>' +
    '<div class="timelined exec" style="margin-left: {{ exec.margin }}px; width: {{ exec.width }}px;"></div><span class="responseTime">{{ exec.responseTime }} ms</span>' +
    '</td>';
}(jQuery));
