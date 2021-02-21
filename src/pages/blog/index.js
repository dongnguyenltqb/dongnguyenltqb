import React from "react"
import Link from "next/link"

import { importAll } from "../../utils"
import Page from "../../components/page"

const postList = importAll(require.context(".", true, /.mdx?$/))
postList.sort((a, b) => {
  const da = new Date(a.meta.date).valueOf()
  const db = new Date(b.meta.date).valueOf()
  return db - da
})
export default function BlogListing() {
  return (
    <Page className="px-4 pb-10">
      <div className="mx-auto max-w-line-length">
        <ul>
          {postList.map(({ meta }, index) => (
            <Link href={meta.slug} key={index}>
              <a>
                <li className="mt-10 text-xl">
                  <time className="text-sm">{meta.date}</time>
                  <h2 className="text-xl font-bold leading-tight tablet:text-2xl desktop:text-2xl hover:text-primary">
                    {meta.title}
                  </h2>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </Page>
  )
}
