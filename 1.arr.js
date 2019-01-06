 //配置npm和语法
 //file->setting中的配置
 //1:forEach
 let arr=[1,23,4,5]
 arr.forEach(function(item,index){
     console.log('index is:'+index+'---'+'item is:'+item)
 })

 //2:filter 过滤数组   是否操作原数组：否   返回结果：过滤后的新数组    回调函数的返回结果，如果返回true，表示这一项放到新数组中

 let newArr=[2,0,4,63,3,7,23].filter(function(item){
     return item<5
 })
 console.log(newArr)
 //3:map映射，将原有的数组映射成一个新数组   是否操作原数组：否   返回结果：返回新数组    回调函数中返回什么这一项就是什么
 let arr1=[5,34,63,7685,2].map(function(item){
     return `<li>${item}</li>`
 })
 console.log(arr1)
 console.log(arr1.join(''))
 console.log(typeof arr1.join(''))
 //-----------4:includes
 let arr2=[2,3,6,8,3]
 console.log(arr2.includes(5))//返回的是布尔
//5:find 返回找到的哪一项，不会改变数组,回调函数中返回true表示找到了，找到后停止循环，找不到返回undefined
 let result=arr2.find(function(item,index){//找到具体的某一项用find
    return item.toString().indexOf(3)>-1
 })
 console.log(result)
 //6)  some  找true,找到 true后停止，返回true,找不到返回false
 //7)  every 找false,找到 false后停止，返回false，找不到返回true
//8) reduce收敛,4个参数,返回的是叠加后的结果,原数组不变，回调函数返回的结果
 //6找true,找到 true后停止，返回true
 [2,3,6,8,3].reduce(function (prev,next,index,item){
     console.log(prev,next)
     return 100//本次返回值会作为下一次的pre
 })


