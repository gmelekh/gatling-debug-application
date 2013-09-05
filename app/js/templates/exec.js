var gatling = gatling || {};

(function ($) {

  'use strict';

  gatling.Template.Exec = '<div class="timeline-col-4">{{ exec.name }}<span>{{ exec.type }}</span></div>' +
    '<div class="timeline-col-2">{{ exec.responseTime }} ms</div>' +
    '<div class="timeline-col-3">{{ exec.startDeltaTime }} ms<span>{{ exec.startTimestamp }}</span></div>' +
    '<div class="timeline-col-3">{{ exec.endDeltaTime }} ms<span>{{ exec.endTimestamp }}</span></div>' +
    '<div class="timeline-col-12">' +
    '<div class="exec"><div style="margin-left: {{ exec.margin }}px; width: {{ exec.width }}px;"></div><span>{{ exec.responseTime }} ms</span></div>' +
    '</div>';
}(jQuery));
