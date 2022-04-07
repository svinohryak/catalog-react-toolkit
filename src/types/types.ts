export interface ICheckboxProps {
  readonly isChecked: boolean;
  readonly label: string;
  readonly onChange: () => void;
}

export interface IProduct {
  product_id: number;
  name: string;
  quantity_available: number;
  quantity_nfts_created: number;
  initial_price: number;
  created_by: {
    display_name: string;
  };
}

export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

export interface ICardBody {
  creator: string;
  product_name: string;
}

export interface ICardFooter {
  price: number;
  available: number;
  created: number;
}
