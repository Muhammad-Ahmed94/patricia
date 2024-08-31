export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const Categories = `
  query Categories {
    Categories(limit: 300) {
      docs {
        id
        title
        media {
          alt
          height
          widht
          url
        }
      }
    }
  }
`