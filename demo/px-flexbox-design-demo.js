/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-flexbox-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-flexbox-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-flexbox-design" description="Flexbox creates layout classes to give elements sizes and dynamically put elements in the right place. The flexbox module a wrapper around all of CSS flexbox's non-unit-based properties." layer="base" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-defaults-design&quot;
  ]" tabs="[&quot;Basic flex container&quot;,&quot;Using flex items&quot;]" selected-options="{{selectedOptions}}" selected-tab="{{selectedTab}}">

  <template is="dom-if" if="[[_tabIs('Basic flex container',selectedTab)]]" restamp="">
    <!-- 2: Set Options -->
    <px-sass-doc-option slot="options" option-name="Flex direction" choose-with="dropdown" choices="[
        &quot;row&quot;,
        &quot;row-reverse&quot;,
        &quot;column&quot;,
        &quot;column-reverse&quot;,
        &quot;none&quot;
      ]" default-choice="row">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Justify content" choose-with="dropdown" choices="[
        &quot;left&quot;,
        &quot;center&quot;,
        &quot;right&quot;,
        &quot;justify&quot;,
        &quot;spaced&quot;,
        &quot;none&quot;
      ]" default-choice="left">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Align items" choose-with="dropdown" choices="[
        &quot;top&quot;,
        &quot;middle&quot;,
        &quot;bottom&quot;,
        &quot;stretch&quot;,
        &quot;baseline&quot;,
        &quot;none&quot;
      ]" default-choice="top">
    </px-sass-doc-option>

    <!-- 3: Make HTML Demo -->
    <section slot="demo-html">
<!--
These classes go directly on the \`flex\` container. The classes on
its children don't change, making it easy to change layouts.

Note: the \`#demo1\` ID is just for the demo and can be removed.
-->
<div id="demo1" class\$="{{containerClasses}}">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
    </section>
  </template>

  <template is="dom-if" if="[[_tabIs('Using flex items',selectedTab)]]" restamp="">
    <!-- 2: Set Options -->
    <px-sass-doc-option slot="options" option-name="Flex container direction" choose-with="dropdown" choices="[
        &quot;row&quot;,
        &quot;row-reverse&quot;,
        &quot;column&quot;,
        &quot;column-reverse&quot;
      ]" default-choice="row">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Flex box 1" choose-with="boolean" default-choice="true">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Flex box 2" choose-with="boolean" default-choice="true" class="u-mt++">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Flex box 3" choose-with="boolean" default-choice="true">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Align box 1" choose-with="dropdown" choices="[
        &quot;baseline&quot;,
        &quot;top&quot;,
        &quot;middle&quot;,
        &quot;bottom&quot;
      ]" default-choice="top">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Align box 2" choose-with="dropdown" choices="[
        &quot;baseline&quot;,
        &quot;top&quot;,
        &quot;middle&quot;,
        &quot;bottom&quot;
      ]" default-choice="middle">
    </px-sass-doc-option>
    <px-sass-doc-option slot="options" option-name="Align box 3" choose-with="dropdown" choices="[
        &quot;baseline&quot;,
        &quot;top&quot;,
        &quot;middle&quot;,
        &quot;bottom&quot;
      ]" default-choice="bottom">
    </px-sass-doc-option>
<!-- <div id="demo2" class="flex flex--row"> -->
    <!-- 3: Make HTML Demo -->
    <section slot="demo-html">
<!--
Children can be manipulated individually with a \`.flex__item\`
block class and modifiers. The rules of the parent change
how the children's modifiers are applied.

Note: the \`#demo2\` ID is just for the demo and can be removed.
-->
<div id="demo2" class\$="{{itemContainerClasses}}">
  <div class\$="{{item1Classes}}">1</div>
  <div class\$="{{item2Classes}}">2</div>
  <div class\$="{{item3Classes}}">3</div>
</div>
    </section>
  </template>

<!-- Import Slot -->
<section slot="import">
@import 'px-flexbox-design/_base.flexbox.scss';
</section>

<!-- Usage info -->
<section slot="usage">
The flexbox module exposes many features available in flexbox layouts with simple, easy-to-use classes.

Using flexbox, you can change the way a container's children lay themselves out, or style individual items directly to change how they flow in the document. See the demos above for examples of applying flexbox classes.

For a good introduction to flexbox, see the [CSS Tricks Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Follow along below to learn about how the flexbox patterns can be applied to your project with simple classes.

### All classes for flex containers

#### flex (container)

*Class to set a container to use flexbox. Required to use any of the modifier classes below.*

\`.flex\` <span class="u-ml--">Sets a container to use flex for layout</span>

\`.inline--flex\` <span class="u-ml--">Sets a container to use inline-flex for layout</span>

#### flex-direction

*Classes to change the direction children flow.*

\`.flex--row\` <span class="u-ml--">Lays children out horizontally from right-to-left</span>

\`.flex--row--rev\` <span class="u-ml--">Lays children out horizontally in the reverse direction (from left-to-right).</span> <span class="u-ml-- muted">[must be applied with class *.flex--row*]</span>

\`.flex--col\` <span class="u-ml--">Lays children out vertically from top-to-bottom</span>

\`.flex--col--rev\` <span class="u-ml--">Lays children out vertically in the reverse direction (from bottom-to-top)</span> <span class="u-ml-- muted">[must be applied with class *.flex--col*]</span>

#### flex-wrap

*Classes to change the wrapping behavior of children.*

\`.flex--nowrap\` <span class="u-ml--">All children will appear on one line</span>

\`.flex--wrap\` <span class="u-ml--">Children will wrap onto multiple lines, from top to bottom</span>

\`.flex--wrap--rev\` <span class="u-ml--">Children will wrap onto multiple lines, from bottom to top</span>

#### justify-content

*Classes to change how children position themselves within the container's available space. Children will position themselves along the axis you specify with flex-direction.*

\`.flex--left\` <span class="u-ml--">Children are packed at the start of the container.</span> <span class="u-ml-- muted">[sets *justify-content: flex-start*]</span>

\`.flex--center\` <span class="u-ml--">Children are packed in the middle the container.</span> <span class="u-ml-- muted">[sets *justify-content: center*]</span>

\`.flex--right\` <span class="u-ml--">Children are packed at the end of the container.</span> <span class="u-ml-- muted">[sets *justify-content: flex-end*]</span>

\`.flex--justify\` <span class="u-ml--">Children are distributed throughout the container.</span> <span class="u-ml-- muted">[sets *justify-content: space-between*]</span>

\`.flex--spaced\` <span class="u-ml--">Children are equally distributed by space around them.</span> <span class="u-ml-- muted">[sets *justify-content: space-around*]</span>

#### align-items

*Classes to change how children stick to or fill the container's available space. Children will set or expand themselves across (not along) the axis you specify with flex-direction.*

\`.flex--top\` <span class="u-ml--">Children start at the beginning of the container.</span> <span class="u-ml-- muted">[sets *align-items: flex-start*]</span>

\`.flex--middle\` <span class="u-ml--">Children are centered in the container.</span> <span class="u-ml-- muted">[sets *align-items: center*]</span>

\`.flex--bottom\` <span class="u-ml--">Children end at the end of the container.</span> <span class="u-ml-- muted">[sets *align-items: flex-end*]</span>

\`.flex--stretch\` <span class="u-ml--">Children stretch to fill the container.</span> <span class="u-ml-- muted">[sets *align-items: stretch*]</span>

\`.flex--baseline\` <span class="u-ml--">Children align along their baselines.</span> <span class="u-ml-- muted">[sets *align-items: baseline*]</span>

#### align-content

*Classes to align children when there is extra space across (not along) the axis you specify with flex-direction. Useful when you have multiple rows or columns of children.*

\`.flex--top--multi\` <span class="u-ml--">Children align themselves at the beginning of the container.</span> <span class="u-ml-- muted">[sets *align-content: flex-start*]</span>

\`.flex--middle--multi\` <span class="u-ml--">Children align themselves in the center in the container.</span> <span class="u-ml-- muted">[sets *align-content: center*]</span>

\`.flex--bottom--multi\` <span class="u-ml--">Children align themselves at the end of the container.</span> <span class="u-ml-- muted">[sets *align-content: flex-end*]</span>

\`.flex--stretch--multi\` <span class="u-ml--">Children stretch themselves to fill the container.</span> <span class="u-ml-- muted">[sets *align-content: stretch*]</span>

\`.flex--justify--multi\` <span class="u-ml--">Children distribute themselves throughout the container.</span> <span class="u-ml-- muted">[sets *align-content: space-between*]</span>

\`.flex--spaced--multi\` <span class="u-ml--">Children distribute themselves equally throughout the container.</span> <span class="u-ml-- muted">[sets *align-content: space-around*]</span>

<h2 class="u-mt++">Styling children (items)</h2>

Most of the classes available to style containers full of children can be applied individually to children to create more complex layouts.

### All classes for flex children (items)

#### flex__item

*Class to set a container to use flexbox. Required to use any of the modifier classes below.*

\`.flex__item\` <span class="u-ml--">Sets a child to lay itself out using flex</span> <span class="u-ml-- muted">[sets *flex: 1*]</span>

\`.flex__item--msfix\` <span class="u-ml--">IE interprets 'flex: 1' to be 'flex: 1 1 0px', where 0px is referring to flex basis. This causes containers in some situations to collapse even when they have content. Other browsers interpret 'flex: 1' to be 'flex: 1 1 0%'.  This class forces IE to have the correct style by explicitly setting it. It should be used alongside \`.flex__item\`</span> <span class="u-ml-- muted">[sets *flex: 1 1 auto*]</span>

#### align-self (items)

\`.flex__item--top\` <span class="u-ml--">Set item to start at the beginning of the container.</span> <span class="u-ml-- muted">[sets *align-self: flex-start*]</span>

\`.flex__item--middle\` <span class="u-ml--">Set item to center in the container.</span> <span class="u-ml-- muted">[sets *align-self: center*]</span>

\`.flex__item--bottom\` <span class="u-ml--">Set item to end at the end of the container.</span> <span class="u-ml-- muted">[sets *align-self: flex-end*]</span>

\`.flex__item--baseline\` <span class="u-ml--">Set item to align along their baseline.</span> <span class="u-ml-- muted">[sets *align-self: baseline*]</span>

</section>

</px-sass-doc>
`,

  is: 'px-flexbox-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.containerClasses = this._containerClasses();

    this.itemContainerClasses = this._itemContainerClasses();
    this.item1Classes = this._itemClasses('1');
    this.item2Classes = this._itemClasses('2');
    this.item3Classes = this._itemClasses('3');

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _containerClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts["Flex direction"] === "row")             strings.push("flex--row");
    if (opts["Flex direction"] === "row-reverse")     strings.push("flex--row flex--row--rev");
    if (opts["Flex direction"] === "column")          strings.push("flex--col");
    if (opts["Flex direction"] === "column-reverse")  strings.push("flex--col flex--col--rev");
    if (opts["Flex direction"] === "none")            strings.push("");

    if (opts["Justify content"] === "left")           strings.push("flex--left");
    if (opts["Justify content"] === "center")         strings.push("flex--center");
    if (opts["Justify content"] === "right")          strings.push("flex--right");
    if (opts["Justify content"] === "justify")        strings.push("flex--justify");
    if (opts["Justify content"] === "spaced")         strings.push("flex--spaced");
    if (opts["Justify content"] === "none")           strings.push("");

    if (opts["Align items"] === "baseline")           strings.push("flex--baseline");
    if (opts["Align items"] === "top")                strings.push("flex--top");
    if (opts["Align items"] === "middle")             strings.push("flex--middle");
    if (opts["Align items"] === "bottom")             strings.push("flex--bottom");
    if (opts["Align items"] === "stretch")            strings.push("flex--stretch");
    if (opts["Align items"] === "none")               strings.push("");

    return ("flex " + strings.join(" ")).trim();
  },

  _itemContainerClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts["Flex container direction"] === "row")             strings.push("flex--row");
    if (opts["Flex container direction"] === "row-reverse")     strings.push("flex--row flex--row--rev");
    if (opts["Flex container direction"] === "column")          strings.push("flex--col");
    if (opts["Flex container direction"] === "column-reverse")  strings.push("flex--col flex--col--rev");

    return ("flex " + strings.join(" ")).trim();
  },

  _itemClasses : function(num) {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts["Flex box " + num]) strings.push("flex__item");

    if (opts["Align box " + num] === "baseline") strings.push("flex__item--baseline");
    if (opts["Align box " + num] === "top")      strings.push("flex__item--top");
    if (opts["Align box " + num] === "middle")   strings.push("flex__item--middle");
    if (opts["Align box " + num] === "bottom")   strings.push("flex__item--bottom");

    return ("" + strings.join(" ")).trim();
  },

  _tabIs : function(tabName) {
    var selected = this.selectedTab || "";
    return selected === tabName;
  }
});
