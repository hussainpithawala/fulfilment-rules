// Generated from EvaluateRule.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import * as R from 'ramda';
import {TaskEvaluator} from "../../provider/taskRangeProvider.js";

// This class defines a complete generic visitor for a parse tree produced by EvaluateRuleParser.

export default class EvaluateRuleVisitor extends antlr4.tree.ParseTreeVisitor {
    constructor() {
        super();
        this._taskEvaluator = new TaskEvaluator();
        this._expression_value = null;
    }

    get expression_value() {
        return this._expression_value;
    }

// Visit a parse tree produced by EvaluateRuleParser#expr.
    visitExpr(ctx) {
        let logical_operator = undefined;

        if (ctx.AND && ctx.AND()) {
            logical_operator = ' ' + ctx.AND.name + ' '
        } else if (ctx.OR && ctx.OR()) {
            logical_operator = ' ' + ctx.OR.name + ' '
        }

        let expression_value = null;
        if (logical_operator) {
            let operand_A = this.visitExpr(ctx.expr()[0]);
            let operand_B = this.visitExpr(ctx.expr()[1]);
            if (ctx.AND && ctx.AND()) {
                expression_value = operand_A && operand_B;
            } else if (ctx.OR && ctx.OR()) {
                expression_value = operand_A || operand_B;
            }
        } else {
            expression_value = this.visitChildren(ctx).filter(element => {
                return element !== undefined;
            })
            expression_value = R.head(R.flatten(expression_value))
        }
        this._expression_value = expression_value;
        return expression_value;
    }


    // Visit a parse tree produced by EvaluateRuleParser#key_value_rule.
    visitKey_value_rule(ctx) {
        let task_token = '' + ctx.TEXT()
        return this._taskEvaluator.evaluate(task_token);
    }
}
