import { BusinessUnit } from './BusinessUnit';
import { Category } from './Category';
import { Designation } from './Designation';

export class HierarchyNode {

   hierarchyType: string ;
   businessUnit: BusinessUnit;
   designation: Designation;
   agentGroupCategory: Category;

 }
