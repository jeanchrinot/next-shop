import { Product } from "@/lib/models/ProductModel"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Rating } from "./Rating"

export default function ProductItem({ product }: { product: Product }) {
  return (
    <li className="aspect-square transition-opacity animate-fadeIn">
      <Link
        className="relative inline-block h-full w-full"
        href={`/product/${product.slug}`}
      >
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
          <Image
            src={product.image}
            alt={product.name}
            fill={true}
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
          <div className="absolute top-0 left-0 mt-2 flex w-full px-4 pb-4">
            <Rating
              value={product.rating}
              caption={`(${product.numReviews})`}
            />
          </div>
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                {product.name}
              </h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                ${product.price}
                <span className="ml-1 inline hidden @[275px]/label:inline">
                  USD
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
