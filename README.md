This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Pre-rendering strategies
We have 2 ways and you can create a *"hybrid"* Next.js app by using the best strategy by page:
- **SSG** - Static Site Generation
    - https://nextjs.org/docs/basic-features/data-fetching/get-static-props
    - If you export a function called `getStaticProps` (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by `getStaticProps` that generates `HTML` and `JSON` files.
    - it is useful when
        - The data required to render the page is available at build time => static files with no user input
        - The data comes from a headless CMS
        - The page must be pre-rendered (for SEO) and be very fast
        - The data can be publicly cached (not user-specific)
- **SSR** - Server Side Rendering
    - https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
    - If you export a function called `getServerSideProps` (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by `getServerSideProps` that only runs on server-side and never runs on the browser. It returns `JSON` that is, typically, not cached except if `cache-control` headers are configured.
    - You can use the next-code-elimination tool to verify what Next.js eliminates from the client-side bundle
    - next/link and next/router support SSR
    - it is used
        - if you need to render a page whose data must be fetched at request time
        - if you need to render by using request specific data (such as authorization headers or geo location)

With **SSG** you also have **Static Paths**: if a page has Dynamic Routes and uses `getStaticProps`, it needs to define a list of paths to be statically generated. When you export a function called `getStaticPaths` from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
    - `getStaticPaths` will only run during build in production, it will not be called during runtime. 

__Note__: **SSG** is applied by default during the `npm run build` process.


