const createHistoryEvent = (type) => {
  const origin = history[type];
  console.log(origin, origin.apply);
  return function (this, ...args) {
    const res = origin.aplly(this, args);
    const e = new Event(type);
    window.dispatchEvent(e);
    return res;
  };
};
console.log('页面更新');

window['trackerHistory'] = () => {
  console.log('执行力');
  window.history['pushState'] = createHistoryEvent('pushState');
  window.history['replaceState'] = createHistoryEvent('replaceState');
  const list = ['pushState', 'replaceState'];
  list.forEach((event) => {
    window.addEventListener(event, (e) => {
      console.log('路由被改变了', e);
    });
  });
  window.addEventListener('hashchange', (e) => {
    console.log('哈希路由变化', e);
  });
};
window['trackerHistory']();
