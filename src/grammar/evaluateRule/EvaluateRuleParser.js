// Generated from EvaluateRule.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import EvaluateRuleListener from './EvaluateRuleListener.js';
import EvaluateRuleVisitor from './EvaluateRuleVisitor.js';

const serializedATN = [4,1,14,24,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,0,1,0,1,0,
3,0,11,8,0,1,0,1,0,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,1,1,1,1,1,1,1,0,1,0,
2,0,2,0,1,1,0,9,10,23,0,10,1,0,0,0,2,20,1,0,0,0,4,5,6,0,-1,0,5,6,5,1,0,0,
6,7,3,0,0,0,7,8,5,2,0,0,8,11,1,0,0,0,9,11,3,2,1,0,10,4,1,0,0,0,10,9,1,0,
0,0,11,17,1,0,0,0,12,13,10,3,0,0,13,14,7,0,0,0,14,16,3,0,0,4,15,12,1,0,0,
0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,17,1,0,0,0,20,
21,5,5,0,0,21,22,5,13,0,0,22,3,1,0,0,0,2,10,17];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class EvaluateRuleParser extends antlr4.Parser {

    static grammarFileName = "EvaluateRule.g4";
    static literalNames = [ null, "'('", "')'", "'default'", "'ANY '", "'TASK '", 
                            "'FROM '", "' TO '", "'IS '", "' OR '", "' AND '", 
                            "'FULFILLED '", "'BY'" ];
    static symbolicNames = [ null, null, null, "DEFAULT", "ANY", "TASK_TOKEN", 
                             "FROM", "TO", "IS", "OR", "AND", "FULFILLED", 
                             "BY", "TEXT", "WS" ];
    static ruleNames = [ "expr", "key_value_rule" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = EvaluateRuleParser.ruleNames;
        this.literalNames = EvaluateRuleParser.literalNames;
        this.symbolicNames = EvaluateRuleParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, EvaluateRuleParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case EvaluateRuleParser.T__0:
	            this.state = 5;
	            this.match(EvaluateRuleParser.T__0);
	            this.state = 6;
	            this.expr(0);
	            this.state = 7;
	            this.match(EvaluateRuleParser.T__1);
	            break;
	        case EvaluateRuleParser.TASK_TOKEN:
	            this.state = 9;
	            this.key_value_rule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, EvaluateRuleParser.RULE_expr);
	                this.state = 12;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 13;
	                _la = this._input.LA(1);
	                if(!(_la===EvaluateRuleParser.OR || _la===EvaluateRuleParser.AND)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 14;
	                this.expr(4); 
	            }
	            this.state = 19;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	key_value_rule() {
	    let localctx = new Key_value_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, EvaluateRuleParser.RULE_key_value_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(EvaluateRuleParser.TASK_TOKEN);
	        this.state = 21;
	        this.match(EvaluateRuleParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

EvaluateRuleParser.EOF = antlr4.Token.EOF;
EvaluateRuleParser.T__0 = 1;
EvaluateRuleParser.T__1 = 2;
EvaluateRuleParser.DEFAULT = 3;
EvaluateRuleParser.ANY = 4;
EvaluateRuleParser.TASK_TOKEN = 5;
EvaluateRuleParser.FROM = 6;
EvaluateRuleParser.TO = 7;
EvaluateRuleParser.IS = 8;
EvaluateRuleParser.OR = 9;
EvaluateRuleParser.AND = 10;
EvaluateRuleParser.FULFILLED = 11;
EvaluateRuleParser.BY = 12;
EvaluateRuleParser.TEXT = 13;
EvaluateRuleParser.WS = 14;

EvaluateRuleParser.RULE_expr = 0;
EvaluateRuleParser.RULE_key_value_rule = 1;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EvaluateRuleParser.RULE_expr;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	key_value_rule() {
	    return this.getTypedRuleContext(Key_value_ruleContext,0);
	};

	AND() {
	    return this.getToken(EvaluateRuleParser.AND, 0);
	};

	OR() {
	    return this.getToken(EvaluateRuleParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof EvaluateRuleListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EvaluateRuleListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof EvaluateRuleVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Key_value_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EvaluateRuleParser.RULE_key_value_rule;
    }

	TASK_TOKEN() {
	    return this.getToken(EvaluateRuleParser.TASK_TOKEN, 0);
	};

	TEXT() {
	    return this.getToken(EvaluateRuleParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof EvaluateRuleListener ) {
	        listener.enterKey_value_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EvaluateRuleListener ) {
	        listener.exitKey_value_rule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof EvaluateRuleVisitor ) {
	        return visitor.visitKey_value_rule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




EvaluateRuleParser.ExprContext = ExprContext; 
EvaluateRuleParser.Key_value_ruleContext = Key_value_ruleContext; 
