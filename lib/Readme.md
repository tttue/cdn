# Array.js - Array p prototype functions

```
<script src="https://tttue.github.io/cdn/lib/array.js"></script>
```

- remove item : removeByValue
- sort by item's value : sortByProperty

# moment.js v2.29.1 - datetime functions

Ref : [moment.js](https://momentjs.com/)

```
<script src="https://tttue.github.io/cdn/lib/moment.js"></script>

<script>
  moment().format('MMMM Do YYYY, h:mm:ss a'); // May 22nd 2024, 10:52:58 am
</script>
```

# validator.js - validator functions

Ref : [validator.js](https://github.com/validatorjs/)

```
<script src="https://tttue.github.io/cdn/lib/validator.js"></script>

<script>
  validator.isEmail('abc@anc.dom')
</script>
```

# tools.js - my tool functions

```
<script src="https://tttue.github.io/cdn/lib/tool.js"></script>

<script>
  tool.checkStringNotBlank('abc@anc.dom')
</script>
```

# seedrandom.min.js - random number generator for JavaScript based on seed.

Ref : [seedrandom.js](https://www.npmjs.com/package/seedrandom)

```
<script src="https://tttue.github.io/cdn/lib/seedrandom.min.js"></script>

<script>
  var myrng = new Math.seedrandom('hello.'); // mark random with 'hello.'
  console.log(myrng());                // Always 0.9282578795792454
  console.log(myrng());                // Always 0.3752569768646784

  var myrng = new Math.seedrandom('hello.123');  // mark random with 'hello.123'
  console.log(myrng());                // Always 0.77734521038342
  console.log(myrng());                // Always 0.737932492600649
</script>
```

# notify.min.js - Show notification in page or near item

Ref : [notify.js](https://notifyjs.jpillora.com/)

```
<script src="https://tttue.github.io/cdn/lib/jquery/jquery-3.6.0.min.js"></script>
<script src="https://tttue.github.io/cdn/lib/notify.min.js"></script>

<script>
  $.notify("Hello World");
  $.notify("Access granted", "success");
  $.notify("Do not press this button", "info");
</script>
```

# include-html.js - random number generator for JavaScript based on seed.

Ref : [include-html.js](https://github.com/xmoonlight/includeHTML)

```
<script src="https://tttue.github.io/cdn/lib/include-html.js"></script>

<div data-src="menu.html"></div>
<div data-include="menu.html"></div>
<include src="menu.html"></include> <!-- old tag from v1.0 -->
<div data-src="js/1.js"></div>
<div data-src="log"></div>
<script>
  // Async
  includeHTML('header.html', document.getElementById('header'));
  includeHTML('menu.html', document.getElementById('mainMenu'));
  includeHTML('green.css');
  includeHTML('js/1.js');
  includeHTML('log.txt','log');

  // Sync
  includeHTML('header.html', document.getElementById('header'), function(){
    includeHTML('menu.html', document.getElementById('mainMenu'));
  });
</script>
```
