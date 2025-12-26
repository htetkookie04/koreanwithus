const IntermediatePage = () => {
  return (
    <div className='min-h-screen pt-24 pb-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-b from-pink-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-black mb-6'>
              Intermediate Korean Classes
            </h1>
            <p className='text-xl text-black max-w-3xl mx-auto mb-8'>
              Advanced grammar, complex conversations, and business Korean.
              Perfect for career advancement.
            </p>
            <div className='text-3xl font-bold text-[#ec8da5] mb-4'>
              From 100,000 MMK
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Course Details */}
            <div className='bg-white rounded-xl shadow-md border border-pink-100 p-8'>
              <div className='flex items-center mb-6'>
                <svg
                  className='w-8 h-8 text-[#ec8da5] mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                  />
                </svg>
                <h2 className='text-2xl font-bold text-black'>
                  Course Overview
                </h2>
              </div>

              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold text-black mb-3'>
                    Duration & Schedule
                  </h3>
                  <div className='space-y-2'>
                    <div className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-[#ec8da5] mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='text-black'>3-4 months</span>
                    </div>
                    <div className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-[#ec8da5] mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                        />
                      </svg>
                      <span className='text-black'>
                        Advanced conversation practice
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-[#ec8da5] mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                        />
                      </svg>
                      <span className='text-black'>
                        Professional certification
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-black mb-3'>
                    What You&apos;ll Learn
                  </h3>
                  <ul className='space-y-2'>
                    <li className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-[#ec8da5] mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='text-black'>Business Korean</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-[#ec8da5] mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='text-black'>Advanced grammar</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-[#ec8da5] mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='text-black'>Writing skills</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-5 h-5 text-[#ec8da5] mr-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='text-black'>Cultural nuances</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-black mb-3'>
                    Who It&apos;s For
                  </h3>
                  <p className='text-black'>
                    Designed for students who have completed beginner level or
                    have basic Korean knowledge. Ideal for those seeking career
                    opportunities in Korea or wanting to achieve fluency.
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-black mb-3'>
                    Expected Outcomes
                  </h3>
                  <p className='text-black'>
                    Master complex grammar structures, conduct business
                    conversations, write formal documents, and understand
                    cultural contexts for professional and academic success.
                  </p>
                </div>
              </div>
            </div>

            {/* Enrollment Section */}
            <div>
              <div className='bg-white rounded-xl shadow-md border border-pink-100 p-8 bg-gradient-to-br from-pink-50 to-white'>
                <h2 className='text-2xl font-bold text-black mb-6'>
                  Advance Your Skills
                </h2>
                <p className='text-black mb-6'>
                  Take your Korean to the next level with our comprehensive
                  intermediate program.
                </p>

                <div className='space-y-4'>
                  <a
                    href='/contact'
                    className='inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full bg-[#ec8da5] text-white hover:bg-[#d97a92] shadow-lg hover:shadow-xl px-8 py-4 text-lg w-full'
                  >
                    Enroll Now
                  </a>

                  <div className='text-center'>
                    <p className='text-sm text-black mb-2'>
                      Need more information?
                    </p>
                    <a
                      href='tel:+959774677855'
                      className='text-[#ec8da5] hover:text-[#d97a92] font-medium'
                    >
                      Call +95 9774677855
                    </a>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className='bg-white rounded-xl shadow-md border border-pink-100 p-6 mt-6'>
                <h3 className='text-lg font-semibold text-black mb-4'>
                  Course Features
                </h3>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <svg
                      className='w-5 h-5 text-[#ec8da5] mr-2 mt-0.5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='text-black'>Business Korean focus</span>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='w-5 h-5 text-[#ec8da5] mr-2 mt-0.5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='text-black'>
                      Advanced conversation practice
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='w-5 h-5 text-[#ec8da5] mr-2 mt-0.5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='text-black'>
                      Writing and composition skills
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='w-5 h-5 text-[#ec8da5] mr-2 mt-0.5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <span className='text-black'>
                      Cultural immersion and professional etiquette
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntermediatePage;
