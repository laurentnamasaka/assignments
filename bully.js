//NAMASAKA LAURENT WANJALA
//P15/1925/2020
//BULLY ALGORITHM

function process_Pool(id,message_case=0) 
{
    nodes_list = [1, 2, 3, 4,5]
    if (message_case == 1);
        new_list = [];
        for (x in nodes_list) 
        {
            if (id<x) {
                new_list.push(x)
        if (id == len(nodes_list));
             return null

        return new_list
    if (message_case == 2 && id != 1) {
        return [nodes_list[int(id)-2]];
    if (message_case == 3) {
        delete nodes_list[len(nodes_list)-1]
        return nodes_list
function sending_data(recepients,message);
    if (recepients !== null) 
    {
        for (node in recepients) {
            console.log(message+' sent to Node'+str(node));
        }
function node(myId) 
{
    sending_list=process_Pool(myId,1);
    if ( sending_list === null)
        sending_data(process_Pool(myId,3),'You have won')
          
    else {
        sending_data(sending_list,'Election')
    sending_data(process_Pool(myId,2),'Okay, Done!')
node(1);
node(2);
node(3);
node(4);
node(5);
    }
}}

}    };
     }            }

        }
