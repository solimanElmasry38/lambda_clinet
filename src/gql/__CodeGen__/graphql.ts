/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
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
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategInp = {
  Categ_name?: InputMaybe<Scalars['String']['input']>;
  usr_id?: InputMaybe<Scalars['ID']['input']>;
  usr_token?: InputMaybe<Scalars['String']['input']>;
};

export type CategsInp = {
  usr_id?: InputMaybe<Scalars['ID']['input']>;
  usr_token?: InputMaybe<Scalars['String']['input']>;
};

export type Id = {
  __typename?: 'Id';
  id?: Maybe<Scalars['ID']['output']>;
};

export type LoginInp = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ADD_TO_CART?: Maybe<Scalars['String']['output']>;
  LOGIN?: Maybe<Token>;
  RATE_PRODUCT?: Maybe<Scalars['String']['output']>;
  USER_CREATE?: Maybe<Id>;
  VERIFY_EMAIL?: Maybe<Token>;
};

export type MutationAdd_To_CartArgs = {
  input?: InputMaybe<AddCrtInp>;
};

export type MutationLoginArgs = {
  input?: InputMaybe<LoginInp>;
};

export type MutationRate_ProductArgs = {
  input?: InputMaybe<ReatingInp>;
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
  GET_CATEGORY?: Maybe<Category>;
  GET_CATEGORYS?: Maybe<Array<Maybe<Category>>>;
  OFFERS_GET?: Maybe<Array<Maybe<Offer>>>;
  PRODUCTS_GET?: Maybe<Array<Maybe<Product>>>;
  PRODUCT_GET?: Maybe<Product>;
  USERS_GET?: Maybe<Array<Maybe<User>>>;
  USER_GET?: Maybe<User>;
};

export type QueryGet_CategoryArgs = {
  input?: InputMaybe<CategInp>;
};

export type QueryGet_CategorysArgs = {
  input?: InputMaybe<CategsInp>;
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
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type Token = {
  __typename?: 'Token';
  id?: Maybe<Scalars['ID']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  Cart?: Maybe<Cart>;
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

export type Category = {
  __typename?: 'category';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Array<Maybe<Product>>>;
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

export type VerifyInp = {
  id?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
};
