# Gatling Debug Application

A tool to help scenario debugging, in a **visual** and **easy** way.

This is [Gatling Debug](https://github.com/notdryft/gatling-debug)'s Front end.

## Install modules

Just do the following:
```bash
$ npm install -g grunt bower
[... gatling-debug-application ]$ bower install
[... gatling-debug-application ]$ npm install
```

## Build

Default build chain:
```bash
[... gatling-debug-application ]$ grunt
```

Available tasks are:
* `clean[:src]`
* `jshint[:all]`
* `concat[:all]`
* `uglify[:all]`
* `less[:development, :production]`

## Testing

You can start [Karma](http://karma-runner.github.io/)'s file watch this way:

```bash
$ npm install -g karma jasmine-node
[... gatling-debug-application ]$ karma start
```

## Launching

You can start a server by the following grunt task:
```bash
$ [... gatling-debug-application ]$ grunt server
```

This will execute all the build tasks, then start a server on port `3000`.
