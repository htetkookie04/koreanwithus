'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, Clock, User, Search, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tips', name: 'Learning Tips' },
    { id: 'culture', name: 'Korean Culture' },
    { id: 'grammar', name: 'Grammar Guide' },
    { id: 'vocabulary', name: 'Vocabulary' },
    { id: 'topik', name: 'TOPIK Prep' },
    { id: 'news', name: 'Center News' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Korean Phrases for Beginners',
      category: 'tips',
      author: 'Ms. Kim Soo-jin',
      date: '2024-01-15',
      readTime: '5 min read',
      excerpt: 'Master these basic Korean phrases to start your conversation journey. Perfect for complete beginners who want to make a great first impression.',
      content: 'Learn the most important Korean phrases that every beginner should know...',
      tags: ['beginner', 'phrases', 'conversation'],
      emoji: '💬',
      featured: true,
    },
    {
      id: 2,
      title: 'Understanding Korean Honorifics and Politeness Levels',
      category: 'grammar',
      author: 'Mr. Park Min-ho',
      date: '2024-01-12',
      readTime: '8 min read',
      excerpt: 'Navigate the complex world of Korean politeness levels and honorifics. Essential knowledge for proper Korean communication.',
      content: 'Korean language has several levels of politeness...',
      tags: ['grammar', 'honorifics', 'culture'],
      emoji: '🙏',
      featured: false,
    },
    {
      id: 3,
      title: 'Korean New Year Traditions: Seollal Celebration',
      category: 'culture',
      author: 'Ms. Thant Zin',
      date: '2024-01-10',
      readTime: '6 min read',
      excerpt: 'Discover the beautiful traditions of Korean New Year and learn the vocabulary associated with this important holiday.',
      content: 'Seollal is the most important traditional holiday in Korea...',
      tags: ['culture', 'holiday', 'tradition'],
      emoji: '🏮',
      featured: true,
    },
    {
      id: 4,
      title: 'TOPIK Level 4 Writing Strategies That Actually Work',
      category: 'topik',
      author: 'Mr. Park Min-ho',
      date: '2024-01-08',
      readTime: '10 min read',
      excerpt: 'Proven strategies to master TOPIK Level 4 writing section. Get tips from our expert instructor who has helped hundreds pass.',
      content: 'TOPIK Level 4 writing can be challenging...',
      tags: ['topik', 'writing', 'exam'],
      emoji: '✍️',
      featured: false,
    },
    {
      id: 5,
      title: 'Korean Food Vocabulary: From Ordering to Cooking',
      category: 'vocabulary',
      author: 'Ms. Lee Na-young',
      date: '2024-01-05',
      readTime: '7 min read',
      excerpt: 'Essential Korean food vocabulary for restaurant visits and cooking adventures. Learn to navigate Korean cuisine like a pro.',
      content: 'Korean cuisine offers incredible variety...',
      tags: ['vocabulary', 'food', 'restaurant'],
      emoji: '🍜',
      featured: false,
    },
    {
      id: 6,
      title: 'Success Story: From Zero to TOPIK Level 5 in 18 Months',
      category: 'news',
      author: 'Korean With Us Team',
      date: '2024-01-03',
      readTime: '4 min read',
      excerpt: 'Read inspiring success story of Thant Zin, who achieved TOPIK Level 5 and got accepted to Seoul National University.',
      content: 'Meet Thant Zin, one of our most dedicated students...',
      tags: ['success', 'topik', 'university'],
      emoji: '🎓',
      featured: true,
    },
    {
      id: 7,
      title: 'Korean Consonants and Vowels: Complete Pronunciation Guide',
      category: 'tips',
      author: 'Ms. Kim Soo-jin',
      date: '2024-01-01',
      readTime: '12 min read',
      excerpt: 'Master Korean pronunciation with this comprehensive guide to Hangul consonants and vowels. Includes audio examples and practice tips.',
      content: 'Proper pronunciation is crucial for Korean learning...',
      tags: ['pronunciation', 'hangul', 'beginner'],
      emoji: '🔊',
      featured: false,
    },
    {
      id: 8,
      title: 'K-Drama vs Real Korean: What You Need to Know',
      category: 'culture',
      author: 'Ms. Thant Zin',
      date: '2023-12-28',
      readTime: '6 min read',
      excerpt: 'Learn the differences between drama Korean and everyday speech. Avoid common mistakes that K-drama fans often make.',
      content: 'Many Korean learners start their journey through K-dramas...',
      tags: ['culture', 'drama', 'real-life'],
      emoji: '📺',
      featured: false,
    },
    {
      id: 9,
      title: 'Business Korean: Essential Phrases for the Workplace',
      category: 'vocabulary',
      author: 'Mr. Choi Jae-min',
      date: '2023-12-25',
      readTime: '9 min read',
      excerpt: 'Professional Korean vocabulary and phrases for business situations. Perfect for those planning to work in Korean companies.',
      content: 'Working in a Korean company requires specific language skills...',
      tags: ['business', 'workplace', 'professional'],
      emoji: '💼',
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cherry-50 via-white to-primary-50 py-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="cherry-blossom" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="cherry-blossom" style={{ top: '40%', right: '8%', animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6"
            >
              Korean Learning <span className="text-cherry-600">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Expert tips, cultural insights, and learning strategies from our experienced Korean teachers. 
              Your guide to mastering Korean language and culture.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="korean-text text-3xl text-cherry-600 font-bold"
            >
              한국어 학습의 모든 것
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mt-2"
            >
              Everything about Korean learning
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-cherry-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cherry-500 to-primary-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-cherry-50 hover:text-cherry-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <section className="py-20 bg-gradient-to-b from-cherry-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
              >
                Featured <span className="text-cherry-600">Articles</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{post.emoji}</div>
                        <span className="bg-gradient-to-r from-cherry-500 to-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cherry-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="bg-cherry-100 text-cherry-700 px-2 py-1 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-cherry-50">
                        Read More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
            >
              Latest <span className="text-cherry-600">Articles</span>
            </motion.h2>
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{post.emoji}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        post.category === 'tips' ? 'bg-blue-100 text-blue-700' :
                        post.category === 'culture' ? 'bg-purple-100 text-purple-700' :
                        post.category === 'grammar' ? 'bg-green-100 text-green-700' :
                        post.category === 'vocabulary' ? 'bg-yellow-100 text-yellow-700' :
                        post.category === 'topik' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-cherry-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    
                    <div className="space-y-3 text-xs text-gray-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-3 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-cherry-50">
                      Read Article
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-cherry-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
          >
            Never Miss an <span className="text-cherry-600">Update</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Subscribe to our newsletter for the latest Korean learning tips, cultural insights, 
            and center updates delivered to your inbox.
          </motion.p>
          
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-transparent"
              />
              <Button size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Card>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
            >
              Popular <span className="text-cherry-600">Topics</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Korean Grammar', icon: '📚', count: '25 articles' },
              { name: 'TOPIK Preparation', icon: '🎯', count: '18 articles' },
              { name: 'Korean Culture', icon: '🏮', count: '22 articles' },
              { name: 'Learning Tips', icon: '💡', count: '30 articles' },
              { name: 'Pronunciation', icon: '🔊', count: '15 articles' },
              { name: 'Business Korean', icon: '💼', count: '12 articles' },
              { name: 'K-Pop & Drama', icon: '🎭', count: '20 articles' },
              { name: 'Daily Conversation', icon: '💬', count: '28 articles' },
            ].map((topic, index) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="text-3xl mb-3">{topic.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{topic.name}</h3>
                  <p className="text-gray-600 text-sm">{topic.count}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}