grammar FulfillRule;

file                    : definition definition_id logical_rules EOF;

definition              : DEFINITION_TOKEN ':' TEXT;

definition_id           : DEFINITION_ID_TOKEN ':' (TEXT|DEFAULT);

logical_rules           : 'rules:' (logical_rule)+;

logical_rule            : source_rule  IS FULFILLED BY expr;

source_rule             : (ANY TASK_TOKEN FROM key_value_rule TO key_value_rule | key_value_rule);

expr                    : expr (AND|OR) expr
                        | '(' expr ')'
                        | key_value_rule
                        ;

key_value_rule          : TASK_TOKEN TEXT;

DEFINITION_TOKEN        : 'definition';
DEFINITION_ID_TOKEN     : 'definition_id';
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