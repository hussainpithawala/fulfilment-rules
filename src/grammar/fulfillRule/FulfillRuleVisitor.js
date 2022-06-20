// Generated from FulfillRule.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import * as R from 'ramda';

import {TaskRangeProvider} from '../../provider/taskRangeProvider.js'

// This class defines a complete generic visitor for a parse tree produced by FulfillRuleParser.

export default class FulfillRuleVisitor extends antlr4.tree.ParseTreeVisitor {

    constructor() {
        super()
        this._get_logical_rules = null;
        this._logical_rule_table = {};
        this._task_range_provider = new TaskRangeProvider();
    }


    get logical_rule_table() {
        return this._logical_rule_table;
    }

    get logical_children() {
        return this._get_logical_rules;
    }

    // Visit a parse tree produced by FulfillRuleParser#file.
    visitFile(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by FulfillRuleParser#definition.
    visitDefinition(ctx) {
        console.log("Definition " + ctx.TEXT())
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by FulfillRuleParser#definition_id.
    visitDefinition_id(ctx) {
        let definition_id = ctx.TEXT()
        if (!definition_id) {
            definition_id = ctx.DEFAULT()
            if (definition_id) {
                console.log("fetch the latest definition_id")
            }
            console.log("Definition-Token " + ctx.DEFAULT())
            return this.visitChildren(ctx);
        } else {
            console.log("Definition-Id " + ctx.TEXT())
        }
    }

    // Visit a parse tree produced by FulfillRuleParser#logical_rules.
    visitLogical_rules(ctx) {
        let logical_rule_children = this.visitChildren(ctx);
        console.log(logical_rule_children);
        this._get_logical_rules = R.tail(logical_rule_children)


        this._logical_rule_table = R.mergeAll(R.flatten(R.map((rule) => R.map((task) => {
            let rule_expression = rule['expression'];
            if (R.type(rule_expression) === 'Array') {
                rule_expression = R.head(rule_expression)
            }
            let item = {}
            item[task] = rule_expression
            return item;
        }, rule['tasks']), this._get_logical_rules)))

        return this._get_logical_rules;
    }


    // Visit a parse tree produced by FulfillRuleParser#logical_rule.
    visitLogical_rule(ctx) {
        let source_rule_result = this.visitSource_rule(ctx.source_rule())
        let logical_rule = R.clone(source_rule_result);
        logical_rule["expression"] = this.visitExpr(ctx.expr())
        return logical_rule;
    }


    // Visit a parse tree produced by FulfillRuleParser#source_rule.
    visitSource_rule(ctx) {
        var source_rule = {};

        if (ctx.ANY() && ctx.FROM() && ctx.TO()) {
            let selector = {
                "from": this.visitKey_value_rule(ctx.key_value_rule(0)).split(' ')[2],
                "to": this.visitKey_value_rule(ctx.key_value_rule(1)).split(' ')[2]
            }
            source_rule["tasks"] = this._task_range_provider.get_tasks_for_range(selector)

        } else {
            console.log("Single task -- ")
            source_rule["tasks"] = [this.visitKey_value_rule(ctx.key_value_rule(0)).split(' ')[2]];
        }

        console.log("logical rule statement " + source_rule)
        return source_rule;
    }


    // Visit a parse tree produced by FulfillRuleParser#expr.
    visitExpr(ctx) {
        let logical_operator = undefined
        if (ctx.AND && ctx.AND()) {
            logical_operator = ' ' + ctx.AND.name + ' '
        } else if (ctx.OR && ctx.OR()) {
            logical_operator = ' ' + ctx.OR.name + ' '
        }

        let expression_value = null;
        if (logical_operator) {
            expression_value = '(' + this.visitExpr(ctx.expr()[0]) + logical_operator + this.visitExpr(ctx.expr()[1]) + ')'
        } else {
            expression_value = this.visitChildren(ctx).filter(element => {
                return element !== undefined;
            })
            console.log("expression-value " + JSON.stringify(expression_value))
        }

        // return this.visitChildren(ctx);
        return expression_value;
    }


    // Visit a parse tree produced by FulfillRuleParser#key_value_rule.
    visitKey_value_rule(ctx) {
        // return this.visitChildren(ctx);
        return ctx.TASK_TOKEN() + " " + ctx.TEXT();
    }
}
