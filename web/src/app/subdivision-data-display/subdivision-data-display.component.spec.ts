import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionDataDisplayComponent } from './subdivision-data-display.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ApiService} from "../api.service";

describe('SubdivisionDataDisplayComponent', () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  SubdivisionDataDisplayComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    apiService = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Check if the subdivision data is recieved after the component is created', (done) => {
    apiService.getSubdivisions().subscribe((data: any) => {
      component.data.data = data;
      expect(component.data.data.length).toBeGreaterThan(0);
      done();
    })
  });

  it('Check if filterBy "Active" subdivision Status Code', (done) => {
    apiService.getSubdivisions().subscribe((data: any) => {
      component.data.data = data;
      component.filterBy = 'Active';
      component.filterByChanged();
      expect(component.data.filteredData.every(x => x.subdivisionStatusCode === 'Active')).toBeTrue();
      done();
    })
  });

  it('Check if filterBy "Future" subdivision Status Code', (done) => {
    apiService.getSubdivisions().subscribe((data: any) => {
      component.data.data = data;
      component.filterBy = 'Active';
      component.filterByChanged();
      expect(component.data.filteredData.every(x => x.subdivisionStatusCode === 'Future')).toBeTrue();
      done();
    })
  });

  it('Check if filterBy "Builtout" subdivision Status Code', (done) => {
    apiService.getSubdivisions().subscribe((data: any) => {
      component.data.data = data;
      component.filterBy = 'Active';
      component.filterByChanged();
      expect(component.data.filteredData.every(x => x.subdivisionStatusCode === 'Builtout')).toBeTrue();
      done();
    })
  });
});
