import Vue from 'vue'
import 
{ Button, 
  Form, 
  FormItem, 
  Input, 
  Container, 
  Header, 
  Aside, 
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  MessageBox 
} from 'element-ui'
import {Message} from 'element-ui'
// import lang from 'element-ui/lib/locale/lang/'
// import lang from '../../node_modules/element-ui/lib/locale/lang'
// import locale from 'element-ui/lib/locale'
// import locale from '../../node_modules/element-ui/lib/locale'

// locale.use(lang)
import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js'



Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Timeline)
Vue.use(TimelineItem)

