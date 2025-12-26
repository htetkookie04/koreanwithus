import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Korean With Us - Learn Korean Language & Culture",
  description: "Explore our blog for tips on learning Korean, Korean culture insights, and success stories from Korean With Us students.",
  openGraph: {
    title: "Blog | Korean With Us - Learn Korean Language & Culture",
    description: "Explore our blog for tips on learning Korean, Korean culture insights, and success stories from Korean With Us students.",
    url: "https://koreanwithus.com/blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Korean With Us Blog - Learn Korean Language & Culture",
      },
    ],
  },
  twitter: {
    title: "Blog | Korean With Us - Learn Korean Language & Culture",
    description: "Explore our blog for tips on learning Korean, Korean culture insights, and success stories from Korean With Us students.",
    images: ["/twitter-image.jpg"],
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Korean With Us Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <a href="/blog/korean-with-us-seo" className="hover:text-[#ec8da5] transition-colors">
                Why Korean With Us Is the Best Choice for Learning Korean in 2025
              </a>
            </h2>
            <p className="text-gray-600 mb-4">
              Discover what makes Korean With Us the premier destination for serious Korean language learners...
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>September 18, 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </article>
        
        {/* Add more blog posts here as needed */}
      </div>
    </div>
  );
}