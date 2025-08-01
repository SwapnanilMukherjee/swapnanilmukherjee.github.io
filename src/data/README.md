# Content Management Guide

This directory contains YAML files that store the dynamic content for your website. Edit these files to update your site content without touching the source code.

## Files Overview

### `publications.yaml`
Contains your research publications organized by year.
- **Structure**: Publications grouped by year with title, authors, venue, description, and links
- **Update frequency**: Add new publications as they're published or accepted

### `news.yaml`
Contains recent news and updates about your academic journey.
- **Structure**: Date and content for each news item
- **Update frequency**: Add new items as significant events happen

### `blog.yaml`
Contains blog post metadata and excerpts.
- **Structure**: Date, category, title, slug, and excerpt for each post
- **Update frequency**: Add entries when you publish new blog posts

### `teaching.yaml`
Contains your teaching experience and positions.
- **Structure**: Title, institution, instructor, semester, and responsibilities
- **Update frequency**: Add new positions each semester

### `service.yaml`
Contains your service activities and volunteer work.
- **Structure**: Title, organization, description, and year
- **Update frequency**: Add new service activities as they occur

### `awards.yaml`
Contains awards, honors, and recognitions.
- **Structure**: Title, organization, and year
- **Update frequency**: Add new awards as you receive them

### `gallery.yaml`
Contains photo gallery content organized by category.
- **Structure**: Photography, academic travel, and creative work sections
- **Update frequency**: Add new photos and update descriptions as needed

## How to Update Content

1. **Find the relevant YAML file** for the content you want to update
2. **Follow the existing structure** when adding new entries
3. **Maintain proper YAML formatting** (pay attention to indentation)
4. **Save the file** - changes will appear on your website automatically

## YAML Formatting Tips

- Use consistent indentation (2 spaces recommended)
- Wrap text with quotes if it contains special characters
- Use the `|` character for multi-line text
- Keep the existing structure when adding new items

## Example: Adding a New Publication

```yaml
publications:
  2024:
    - title: "Your New Paper Title"
      authors:
        - name: "Your Name"
          isYou: true
        - name: "Co-Author"
      venue: "Conference Name"
      year: 2024
      description: "Brief description of your work"
      links:
        pdf: "link-to-pdf"
        code: "link-to-code"
```

## Static Content

Note that some content remains in the source code because it changes infrequently:
- Personal bio and contact information
- Research interests
- Skills and tools
- Social media links

These can be updated by modifying the corresponding page components when needed.