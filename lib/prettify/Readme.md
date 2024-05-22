
# prettify.js - view code in html

```
<link rel="stylesheet" href="https://tttue.github.io/cdn/lib/prettify/css/prettify-theme.css">
<link rel="stylesheet" href="https://tttue.github.io/cdn/lib/prettify/css/prettify.css">
<script src="https://tttue.github.io/cdn/lib/prettify/js/prettify.js"></script>

<pre class="prettyprint runnable">$.notify("Hello World");</pre>
<h3>JS format</h3>
<pre class="prettyprint auto-run button-js-example">//add a new style 'foo'
$.notify.addStyle('foo', {
  html:
    "&lt;div&gt;" +
      "&lt;div class='clearfix'&gt;" +
        "&lt;div class='title' data-notify-html='title'/&gt;" +
        "&lt;div class='buttons'&gt;" +
          "&lt;button class='no'&gt;Cancel&lt;/button&gt;" +
          "&lt;button class='yes' data-notify-text='button'&gt;&lt;/button&gt;" +
        "&lt;/div&gt;" +
      "&lt;/div&gt;" +
    "&lt;/div&gt;"
});

//listen for click events from this style
$(document).on('click', '.notifyjs-foo-base .no', function() {
  //programmatically trigger propogating hide event
  $(this).trigger('notify-hide');
});
$(document).on('click', '.notifyjs-foo-base .yes', function() {
  //show button text
  alert($(this).text() + " clicked!");
  //hide notification
  $(this).trigger('notify-hide');
});
</pre>

<h3>CSS format</h3>
<pre class="prettyprint auto-add foo-css-example lang-css">.notifyjs-foo-base {
  opacity: 0.85;
  width: 200px;
  background: #F5F5F5;
  padding: 5px;
  border-radius: 10px;
}

.notifyjs-foo-base .title {
  width: 100px;
  float: left;
  margin: 10px 0 0 10px;
  text-align: right;
}

.notifyjs-foo-base .buttons {
  width: 70px;
  float: right;
  font-size: 9px;
  padding: 5px;
  margin: 2px;
}

.notifyjs-foo-base button {
  font-size: 9px;
  padding: 5px;
  margin: 2px;
  width: 60px;
}
			</pre>

  <script>
  prettyPrint()
  </script>

```
