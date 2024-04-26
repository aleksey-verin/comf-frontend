export interface ArticleListData {
  data: ArticleListItem[]
  meta: Meta
}

export interface ArticleListItem {
  id: number
  attributes: Attributes
}

export interface Attributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  preview_title: string
  preview_subtitle: string
  preview_text_for_button: string
  promo_title: string
  slug: string
  preview_picture_desktop: PreviewPictureDesktop
  preview_picture_tablet: PreviewPictureTablet
  preview_picture_mobile: PreviewPictureMobile
}

export interface PreviewPictureDesktop {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  medium: Medium
  small: Small
  thumbnail: Thumbnail
}

export interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface PreviewPictureTablet {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats2
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats2 {
  medium: Medium2
  thumbnail: Thumbnail2
  small: Small2
}

export interface Medium2 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Thumbnail2 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Small2 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface PreviewPictureMobile {
  data: Data3
}

export interface Data3 {
  id: number
  attributes: Attributes4
}

export interface Attributes4 {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats3
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats3 {
  thumbnail: Thumbnail3
  medium: Medium3
  small: Small3
}

export interface Thumbnail3 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Medium3 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Small3 {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
