import { TreeNode } from 'primeng/api';

export interface GeocatalogTreeData {
  id?: number;
  name?: string;
  alias?: string;
  description?: string;
  identificator?: string;
  minZoom?: number;
  maxZoom?: number;
  visible?: boolean;
  opacity?: number;
}


export type GeocatalogTreeNode = TreeNode<GeocatalogTreeData>;
