window.__EC_DOC_option_parallel = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "zlevel": {
    "desc": "<p><code class=\"codespan\">zlevel</code> value of all graphical elements in .</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n"
  },
  "z": {
    "desc": "<p><code class=\"codespan\">z</code> value of all graphical elements in , which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n<p><code class=\"codespan\">z</code> has a lower priority to <code class=\"codespan\">zlevel</code>, and will not create new Canvas.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between parallel  component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "<p>Distance between parallel  component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">top</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "<p>Distance between parallel  component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "<p>Distance between parallel  component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "width": {
    "desc": "<p>Width of parallel  component. Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "height": {
    "desc": "<p>Height of parallel  component. Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "layout": {
    "desc": "\n\n<p>Layout modes, whose optional values are:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;horizontal&#39;</code>: place each axis horizontally.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;vertical&#39;</code>: place each axis vertically.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "horizontal,vertical",
      "default": "horizontal"
    }
  },
  "axisExpandable": {
    "desc": "\n\n\n\n<p>When dimension number is extremely large, say, more than 50 dimensions, there will be more than 50 axes, which may hardly display in a page.</p>\n<p>In this case, you may use <a href=\"#parallel.axisExpandable\">parallel.axisExpandable</a> to improve the display. See this example:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=map-parallel-prices&edit=1&reset=1\" width=\"600\" height=\"460\"></iframe>\n\n\n\n\n\n\n<p>Whether to enable toggling axis on clicking.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "axisExpandCenter": {
    "desc": "\n\n<p>Index of the axis which is used as the center of expanding initially. It doesn&#39;t have a default value, and needs to be assigned manually.</p>\n<p>Please refer to <a href=\"parallel.axisExpandable\" target=\"_blank\">parallel.axisExpandable</a> for more information.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "axisExpandCount": {
    "desc": "\n\n<p>Defines how many axes are at expanding state initially. We&#39;d suggest you assign this value manually according to dimensions.</p>\n<p>Please refer to <a href=\"parallel.axisExpandCenter\" target=\"_blank\">parallel.axisExpandCenter</a> and <a href=\"parallel.axisExpandable\" target=\"_blank\">parallel.axisExpandable</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "axisExpandWidth": {
    "desc": "\n\n<p>Distance between two axes when at expanding state, in pixels.</p>\n<p>Please refer to <a href=\"parallel.axisExpandable\" target=\"_blank\">parallel.axisExpandable</a> for more information.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "50",
      "step": "1"
    }
  },
  "axisExpandTriggerOn": {
    "desc": "\n\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;click&#39;</code>: Trigger expanding when mouse clicking.</li>\n<li><code class=\"codespan\">&#39;mousemove&#39;</code>: Trigger expanding when mouse hovering.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "click,mousemove"
    }
  },
  "parallelAxisDefault": {
    "desc": "<p>When configuring multiple <a href=\"#parallelAxis\">parallelAxis</a>, there might be some common attributes in each axis configuration. To avoid writing them repeatly, they can be put under <a href=\"#parallel.parallelAxisDefault\">parallel.parallelAxisDefault</a>. Before initializing axis, configurations in <a href=\"#parallel.parallelAxisDefault\">parallel.parallelAxisDefault</a> will be merged into <a href=\"#parallelAxis\">parallelAxis</a> to generate the final axis configuration.</p>\n<p><a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/parallel-all&amp;edit=1&amp;reset=1\" target=\"_blank\">See the sample</a>.</p>\n<p><br></p>\n"
  },
  "parallelAxisDefault.type": {
    "desc": "<p>Type of axis.</p>\n<p>Option:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;value&#39;</code>\n  Numerical axis, suitable for continuous data.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;category&#39;</code>\n  Category axis, suitable for discrete category data. Category data can be auto retrieved from <a href=\"#series.data\">series.data</a> or <a href=\"#dataset.source\">dataset.source</a>, or can be specified via <a href=\"#parallelAxis.data\">parallelAxis.data</a>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;time&#39;</code>\n  Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;log&#39;</code>\n  Log axis, suitable for log data.</p>\n</li>\n</ul>\n"
  },
  "parallelAxisDefault.name": {
    "desc": "\n\n<p>Name of axis.</p>\n",
    "uiControl": {
      "type": "text"
    }
  },
  "parallelAxisDefault.nameLocation": {
    "desc": "\n\n<p>Location of axis name.</p>\n<p><strong>Options: </strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> or <code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;end&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "start,middle,end",
      "default": "end"
    }
  },
  "parallelAxisDefault.nameTextStyle": {
    "desc": "<p>Text style of axis name.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.color": {
    "desc": "\n\n<p>Color of axis name uses <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontStyle": {
    "desc": "\n\n<p>axis name font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontWeight": {
    "desc": "\n\n<p>axis name font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontFamily": {
    "desc": "\n\n<p>axis name font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontSize": {
    "desc": "\n\n<p>axis name font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.nameTextStyle.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.nameTextStyle.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.nameTextStyle.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.nameTextStyle.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderType": {
    "desc": "\n\n\n<p>the text fragment border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.nameTextStyle.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "parallelAxisDefault.nameTextStyle.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "parallelAxisDefault.nameTextStyle.textBorderColor": {
    "desc": "\n\n<p>Stroke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.textBorderWidth": {
    "desc": "\n\n<p>Stroke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.nameTextStyle.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "parallelAxisDefault.nameTextStyle.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "parallelAxisDefault.nameTextStyle.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-ts\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderType": {
    "desc": "\n\n\n<p>the text fragment border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>Stroke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>Stroke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameGap": {
    "desc": "\n\n<p>Gap between axis name and axis line.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5",
      "default": "15"
    }
  },
  "parallelAxisDefault.nameRotate": {
    "desc": "\n\n<p>Rotation of axis name.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-360",
      "max": "360",
      "step": "1"
    }
  },
  "parallelAxisDefault.inverse": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">true</code> to invert the axis.\nThis is a new option available from Echarts 3 and newer.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.boundaryGap": {
    "desc": "\n\n<p>The boundary gap on both sides of a coordinate axis. The setting and behavior of category axes and non-category axes are different.</p>\n<p>The <code class=\"codespan\">boundaryGap</code> of category axis can be set to either <code class=\"codespan\">true</code> or <code class=\"codespan\">false</code>. Default value is set to be <code class=\"codespan\">true</code>, in which case <a href=\"#parallelAxis.axisTick\">axisTick</a> is served only as a separation line, and labels and data appear only in the center part of two <a href=\"#parallelAxis.axisTick\">axis ticks</a>, which is called <em>band</em>.</p>\n<p>For non-category axis, including time, numerical value, and log axes, <code class=\"codespan\">boundaryGap</code> is an array of two values, representing the spanning range between minimum and maximum value. The value can be set in numeric value or relative percentage, which becomes invalid after setting <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a>.\n<strong>Example: </strong></p>\n<pre><code class=\"lang-ts\">boundaryGap: [&#39;20%&#39;, &#39;20%&#39;]\n</code></pre>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.min": {
    "desc": "\n\n<p>The minimun value of axis.</p>\n<p>It can be set to a special value <code class=\"codespan\">&#39;dataMin&#39;</code> so that the minimum value on this axis is set to be the minimum label.</p>\n<p>It will be automatically computed to make sure axis tick is equally distributed when not set.</p>\n<p>In category axis, it can also be set as the ordinal number. For example, if a catergory axis has <code class=\"codespan\">data: [&#39;categoryA&#39;, &#39;categoryB&#39;, &#39;categoryC&#39;]</code>, and the ordinal <code class=\"codespan\">2</code> represents <code class=\"codespan\">&#39;categoryC&#39;</code>. Moreover, it can be set as negative number, like <code class=\"codespan\">-3</code>.</p>\n<p>If <code class=\"codespan\">min</code> is specified as a function, it should return a min value, like:</p>\n<pre><code class=\"lang-ts\">min: function (value) {\n    return value.min - 20;\n}\n</code></pre>\n<p><code class=\"codespan\">value</code> is an object, containing the <code class=\"codespan\">min</code> value and <code class=\"codespan\">max</code> value of the data. This function should return the min value of axis, or return <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> to make echarts use the auto calculated min value (<code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> return is only supported since <code class=\"codespan\">v4.8.0</code>).</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.max": {
    "desc": "\n\n<p>The maximum value of axis.</p>\n<p>It can be set to a special value <code class=\"codespan\">&#39;dataMax&#39;</code> so that the minimum value on this axis is set to be the maximum label.</p>\n<p>It will be automatically computed to make sure axis tick is equally distributed when not set.</p>\n<p>In category axis, it can also be set as the ordinal number. For example, if a catergory axis has <code class=\"codespan\">data: [&#39;categoryA&#39;, &#39;categoryB&#39;, &#39;categoryC&#39;]</code>, and the ordinal <code class=\"codespan\">2</code> represents <code class=\"codespan\">&#39;categoryC&#39;</code>. Moreover, it can be set as negative number, like <code class=\"codespan\">-3</code>.</p>\n<p>If <code class=\"codespan\">max</code> is specified as a function, it should return a max value, like:</p>\n<pre><code class=\"lang-ts\">max: function (value) {\n    return value.max - 20;\n}\n</code></pre>\n<p><code class=\"codespan\">value</code> is an object, containing the <code class=\"codespan\">min</code> value and <code class=\"codespan\">max</code> value of the data. This function should return the max value of axis, or return <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> to make echarts use the auto calculated max value (<code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> return is only supported since <code class=\"codespan\">v4.8.0</code>).</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.scale": {
    "desc": "\n\n<p>It is available only in numerical axis, i.e., <a href=\"#parallelAxis.type\">type</a>: &#39;value&#39;.</p>\n<p>It specifies whether not to contain zero position of axis compulsively. When it is set to be <code class=\"codespan\">true</code>, the axis may not contain zero position, which is useful in the scatter chart for both value axes.</p>\n<p>This configuration item is unavailable when the <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a> are set.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.splitNumber": {
    "desc": "\n\n<p>Number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.</p>\n<p>This is unavailable for category axis.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "step": "1",
      "default": "5"
    }
  },
  "parallelAxisDefault.minInterval": {
    "desc": "\n\n<p>Minimum gap between split lines.</p>\n<p>For example, it can be set to be <code class=\"codespan\">1</code> to make sure axis label is show as integer.</p>\n<pre><code class=\"lang-ts\">{\n    minInterval: 1\n}\n</code></pre>\n<p>It is available only for axis of <a href=\"#parallelAxis.type\">type</a> &#39;value&#39; or &#39;time&#39;.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.maxInterval": {
    "desc": "\n\n<p>Maximum gap between split lines.</p>\n<p>For example, in time axis (<a href=\"#parallelAxis.type\">type</a> is &#39;time&#39;), it can be set to be <code class=\"codespan\">3600 * 24 * 1000</code> to make sure that the gap between axis labels is less than or equal to one day.</p>\n<pre><code class=\"lang-ts\">{\n    maxInterval: 3600 * 1000 * 24\n}\n</code></pre>\n<p>It is available only for axis of <a href=\"#parallelAxis.type\">type</a> &#39;value&#39; or &#39;time&#39;.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.interval": {
    "desc": "\n\n<p>Compulsively set segmentation interval for axis.</p>\n<p>As <a href=\"#parallelAxis.splitNumber\">splitNumber</a> is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a> to compulsively set tickings. But in most cases, we do not suggest using this, our automatic calculation is enough for most situations.</p>\n<p>This is unavailable for category axis. Timestamp should be passed for <a href=\"#parallelAxis.type\">type</a>: &#39;time&#39; axis. Logged value should be passed for <a href=\"#parallelAxis.type\">type</a>: &#39;log&#39; axis.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.logBase": {
    "desc": "\n\n<p>Base of logarithm, which is valid only for numeric axes with <a href=\"#parallelAxis.type\">type</a>: &#39;log&#39;.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "10"
    }
  },
  "parallelAxisDefault.silent": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code>, to prevent interaction with the axis.</p>\n"
  },
  "parallelAxisDefault.triggerEvent": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code> to enable triggering events.</p>\n<p>Parameters of the event include:</p>\n<pre><code class=\"lang-ts\">{\n    // Component type: xAxis, yAxis, radiusAxis, angleAxis\n    // Each of which has an attribute for index, e.g., xAxisIndex for xAxis\n    componentType: string,\n    // Value on axis before being formatted.\n    // Click on value label to trigger event.\n    value: &#39;&#39;,\n    // Name of axis.\n    // Click on laben name to trigger event.\n    name: &#39;&#39;\n}\n</code></pre>\n"
  },
  "parallelAxisDefault.axisLine": {
    "desc": "<p>Settings related to axis line.</p>\n"
  },
  "parallelAxisDefault.axisLine.show": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">false</code> to prevent the axis line from showing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.axisLine.symbol": {
    "desc": "\n\n<p>Symbol of the two ends of the axis. It could be a string, representing the same symbol for two ends; or an array with two string elements, representing the two ends separately. It&#39;s set to be <code class=\"codespan\">&#39;none&#39;</code> by default, meaning no arrow for either end. If it is set to be <code class=\"codespan\">&#39;arrow&#39;</code>, there shall be two arrows. If there should only one arrow at the end, it should set to be <code class=\"codespan\">[&#39;none&#39;, &#39;arrow&#39;]</code>.</p>\n",
    "uiControl": {
      "type": "icon",
      "default": "none"
    }
  },
  "parallelAxisDefault.axisLine.symbolSize": {
    "desc": "\n\n<p>Size of the arrows at two ends. The first is the width perpendicular to the axis, the next is the width parallel to the axis.</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "10,15"
    }
  },
  "parallelAxisDefault.axisLine.symbolOffset": {
    "desc": "\n\n<p>Arrow offset of axis. If is array, the first number is the offset of the arrow at the beginning, and the second number is the offset of the arrow at the end. If is number, it means the arrows have the same offset.</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "0,0"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.color": {
    "desc": "\n\n<p>line styleLine color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.width": {
    "desc": "\n\n<p>line style line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "parallelAxisDefault.axisTick": {
    "desc": "<p>Settings related to axis tick.</p>\n"
  },
  "parallelAxisDefault.axisTick.show": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">false</code> to prevent the axis tick from showing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.axisTick.alignWithLabel": {
    "desc": "\n\n<p>Align axis tick with label, which is available only when <code class=\"codespan\">boundaryGap</code> is set to be <code class=\"codespan\">true</code> in category axis. See the following picture:</p>\n<p><img width=\"600\" height=\"auto\" src=\"documents/asset/img/axis-align-with-label.png\"></p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "parallelAxisDefault.axisTick.interval": {
    "desc": "\n\n\n\n<p>Interval of axisTick, which is available in category axis.  is set to be the same as <a href=\"#parallelAxis.axisLabel.interval\">axisLabel.interval</a> by default.</p>\n<p>It uses a strategy that labels do not overlap by default.</p>\n<p>You may set it to be 0 to display all labels compulsively.</p>\n<p>If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.</p>\n<p>On the other hand, you can control by callback function, whose format is shown below:</p>\n<pre><code class=\"lang-ts\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisTick.inside": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">true</code> so the axis labels face the <code class=\"codespan\">inside</code> direction.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisTick.length": {
    "desc": "\n\n<p>The length of the axis tick.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle": {
    "desc": "<p>Line style of axis ticks.</p>\n"
  },
  "parallelAxisDefault.axisTick.lineStyle.color": {
    "desc": "<p>Color of axis label is set to be <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default.</p>\n"
  },
  "parallelAxisDefault.axisTick.lineStyle.width": {
    "desc": "\n\n<p>axisTick line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "parallelAxisDefault.minorTick": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.6.0</code></p>\n</blockquote>\n<p>Settings related minor ticks.</p>\n<p>Note: <code class=\"codespan\">minorTick</code> is not available in the <code class=\"codespan\">category</code> type axis.</p>\n<p>Examples:</p>\n<p>1) Using minor ticks in function plotting.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=line-function&edit=1&reset=1\" width=\"600\" height=\"350\"></iframe>\n\n\n<p>2) Using minor ticks in log axis.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/en/view.html?c=line-log&edit=1&reset=1\" width=\"600\" height=\"350\"></iframe>\n\n"
  },
  "parallelAxisDefault.minorTick.show": {
    "desc": "\n\n<p>If show minor ticks.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.minorTick.splitNumber": {
    "desc": "\n\n<p>Number of interval splited by minor ticks.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "step": "1",
      "default": "5"
    }
  },
  "parallelAxisDefault.minorTick.length": {
    "desc": "\n\n<p>Length of minor ticks lines。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "3"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.color": {
    "desc": "\n\n<p>Style configuration of minor ticks lines <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.width": {
    "desc": "\n\n<p>minorTick line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "parallelAxisDefault.axisLabel": {
    "desc": "<p>Settings related to axis label.</p>\n"
  },
  "parallelAxisDefault.axisLabel.show": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">false</code> to prevent the axis label from appearing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.axisLabel.interval": {
    "desc": "\n\n\n\n<p>Interval of Axis label, which is available in category axis. </p>\n<p>It uses a strategy that labels do not overlap by default.</p>\n<p>You may set it to be 0 to display all labels compulsively.</p>\n<p>If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.</p>\n<p>On the other hand, you can control by callback function, whose format is shown below:</p>\n<pre><code class=\"lang-ts\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.inside": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">true</code> so the axis labels face the <code class=\"codespan\">inside</code> direction.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisLabel.rotate": {
    "desc": "\n\n<p>Rotation degree of axis label, which is especially useful when there is no enough space for category axis.</p>\n<p>Rotation degree is from -90 to 90.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.margin": {
    "desc": "\n\n<p>The margin between the axis label and the axis line.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "8",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.formatter": {
    "desc": "<p>Formatter of axis label, which supports string template and callback function.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">// Use string template; template variable is the default label of axis {value}\nformatter: &#39;{value} kg&#39;\n// Use callback.\nformatter: function (value, index) {\n    return value + &#39;kg&#39;;\n}\n</code></pre>\n<hr>\n<p>For axes of time <a href=\"#.type\">type</a>: <code class=\"codespan\">&#39;time&#39;</code>, <code class=\"codespan\">formatter</code> supports the following forms:</p>\n<ul>\n<li><strong>String Templates</strong>: an easy and fast way to make frequently used date/time template, formed in <code class=\"codespan\">string</code></li>\n<li><strong>Callback Functions</strong>: customized formatter to make complex format, formed in <code class=\"codespan\">Function</code></li>\n<li><strong>Cascading Templates</strong>: to adopt different formatters for different time granularity, formed in <code class=\"codespan\">object</code></li>\n</ul>\n<p>Next, we are going to introduce these three forms one by one.</p>\n<p><strong> String Templates </strong></p>\n<p>Using string templates is an easy way to format date/time with frequently used formats. If it can be used to make what you want, you are advised to do so. If not, you could then consider the others. Supported formats are:</p>\n<table>\n<thead>\n<tr>\n<th>Group</th>\n<th>Template</th>\n<th>Value (EN)</th>\n<th>Value (ZH)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Year</td>\n<td>{yyyy}</td>\n<td>e.g., 2020, 2021, ...</td>\n<td>例：2020, 2021, ...</td>\n</tr>\n<tr>\n<td></td>\n<td>{yy}</td>\n<td>00-99</td>\n<td>00-99</td>\n</tr>\n<tr>\n<td>Quarter</td>\n<td>{Q}</td>\n<td>1, 2, 3, 4</td>\n<td>1, 2, 3, 4</td>\n</tr>\n<tr>\n<td>Month</td>\n<td>{MMMM}</td>\n<td>e.g., January, February, ...</td>\n<td>一月、二月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MMM}</td>\n<td>e.g., Jan, Feb, ...</td>\n<td>1月、2月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MM}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{M}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Day of Month</td>\n<td>{dd}</td>\n<td>01-31</td>\n<td>01-31</td>\n</tr>\n<tr>\n<td></td>\n<td>{d}</td>\n<td>1-31</td>\n<td>1-31</td>\n</tr>\n<tr>\n<td>Day of Week</td>\n<td>{eeee}</td>\n<td>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</td>\n<td>星期日、星期一、星期二、星期三、星期四、星期五、星期六</td>\n</tr>\n<tr>\n<td></td>\n<td>{ee}</td>\n<td>Sun, Mon, Tues, Wed, Thu, Fri, Sat</td>\n<td>日、一、二、三、四、五、六</td>\n</tr>\n<tr>\n<td></td>\n<td>{e}</td>\n<td>1-54</td>\n<td>1-54</td>\n</tr>\n<tr>\n<td>Hour</td>\n<td>{HH}</td>\n<td>00-23</td>\n<td>00-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{H}</td>\n<td>0-23</td>\n<td>0-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{hh}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{h}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Minute</td>\n<td>{mm}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{m}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Second</td>\n<td>{ss}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{s}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Millisecond</td>\n<td>{SSS}</td>\n<td>000-999</td>\n<td>000-999</td>\n</tr>\n<tr>\n<td></td>\n<td>{S}</td>\n<td>0-999</td>\n<td>0-999</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>Templates of other languages can be found in <a href=\"https://github.com/apache/echarts/tree/master/src/i18n\" target=\"_blank\">the language package</a>. Please refer to <a href=\"api.html#echarts.registerLocale\" target=\"_blank\">echarts.registerLocale</a> to register a language.</p>\n</blockquote>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">formatter: &#39;{yyyy}-{MM}-{dd}&#39; // gets labels like &#39;2020-12-02&#39;\nformatter: &#39;Day {d}&#39; // gets labels like &#39;Day 2&#39;\n</code></pre>\n<p><strong> Callback Functions </strong></p>\n<p>Callback functions can be used to get different formats for different axis tick values. Sometimes, if you have complex date/time formatting requirement, third-party libraries like <a href=\"https://momentjs.com/\" target=\"_blank\">Moment.js</a> or <a href=\"https://date-fns.org/\" target=\"_blank\">date-fns</a> can be used to return formatted labels.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">// Use callback function; function parameters are axis index\nformatter: function (value, index) {\n    // Formatted to be month/day; display year only in the first label\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (index === 0) {\n        texts.unshift(date.getYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n</code></pre>\n<p><strong> Cascading Templates </strong></p>\n<p>Sometimes, we wish to use different formats for different time granularity. For example, in a quarter-year chart, we may wish to see the month name with the first date of the month, while see the date name with others. This can be made with:</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">formatter: {\n    month: &#39;{MMMM}&#39;, // Jan, Feb, ...\n    day: &#39;{d}&#39; // 1, 2, ...\n}\n</code></pre>\n<p>Supported levels and their default formatters are:</p>\n<pre><code class=\"lang-ts\">{\n    year: &#39;{yyyy}&#39;,\n    month: &#39;{MMM}&#39;,\n    day: &#39;{d}&#39;,\n    hour: &#39;{HH}:{mm}&#39;,\n    minute: &#39;{HH}:{mm}&#39;,\n    second: &#39;{HH}:{mm}:{ss}&#39;,\n    millisecond: &#39;{hh}:{mm}:{ss} {SSS}&#39;,\n    none: &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}&#39;\n}\n</code></pre>\n<p>Let&#39;s take <code class=\"codespan\">day</code> for example. When a tick value is <code class=\"codespan\">0</code> for its hour, minute, second, and millisecond, <code class=\"codespan\">day</code> level will be used to make formatter. <code class=\"codespan\">none</code> is used when no other level fulfills, which is for tick values with millisecond values other than <code class=\"codespan\">0</code>.</p>\n<p><strong> Rich Text </strong></p>\n<p>The above three forms all support rich text, so it can be used to make some complex effects.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: {\n            // Display year and month information on the first data of a year\n            year: &#39;{yearStyle|{yyyy}}\\n{monthStyle|{MMM}}&#39;,\n            month: &#39;{monthStyle|{MMM}}&#39;\n        },\n        rich: {\n            yearStyle: {\n                // Make yearly text more standing out\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            monthStyle: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n<p>The above example can also be made with a callback function:</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: function (value) {\n            const date = new Date(value);\n            const yearStart = new Date(value);\n            yearStart.setMonth(0);\n            yearStart.setDate(1);\n            yearStart.setHours(0);\n            yearStart.setMinutes(0);\n            yearStart.setSeconds(0);\n            yearStart.setMilliseconds(0);\n            // Whether a tick value is the start of a year\n            if (date.getTime() === yearStart.getTime()) {\n                return &#39;{year|&#39; + date.getFullYear() + &#39;}\\n&#39;\n                    + &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;;\n            }\n            else {\n                return &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;\n            }\n        },\n        rich: {\n            year: {\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            month: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n"
  },
  "parallelAxisDefault.axisLabel.showMinLabel": {
    "desc": "\n\n<p>Whether to show the label of the min tick. Optional values: <code class=\"codespan\">true</code>, <code class=\"codespan\">false</code>, <code class=\"codespan\">null</code>. It is auto determined by default, that is, if labels are overlapped, the label of the min tick will not be displayed.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisLabel.showMaxLabel": {
    "desc": "\n\n<p>Whether to show the label of the max tick. Optional values: <code class=\"codespan\">true</code>, <code class=\"codespan\">false</code>, <code class=\"codespan\">null</code>. It is auto determined by default, that is, if labels are overlapped, the label of the max tick will not be displayed.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisLabel.hideOverlap": {
    "desc": "\n\n\n\n<blockquote>\n<p>Since <code class=\"codespan\">v5.2.0</code></p>\n</blockquote>\n<p>Whether to hide overlapped labels.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisLabel.color": {
    "desc": "\n\n<p>Color of axis label is set to be <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default. Callback function is supported, in the following format:</p>\n<pre><code class=\"lang-ts\">(val: string) =&gt; Color\n</code></pre>\n<p>Parameter is the text of label, and return value is the color. See the following example:</p>\n<pre><code class=\"lang-ts\">textStyle: {\n    color: function (value, index) {\n        return value &gt;= 0 ? &#39;green&#39; : &#39;red&#39;;\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.axisLabel.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.axisLabel.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.axisLabel.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.axisLabel.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.axisLabel.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.axisLabel.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.borderType": {
    "desc": "\n\n\n<p>the text fragment border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisLabel.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.axisLabel.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.axisLabel.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.axisLabel.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.textBorderColor": {
    "desc": "\n\n<p>Stroke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.textBorderWidth": {
    "desc": "\n\n<p>Stroke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisLabel.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "parallelAxisDefault.axisLabel.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "parallelAxisDefault.axisLabel.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-ts\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderType": {
    "desc": "\n\n\n<p>the text fragment border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>Stroke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>Stroke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data": {
    "desc": "<p>Category data, available in <a href=\"#parallelAxis.type\">type</a>: &#39;category&#39; axis.</p>\n<p>If <a href=\"#parallelAxis.type\">type</a> is not specified, but <code class=\"codespan\">axis.data</code> is specified, the <a href=\"#parallelAxis.type\">type</a> is auto set as <code class=\"codespan\">&#39;category&#39;</code>.</p>\n<p>If <a href=\"#parallelAxis.type\">type</a> is specified as <code class=\"codespan\">&#39;category&#39;</code>, but <code class=\"codespan\">axis.data</code> is not specified, <code class=\"codespan\">axis.data</code> will be auto collected from <a href=\"#series.data\">series.data</a>. It brings convenience, but we should notice that <code class=\"codespan\">axis.data</code> provides then value range of the <code class=\"codespan\">&#39;category&#39;</code> axis. If  it is auto collected from <a href=\"#series.data\">series.data</a>, Only the values appearing in <a href=\"#series.data\">series.data</a> can be collected. For example, if <a href=\"#series.data\">series.data</a> is empty, nothing will be collected.</p>\n<p>Example:</p>\n<pre><code class=\"lang-ts\">// Name list of all categories\ndata: [&#39;Monday&#39;, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;, &#39;Friday&#39;, &#39;Saturday&#39;, &#39;Sunday&#39;]\n// Each item could also be a specific configuration item.\n// In this case, `value` is used as the category name.\ndata: [{\n    value: &#39;Monday&#39;,\n    // Highlight Monday\n    textStyle: {\n        fontSize: 20,\n        color: &#39;red&#39;\n    }\n}, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;, &#39;Friday&#39;, &#39;Saturday&#39;, &#39;Sunday&#39;]\n</code></pre>\n"
  },
  "parallelAxisDefault.data.value": {
    "desc": "<p>Name of a category.</p>\n"
  },
  "parallelAxisDefault.data.textStyle": {
    "desc": "<p>Text style of the category.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.data.textStyle.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.data.textStyle.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.data.textStyle.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.data.textStyle.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.data.textStyle.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.data.textStyle.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.data.textStyle.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.data.textStyle.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.borderType": {
    "desc": "\n\n\n<p>the text fragment border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.data.textStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.data.textStyle.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.data.textStyle.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "parallelAxisDefault.data.textStyle.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "parallelAxisDefault.data.textStyle.textBorderColor": {
    "desc": "\n\n<p>Stroke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.textBorderWidth": {
    "desc": "\n\n<p>Stroke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.data.textStyle.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "parallelAxisDefault.data.textStyle.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "parallelAxisDefault.data.textStyle.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-ts\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-ts\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-ts\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderType": {
    "desc": "\n\n\n<p>the text fragment border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>Stroke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>Stroke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-ts\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  }
}