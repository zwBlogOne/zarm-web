(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(n,e,t){"use strict";t.r(e);var r=t(22),o=t.n(r),a=t(18),i=t.n(a),u=t(19),l=t.n(u),s=t(20),c=t.n(s),d=t(21),m=t.n(d),h=t(172),p=(t(170),t(327),function(n){function e(){return i()(this,e),c()(this,(e.__proto__||o()(e)).apply(this,arguments))}return m()(e,n),l()(e,[{key:"document",value:function(){return t(329)}}]),e}(h.a));e.default=p},170:function(n,e,t){"use strict";t(65)},172:function(n,e,t){"use strict";var r=t(173),o=t.n(r),a=t(177),i=t.n(a),u=t(179),l=t.n(u),s=t(180),c=t.n(s),d=t(22),m=t.n(d),h=t(18),p=t.n(h),f=t(19),v=t.n(f),y=t(20),g=t.n(y),b=t(21),k=t.n(b),E=t(0),w=t.n(E),_=t(43),C=t.n(_),S=t(171),x=t.n(S),M=t(181),V=t.n(M),D=t(176),N=t.n(D),A=t(23),I=t.n(A),T=t(182),j=t(1),B=t.n(j),L=t(175),R=t.n(L),O=(t(183),t(184),t(185),t(186),t(187),function(n){function e(){return p()(this,e),g()(this,(e.__proto__||m()(e)).apply(this,arguments))}return k()(e,n),v()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,r=e.value;this.cm=R()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(r),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return w.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(E.Component)),W=O;O.propTypes={onChange:B.a.func,value:B.a.string},O.defaultProps={onChange:function(){},value:""};var H=function(n){function e(n){p()(this,e);var t=g()(this,(e.__proto__||m()(e)).call(this,n));return t.playerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.description=x()(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={showBlock:!1},t.blockControl=t.blockControl.bind(t),t}return k()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&C.a.unmountComponentAtNode(this.containerElem)}},{key:"blockControl",value:function(){this.setState({showBlock:!this.state.showBlock})}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(44),t.e(42)]).then(t.bind(null,368)).then(function(n){var t=["context","React","ReactDOM"],r=[e,w.a,C.a];return I()(n).forEach(function(e){t.push(e),r.push(n[e])}),{args:t,argv:r}}).then(function(t){var r=t.args,o=t.argv,a=Object(T.transform)("\n        class Demo extends React.Component {\n          "+n+"\n        }\n\n        ReactDOM.render(<Demo {...context.props} />, document.getElementById('"+e.playerId+"'))\n      ",{presets:["es2015","react"]}).code;r.push(a),(new(Function.prototype.bind.apply(Function,[null].concat(N()(r))))).apply(void 0,N()(o)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return w.a.createElement("div",{className:"demo-block demo-box demo-"+this.props.name},w.a.createElement("div",{className:"source",id:this.playerId,ref:function(e){n.containerElem=e}}),this.state.showBlock&&w.a.createElement("div",{className:"meta"},this.description&&w.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:this.description}}),w.a.createElement(W,{value:this.source[2],onChange:function(e){return n.renderSource(e)}})),w.a.createElement("div",{className:"demo-block-control",onClick:this.blockControl},this.state.showBlock?w.a.createElement("span",null,w.a.createElement("i",{className:"el-icon-caret-top"}),"隐藏"):w.a.createElement("span",null,w.a.createElement("i",{className:"el-icon-caret-bottom"}),"展开")))}}]),e}(w.a.Component),U=function(n){function e(n){p()(this,e);var t=g()(this,(e.__proto__||m()(e)).call(this,n));return t.nodeList=[],t.components=new c.a,t.renderer=new x.a.Renderer,t.renderer.table=function(n,e){return'<table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table>"},t}return k()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){C.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var r,o=i()(this.components);!(n=(r=o.next()).done);n=!0){var a=r.value,u=l()(a,2),s=u[0],c=u[1],d=document.getElementById(s);this.nodeList.push(d),d instanceof HTMLElement&&C.a.render(c,d)}}catch(n){e=!0,t=n}finally{try{!n&&o.return&&o.return()}finally{if(e)throw t}}V.a.highlightAll()}},{key:"render",value:function(){var n=this,e=this.document();if("string"==typeof e){this.components.clear();var t=x()(e.replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,r){var a=r.toString(36);return n.components.set(a,w.a.createElement(H,o()({name:n.constructor.name.toLowerCase()},n.props),t)),"<div id="+a+"></div>"}),{renderer:this.renderer});return w.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}return w.a.createElement("span",null)}}]),e}(w.a.Component);e.a=U},327:function(n,e,t){},329:function(n,e){n.exports='## Slider 滑动输入条\n滑动型输入器。\n\n### 基础用法\n\n最简单的用法。\n\n:::demo\n\n```js\n  render() {\n    return (\n      <div>\n        <Slider round min={0} max={300} step={1} defaultValue={80} />\n      </div>\n    )\n  }\n```\n:::\n\n### 不同主题\n五种主题。\n\n:::demo Slider 组件提供5种主题，由`theme`属性来定义，支持`default`,`info`,`success`,`warning`,`error`。\n\n```js\n  render() {\n    return (\n      <div>\n        <Slider round min={0} max={300} step={1} defaultValue={80} />\n        <Slider round min={0} max={300} step={1} defaultValue={80} theme="info"/>\n        <Slider round min={0} max={300} step={1} defaultValue={80} theme="success"/>\n        <Slider round min={0} max={300} step={1} defaultValue={80} theme="warning"/>\n        <Slider round min={0} max={300} step={1} defaultValue={80} theme="error"/>\n      </div>\n    )\n  }\n```\n:::\n\n### 多个滑动手柄\n\n可以设置多个滑动手柄。\n\n:::demo 通过`HanleAmount`设置。\n\n```js\n  render() {\n    return (\n      <div>\n        <Slider round min={0} max={300} step={1} defaultValue={80} handleAmount={2} styleWidth={600} />\n      </div>\n    )\n  }\n```\n:::\n\n### 取值回调\n\n可以实时获取值。\n\n:::demo 通过`getValue`添加回调函数。\n\n```js\n  render() {\n    return (\n      <div>\n        <Slider\n          min={0} \n          max={300}\n          styleWidth={600}\n          getValue={(value, i) => {\n            console.log(value, i);\n          }}  \n        />\n      </div>\n    );\n  }\n```\n:::\n\n### 更多自定义设置\n\n通过`range`, `rangeColors`属性自定义样式。\n\n:::demo\n\n```js\n  render() {\n    return (\n      <div>\n        <Slider round isRange handleAmount={2} rangeColors={[\'red\', \'yellow\']} styleWidth={600} min={0} max={300} step={1} defaultValue={[80, 150]} />\n      </div>\n    )\n  }\n```\n:::\n\n\n### Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| min     | 最小范围   | number  |   -            |    0    |\n| max     | 最大范围   | number    |   - |     -   |\n| step     | 步长   | number    |   - |     1   |\n| defaultValue     | 默认值   | number/number[]    | — | 0   |\n| showTip     | 是否显示Tip   | boolean   | — | true |\n| handleAmount     | 滑动手柄数量   |  number | — | 1 |\n| round     | 端点是否圆角   | boolean    | — | false   |\n| isRange     | 是否双滑块模式   | boolean    | — | false   |\n| rangeColors     | 双滑块颜色  |  []   | — | -   |\n\n### Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| getValue | 滑动手柄时候触发的事件 | (value, index) |'}}]);