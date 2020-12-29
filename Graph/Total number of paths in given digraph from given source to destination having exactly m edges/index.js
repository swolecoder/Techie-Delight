
 let edges = [
    [0, 6], [0, 1], [1, 6], [1, 5], [1, 2], [2, 3], [3, 4],
    [5, 2], [5, 3], [5, 4], [6, 5], [7, 6], [7, 1]
];


let graph = {};

for(let [u,v] of edges){

if(!(u in graph))graph[u] = [];
graph[u].push(v)
}

console.log(graph)


function modifiedBFS(src,des, m ){

let queue= [[src, 0]];

let count = 0;

while(queue.length){

let [data,step] = queue.shift();
if(data == des && step == m){
 count = count + 1;
}

if(step > m) continue;
if(graph[data]){

  for(let child of graph[data]){
    queue.push([child, step+1])
  }
}

}
return count;

}

console.log(modifiedBFS('0', '3', 3))