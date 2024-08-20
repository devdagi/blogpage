import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Blog Post Title 1',
    date: 'August 19, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at felis interdum varius.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    id: 2,
    title: 'Blog Post Title 2',
    date: 'August 18, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at felis interdum varius.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    id: 3,
    title: 'Blog Post Title 3',
    date: 'August 17, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at felis interdum varius.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    id: 4,
    title: 'Blog Post Title 4',
    date: 'August 16, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at felis interdum varius.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    id: 5,
    title: 'Blog Post Title 5',
    date: 'August 15, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at felis interdum varius.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    id: 6,
    title: 'Blog Post Title 6',
    date: 'August 14, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at felis interdum varius.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    id: 7,
    title: 'Blog Post Title 7',
    date: 'August 13, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at felis interdum varius.',
    imageUrl: 'https://via.placeholder.com/800x400',
  },
];

const HomePage: React.FC = () => {
  return (
    <main className="container">
      <header className="blog-header">
        <h1>Welcome to Ethio Health Alliance Blog Page</h1>
      </header>

      <section className="posts-grid">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <img src={post.imageUrl} alt={post.title} />
            <div className="content">
              <h2>{post.title}</h2>
              <p className="date">Posted on {post.date}</p>
              <p>{post.content}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </article>
        ))}
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 My Professional Blog. All rights reserved.</p>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
