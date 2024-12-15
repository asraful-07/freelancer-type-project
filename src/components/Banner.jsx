// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1815508710/photo/collaborative-innovation-business-professionals-crafting-a-new-project.jpg?s=612x612&w=0&k=20&c=2InQGAWxCp_IdFG0IHY16-jEuuCYXhq-XTYS37cI49U="
              alt="Collaborative Innovation"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h2 className="text-white text-2xl font-bold text-center px-4">
                Get Your Web Development Projects Done in Minutes
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/2160680046/photo/group-of-diverse-people-working-together.jpg?s=612x612&w=0&k=20&c=H7gavHKy4zrTdlEG4VrWDuo6lG5zjwy4A46dF8tNC8U="
              alt="Diverse Team Collaboration"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h2 className="text-white text-2xl font-bold text-center px-4">
                Get Your Graphics Design Projects Done in Minutes
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/989329380/photo/tough-questions-at-the-meeting.jpg?s=612x612&w=0&k=20&c=cigL5IIFBnoNSqIT6byYZZg7k3XU-Nc01a1CDqQyhaU="
              alt="Strategic Discussion"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h2 className="text-white text-2xl font-bold text-center px-4">
                Start Your Digital Marketing Campaigns Up and Running
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
