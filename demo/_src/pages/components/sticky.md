{"template":"component.html","title":"Sticky","demo":"<h4>Basic</h4>\r\n\r\n<!-- START: FIRSTDEMO -->\r\n\r\n<style>\n\t.sticky_container { background: #eee; height: 500px; margin: 50px 0; }\n\t.sticky_element { border-radius: 2px; color: white; font-size: 12px; height: 50px; line-height: 50px; overflow: hidden; padding: 0; text-align: center; width: 100%; margin: 10px 0; }\n\t.sticky_element.s1 { background: #455a64; z-index: 10; }\n\t.sticky_element.s2  { background: #00bcd4; }\n\t.sticky_element.s3   { background: #0097A7; }\n\n\t.marker {\n\t\tposition: fixed;\n\t\t/*top: 50%;*/\n\t\tright: 0;\n\t\tleft: 0;\n\n\t\twidth: 100%;\n\t\theight: 1px;\n\n\t\tbackground: red;\n\t\topacity: 0.2;\n\t}\n</style>\n\n<div class=\"marker\" style=\"top: 120px;\"></div>\n\n<script>\n$(document).ready(function() {\n\t$(\".sticky_element\").on(\"stuck.sticky\", function() {\n\t\tconsole.log(\"stuck\", this);\n\t}).on(\"unstuck.sticky\", function() {\n\t\tconsole.log(\"unstuck\", this);\n\t}).on(\"passed.sticky\", function() {\n\t\tconsole.log(\"passed\", this);\n\t});\n});\n</script>\n\r\n<!-- <div class=\"demo_container\">\n\t<div class=\"demo_example\"> -->\n\t\t<div class=\"sticky_element s1 js-sticky\" data-sticky-options='{\"offset\":50}'>Sticky Element</div>\n\t<!-- </div>\r\n\t<div class=\"demo_code\"> -->\r\n\t\t<pre><code class=\"language-html\">&lt;div class=&quot;stickey&quot;&gt;Sticky Element&lt;/div&gt;</code></pre>\r\n\t\t<pre><code class=\"language-javascript\">$(\".sticky\").sticky({\n\toffset: 50\n});</code></pre>\r\n\t<!-- </div>\r\n</div> -->\n\r\n<!-- END: FIRSTDEMO -->\n\n<br><br>\n\n<h3>Container</h3>\n<!-- <div class=\"demo_container\">\n\t<div class=\"demo_example\"> -->\n\n\t\t<div class=\"sticky_container sticky_2\">\n\t\t\t<div class=\"sticky_element s2 js-sticky\" data-sticky-options='{\"offset\":120}' data-sticky-container=\".sticky_2\">Sticky Element</div>\n\t\t</div>\n\n\t\t<div class=\"sticky_container sticky_3\">\n\t\t\t<div class=\"sticky_element s3 js-sticky\" data-sticky-options='{\"offset\":120}' data-sticky-container=\".sticky_3\">Sticky Element</div>\n\t\t</div>\n\n\t\t<div class=\"sticky_container sticky_4\">\n\t\t\t<div class=\"sticky_element s2 js-sticky\" data-sticky-options='{\"offset\":120}' data-sticky-container=\".sticky_4\">Sticky Element</div>\n\t\t</div>\n\n\t\t<div class=\"sticky_container sticky_5\">\n\t\t\t<div class=\"sticky_element s3 js-sticky\" data-sticky-options='{\"offset\":120}' data-sticky-container=\".sticky_5\">Sticky Element</div>\n\t\t</div>\n\n\t<!-- </div>\n\t<div class=\"demo_code\"> -->\n\t\t<pre><code class=\"language-html\">&lt;div class=&quot;stickey_container&quot;&gt;\n\t&lt;div class=&quot;stickey&quot; data-sticky-container=&quot;.stickey_container&quot;&gt;Sticky Element&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n\t\t<pre><code class=\"language-javascript\">$(\".stickey\").stickey({\n\toffset: 100\n});</code></pre>\n\t<!-- </div>\n</div> -->\n","asset_root":"../","year":2017}

 #Sticky Demo
<p class="back_link"><a href="https://formstone.it/components/sticky">View Documentation</a></p>