import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'goods', ...(require('F:/kkb/react04/src/models/goods.js').default) });
app.model({ namespace: 'user', ...(require('F:/kkb/react04/src/models/user.js').default) });
