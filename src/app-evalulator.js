import * as fs from 'fs';
import * as path from 'path';

import * as antlr4 from 'antlr4';
import EvaluateRuleLexer from "./grammar/evaluateRule/EvaluateRuleLexer.js";
import EvaluateRuleParser from "./grammar/evaluateRule/EvaluateRuleParser.js";
import EvaluateRuleListener from "./grammar/evaluateRule/EvaluateRuleListener.js";

function readFile() {
    const content = fs.readFileSync(path.join(path.resolve(), '../sample/evaluateRule/single-rule-1.txt'), {
        encoding: 'utf-8',
    },);

    let inputStream = antlr4.default.CharStreams.fromString(content);
    let lexer = new EvaluateRuleLexer(inputStream)

    let tokens = new antlr4.default.CommonTokenStream(lexer);
    let parser = new EvaluateRuleParser(tokens);

    let listener = new EvaluateRuleListener();
    let tree = parser.expr()
    antlr4.default.tree.ParseTreeWalker.DEFAULT.walk(listener, tree)
    let expression_result = listener.visitor.expression_value;
    console.log("Expression Result " + expression_result)

}

readFile();
