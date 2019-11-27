import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutusComponent } from './view/aboutus/aboutus.component';
import { RecipeComponent } from './view/recipe/recipe.component';
import { ContactComponent } from './view/contact/contact.component';
import { AdminComponent } from './view/admin/admin.component';
import { EditBlogComponent } from './view/admin/edit-blog/edit-blog.component';
import { PancakeComponent } from './view/recipe/pancake/pancake.component';
import { PapadiComponent } from './view/recipe/papadi/papadi.component';
import { EggfryComponent } from './view/recipe/eggfry/eggfry.component';
import { ManageBlogsComponent } from './view/admin/manage-blogs/manage-blogs.component';
import { SundaeIcecreamComponent } from './view/recipe/sundae-icecream/sundae-icecream.component';
import { Authguard } from './guard/authguard';
import { from } from 'rxjs';
import { NotfoundComponent } from './view/notfound/notfound.component';


const routes: Routes = [
  { 
    path: "manage-blogs", 
    component: ManageBlogsComponent,
    canActivate: [Authguard]
  },
  // { 
  //   path: "manage-blogs", 
  //   component: ManageBlogsComponent
  // },
  { 
    path: "", 
    component: HomeComponent
  },
  { 
    path: "home", 
    component: HomeComponent
  },
  { 
    path: "about", 
    component: AboutusComponent
  },
  { 
    path: "recipe", 
    component: RecipeComponent
  },
  { 
    path: "contact", 
    component: ContactComponent
  },

  { 
    path: 'admin', 
   component: AdminComponent,

  },

  // { 
  //   path: "admin", 
  //   component: ,

  // },

  { 
    path: "admin/edit-blog", 
    component: EditBlogComponent,

  },

  { 
    path: "recipe/pancake", 
    component: PancakeComponent,

  },
  { 
    path: "recipe/papadi", 
    component: PapadiComponent,

  },
  { 
    path: "recipe/eggfry", 
    component: EggfryComponent,

  },
  { 
    path: "recipe/sundaeicecream", 
    component: SundaeIcecreamComponent,

  },


{
   path: 'edit-blog/:key/:title/:description/:image',
   component: EditBlogComponent 

},

{
  path: '**',
  component: NotfoundComponent 

}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
