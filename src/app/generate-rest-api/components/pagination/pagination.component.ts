import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { PagerService } from '../../service/pager.service';
import { SignupService } from '../../service/signup.service';
import { environment } from '../../../../environments/environment.prod';

const apiUrl = environment.serverURL + "v1/user";
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(
    private http: Http,
    private pagerService: PagerService,
    private userService: SignupService,
  ) { }

  private allItems: any[];
  pager: any = {};
  pagedItems: any[];


  ngOnInit() {
    const url = `${apiUrl}/`;
    this.http.get(url)
      .map((response: Response) => response.json())
      .subscribe(data => {
        this.allItems = data;
        this.setPage(1);
      });
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
