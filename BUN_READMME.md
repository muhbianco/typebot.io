# DEV MODE
bunx turbo dev --filter=builder... --filter=viewer...

# PROD MODE
cd apps/builder
pm2 start --name=typebot bun -- start
# or select a different port
pm2 start --name=typebot bun -- start -p 3001

cd apps/viewer
pm2 start --name=typebot bun -- start
# or select a different port
pm2 start --name=typebot bun -- start -p 3002

# BUILD
bunx turbo build --filter=builder... --filter=viewer...
