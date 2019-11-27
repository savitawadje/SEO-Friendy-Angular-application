import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Blog } from '../model/blog';
import { Contact } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class BlogService {


  blogList: AngularFireList<any>;
  
  blog: Blog;
  contactList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  blogform = new FormGroup({
     $key: new FormControl(null), 
     title: new FormControl('', Validators.required),
     description: new FormControl('', Validators.required),
     image: new FormControl(''),
  })
  
  insertBlog(blog : Blog){
    this.firebase.list('blog').push({
          title: blog.title,
          description: blog.description,
          image: blog.image
    });
    this.blogform.reset();
  }
  getBlogs() {
    this.blogList = this.firebase.list('blog');
    return this.blogList;
  }
  getBlogDetails(){
    this.blogList=this.firebase.list('blog');
    return this.blogList;
  }
  update(blog){
  console.log("blog",blog)
    this.blogList.update(blog.$key,
        {
          title: blog.title,
          description: blog.description,
          image: blog.image} 
  );
  
}

deleteblog($key) 
  {
    this.blogList.remove($key);
}

insertContact(contact : Contact){
  this.firebase.list('contact').push({
        name: contact.name,
        email: contact.email,
        message: contact.message
  });

  //contact model values
  console.log("this is new contact====>>", contact);
  
}
  
getContactDetail() {
  this.contactList = this.firebase.list('contact');
  return this.contactList;
}

  













  }









