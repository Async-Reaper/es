import React, { useEffect } from 'react';
import { Sidebar } from 'widgets/sidebar/ui/Sidebar/Sidebar';
import { CoursesList } from 'widgets/courses-list';

const PlatformPage = () => {
  useEffect(() => {
    localStorage.setItem('type_learn', '');
  }, []);
  return (
     <div className='page_platform'>
        <div>
           <Sidebar />
        </div>
        <div className='page_platform__content'>
           <CoursesList />
        </div>
     </div>
  );
};

export default PlatformPage;
