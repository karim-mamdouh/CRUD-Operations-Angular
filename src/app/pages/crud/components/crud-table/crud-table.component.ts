import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
})
export class CrudTableComponent implements OnInit {
  //Inputs
  @Input() tableData: Array<Employee> = [];
  @Input() tableHeaders!: Array<string>;
  //Event emitters
  @Output() editEmployee: EventEmitter<number> = new EventEmitter();
  @Output() deleteEmployee: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (!this.tableData || !this.tableHeaders) {
      throw new Error('Check inputs initialaization');
    }
  }

  handleEditClick(id: number): void {
    this.editEmployee.emit(id);
  }
  handleDeleteClick(id: number): void {
    this.deleteEmployee.emit(id);
  }
}
