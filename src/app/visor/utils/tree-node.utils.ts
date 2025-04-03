import { GeocatalogTreeNode } from "../../core/interfaces/geocatalog-tree.interface";
import { IReadGeocatalog, IReadService } from "../../core/interfaces/service.interface";

function transformServiceToTreeNode(service: IReadService, categoryName: string): GeocatalogTreeNode {
  const node: GeocatalogTreeNode = {
    label: categoryName, // Use category name or service name
    data: {
      id: service.id,
      name: service.name,
      alias: service.alias,
      description: service.description,
    },
    expanded: false, // borns not expanded
    selectable: false, // Categories are not selectable
    children: [],
  };

  // Add layers as child nodes (with checkboxes)
  if (service.layers) {
    node.children!.push(
      ...service.layers.map((layer) => ({
        label: layer.name,
        checked: layer.visible, // Map visible to checked
        selectable: true, // Layers are selectable
        data: {
          id: layer.id,
          name: layer.name,
          identificator: layer.identificator,
          minZoom: layer.minZoom,
          maxZoom: layer.maxZoom,
          visible: layer.visible,
          opacity: layer.opacity,
        },
        leaf: true, // Layers are leaf nodes
      }))
    );
  }

  // Recursively add nested categories
  if (service.categories) {
    for (const [subCategoryName, subService] of Object.entries(service.categories)) {
      node.children!.push(transformServiceToTreeNode(subService, subCategoryName));
    }
  }

  return node;
}

export function transformGeocatalogToTreeNode(geocatalog: IReadGeocatalog): GeocatalogTreeNode[] {
  const treeNodes: GeocatalogTreeNode[] = [];

  for (const [categoryName, service] of Object.entries(geocatalog)) {
    treeNodes.push(transformServiceToTreeNode(service, categoryName));
  }

  return treeNodes;
}
