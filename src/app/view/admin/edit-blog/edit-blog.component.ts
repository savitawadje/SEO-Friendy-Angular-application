import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {BlogService} from '../../../service/blog.service'

import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  
  model: Blog;
  blogArray: any[];
  submitted: boolean;
  updatestatusflag:any = 0;
 userKeygaistselectedRecord:any;
 titlegaistselectedRecord:any;
 descriptiongaistselectedRecord:any;
 imageAgaistselectedRecord:any;
  constructor( public blogService :BlogService,private _route:Router,private _activatedRoute:ActivatedRoute) { 
    this.model=new Blog();
  }

  ngOnInit() { 

      this._activatedRoute.params.subscribe(params=>{

      this.userKeygaistselectedRecord = params['key'];
      this.titlegaistselectedRecord= params['title'];
      this.descriptiongaistselectedRecord= params['description'];
      this.imageAgaistselectedRecord= params['image'];
      });

        if(this.userKeygaistselectedRecord != null){
          this.updatestatusflag = 1;
          this.model.$key = this.userKeygaistselectedRecord;
          this.model.description = this.descriptiongaistselectedRecord
          this.model.title = this.titlegaistselectedRecord;
          this.model.image = this.imageAgaistselectedRecord
        }
      
}

  handleFileInput(file) {

    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (_event:any) => {
    this.model.image = reader.result;
  }
   return this.model.image;
}
 

  onSubmit(){

    this.submitted = true;
    console.log("this.blogService.blogform.value)",this.blogService.blogform.value);

    if (this.blogService.blogform.valid) 
    {
      if (this.blogService.blogform.get('$key').value == null) 
      {
        this.model.description = this.blogService.blogform.value.description;
        this.model.title = this.blogService.blogform.value.title;
        this.model.image = this.blogService.blogform.value.image ? this.blogService.blogform.value.image : "";
        this.blogService.insertBlog(this.model);
        this.blogService.blogform.reset();
        this.model.image ='';
        this._route.navigate(['/manage-blogs']); 
      }
      else
      {
        this.model.$key = this.blogService.blogform.get('$key').value;
        console.log("this.model",this.model);
        this.blogService.update(this.model);
        this.blogService.blogform.reset();
        this.model.image ='';
        this.model.created_at = new Date();
        this._route.navigate(['/manage-blogs']);
      }
    
   
     this.blogService.blogform.reset();

  }
  }
  
}
