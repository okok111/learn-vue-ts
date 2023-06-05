import { createApp } from 'vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'

const app = createApp(/* Your App Component */);
app.use(Element, { locale });
app.mount(/* Your App Mount Element */);

