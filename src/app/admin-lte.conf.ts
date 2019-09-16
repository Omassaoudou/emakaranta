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

    {label: 'Mes Cours', route: 'cours/mescours', iconClasses: 'fa fa-book'},


    // {label: 'Messages', route: 'message', iconClasses: 'fa fa-text'},

   
    {label: 'Forums', iconClasses: 'fa fa-comments', children: [
      {label: 'Libre', route: 'forums/libre'},
      {label: 'Suivi', route: 'forums/suivi'}
    ]},

    {label: 'RESEAUX SOCIAUX', separator: true},

    {label: 'Réseau social', route: 'social', iconClasses: 'fa fa-users'},

    {label: 'ABONNEMENTS', separator: true},

    {label: 'Packs', route: 'pack', iconClasses: 'fa fa-shopping-cart'},

    {label: 'ADMINISTRATEUR', separator: true},

    {label: 'Administration du site', route: 'administration', iconClasses: 'fa fa-code'},
    {label: 'ProfileEditor', route: 'profileeditor', iconClasses: 'fa fa-code'},

  ]
};
