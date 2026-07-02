import { QuartzTransformerPlugin } from "../types"

export const RelativeImages: QuartzTransformerPlugin = () => {
  return {
    name: "RelativeImages",
    text(ctx, text) {
      // Find the frontmatter block
      if (text.startsWith("---")) {
        const endFrontmatter = text.indexOf("---", 3)
        if (endFrontmatter !== -1) {
          let frontmatter = text.substring(0, endFrontmatter)
          
          // Match 'image: ./attachments/filename.png'
          const imageRegex = /(image:\s*['"]?)\.\/([^'"\n]+)(['"]?)/g
          
          if (imageRegex.test(frontmatter)) {
            // Get the current file's directory slug (e.g., hack-the-box/01-machines/cap)
            const slugDir = ctx.file.data.slug ? ctx.file.data.slug.split('/').slice(0, -1).join('/') : ''
            
            frontmatter = frontmatter.replace(imageRegex, (_, p1, p2, p3) => {
              const cleanDir = slugDir.toLowerCase().replace(/\s+/g, "-")
              const cleanImg = p2.toLowerCase().replace(/\s+/g, "-")
              return `${p1}/${cleanDir}/${cleanImg}${p3}`
            })
            
            return frontmatter + text.substring(endFrontmatter)
          }
        }
      }
      return text
    },
  }
}
