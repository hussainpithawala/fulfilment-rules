// Generated from EvaluateRule.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import EvaluateRuleVisitor from "./EvaluateRuleVisitor.js";

// This class defines a complete listener for a parse tree produced by EvaluateRuleParser.
export default class EvaluateRuleListener extends antlr4.tree.ParseTreeListener {

    constructor() {
        super();
        this._visitor = new EvaluateRuleVisitor();
    }

    get visitor() {
        return this._visitor;
    }

// Enter a parse tree produced by EvaluateRuleParser#expr.
    enterExpr(ctx) {
        ctx.accept(this._visitor);
    }

    // Exit a parse tree produced by EvaluateRuleParser#expr.
    exitExpr(ctx) {

    }


    // Enter a parse tree produced by EvaluateRuleParser#key_value_rule.
    enterKey_value_rule(ctx) {
    }

    // Exit a parse tree produced by EvaluateRuleParser#key_value_rule.
    exitKey_value_rule(ctx) {
    }


}
