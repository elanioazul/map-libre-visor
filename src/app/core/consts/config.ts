import { IReadVisor } from "../interfaces/visor.interface";

export const visorConfig: IReadVisor = {
  name: 'Chronos-visor',
  servicesBase: [
    {
      id: 0,
      name: 'WFS Chronos resources service',
      alias: 'WFS Chronos resources servic',
      description:
        'WFS Chronos resources service. Accesible from sidebar filtres icon',
      displayAt: 'BaseLayerswitcher',
      opacity: 1.0,
      hasChindren: true,
      layers: [
        {
          id: 0,
          name: 'loque sea',
          identificator: 'SEM:RESOURCES',
          minZoom: 2,
          maxZoom: 12,
          visible: true
        }
      ],
    },
  ],
  servicesGeocatalog: [
    {
      id: 0,
      name: 'WFS Chronos resources service',
      alias: 'WFS Chronos resources servic',
      description:
        'WFS Chronos resources service. Accesible from sidebar filtres icon',
      displayAt: 'BaseLayerswitcher',
      opacity: 1.0,
      hasChindren: false,
      layers: [
        {
          id: 0,
          name: 'loque sea',
          identificator: 'SEM:RESOURCES',
          minZoom: 2,
          maxZoom: 12,
          visible: true
        }
      ],
    },
  ]
}
