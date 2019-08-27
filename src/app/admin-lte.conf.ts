export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},

    {label: 'Accueil', route: 'accueil', iconClasses: 'fa fa-home', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},

    // {label: 'Profil', route: 'profil', iconClasses: 'fa fa-user'},

    {label: 'Mes Cours', route: 'cours', iconClasses: 'fa fa-book'},


    // {label: 'Messages', route: 'message', iconClasses: 'fa fa-text'},

    {label: 'FORUMS', separator: true},
    {label: 'Forum libre', route: 'forums/libre',iconClasses: 'fa fa-comments'},
    {label: 'Forum suivi', route: 'forums/suivi',iconClasses: 'fa fa-comments'},

    {label: 'RESEAUX SOCIAUX', separator: true},

    {label: 'Réseau social', route: 'social', iconClasses: 'fa fa-users'},

    {label: 'ABONNEMENTS', separator: true},

    {label: 'Packs', route: 'social', iconClasses: 'fa fa-shopping-cart'},

    {label: 'ADMINISTRATEUR', separator: true},

    {label: 'Site administrateur', route: '#', iconClasses: 'fa fa-code'},


    // {label: 'Forums', iconClasses: 'fa fa-th-list', children:[
      
    // ]},




    // {label: 'COMPONENTS', separator: true},
    // {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    // {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    // {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Default Box', route: 'boxs/box'},
    //     {label: 'Info Box', route: 'boxs/info-box'},
    //     {label: 'Small Box', route: 'boxs/small-box'}
    //   ]},
    // {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    // {label: 'Form', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Input Text', route: 'form/input-text'}
    // ]},
    // {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'},
  ]
};