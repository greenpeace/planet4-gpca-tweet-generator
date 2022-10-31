# tweet-generator

## Run Locally
- Requires Wordpress >= 5.6.0 (tested up to 5.6.0)
- Requires PHP >= 7.0.0
- Requires Docker to be running

Clone the project

```bash
  git clone https://github.com/greenpeace/tweet-generator.git
```

Go to the project directory

```bash
  cd tweet-generator
```

Install dependencies

```bash
  npm install
```

Install wordpress environment
```bash
npm install -g @wordpress/env
```

In one terminal within project directory run:

```bash
  npm run build && npm run start
```

In another terminal within project directory run:
```bash
  wp-env start
```
