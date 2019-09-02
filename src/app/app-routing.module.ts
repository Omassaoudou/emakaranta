import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: '',
  
  children: [
    {
      path: '',
      component: HomeComponent
    }, 
    {
      path: 'accueil',
      component: HomeComponent
      
    },
    
    {
        path: 'profil',
        loadChildren: './profil/profil.module#ProfilModule',
        data: {
        title: 'Profil'
        }
    },
    {
      path: 'cours',
      loadChildren: './cours/cours.module#CoursModule',
      data: {
      title: 'Cours'
      }
    },
    {
      path: 'forums',
      data: {
        title: 'Forums',
      },
      children: [
        {
          path: 'libre',
          loadChildren: './+forums/libre/libre.module#LibreModule',
          data: {
            title: 'Libre'
          }
        },
        {
          path: 'suivi',
          loadChildren: './+forums/suivi/suivi.module#SuiviModule',
          data: {
            title: 'Suivi'
          }
        }, 
      ]
    },
    {
      path: 'social',
      loadChildren: './social/social.module#SocialModule',
      data: {
      title: 'Social'
      }
    },
    {
      path: 'pack',
      loadChildren: './pack/pack.module#PackModule',
      data: {
        title: 'Packs'
      }
    }
    ,{
      path: 'administration',
      loadChildren: './administration/administration.module#AdministrationModule',
      data: {
        title: 'Administration'
      }
    }, 
  
    {
      path: 'message',
      loadChildren: './message/message.module#MessageModule',
      data: {
      title: 'Messages'
      }
    },
    {
      path: 'profil',
      loadChildren: './profil/profil.module#ProfilModule',
      data: {
      title: 'Profil'
      }
    },




    ]
  }, 




  {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule',
    data: {
      customLayout: true
      
    }
  }, {
    path: 'register',
    loadChildren: './+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
