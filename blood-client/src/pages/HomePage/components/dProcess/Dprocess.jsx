/** @format */

import Container from "../../../../utils/container/Container";
import SectionTitle from "../../../../utils/sectionTitle/SectionTitle";

const Dprocess = () => {
  return (
    <div className='my-14'>
      <SectionTitle
        heading='Donation Process'
        subHeading='The donation process from the time you arrive center until the time you leave'
      />

      <Container>
        <section className='py-6 dark:bg-gray-800'>
          <div className=' flex flex-col justify-center p-4 mx-auto'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2'>
              <img
                className='object-cover w-full dark:bg-gray-500 aspect-square'
                src='https://source.unsplash.com/random/300x300/?1'
              />
              <img
                className='object-cover w-full dark:bg-gray-500 aspect-square'
                src='https://source.unsplash.com/random/300x300/?2'
              />
              <img
                className='object-cover w-full dark:bg-gray-500 aspect-square'
                src='https://source.unsplash.com/random/300x300/?3'
              />
              <img
                className='object-cover w-full dark:bg-gray-500 aspect-square'
                src='https://source.unsplash.com/random/300x300/?4'
              />
            </div>
          </div>
        </section>
      </Container>

      <div
        className='border min-h-[100vh]'
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvbmF0aW4lMjBibG9vZHxlbnwwfHwwfHx8MA%3D%3D')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <div className='mb-10   my-32'>
            <section className='py-6 dark:bg-gray-800 '>
              <div className=' flex flex-col justify-center p-4 mx-auto'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2'>
                  <img
                    className='object-cover w-full dark:bg-gray-500 aspect-square'
                    src='https://source.unsplash.com/random/300x300/?1'
                  />
                  <img
                    className='object-cover w-full dark:bg-gray-500 aspect-square'
                    src='https://source.unsplash.com/random/300x300/?2'
                  />
                  <img
                    className='object-cover w-full dark:bg-gray-500 aspect-square'
                    src='https://source.unsplash.com/random/300x300/?3'
                  />
                  <img
                    className='object-cover w-full dark:bg-gray-500 aspect-square'
                    src='https://source.unsplash.com/random/300x300/?4'
                  />
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dprocess;
