import dynamic from 'next/dynamic';
import { Column } from '@src/components/blocks/core/column';
import { Columns } from '@src/components/blocks/core/columns';
import { Container } from '@src/components/blocks/generateblocks/container';
import { CustomerAccount } from '@src/components/blocks/woocommerce/customer-account';
import { Embed } from '@src/components/blocks/embed';
import { Form } from '@src/components/blocks/gravityforms';
import { Grid } from '@src/components/blocks/generateblocks/grid';
import { Heading } from '@src/components/blocks/core/heading';
import { Html } from '@src/components/blocks/core/html';
import { Image } from '@src/components/blocks/wooless/image';
import { List } from '@src/components/blocks/core/list';
import { ListItem } from '@src/components/blocks/core/list-item';
import { MaxMegaMenu } from '@src/components/blocks/maxmegamenu/block';
import { MiniCart } from '@src/components/blocks/woocommerce/mini-cart';
import { Navigation } from '@src/components/blocks/core/navigation';
import { Paragraph } from '@src/components/blocks/core/paragraph';
import { ParsedBlock as GutenbergParsedBlock } from '@wordpress/block-serialization-default-parser';
import { Search } from '@src/components/blocks/fibosearch/search';
import { SiteLogo } from '@src/components/blocks/core/site-logo';
import { Shortcode } from '@src/components/blocks/shortcode';
import { Separator } from '@src/components/blocks/separator';
import { Buttons } from '@src/components/blocks/core/buttons';
import { Button } from '@src/components/blocks/core/button';
import { GenerateBlocksButton } from '@src/components/blocks/generateblocks/button/block';
import { ITSPage } from '@src/lib/typesense/types';
import { PostFeaturedImage } from '@src/components/blocks/templates/core/post/featured-image';
import { PostContent } from '@src/components/blocks/templates/core/post/content';
import { PostTitle } from '@src/components/blocks/templates/core/post/title';
import { PostDate } from '@src/components/blocks/templates/core/post/date';
import { PostAuthorName } from '@src/components/blocks/templates/core/post/author-name';

const Group = dynamic(() => import('@src/components/blocks/core/group').then((mod) => mod.Group));
const WooCommerceBreadcrumbs = dynamic(() =>
  import('@src/components/blocks/woocommerce/breadcrumbs').then((mod) => mod.Breadcrumbs)
);
const WooCommerceProductImageGallery = dynamic(() =>
  import('@src/components/blocks/woocommerce/product-image-gallery').then((mod) => mod.Gallery)
);

const WooCommerceProductRating = dynamic(() =>
  import('@src/components/blocks/woocommerce/product-rating').then((mod) => mod.ProductRating)
);

const WooCommerceProductPrice = dynamic(() =>
  import('@src/components/blocks/woocommerce/product-price').then((mod) => mod.ProductPrice)
);

const PostExcerpt = dynamic(() =>
  import('@src/components/blocks/core/post-excerpt').then((mod) => mod.PostExcerpt)
);

export interface ParsedBlock extends GutenbergParsedBlock {
  id?: string;
  innerBlocks: ParsedBlock[];
  attrs: {
    className?: string;
    uniqueId?: string;
    [key: string]: unknown;
    metadata?: Partial<{
      name?: string;
    }>;
    htmlAttributes?: Partial<{
      attribute: string;
      value: string;
    }>;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentProps?: any;
}

export type BlockComponentProps = {
  className?: string;
  data?: ITSPage | null;
  block: ParsedBlock;
};

/**
 * Below are the blocks we currently support that is parseable by our codebase
 */
export const blocks = {
  'core/column': Column,
  'core/columns': Columns,
  'core/embed': Embed,
  'core/heading': Heading,
  'core/html': Html,
  'core/image': Image,
  'core/buttons': Buttons,
  'core/button': Button,
  'core/list-item': ListItem,
  'core/list': List,
  'core/navigation': Navigation,
  'core/paragraph': Paragraph,
  'core/site-logo': SiteLogo,
  'fibosearch/search': Search,
  'core/search': Search,
  'generateblocks/container': Container,
  'generateblocks/grid': Grid,
  'generateblocks/image': Image,
  'generateblocks/button': GenerateBlocksButton,
  'maxmegamenu/location': MaxMegaMenu,
  'uagb/gf-styler': Form,
  'woocommerce/customer-account': CustomerAccount,
  'woocommerce/mini-cart': MiniCart,
  'core/shortcode': Shortcode,
  'core/separator': Separator,
  'core/group': Group,

  // Template blocks that needs data source
  'woocommerce/breadcrumbs': WooCommerceBreadcrumbs,
  'woocommerce/product-image-gallery': WooCommerceProductImageGallery,
  'woocommerce/product-rating': WooCommerceProductRating,
  'woocommerce/product-price': WooCommerceProductPrice,
  'core/post-featured-image': PostFeaturedImage,
  'core/post-excerpt': PostExcerpt,
  'core/post-content': PostContent,
  'core/post-title': PostTitle,
  'core/post-date': PostDate,
  'core/post-author-name': PostAuthorName,
};

// Define type alias for block names
export type BlockName = keyof typeof blocks;
