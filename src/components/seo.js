import Head from "next/head"

const config = {
  author: "Dong Nguyen",
  url: "https://dong.spiritlabs.co",
  title: "Dong Nguyen",
  description: "To write is to think, and to write well is to think well.",
  image: "/assets/images/cover.png",
}

export default function SEO({
  title = config.title,
  description = config.description,
  image = config.image,
  slug = "/",
}) {
  const url = `${config.url}${slug}`
  const previewImage = `${config.url}${image}`
  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta key="title" name="title" content={title} />
      <meta key="description" name="description" content={description} />
      <meta key="image" name="image" content={previewImage} />

      {/* OpenGraph tags */}
      <meta key="og:url" property="og:url" content={url} />
      <meta
        key="og:type"
        property="og:type"
        content={slug ? "article" : "website"}
      />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={previewImage} />

      {/* Twitter Card tags */}
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={config.author}
      />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={previewImage} />
    </Head>
  )
}
