grammar EvaluateRule;

expr                    : expr (AND|OR) expr
                        | '(' expr ')'
                        | key_value_rule
                        ;

key_value_rule          : TASK_TOKEN TEXT;

DEFAULT                 : 'default';
ANY                     : 'ANY ';
TASK_TOKEN              : 'TASK ';
FROM                    : 'FROM ';
TO                      : ' TO ';
IS                      : 'IS ';
OR                      : ' OR ';
AND                     : ' AND ';
FULFILLED               : 'FULFILLED ';
BY                      : 'BY';
TEXT                    : [a-zA-Z0-9./]+;
WS                      : [ \t\n]+ -> skip ; // toss out whitespace