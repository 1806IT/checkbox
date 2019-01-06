function buyPack(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve('买')
            }else {
                reject('不买')
            }
        },Math.random()*1000)
    })
}
var a
buyPack().then(function(data){
    console.log(data )
},(data)=>{
    console.log(data )
})
function ajax({url='xxx',type='get',dataType='json'}){
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest()
        xhr.open(type,url,true)
        xhr.responseType=dataType
        xhr.onload=function(){
            resolve(xhr.response)
        }
        xhr.onerror=function(err){
            reject(err)
        }
        xhr.send()
    })
}
