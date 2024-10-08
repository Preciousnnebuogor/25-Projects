"use client"
export default function ArraryMethod(){
const method =["john", "may", "cime", "money"]
const method2 = ["johnny", "framay", "mocime", "enmoney"];
//  const result = method.join();
//  console.log(result);
 const result2 = method.concat(method2)
 console.log(result2)
 //method.splice(2,3)
 //method.splice(1,2)
 const name = method.slice(1,3)
 console.log(name)
 

   return <div>
  <p>{`i am very okay ${method} so whate ${method2}`}</p>

   </div>
}