import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://startupsofkerala.in',
  integrations: [tailwind({
    applyBaseStyles: false
  }), solidJs(), mdx(), image(), sitemap(), robotsTxt(), compress({
    img: false,
    svg: false
  }), partytown()]
});