export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

let id = 0;

export const createEmployee = (
  firstName: string,
  lastName: string,
  phone: string
): Employee => ({ firstName, lastName, phone, id: id++ });

export const createEmployeeWithID = (
  firstName: string,
  lastName: string,
  phone: string,
  id: number
): Employee => ({ firstName, lastName, phone, id });
