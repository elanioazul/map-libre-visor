import { IReadGeocatalog } from "../interfaces/service.interface";

export const servicesGeocatalog: IReadGeocatalog = {
  'Nature and Environment': {
    id: 0,
    name: 'Nature and Environment',
    alias: 'Nature and Environment',
    description: 'Nature and Environment category',
    categories: {
      'Geology': {
        id: 0,
        name: 'Geology services',
        alias: 'Geology services',
        description: 'Geology services',
        layers: [
          {
            id: 0,
            name: '3d geological model',
            identificator: '3d geological model',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 1,
            name: 'Aerinagentic aargao',
            identificator: 'Aerinagentic aargao',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
        ],
      },
      'Soils': {
        id: 0,
        name: 'Soil services',
        alias: 'Soil services',
        description: 'Soil services',
        layers: [
          {
            id: 0,
            name: 'water connection extended',
            identificator: 'water connection extended',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 1,
            name: 'water connection',
            identificator: 'water connection',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 2,
            name: 'Field block map',
            identificator: 'Field block map',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 3,
            name: 'water strorage capacity',
            identificator: 'water strorage capacity',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
        ],
      },
    },
  },
  'Population and Economy': {
    id: 0,
    name: 'Population and Economy',
    alias: 'Population and Economy',
    description: 'Population and Economy category',
    categories: {
      'Society and culture': {
        id: 0,
        name: 'Society and culture services',
        alias: 'Society and culture services',
        description: 'Society and culture services',
        layers: [
          {
            id: 0,
            name: 'accesibility of pharmaces',
            identificator: 'accesibility of pharmaces',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 1,
            name: 'accesibility of restauranes',
            identificator: 'accesibility of restauranes',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 2,
            name: 'isos phots',
            identificator: 'isos phots',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
        ],
      },
      'Health': {
        id: 0,
        name: 'Health services',
        alias: 'Health services',
        description: 'Health services',
        layers: [
          {
            id: 0,
            name: 'random map',
            identificator: 'random map',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
        ],
      },
    },
  },
  'Traffic load (ARE)': {
    id: 0,
    name: 'Geology services',
    alias: 'Geology services',
    description: 'Geology services',
    layers: [
      {
        id: 0,
        name: 'passanger traffic RAIL 2017',
        identificator: 'passanger traffic RAIL 2017',
        minZoom: 2,
        maxZoom: 12,
        visible: true,
        opacity: 1.0,
      },
      {
        id: 1,
        name: 'passenger traffic ROAD 2017',
        identificator: 'passenger traffic ROAD 2017',
        minZoom: 2,
        maxZoom: 12,
        visible: true,
        opacity: 1.0,
      },
    ],
  },
  'Forest (Foen)': {
    id: 0,
    name: 'Forest services',
    alias: 'Forest services',
    description: 'Forest services',
    layers: [
      {
        id: 0,
        name: 'lothar storm damage',
        identificator: 'lothar storm damage',
        minZoom: 2,
        maxZoom: 12,
        visible: true,
        opacity: 1.0,
      },
      {
        id: 1,
        name: 'vivian storm damage',
        identificator: 'vivian storm damage',
        minZoom: 2,
        maxZoom: 12,
        visible: true,
        opacity: 1.0,
      },
    ],
    categories: {
      'National forest inventory': {
        id: 0,
        name: 'National forest inventory services',
        alias: 'National forest inventory services',
        description: 'National forest inventory services',
        layers: [
          {
            id: 0,
            name: 'vegetation heigh model',
            identificator: 'vegetation heigh model',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 1,
            name: 'surface model',
            identificator: 'surface model',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
          {
            id: 2,
            name: 'forest mix rate',
            identificator: 'forest mix rate',
            minZoom: 2,
            maxZoom: 12,
            visible: true,
            opacity: 1.0,
          },
        ],
      },
    },
  },
};
