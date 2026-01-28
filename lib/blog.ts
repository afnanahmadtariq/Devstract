import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
  lastModified?: Date;
  bottomCta?: {
    title: string;
    description: string;
    buttonText: string;
    url: string;
  };
  metaTitle?: string;
}

const contentDirectory = path.join(process.cwd(), 'content/blog');

// Map of folder names (slugs) to category display names
const folderToCategoryMap: Record<string, string> = {
  'ai-automation': 'AI & Automation',
  'startup-mvp': 'Startup & MVP',
  'digital-growth': 'Digital Growth',
  'technical-deep-dive': 'Technical Deep-Dive',
  'mobile-apps': 'Mobile & Apps',
  'developer-insights': 'Developer Insights',
};

// Convert category name to URL-friendly slug
export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

// Get folder name from category slug
export function getFolderFromSlug(slug: string): string | null {
  return folderToCategoryMap[slug] ? slug : null;
}

// Get all unique categories with their slugs
export function getAllCategories(): { name: string; slug: string }[] {
  return Object.entries(folderToCategoryMap).map(([folder, name]) => ({
    name,
    slug: categoryToSlug(name),
  }));
}

function getAllMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function parsePost(fullPath: string): BlogPost {
  const relativePath = path.relative(contentDirectory, fullPath);
  const slug = path.basename(relativePath, '.md');
  const folderName = path.dirname(relativePath).split(path.sep)[0] || 'General';
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Get file modification time
  const stats = fs.statSync(fullPath);
  const lastModified = stats.mtime;

  // Get category from frontmatter or map from folder
  const category = data.category || folderToCategoryMap[folderName] || folderName;
  const categorySlug = categoryToSlug(category);

  return {
    id: data.id || 0,
    title: data.title,
    excerpt: data.excerpt,
    content,
    category,
    categorySlug,
    author: data.author,
    publishedAt: data.publishedAt,
    readTime: data.readTime,
    image: data.image,
    slug,
    tags: data.tags || [],
    lastModified,
    bottomCta: data.bottom_cta ? {
      title: data.bottom_cta.title,
      description: data.bottom_cta.description,
      buttonText: data.bottom_cta.button_text,
      url: data.bottom_cta.url
    } : undefined,
    metaTitle: data.metaTitle,
  };
}

export function getAllPosts(): BlogPost[] {
  const filePaths = getAllMarkdownFiles(contentDirectory);
  const posts: BlogPost[] = filePaths
    .map(fullPath => parsePost(fullPath))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  posts.forEach((post, index) => {
    if (!post.id) {
      post.id = index + 1;
    }
  });

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePaths = getAllMarkdownFiles(contentDirectory);
  for (const fullPath of filePaths) {
    const fileSlug = path.basename(fullPath, '.md');
    if (fileSlug === slug) {
      return parsePost(fullPath);
    }
  }
  return null;
}

export function getPostByCategoryAndSlug(categorySlug: string, slug: string): BlogPost | null {
  // Get folder name from category slug
  const folderName = getFolderFromSlug(categorySlug);

  if (folderName) {
    // Try direct folder lookup first
    const filePath = path.join(contentDirectory, folderName, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      return parsePost(filePath);
    }
  }

  // Fallback: search all posts for matching category slug and post slug
  const allPosts = getAllPosts();
  return allPosts.find(post => post.categorySlug === categorySlug && post.slug === slug) || null;
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.categorySlug === categorySlug);
}
