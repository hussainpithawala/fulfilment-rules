import * as fs from 'fs';
import * as path from 'path';

import * as antlr4 from 'antlr4';
import FulfillRuleLexer from './grammar/fulfillRule/FulfillRuleLexer.js'
import FulfillRuleParser from "./grammar/fulfillRule/FulfillRuleParser.js";
import FulfillRuleListener from './grammar/fulfillRule/FulfillRuleListener.js'

function readFile() {
    const content = fs.readFileSync(
        path.join(path.resolve(), '../sample/completeRule/definition-rule-sample.txt'),
        {
            encoding: 'utf-8',
        },
    );

    let inputStream = antlr4.default.CharStreams.fromString(content);
    let lexer = new FulfillRuleLexer(inputStream)

    let tokens = new antlr4.default.CommonTokenStream(lexer);
    let parser = new FulfillRuleParser(tokens);

    let listener = new FulfillRuleListener();
    let tree = parser.file()
    antlr4.default.tree.ParseTreeWalker.DEFAULT.walk(listener, tree)

    console.log("Logical Rule table --- \n");
    let logical_rule_table = listener.visitor.logical_rule_table
    console.log(JSON.stringify(logical_rule_table));
}

readFile();
