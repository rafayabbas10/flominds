import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, slug, date }) => {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        <h3 className="card-title text-2xl font-montserrat">{title}</h3>
        <p className="text-base-content/70 font-roboto">{excerpt}</p>
        <p className="text-sm text-base-content/50">{date}</p>
        <div className="card-actions justify-end mt-4">
          <Link 
            href={`/blog/${slug}`}
            className="btn btn-primary btn-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
