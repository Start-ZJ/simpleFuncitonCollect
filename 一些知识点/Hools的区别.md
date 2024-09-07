# use

    use 是一个 React Hook，它可以让你读取类似于 Promise 或 context 的资源的值

* 个人理解就是一个即插即用的异步回调处理hook。适配了next.js这种后端渲染的情况。
# useCallback

    useCallback 是一个允许你在多次渲染中缓存函数的 React Hook

* 比如说我现在调用一个获取学校图标的接口，可知这个接口的返回值基本上是不会变的，那么我就没必要每次进入页面的时候都要调用这个接口。这个时候我就可以使用useCallback来控制调用接口的频率

```jsx
import { useCallback } from 'react';

export default function ProductPage({ corpid }) {
    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', { corpid });
    }, [corpid]);
}
```
# useContext
    useContext 是一个 React Hook，可以让你读取和订阅组件中的 context。
- 用于获取上层传递给子组件的父元素数据，配合createContext使用。
具体使用示例可见H5选人组件
# useDebugValue
    useDebugValue 是一个 React Hook，可以让你在 React 开发工具 中为自定义 Hook 添加标签。
- 一个用来查BUG时查看具体参数值的hook，感觉使用频率不会高

# useDeferredValue

    是一个 React Hook，可以让你延迟更新 UI 的某些部分

* 简单理解就是一个DOM版的节流api。因为在一些大批量渲染的时候，往往渲染需要花费一两秒的时间，在这个期间可能会有闪屏或者是重复刷新的情况。用了这个hook，react会自动控制渲染的时机，也就是DOM树重新都生成好了，再统一渲染。避免上一次渲染还没好又要继续重新渲染的情况。这也是为啥这个hook不用传时间参数的原因。他的控制变量就是重新生成dom树的时间。
# useEffect
    useEffect 是一个 React Hook，它允许你 将组件与外部系统同步。
- 一个副作用处理函数。一般把一些数据改变后要跟随改变的逻辑放这里。
+ tips:
    - 触发事件逻辑最好不要放在这里，很容易出问题。比如click事件直接写在click里就可以了，没必要写在useEffect里。
    - 有些时候useEffect需要写一个return的事件。因为实际上useEffect是有两个过程的 一个是挂载，一个是卸载。大部分时候我们只关心挂载的时候。但是例如我们在useEffect里写了一个监听事件的时候，卸载的时候我们还要返回一个取消监听的事件，这样在重新渲染的时候才能正确的监听到事件。
# useEffectEvent
- 个人理解就是useEffect的一个弱化版本，官方说不会触发渲染，其主要目的是用来获取最新值来处理交互事件。
# useId
    useId 是一个 React Hook，可以生成传递给无障碍属性的唯一 ID。
- 用来给DOM元素生成id。保证前后端组件树的id唯一性。要注意的是不能作为key值来使用。
# useImperativeHandle
    useImperativeHandle 是 React 中的一个 Hook，它能让你自定义由 ref 暴露出来的句柄。
- 用来有限的暴露出子组件的内置方法。一般用于公共组件里。
# useInsertionEffect
-  配合css-in-js使用
# useLayoutEffect
useLayoutEffect 是 useEffect 的一个版本，在浏览器重新绘制屏幕之前触发。
- useEffect的一个特化版本，专为需要处理获取真实DOM元素的情况设置。例如需要获取DOM的真实高度啥的用这个。
# useMemo
useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果。
- 可以用来缓存一些无副作用的函数。例如一个简单的组件每次返回的DOM都是一个标题，那么就可以用useMemo
# useReducer
useReducer 是一个 React Hook，它允许你向组件里面添加一个 reducer。
- 简单理解就是useState的一个结构体
# useRef
useRef 是一个 React Hook，它能帮助引用一个不需要渲染的值。
- 用于一个固定值变量
# useState
useState 是一个 React Hook，它允许你向组件添加一个 状态变量。
- 懂得都懂 