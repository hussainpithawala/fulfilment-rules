// Generated from FulfillRule.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FulfillRuleListener from './FulfillRuleListener.js';
import FulfillRuleVisitor from './FulfillRuleVisitor.js';

const serializedATN = [4,1,18,71,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,
1,2,1,3,1,3,4,3,32,8,3,11,3,12,3,33,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,3,5,50,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,58,8,6,1,6,1,
6,1,6,5,6,63,8,6,10,6,12,6,66,9,6,1,7,1,7,1,7,1,7,0,1,12,8,0,2,4,6,8,10,
12,14,0,2,2,0,7,7,17,17,1,0,13,14,66,0,16,1,0,0,0,2,21,1,0,0,0,4,25,1,0,
0,0,6,29,1,0,0,0,8,35,1,0,0,0,10,49,1,0,0,0,12,57,1,0,0,0,14,67,1,0,0,0,
16,17,3,2,1,0,17,18,3,4,2,0,18,19,3,6,3,0,19,20,5,0,0,1,20,1,1,0,0,0,21,
22,5,5,0,0,22,23,5,1,0,0,23,24,5,17,0,0,24,3,1,0,0,0,25,26,5,6,0,0,26,27,
5,1,0,0,27,28,7,0,0,0,28,5,1,0,0,0,29,31,5,2,0,0,30,32,3,8,4,0,31,30,1,0,
0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,7,1,0,0,0,35,36,3,10,5,
0,36,37,5,12,0,0,37,38,5,15,0,0,38,39,5,16,0,0,39,40,3,12,6,0,40,9,1,0,0,
0,41,42,5,8,0,0,42,43,5,9,0,0,43,44,5,10,0,0,44,45,3,14,7,0,45,46,5,11,0,
0,46,47,3,14,7,0,47,50,1,0,0,0,48,50,3,14,7,0,49,41,1,0,0,0,49,48,1,0,0,
0,50,11,1,0,0,0,51,52,6,6,-1,0,52,53,5,3,0,0,53,54,3,12,6,0,54,55,5,4,0,
0,55,58,1,0,0,0,56,58,3,14,7,0,57,51,1,0,0,0,57,56,1,0,0,0,58,64,1,0,0,0,
59,60,10,3,0,0,60,61,7,1,0,0,61,63,3,12,6,4,62,59,1,0,0,0,63,66,1,0,0,0,
64,62,1,0,0,0,64,65,1,0,0,0,65,13,1,0,0,0,66,64,1,0,0,0,67,68,5,9,0,0,68,
69,5,17,0,0,69,15,1,0,0,0,4,33,49,57,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FulfillRuleParser extends antlr4.Parser {

    static grammarFileName = "FulfillRule.g4";
    static literalNames = [ null, "':'", "'rules:'", "'('", "')'", "'definition'", 
                            "'definition_id'", "'default'", "'ANY '", "'TASK '", 
                            "'FROM '", "' TO '", "'IS '", "' OR '", "' AND '", 
                            "'FULFILLED '", "'BY'" ];
    static symbolicNames = [ null, null, null, null, null, "DEFINITION_TOKEN", 
                             "DEFINITION_ID_TOKEN", "DEFAULT", "ANY", "TASK_TOKEN", 
                             "FROM", "TO", "IS", "OR", "AND", "FULFILLED", 
                             "BY", "TEXT", "WS" ];
    static ruleNames = [ "file", "definition", "definition_id", "logical_rules", 
                         "logical_rule", "source_rule", "expr", "key_value_rule" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FulfillRuleParser.ruleNames;
        this.literalNames = FulfillRuleParser.literalNames;
        this.symbolicNames = FulfillRuleParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
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




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FulfillRuleParser.RULE_file);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.definition();
	        this.state = 17;
	        this.definition_id();
	        this.state = 18;
	        this.logical_rules();
	        this.state = 19;
	        this.match(FulfillRuleParser.EOF);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FulfillRuleParser.RULE_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(FulfillRuleParser.DEFINITION_TOKEN);
	        this.state = 22;
	        this.match(FulfillRuleParser.T__0);
	        this.state = 23;
	        this.match(FulfillRuleParser.TEXT);
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



	definition_id() {
	    let localctx = new Definition_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FulfillRuleParser.RULE_definition_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(FulfillRuleParser.DEFINITION_ID_TOKEN);
	        this.state = 26;
	        this.match(FulfillRuleParser.T__0);
	        this.state = 27;
	        _la = this._input.LA(1);
	        if(!(_la===FulfillRuleParser.DEFAULT || _la===FulfillRuleParser.TEXT)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
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



	logical_rules() {
	    let localctx = new Logical_rulesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FulfillRuleParser.RULE_logical_rules);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(FulfillRuleParser.T__1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.logical_rule();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===FulfillRuleParser.ANY || _la===FulfillRuleParser.TASK_TOKEN);
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



	logical_rule() {
	    let localctx = new Logical_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FulfillRuleParser.RULE_logical_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.source_rule();
	        this.state = 36;
	        this.match(FulfillRuleParser.IS);
	        this.state = 37;
	        this.match(FulfillRuleParser.FULFILLED);
	        this.state = 38;
	        this.match(FulfillRuleParser.BY);
	        this.state = 39;
	        this.expr(0);
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



	source_rule() {
	    let localctx = new Source_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FulfillRuleParser.RULE_source_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FulfillRuleParser.ANY:
	            this.state = 41;
	            this.match(FulfillRuleParser.ANY);
	            this.state = 42;
	            this.match(FulfillRuleParser.TASK_TOKEN);
	            this.state = 43;
	            this.match(FulfillRuleParser.FROM);
	            this.state = 44;
	            this.key_value_rule();
	            this.state = 45;
	            this.match(FulfillRuleParser.TO);
	            this.state = 46;
	            this.key_value_rule();
	            break;
	        case FulfillRuleParser.TASK_TOKEN:
	            this.state = 48;
	            this.key_value_rule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, FulfillRuleParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case FulfillRuleParser.T__2:
	            this.state = 52;
	            this.match(FulfillRuleParser.T__2);
	            this.state = 53;
	            this.expr(0);
	            this.state = 54;
	            this.match(FulfillRuleParser.T__3);
	            break;
	        case FulfillRuleParser.TASK_TOKEN:
	            this.state = 56;
	            this.key_value_rule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, FulfillRuleParser.RULE_expr);
	                this.state = 59;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 60;
	                _la = this._input.LA(1);
	                if(!(_la===FulfillRuleParser.OR || _la===FulfillRuleParser.AND)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 61;
	                this.expr(4); 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	    this.enterRule(localctx, 14, FulfillRuleParser.RULE_key_value_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(FulfillRuleParser.TASK_TOKEN);
	        this.state = 68;
	        this.match(FulfillRuleParser.TEXT);
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

FulfillRuleParser.EOF = antlr4.Token.EOF;
FulfillRuleParser.T__0 = 1;
FulfillRuleParser.T__1 = 2;
FulfillRuleParser.T__2 = 3;
FulfillRuleParser.T__3 = 4;
FulfillRuleParser.DEFINITION_TOKEN = 5;
FulfillRuleParser.DEFINITION_ID_TOKEN = 6;
FulfillRuleParser.DEFAULT = 7;
FulfillRuleParser.ANY = 8;
FulfillRuleParser.TASK_TOKEN = 9;
FulfillRuleParser.FROM = 10;
FulfillRuleParser.TO = 11;
FulfillRuleParser.IS = 12;
FulfillRuleParser.OR = 13;
FulfillRuleParser.AND = 14;
FulfillRuleParser.FULFILLED = 15;
FulfillRuleParser.BY = 16;
FulfillRuleParser.TEXT = 17;
FulfillRuleParser.WS = 18;

FulfillRuleParser.RULE_file = 0;
FulfillRuleParser.RULE_definition = 1;
FulfillRuleParser.RULE_definition_id = 2;
FulfillRuleParser.RULE_logical_rules = 3;
FulfillRuleParser.RULE_logical_rule = 4;
FulfillRuleParser.RULE_source_rule = 5;
FulfillRuleParser.RULE_expr = 6;
FulfillRuleParser.RULE_key_value_rule = 7;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FulfillRuleParser.RULE_file;
    }

	definition() {
	    return this.getTypedRuleContext(DefinitionContext,0);
	};

	definition_id() {
	    return this.getTypedRuleContext(Definition_idContext,0);
	};

	logical_rules() {
	    return this.getTypedRuleContext(Logical_rulesContext,0);
	};

	EOF() {
	    return this.getToken(FulfillRuleParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FulfillRuleParser.RULE_definition;
    }

	DEFINITION_TOKEN() {
	    return this.getToken(FulfillRuleParser.DEFINITION_TOKEN, 0);
	};

	TEXT() {
	    return this.getToken(FulfillRuleParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
	        return visitor.visitDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Definition_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FulfillRuleParser.RULE_definition_id;
    }

	DEFINITION_ID_TOKEN() {
	    return this.getToken(FulfillRuleParser.DEFINITION_ID_TOKEN, 0);
	};

	TEXT() {
	    return this.getToken(FulfillRuleParser.TEXT, 0);
	};

	DEFAULT() {
	    return this.getToken(FulfillRuleParser.DEFAULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterDefinition_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitDefinition_id(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
	        return visitor.visitDefinition_id(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Logical_rulesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FulfillRuleParser.RULE_logical_rules;
    }

	logical_rule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Logical_ruleContext);
	    } else {
	        return this.getTypedRuleContext(Logical_ruleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterLogical_rules(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitLogical_rules(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
	        return visitor.visitLogical_rules(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Logical_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FulfillRuleParser.RULE_logical_rule;
    }

	source_rule() {
	    return this.getTypedRuleContext(Source_ruleContext,0);
	};

	IS() {
	    return this.getToken(FulfillRuleParser.IS, 0);
	};

	FULFILLED() {
	    return this.getToken(FulfillRuleParser.FULFILLED, 0);
	};

	BY() {
	    return this.getToken(FulfillRuleParser.BY, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterLogical_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitLogical_rule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
	        return visitor.visitLogical_rule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Source_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FulfillRuleParser.RULE_source_rule;
    }

	ANY() {
	    return this.getToken(FulfillRuleParser.ANY, 0);
	};

	TASK_TOKEN() {
	    return this.getToken(FulfillRuleParser.TASK_TOKEN, 0);
	};

	FROM() {
	    return this.getToken(FulfillRuleParser.FROM, 0);
	};

	key_value_rule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Key_value_ruleContext);
	    } else {
	        return this.getTypedRuleContext(Key_value_ruleContext,i);
	    }
	};

	TO() {
	    return this.getToken(FulfillRuleParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterSource_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitSource_rule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
	        return visitor.visitSource_rule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.ruleIndex = FulfillRuleParser.RULE_expr;
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
	    return this.getToken(FulfillRuleParser.AND, 0);
	};

	OR() {
	    return this.getToken(FulfillRuleParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
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
        this.ruleIndex = FulfillRuleParser.RULE_key_value_rule;
    }

	TASK_TOKEN() {
	    return this.getToken(FulfillRuleParser.TASK_TOKEN, 0);
	};

	TEXT() {
	    return this.getToken(FulfillRuleParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.enterKey_value_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FulfillRuleListener ) {
	        listener.exitKey_value_rule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FulfillRuleVisitor ) {
	        return visitor.visitKey_value_rule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FulfillRuleParser.FileContext = FileContext; 
FulfillRuleParser.DefinitionContext = DefinitionContext; 
FulfillRuleParser.Definition_idContext = Definition_idContext; 
FulfillRuleParser.Logical_rulesContext = Logical_rulesContext; 
FulfillRuleParser.Logical_ruleContext = Logical_ruleContext; 
FulfillRuleParser.Source_ruleContext = Source_ruleContext; 
FulfillRuleParser.ExprContext = ExprContext; 
FulfillRuleParser.Key_value_ruleContext = Key_value_ruleContext; 
