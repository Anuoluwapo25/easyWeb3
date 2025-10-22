import React, { useState } from 'react';
import { BookOpen, Award, Lock, Users, Target, TrendingUp, ArrowRight, CheckCircle, Star, Code } from 'lucide-react';

const Learn3Landing = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-900 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-neutral-900">easyweb3</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Courses</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">About</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Community</a>
            <button className="px-5 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800">
              Connect Wallet
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Star className="text-purple-600" size={16} />
                <span className="text-sm font-medium text-purple-900">Learn by Doing, Not Just Watching</span>
              </div>
              <h1 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Invest in your Knowlegde
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Learn blockchain through interactive simulations, mini-games, and hands-on coding. Earn NFT certificates as proof. No boring lectures—just building.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 flex items-center gap-2">
                  Start Learning Free <ArrowRight size={20} />
                </button>
                <button className="px-6 py-3 border-2 border-neutral-300 text-neutral-900 rounded-lg hover:border-neutral-400">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-8 mt-8 pt-8 border-t border-neutral-200">
                <div>
                  <div className="text-2xl font-bold text-neutral-900">5-10min</div>
                  <div className="text-sm text-neutral-600">Per lesson</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">1,240</div>
                  <div className="text-sm text-neutral-600">Active learners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">4.9★</div>
                  <div className="text-sm text-neutral-600">Avg. rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Hero Image Placeholder */}
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">
                <div className="aspect-[4/3] flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <Users className="text-purple-900" size={64} />
                    </div>
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">Learning Made Simple</h3>
                    <p className="text-neutral-600">Interactive lessons designed for complete beginners</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-900">2 NFTs Earned</div>
                    <div className="text-xs text-neutral-500">Keep going!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium">All</button>
          <button className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50">Wallet</button>
          <button className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50">DeFi</button>
          <button className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50">NFTs</button>
          <button className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50">Terminlogies</button>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Most popular</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {[
            { 
              title: 'Everything you need to know about wallet connect',
              category: 'IT & Software',
              rating: 4.8,
              students: '9,530 students',
              color: 'from-pink-100 to-red-100',
              badge: 'IT & Software'
            },
            {
              title: 'Powerful Business Writing: How to Write Concisely',
              category: 'Business',
              rating: 4.9,
              students: '1,493 students',
              color: 'from-orange-100 to-yellow-100',
              badge: 'Business'
            },
            {
              title: 'Certified Six Sigma Yellow Belt Training',
              category: 'Management',
              rating: 4.9,
              students: '6,739 students',
              color: 'from-purple-100 to-blue-100',
              badge: 'Management'
            },
            {
              title: '',
              category: 'Design',
              rating: 5.0,
              students: '8,735 students',
              color: 'from-green-100 to-teal-100',
              badge: 'Design'
            },
            {
              title: 'Smart Contract Development with Clarity',
              category: 'Blockchain',
              rating: 4.9,
              students: '5,240 students',
              color: 'from-blue-100 to-indigo-100',
              badge: 'Blockchain'
            },
            {
              title: 'Web3 Frontend Development',
              category: 'Development',
              rating: 4.8,
              students: '7,120 students',
              color: 'from-violet-100 to-purple-100',
              badge: 'Development'
            }
          ].map((course, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onMouseEnter={() => setHoveredCourse(i)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                <Code className="text-neutral-700" size={48} />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={14} />
                    <span className="text-sm font-medium text-neutral-900">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Users size={16} />
                  <span>{course.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-purple-900 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Learn in a Way That Actually Works</h2>
          <p className="text-center text-purple-100 mb-12 text-lg">No boring videos. Just interactive, hands-on learning.</p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { 
                icon: '🎮', 
                title: 'Interactive Simulations', 
                desc: 'Practice deploying contracts in a safe sandbox. Make mistakes without losing real money.'
              },
              { 
                icon: '⚡', 
                title: 'Micro-Lessons', 
                desc: '5-10 minute lessons that fit your schedule. Learn during coffee breaks.'
              },
              { 
                icon: '🎯', 
                title: 'Quest-Based Learning', 
                desc: 'Complete missions and challenges. Level up as you master new skills.'
              },
              { 
                icon: '🧩', 
                title: 'Visual Code Blocks', 
                desc: 'Drag and drop code blocks to build smart contracts. No typing required to start.'
              },
              { 
                icon: '🤖', 
                title: 'AI Learning Buddy', 
                desc: 'Get instant help when you\'re stuck. Your personal mentor available 24/7.'
              },
              { 
                icon: '🏆', 
                title: 'Earn as You Learn', 
                desc: 'Collect NFT badges for each skill you master. Build your on-chain resume.'
              }
            ].map((method, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-purple-100">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen size={20} />
                </div>
                <span className="text-xl font-bold">easyweb3</span>
              </div>
              <p className="text-neutral-400 text-sm">Learn Web3 by doing. Your progress, on-chain.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">All Courses</a></li>
                <li><a href="#" className="hover:text-white">NFT Badges</a></li>
                <li><a href="#" className="hover:text-white">Leaderboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-500">
            © 2025 Learn3. Built on Stacks blockchain.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Learn3Landing;