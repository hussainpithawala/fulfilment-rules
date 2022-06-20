// Generated from FulfillRule.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FulfillRuleVisitor from "./FulfillRuleVisitor.js";

// This class defines a complete listener for a parse tree produced by FulfillRuleParser.
export default class FulfillRuleListener extends antlr4.tree.ParseTreeListener {

    constructor() {
        super();
        this._visitor = new FulfillRuleVisitor();
    }

    get visitor() {
        return this._visitor;
    }

// Enter a parse tree produced by FulfillRuleParser#file.
    enterFile(ctx) {
    }

    // Exit a parse tree produced by FulfillRuleParser#file.
    exitFile(ctx) {
    }


    // Enter a parse tree produced by FulfillRuleParser#definition.
    enterDefinition(ctx) {
        ctx.accept(this._visitor)
    }

    // Exit a parse tree produced by FulfillRuleParser#definition.
    exitDefinition(ctx) {
    }


    // Enter a parse tree produced by FulfillRuleParser#definition_id.
    enterDefinition_id(ctx) {
        ctx.accept(this._visitor)
    }

    // Exit a parse tree produced by FulfillRuleParser#definition_id.
    exitDefinition_id(ctx) {
    }


    // Enter a parse tree produced by FulfillRuleParser#logical_rules.
    enterLogical_rules(ctx) {
        ctx.accept(this._visitor)
    }

    // Exit a parse tree produced by FulfillRuleParser#logical_rules.
    exitLogical_rules(ctx) {
    }


    // Enter a parse tree produced by FulfillRuleParser#logical_rule.
    enterLogical_rule(ctx) {
    }

    // Exit a parse tree produced by FulfillRuleParser#logical_rule.
    exitLogical_rule(ctx) {
    }


    // Enter a parse tree produced by FulfillRuleParser#source_rule.
    enterSource_rule(ctx) {
    }

    // Exit a parse tree produced by FulfillRuleParser#source_rule.
    exitSource_rule(ctx) {
    }


    // Enter a parse tree produced by FulfillRuleParser#expr.
    enterExpr(ctx) {
    }

    // Exit a parse tree produced by FulfillRuleParser#expr.
    exitExpr(ctx) {
    }


    // Enter a parse tree produced by FulfillRuleParser#key_value_rule.
    enterKey_value_rule(ctx) {
    }

    // Exit a parse tree produced by FulfillRuleParser#key_value_rule.
    exitKey_value_rule(ctx) {
    }


}
