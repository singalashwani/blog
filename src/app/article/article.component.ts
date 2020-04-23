import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Title, Meta } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = null;
  constructor(
    private route: ActivatedRoute,
    private _articleService: ArticleService,
    private _router: Router,
    private _title: Title,
    private _sharedService: SharedService,
    private _metaTags: Meta) { }

  ngOnInit(): void {
    // console.log(this.route.params);
    this.route.params.subscribe(params => {
      console.log(params);
      const key = params.key;
      this._articleService.getArticle(key).subscribe(article => {
        console.log('11111');
        console.log(article);
        if(article === undefined) {
          this._router.navigateByUrl('404');
          return;
        }
        this._title.setTitle(`${article.title} - ${this._sharedService.blogTitle}`);
        this.article = article;
        this._metaTags.addTags([
          {name: 'meta name', content: 'meta content will come here.'},
          {property: 'og:title', content: 'open grapg title will come here'},
          {property: 'og:type', content: 'open grapg title will come here'},

          {property: 'og:image', content: 'open grapg title will come here'},
          {property: 'og:description', content: 'open grapg title will come here'},
          {property: 'og:title', content: 'open grapg title will come here'},
        ]);
      });

    });

  }

}
