import type { SchemaTypeDefinition } from 'sanity'

import product from './product'
import productCategory from './productCategory'
import certification from './certification'
import galleryImage from './galleryImage'
import blogPost from './blogPost'
import teamMember from './teamMember'

export const schemaTypes: SchemaTypeDefinition[] = [
  product,
  productCategory,
  certification,
  galleryImage,
  blogPost,
  teamMember,
]
