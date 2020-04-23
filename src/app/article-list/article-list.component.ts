import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { SharedService } from '../shared.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = null;
  constructor(private _articleService: ArticleService, private _title: Title, private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(articles => {
      this.articles = articles;
      this._title.setTitle(`${this._sharedService.blogTitle}`);
      // console.log(articles);

    });
  }



}
