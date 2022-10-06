export default {
  isCollapse: state => state.Menu.isCollapse,
  menuList: state => state.Menu.menuList,
  editableTabsValue: state => state.Tags.editableTabsValue,
  editableTabs: state => state.Tags.editableTabs,
  tags: state => state.Tags.tags,
  token: state => state.User.token,
  authList: state => state.Menu.authList
}
