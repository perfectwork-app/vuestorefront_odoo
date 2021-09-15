/* eslint-disable camelcase */

export enum SortEnum {
  ASC,
  DESC
}

export enum OrderStage {
  Quotation,
  QuotationSent,
  SalesOrder,
  Locked,
  Cancelled
}

export declare type Currency = {
  id: number;
  name?: string;
  symbol?: string;
};

export declare type Address = {
  city: string;
  countryId: number;
  firstName: string;
  phone: string;
  stateId: number;
  street: string;
  zip: string;
};

export declare type ShippingInfo = Record<string, string>;

export type AttributeValueList = {
  id: number;
  name: string;
  htmlColor: string;
  search: string;
  attributeId: number;
};

export type Attribute = {
  id: number;
  name: string;
  displayType: string;
  priceExtra: number;
  attributeName: string;
  search: string;
  values?: [AttributeValueList];
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  parent: Category;
  childs: Category[];
  products: [Product];
};

export type CategoryFilterInput = {
  id: number;
  parent: boolean;
};

export type ProductFilterInput = {
  categoryId?: number[];
  attributeId?: number[];
  minPrice?: number;
  maxPrice?: number;
};

export type CategorySortInput = {
  id: SortEnum;
};

export type ProductSortInput = {
  id?: SortEnum;
  price?: SortEnum;
};

export type GraphQlGetCategoryParams = {
  filter: CategoryFilterInput;
  currentPage?: number;
  pageSize?: number;
  search?: string;
  sort?: CategorySortInput;
};

export type CategoryResult = {
  categories: [Category];
  totalCount: number;
};

export type ProductImage = {
  id: number;
  name: string;
  image: string;
  video: string;
};

export type Product = {
  id: number;
  description?: string;
  name: string;
  slug?: string;
  isInStock?: boolean;
  qty: number;
  sku: string;
  image: string;
  variantImage: string;
  smallImage: string;
  mediaGallery: [ProductImage];
  price: number;
  weight: number;
  priceAfterDiscount: number;
  hasDiscountedPrice: number;
  listPrice: number;
  realProduct?: ProductVariant;
  firstVariant: number;
  currency: Currency;
  isInWishlist: boolean;
  alternativeProducts?: [Product];
  accessoryProducts?: [Product];
  attributeValues: Attribute[];
  productTemplate?: Product;
  categories: [Category];
};

export type ProductResult = {
  products: [Product];
  totalCount: number;
  attributes: [Attribute];
};

export declare type WishlistItem = {
  product: Product;
  id: number;
};

export declare type Wishlist = {
  wishlistItems?: [WishlistItem];
};

export type User = {
  password: string;
  id?: number;
  name: string;
  street?: string;
  street2?: string;
  city?: string;
  country?: Country;
  state?: State;
  zip?: string;
  email: string;
  phone?: string;
  isCompany?: boolean;
  contacts?: [Partner];
  signupToken?: string;
  signupValid?: string;
};

export interface AgnosticFacet {
  type: string;
  id?: string;
  label: string;
  value: any;
  attrName?: string;
  count?: number;
  selected?: boolean;
  metadata?: any;
}

export type State = {
  id: number;
  name?: string;
};
export type ShippingMethod = {
  id: number;
  name: string;
  price: number;
};
export type Country = {
  id: number;
  code?: string;
  name?: string;
};
export type Partner = {
  id: number;
  name: string;
  street: string;
  street2?: string;
  city: string;
  state: State;
  zip: string;
  country: Country;
  email?: string;
  phone: string;
  isCompany?: boolean;
  contacts: [Partner];
};

export type ProductVariant = {
  productId: number;
  productTemplateId: number;
  displayName: string;
  displayImage: boolean;
  price: number;
  listPrice: string;
  hasDiscountedPrice: boolean;
  isCombinationPossible: boolean;
};

export type OrderLine = {
  id: number;
  name?: string;
  product?: Product;
  quantity?: number;
  priceTotal?: number;
  priceUnit?: number;
  priceSubtotal?: number;
  priceTax?: number;
};

export type Payment = {
  id: number;
  name: string;
  provider: string;
  amount: number;
  paymentReference: string;
};

export type PaymentTransaction = {
  id: number;
  payment: Payment;
  paymentToken: string;
  amount: number;
  acquirer: string;
};
export type Order = {
  id: number;
  name: string;
  partner?: Partner;
  partnerShipping?: Partner;
  partnerInvoice?: Partner;
  dateOrder?: Date;
  amountUntaxed: number;
  amountTax: number;
  amountTotal: number;
  currency: Currency;
  orderLines?: OrderLine[];
  stage: OrderStage;
  orderUrl: string;
  transactions: [PaymentTransaction];
};

export type Cart = {
  order: Order;
};

export type Pagination = {
  limit?: number;
  offset?: number;
  sort?: string;
};

export type CategoryFilter = Record<string, unknown>;
export type LineItem = Record<string, unknown>;

export type DefaultGraphQlMutationResponse = {
  ok: boolean;
};

export type GraphQlSendResetPasswordParams = {
  email: string;
};

export type GraphQlGetProductVariants = {
  productId: number;
};

export type GraphQlCartRemoveItemParams = {
  lineId: number;
};

export type GraphQlWishlistAddItemParams = {
  productId: number;
};

export type GraphQlGetProductTemplateParams = {
  id: number;
};

export type GraphQlWishlistRemoveItemParams = {
  wishId: number;
};

export type GraphQlGetProductVariantParams = {
  productTemplateId: number;
  combinationId: string[];
};

export type GraphQlCartAddItemParams = {
  productId: string;
  quantity: number;
};

export type GraphQlGetPricinsShippingMethodParams = {
  shippingId: string;
};

export type GraphQlResetPasswordParams = {
  password: string;
  token: string;
};

export type CountryFiltersInput = {
  id: number;
};

export type GraphQlGetAllCountryStatesParams = {
  filter: CountryFiltersInput;
  currentPage?: number;
  pageSize?: number;
  search?: string;
  sort?: ProductSortInput;
};

export type GraphQlLoginParams = {
  email: string;
  password: string;
};

export type GraphQlGetProductParams = {
  filter: ProductFilterInput;
  currentPage: number;
  pageSize: number;
  search: string;
  sort: ProductSortInput;
};

export type ParamsFromUrlFilterInput = {
  categoryId?: number;
  attributeValueId: number[];
};

export type ParamsFromUrl = {
  filter: ParamsFromUrlFilterInput;
  currentPage: number;
  pageSize: number;
  search: string;
  categorySlug?: string;
  sort: ProductSortInput;
};
