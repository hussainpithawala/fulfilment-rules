// Generated from EvaluateRule.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,104,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,4,12,94,
8,12,11,12,12,12,95,1,13,4,13,99,8,13,11,13,12,13,100,1,13,1,13,0,0,14,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,0,
2,3,0,46,57,65,90,97,122,2,0,9,10,32,32,105,0,1,1,0,0,0,0,3,1,0,0,0,0,5,
1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,
17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,
0,0,1,29,1,0,0,0,3,31,1,0,0,0,5,33,1,0,0,0,7,41,1,0,0,0,9,46,1,0,0,0,11,
52,1,0,0,0,13,58,1,0,0,0,15,63,1,0,0,0,17,67,1,0,0,0,19,72,1,0,0,0,21,78,
1,0,0,0,23,89,1,0,0,0,25,93,1,0,0,0,27,98,1,0,0,0,29,30,5,40,0,0,30,2,1,
0,0,0,31,32,5,41,0,0,32,4,1,0,0,0,33,34,5,100,0,0,34,35,5,101,0,0,35,36,
5,102,0,0,36,37,5,97,0,0,37,38,5,117,0,0,38,39,5,108,0,0,39,40,5,116,0,0,
40,6,1,0,0,0,41,42,5,65,0,0,42,43,5,78,0,0,43,44,5,89,0,0,44,45,5,32,0,0,
45,8,1,0,0,0,46,47,5,84,0,0,47,48,5,65,0,0,48,49,5,83,0,0,49,50,5,75,0,0,
50,51,5,32,0,0,51,10,1,0,0,0,52,53,5,70,0,0,53,54,5,82,0,0,54,55,5,79,0,
0,55,56,5,77,0,0,56,57,5,32,0,0,57,12,1,0,0,0,58,59,5,32,0,0,59,60,5,84,
0,0,60,61,5,79,0,0,61,62,5,32,0,0,62,14,1,0,0,0,63,64,5,73,0,0,64,65,5,83,
0,0,65,66,5,32,0,0,66,16,1,0,0,0,67,68,5,32,0,0,68,69,5,79,0,0,69,70,5,82,
0,0,70,71,5,32,0,0,71,18,1,0,0,0,72,73,5,32,0,0,73,74,5,65,0,0,74,75,5,78,
0,0,75,76,5,68,0,0,76,77,5,32,0,0,77,20,1,0,0,0,78,79,5,70,0,0,79,80,5,85,
0,0,80,81,5,76,0,0,81,82,5,70,0,0,82,83,5,73,0,0,83,84,5,76,0,0,84,85,5,
76,0,0,85,86,5,69,0,0,86,87,5,68,0,0,87,88,5,32,0,0,88,22,1,0,0,0,89,90,
5,66,0,0,90,91,5,89,0,0,91,24,1,0,0,0,92,94,7,0,0,0,93,92,1,0,0,0,94,95,
1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,26,1,0,0,0,97,99,7,1,0,0,98,97,1,
0,0,0,99,100,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,
103,6,13,0,0,103,28,1,0,0,0,3,0,95,100,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class EvaluateRuleLexer extends antlr4.Lexer {

    static grammarFileName = "EvaluateRule.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'default'", "'ANY '", "'TASK '", 
                         "'FROM '", "' TO '", "'IS '", "' OR '", "' AND '", 
                         "'FULFILLED '", "'BY'" ];
	static symbolicNames = [ null, null, null, "DEFAULT", "ANY", "TASK_TOKEN", 
                          "FROM", "TO", "IS", "OR", "AND", "FULFILLED", 
                          "BY", "TEXT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "DEFAULT", "ANY", "TASK_TOKEN", "FROM", 
                      "TO", "IS", "OR", "AND", "FULFILLED", "BY", "TEXT", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

EvaluateRuleLexer.EOF = antlr4.Token.EOF;
EvaluateRuleLexer.T__0 = 1;
EvaluateRuleLexer.T__1 = 2;
EvaluateRuleLexer.DEFAULT = 3;
EvaluateRuleLexer.ANY = 4;
EvaluateRuleLexer.TASK_TOKEN = 5;
EvaluateRuleLexer.FROM = 6;
EvaluateRuleLexer.TO = 7;
EvaluateRuleLexer.IS = 8;
EvaluateRuleLexer.OR = 9;
EvaluateRuleLexer.AND = 10;
EvaluateRuleLexer.FULFILLED = 11;
EvaluateRuleLexer.BY = 12;
EvaluateRuleLexer.TEXT = 13;
EvaluateRuleLexer.WS = 14;


