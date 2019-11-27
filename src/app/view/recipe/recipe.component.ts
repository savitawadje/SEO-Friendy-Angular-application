import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../service/blog.service'
import { Blog } from 'src/app/model/blog';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
 
  @Input() blog: Blog;
  blogArray: any[];
  currentDate: any;
  constructor(private blogService: BlogService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.currentDate = this.datePipe.transform(new Date(),"dd-MM-yyyy");
    console.log(this.currentDate); //output - 14-02-2019

    this.blogService.getBlogs().snapshotChanges().subscribe(
      list => {
        this.blogArray = list.map(item => {
           return {
            $key: item.key,
            ...item.payload.val() };});
              });
  }


  
}
