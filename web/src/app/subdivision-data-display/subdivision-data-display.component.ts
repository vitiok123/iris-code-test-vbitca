import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  readonly filterBySubdivisionStatusCodes = ['', 'Active', 'Future', 'Builtout'];
  displayedColumns: string[] = ['name', 'subdivisionStatusCode', 'nearMapImageDate', 'id'];
  filterBy = '';
  data: MatTableDataSource<any>;

  constructor(private apiService: ApiService) {
    // @ts-ignore
    this.data = new MatTableDataSource([]);
  }

  ngOnInit(): void {
    this.apiService.getSubdivisions().subscribe((data: any) => {
      this.data.data = data;
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    });
  }

  filterByChanged() {
    this.data.filter = this.filterBy;
  }
}
