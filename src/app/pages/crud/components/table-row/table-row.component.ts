import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {
  @Input() rowData!: Employee;

  constructor() {}

  ngOnInit(): void {
    if (!this.rowData) {
      throw new Error('Check inputs initialaization');
    }
  }
}
