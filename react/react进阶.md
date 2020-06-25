# 单项数据流

```js
<ul>
    {
        this.state.list.map((item,index)=>{
            return (
                <XiaojiejieItem 
                key={index+item}  
                content={item}
                index={index}
                list={this.state.list}
                deleteItem={this.deleteItem.bind(this)}
                />
            )
        })
    }
</ul> 
```
比如我们在父组件中可以直接把this.state.list传递过来，其实这样传是没有问题的，问题是你只能使用这个值，而不能修改这个值

# 函数式编程的好处
1.函数式编程让我们的代码更清晰，每个功能都是一个函数  
2.函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试  
React框架也是函数式编程，所以说优势在大型多人开发的项目中会更加明显，让配合和交流都得心应手

