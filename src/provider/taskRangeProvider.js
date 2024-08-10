import * as R from 'ramda';

export class TaskRangeProvider extends Object {
    constructor() {
        super();
        this._ranges = [{
            "from": "T3", "to": "T3.A", "tasks": ["T3", "T3.C", "T3.B", "T3.A"]
        }, {
            "from": "T300", "to": "T300.A", "tasks": ["T300", "T300.C", "T300.B", "T300.A"]
        }, {
            "from": "T4", "to": "T4.A", "tasks": ["T4", "T4.C", "T4 .B", "T4.A"]
        }]
    }

    get_tasks_for_range(selector) {
        const predicate = (arg_1, arg_2) => arg_1['from'] === arg_2['from'] && arg_1["to"] === arg_2["to"]
        return R.head(R.map((item) => item['tasks'], R.filter(R.curry(predicate)(selector), this._ranges)))
    }
}


export class TaskEvaluator extends Object {

    constructor() {
        super();
        this.evaluation_table = {
            'T300': false,
            'T300.C': true,
            'T300.B': false,
            'T300.A': true,
            'T3': false,
            'T3.C': true,
            'T3.B': false,
            'T3.A': true,
            'T1': false,
            'T6': true,
            'T7': false,
            'T10': true,
            'T4.A': true,
            'T5.A': true,
            'T50.1': true,
            'T2': true,
            'T4': true
        }
    }

    evaluate(task) {
        return this.evaluation_table[task];
    }
}
