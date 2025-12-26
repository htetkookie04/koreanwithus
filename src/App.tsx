import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import CoursesPage from './app/courses/page';
import BeginnerPage from './app/courses/beginner/page';
import IntermediatePage from './app/courses/intermediate/page';
import SpeakingPracticePage from './app/courses/speaking-practice/page';
import TOPIKPreparationPage from './app/courses/topik-preparation/page';
import TimetablePage from './app/timetable/page';
import GalleryPage from './app/gallery/page';
import EnrollPage from './app/enroll/page';
import BlogPage from './app/blog/page';
import BlogPostPage from './app/blog/korean-with-us-seo/page';
import NotFoundPage from './app/not-found';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/beginner" element={<BeginnerPage />} />
          <Route path="/courses/intermediate" element={<IntermediatePage />} />
          <Route path="/courses/speaking-practice" element={<SpeakingPracticePage />} />
          <Route path="/courses/topik-preparation" element={<TOPIKPreparationPage />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/korean-with-us-seo" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

