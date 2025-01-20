import type { Schema, Struct } from '@strapi/strapi';

export interface AddressAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_address_s';
  info: {
    displayName: 'Address ';
  };
  attributes: {
    address: Schema.Attribute.Text;
  };
}

export interface ExtraGalleryExtraGalleryPictureProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_extra_gallery_extra_gallery_picture_products';
  info: {
    displayName: 'extra-gallery-picture-products';
    icon: 'brush';
  };
  attributes: {
    extra_gallery: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address.address': AddressAddress;
      'extra-gallery.extra-gallery-picture-products': ExtraGalleryExtraGalleryPictureProducts;
    }
  }
}
