const {Stack}=require('./stack')

function isLegalStack(str) {
  let stack=new Stack()
  for(var i=0;i<str.length;i++){
    let item=str[i]
    if(item=='('){
      stack.push(item)
    }else if(item==')'){
      // 如果为空，说明缺少左括号
      if(stack.isEmpty()){
        console.log(123);
        return false
      }else{
        stack.pop()
      }
    }
  }
  // console.log(stack.items());
  return stack.size() == 0
}
let str="((())"
str="(12(456)"
str="()()((12)))"
str="(1)(2)(((333)))"
console.log(isLegalStack(str));

