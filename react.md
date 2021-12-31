1.谈谈你对fiber的认识？
Fiber 有三层理解’
a.架构设计，在React15之前，采用Stack Reconciler,16采用Fiber Reconciler；
b.数据结构,每一个fiber节点对应一个React Element,保存了组件信息，对应DOM节点的信息；
c.执行单元，每个Fiber节点上保存了本次更新中改变的状态，以及要执行的工作；

React 提供了 Reconciler 协调器，Renderer 渲染器， 16提供了 Scheduler

Stack Reconciler :
