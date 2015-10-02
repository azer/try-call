var test = require("tape");
var call = require("./");

test('returning the value as second argument', function (t) {
  t.plan(2);

  call(foo, function (error, result) {
    t.error(error);
    t.equal(result, 123);
  });

  function foo () {
    return 123;
  }
});

test('returning uncaught errors', function (t) {
  t.plan(3);

  call(foo, function (error, result) {
    t.ok(error);
    t.equal(error.message, 'foo');
    t.notOk(result);
  });

  function foo () {
    throw new Error('foo');
  }
});
