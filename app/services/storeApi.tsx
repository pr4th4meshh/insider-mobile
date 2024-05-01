import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../models/product.model";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    products: builder.query<Product[], void>({
      query: () => "/products",
    }),
    product: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
    getWomensClothing: builder.query<Product[], void>({
      query: () => `/products/category/women's clothing`
    }),
    getElectronics: builder.query<Product[], void>({
      query: () => `/products/category/electronics`
    }),
    addProduct: builder.mutation<void, Product>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
    updateProduct: builder.mutation<void, Product>({
      query: ({ id, ...rest }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useProductsQuery,
  useProductQuery,
  useGetWomensClothingQuery,
  useGetElectronicsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = storeApi;
