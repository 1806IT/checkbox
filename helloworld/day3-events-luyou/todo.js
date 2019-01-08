const vm=new Vue({
    el:'#app',
    data:{
        todos:[{isSelected:false,title:'睡觉'},{isSelected:false,title:'吃饭'}],
        title:'',
        cur:'',
        hash:''
    },
    created(){//ajax获取，初始化数据
        //如果localStorage中有数据，就用有的没有就用自带的
        this.todos=JSON.parse(localStorage.getItem('data'))||this.todos
        //监控哈希值的变化,若页面已经有hash,重新刷新页面也要获取hash值
        this.hash=window.location.hash.slice(2)||'all'
        window.addEventListener('hashchange',()=>{
            console.log('监控hash变化')
            console.log(window.location)
            console.log(window.location.hash)
            //当hash值变化重新操作记录的数据
            this.hash=window.location.hash.slice(2)
        },false)
    },
    watch:{//watch默认只监控一层数据变化，深度监控就要如下，改成对象
        /*todos(){//简单监控写成函数形式,名字要和监控的数据一致
            console.log('监控数据变化，以便保存 ')
        }*/
        todos:{//名字要和监控的数据一致
            handler(){//默认写成函数，就默认写了个handler
                //localStorage默认存的是字符串
                console.log('监控数据变化，以便保存 ')
                localStorage.setItem('data',JSON.stringify(this.todos))
            },deep:true
        }
    },
    directives:{
        focusAa(el,bingdings){
            if(bingdings.value){
                el.focus()//当cur==todo时，即点击li时，让内部输入框获取焦点
            }
        }
    },
    methods:{
        add(){//keyup，keydown差一个单词，keydown时候内容没有进入到输入框

                console.log(this.title)
                this.todos.push({isSelected:false,title:this.title})
                this.title=''

            },
        remove(todo,thisindex){
            console.log(todo)
            console.log(thisindex)
            //通过下标和内容删除都没问题，只是别搞错了
            this.todos=this.todos.filter((item,index)=>index!==thisindex)
        },
        remember(todo){//当前传递过来的为当前点击的对象
            this.cur=todo
            console.log('编辑模式')
        },
        cancel(){
            this.cur=''
            console.log('退出编辑')
        }
    },
    computed:{
        count(){
            return this.todos.filter((item,index)=>item.isSelected!==true).length
        },
        filterTodos(){
            if(this.hash==='all') return this.todos
            if(this.hash=='finished') return this.todos.filter(item=>item.isSelected==true)
            if(this.hash=='unfinished') return this.todos.filter(item=>item.isSelected==false)
            return this.todos
        }

    }
})
// 1:将数据循环到页面上
// 2：敲回车是添加新数据（需要加入isSelected属性）
// 3：删除功能
// 4：计算下当前没有被选中的个数