/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type AddCrtInp = {
  product_id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Cart = {
  __typename?: 'Cart';
  ProductId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type CartCount = {
  __typename?: 'CartCount';
  ProductsInCart?: Maybe<Scalars['Int']['output']>;
};

export type CategInp = {
  Categ_name?: InputMaybe<Scalars['String']['input']>;
};

export type CategsInp = {
  takeCount?: InputMaybe<Scalars['Int']['input']>;
};

export type GetReviewsInp = {
  Product_id?: InputMaybe<Scalars['String']['input']>;
};

export type Id = {
  __typename?: 'Id';
  id?: Maybe<Scalars['ID']['output']>;
};

export type IsAvInp = {
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInp = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ADD_TO_CART?: Maybe<AddToCart>;
  ADD_TO_WISH_LIST?: Maybe<Scalars['String']['output']>;
  CREATE_CATEGORY?: Maybe<Scalars['String']['output']>;
  CREATE_OFFER?: Maybe<Scalars['String']['output']>;
  CREATE_PRODUCT?: Maybe<Scalars['String']['output']>;
  LOGIN?: Maybe<Token>;
  RATE_PRODUCT?: Maybe<Scalars['String']['output']>;
  REMOVER_CATEGORYS?: Maybe<Scalars['String']['output']>;
  REMOVER_OFFERS?: Maybe<Scalars['String']['output']>;
  REMOVER_USERS?: Maybe<Scalars['String']['output']>;
  REMOVE_FROM_WISH_LIST?: Maybe<Scalars['String']['output']>;
  REMOVE_PRODUCT?: Maybe<Scalars['String']['output']>;
  USER_CREATE?: Maybe<Id>;
  VERIFY_EMAIL?: Maybe<Token>;
};


export type MutationAdd_To_CartArgs = {
  input?: InputMaybe<AddToCartInp>;
};


export type MutationAdd_To_Wish_ListArgs = {
  input?: InputMaybe<AddToWishListInp>;
};


export type MutationCreate_CategoryArgs = {
  input?: InputMaybe<CreateCategoryInp>;
};


export type MutationCreate_OfferArgs = {
  input?: InputMaybe<CreateOfferInp>;
};


export type MutationCreate_ProductArgs = {
  input?: InputMaybe<CreateProductInp>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInp>;
};


export type MutationRate_ProductArgs = {
  input?: InputMaybe<ReatingInp>;
};


export type MutationRemover_CategorysArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationRemover_OffersArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationRemover_UsersArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationRemove_From_Wish_ListArgs = {
  input?: InputMaybe<RemoveFromWishListInp>;
};


export type MutationRemove_ProductArgs = {
  input?: InputMaybe<RemoveProdInp>;
};


export type MutationUser_CreateArgs = {
  input?: InputMaybe<UserInp>;
};


export type MutationVerify_EmailArgs = {
  input?: InputMaybe<VerifyInp>;
};

export type Offer = {
  __typename?: 'Offer';
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  categorys?: Maybe<Category>;
  coun_in_cart?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  is_available?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  CART_PRODUCTS_GET?: Maybe<CartPoducts>;
  GET_CART_COUNT?: Maybe<Scalars['Int']['output']>;
  GET_CART_PRODUCTS?: Maybe<Scalars['String']['output']>;
  GET_CATEGORY?: Maybe<Category>;
  GET_CATEGORYS?: Maybe<Array<Maybe<Category>>>;
  GET_PRODUCT_REVIEWS?: Maybe<Review>;
  GET_WISH_LIST?: Maybe<Array<Maybe<Product>>>;
  IS_AVILABLE?: Maybe<Scalars['Boolean']['output']>;
  IS_IN_WISH_LIST?: Maybe<Scalars['Boolean']['output']>;
  MAIN_QU?: Maybe<Scalars['String']['output']>;
  MAIN_QUERY?: Maybe<Scalars['String']['output']>;
  OFFERS_GET?: Maybe<Array<Maybe<Offer>>>;
  PRODUCTS_GET?: Maybe<Array<Maybe<Product>>>;
  PRODUCT_GET?: Maybe<Product>;
  USERS_GET?: Maybe<Array<Maybe<User>>>;
  USER_GET?: Maybe<User>;
};


export type QueryCart_Products_GetArgs = {
  input?: InputMaybe<GetCartInp>;
};


export type QueryGet_Cart_CountArgs = {
  input?: InputMaybe<GetCartCountInp>;
};


export type QueryGet_Cart_ProductsArgs = {
  input?: InputMaybe<GetCartInp>;
};


export type QueryGet_CategoryArgs = {
  input?: InputMaybe<CategInp>;
};


export type QueryGet_CategorysArgs = {
  input?: InputMaybe<CategsInp>;
};


export type QueryGet_Product_ReviewsArgs = {
  input?: InputMaybe<GetReviewsInp>;
};


export type QueryGet_Wish_ListArgs = {
  input?: InputMaybe<GetWishListInp>;
};


export type QueryIs_AvilableArgs = {
  input?: InputMaybe<IsAvInp>;
};


export type QueryIs_In_Wish_ListArgs = {
  input?: InputMaybe<IsInWishInp>;
};


export type QueryOffers_GetArgs = {
  input?: InputMaybe<OfferInp>;
};


export type QueryProducts_GetArgs = {
  input?: InputMaybe<ProdsInp>;
};


export type QueryProduct_GetArgs = {
  input?: InputMaybe<ProdInp>;
};


export type QueryUsers_GetArgs = {
  input?: InputMaybe<AuthInp>;
};


export type QueryUser_GetArgs = {
  input?: InputMaybe<AuthInp>;
};

export type ReatingInp = {
  product_id?: InputMaybe<Scalars['String']['input']>;
  reating?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
  __typename?: 'Subscription';
  ADD_TO_CART_SUB?: Maybe<CartCount>;
  CREATE_CATEGORY_SUB?: Maybe<Category>;
  CREATE_OFFER_SUB?: Maybe<Offer>;
  CREATE_PRODUCT_SUB?: Maybe<Product>;
};

export type Token = {
  __typename?: 'Token';
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  Cart?: Maybe<Cart>;
  WishList?: Maybe<WishList>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  joined_at?: Maybe<Scalars['DateTime']['output']>;
  last_update?: Maybe<Scalars['DateTime']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
};

export type UserInp = {
  email?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

export type AddToCart = {
  __typename?: 'addToCart';
  availability?: Maybe<Scalars['Boolean']['output']>;
  cartLength?: Maybe<Scalars['Int']['output']>;
};

export type AddToCartInp = {
  Product_count?: InputMaybe<Scalars['Int']['input']>;
  Product_id?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type AddToWishListInp = {
  Product_id?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type CartPoducts = {
  __typename?: 'cartPoducts';
  TotalProductInCart?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type Category = {
  __typename?: 'category';
  id?: Maybe<Scalars['ID']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
};

export type CreateCategoryInp = {
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOfferInp = {
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInp = {
  count?: InputMaybe<Scalars['Int']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  is_available?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type GetCartCountInp = {
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type GetCartInp = {
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type GetWishListInp = {
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type IsInWishInp = {
  productId?: InputMaybe<Scalars['ID']['input']>;
  usetId?: InputMaybe<Scalars['ID']['input']>;
};

export type OfferInp = {
  usr_id?: InputMaybe<Scalars['ID']['input']>;
  usr_token?: InputMaybe<Scalars['String']['input']>;
};

export type ProdInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProdsInp = {
  byCategory?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  orderByName?: InputMaybe<Sort>;
};

export type RemoveFromWishListInp = {
  Product_id?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveProdInp = {
  Ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Review = {
  __typename?: 'review';
  review?: Maybe<Scalars['Int']['output']>;
};

export type VerifyInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
};

export type WishList = {
  __typename?: 'wishList';
  ProductId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type QueryQueryVariables = Exact<{
  input?: InputMaybe<CategsInp>;
}>;


export type QueryQuery = { __typename?: 'Query', GET_CATEGORYS?: Array<{ __typename?: 'category', name?: string | null, img?: string | null } | null> | null };


export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CategsInp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GET_CATEGORYS"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"img"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;