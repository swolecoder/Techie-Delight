//BFS
let edge = [
    ['a','b'],
    ['a','c'],
    ['b','e'],
    ['b','d'],
     ['d','e'],
  ]

  let graph  = {};
  let status = {};
  let N = new Set()

  for(let [u,v] of edge){

    if(!(u in graph))graph[u] = [];
    if(!(v in graph))graph[v] = [];
    N.add(u);
    N.add(v);
    //for status intially -1
    if(status[u] == undefined) status[u] = -1;
    if(status[v] == undefined) status[v] = -1;

    graph[u].push(v);
    graph[v].push(u);
  }

  /*
   -1 intially/
   0: in queue
   1 : visited
  */

  function bfs(node){

    let queue = [];

    queue.push(node);

    //once in queue change its status
    status[node] = 0;

    //add

    while(queue.length){


     let data = queue.shift();

     //chnage status to 1
     if(status[data] ==1) continue;

     //mark it as visited
     status[data] = 1;

     if(graph[data]){
       //explore child

       for(let child of graph[data]){

         //if child is not in queue  and not been explored
         if(status[child]  == -1){
            status[child] = 0;//means its in queue
            queue.push(child)
         }else if(status[child] == 0)return false; //found a cycle


       }
     }
    }
    return true;
  }


  console.log(graph, N)
  console.log(bfs("a"))