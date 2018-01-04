/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

'use strict';

const cheerio = require('cheerio');

class EnableExperiment {
  /**
   * More about tree's type: tree is a parse5
   * [Document](http://inikulin.github.io/parse5/modules/ast.html#document),
   * with the htmlparser2
   * [TreeAdapter](http://inikulin.github.io/parse5/globals.html#treeadapters),
   * which results in a tree that's mostly compatible with that of
   * [htmlparser2](https://github.com/fb55/htmlparser2/). (Though note that
   * TreeParser.js itself monkey-patches some additional methods.)
   *
   * @param {parse5.AST.HtmlParser2.Document} tree
   * @param {Object} params
   */
  transform(tree, params) {
    if (Array.isArray(params.enableExperiment)) {
      const $ = cheerio.load(tree.root.children);
      params.enableExperiment.forEach(e => {
        $('head').append(
          `<script async custom-element="${e}" src="https://cdn.ampproject.org/v0/${e}-0.1.js"></script>`
        );
      });
      const ampExp = params.enableExperiment.join(',');
      $('body').append([
        '<script>',
        `document.cookie="AMP_EXP=${ampExp};Path=/;Expires=Tue, 01-Jan-2036 08:00:01 GMT"`,
        '</script>'
      ].join(''));
    }
  }
}

module.exports = new EnableExperiment();
