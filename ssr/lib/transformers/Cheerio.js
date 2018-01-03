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

class Cheerio {
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
   */
  transform(tree, params) {
    if (params.cheerio) {
      const $ = cheerio.load(tree.root.children);
      params.cheerio($, params);
    }
  }
}

module.exports = new Cheerio();
