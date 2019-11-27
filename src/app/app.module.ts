import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// used to create fake backend
import { fakeBackendProvider } from '../app/helper/fake-backend';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { RecipeComponent } from './view/recipe/recipe.component';
import { AboutusComponent } from './view/aboutus/aboutus.component';
import { ContactComponent } from './view/contact/contact.component';
import { AdminComponent } from './view/admin/admin.component';
import { ManageBlogsComponent } from './view/admin/manage-blogs/manage-blogs.component';

import { FormsModule } from '@angular/forms';
 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { EditBlogComponent } from './view/admin/edit-blog/edit-blog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './view/footer/footer.component';
import { BlogsComponent } from './view/blogs/blogs.component';

import { RouterModule } from '@angular/router';
import { PancakeComponent } from './view/recipe/pancake/pancake.component';
import { PapadiComponent } from './view/recipe/papadi/papadi.component';
import { EggfryComponent } from './view/recipe/eggfry/eggfry.component';
import { SundaeIcecreamComponent } from './view/recipe/sundae-icecream/sundae-icecream.component';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Authguard } from './guard/authguard';
import { BlogService } from './service/blog.service';
import { NotfoundComponent } from './view/notfound/notfound.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecipeComponent,
    AboutusComponent,
    ContactComponent,
    AdminComponent,
    ManageBlogsComponent,
    EditBlogComponent,
    FooterComponent,
    BlogsComponent,
    PancakeComponent,
    PapadiComponent,
    EggfryComponent,
    SundaeIcecreamComponent,
    NotfoundComponent,
    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule, 
  ],
  providers: [
    Authguard,
    AuthenticationService,
    UserService,
    BlogService,
    DatePipe,
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
