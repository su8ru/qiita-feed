# qiita-feed

Get all posts of a user on Qiita with Feed

## Motivation

After April 6, 2022, Qiita's User Feed only returns the four most recent posts.
([qiita-discussions](https://github.com/increments/qiita-discussions/discussions/204#discussioncomment-2556224))

Due to this unannounced change, it is suddenly no longer possible to retrieve the list of articles posted by me using Feed.

However, I needed to do this, so I converted the API to Feed so that I could get the list of articles in the same format as before.

Of course, we need to look at the transition from Feed to API, but I would like you to use this Cloudflare Workers as a workaround.

## Usage

```text
https://qiita-feed.<your-subdomain>.workers.dev/<user-id>
```

## Scripts

### Dev (Miniflare)

```shell
yarn dev
```

### Build

```shell
yarn build
```

### Deploy

`wrangler` **must** be in global.

```shell
yarn deploy
```

## License

MIT License
