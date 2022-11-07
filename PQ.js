//NAMASAKA LAURENT WANJALA;
//P15/1925/2020;
//QUESTION 2;

var random = require('random');

function define_node()
 {
    opt = {'value': random.randint(1000, 10000)};
    opt['timeout_left'] = random.randint(0, 60);
    opt['created'] = random.randint(0, 3600);
    return opt;
}

function pull_values(opt1, opt2) {
    
    if (opt1['timeout_left'] < opt2['timeout_left']) 
    {
        if (opt1['created'] < opt2['created'])
        {
            opt1['value'] = opt2['value'];
    return {
        'value': opt2['value'],
        'timeout_left': opt2['timeout_left'],
        'created': opt2['created']
    };
        }
//Initializing P
function run_solution2() 
{
   
    P = define_node();
    Q = define_node();
}
    //Get values from Q
    P = pull_values(P, Q);
    console.log(P);
    }

run_solution2();
}