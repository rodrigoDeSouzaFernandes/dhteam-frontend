export interface IusePlansAndPrices {
  plans: IPlan[];
}

export interface IModalityPrice {
  attributes: {
    modality: IModality;
    modality_category: IModalityCategory;
    frequency: number;
    value: number;
  };
}

export interface IModality {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  };
}

export interface IModalityCategory {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  };
}

export interface IPlan {
  modality: string;
  category: string;
  frequency: number;
  price: number;
}
