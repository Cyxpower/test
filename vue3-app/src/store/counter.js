//定义关于counter的store
import {
    defineStore
} from 'pinia'
//defineStore 是返回一个函数 函数命名最好有use前缀，根据函数来进行下一步操作
const useCounter = defineStore('counter', {
    state: () => ({
        count: 99
    }),
    actions: {
        changecount(params) { 
            this.count = params
        }
    }
    
})



export default useCounter