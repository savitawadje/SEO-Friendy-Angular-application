import { Component, OnInit ,Input} from '@angular/core';
import { Blog } from '../../../model/blog';
import { BlogService } from '../../../service/blog.service';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  @Input() blog: Blog;
  title = 'MANAGE BLOG';

  error: string;
  subscribe: any;
  blogArray: any[];
  showDeletedMessage: boolean;
  searchText: string = "";

 constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    
    this.blogService.getBlogs().snapshotChanges().subscribe(
      list => {
        this.blogArray = list.map(item => {

          return {
            $key: item.key,
            ...item.payload.val()
          }; });

      });
      
 }

  onDelete($key) {
if(confirm("Are you sure you want to delete this post?")){
  this.blogService.deleteblog($key);
    this.showDeletedMessage = true;
    setTimeout(() => this.showDeletedMessage = false, 3000);
}
    
  
  }

  
updateBlog( value: any){
 
  
    console.log("value", value);
    this.blogService.blogform.setValue({
      $key: value.$key,
      title: value.title,
      description: value.description,
      image: value.image
    });

    // this.router.navigate(['/edit-blog', value.title])
  }

  
}



