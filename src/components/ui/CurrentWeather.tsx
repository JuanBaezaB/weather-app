import { type WeatherData } from '@/interfaces/weather.interface';
import { weatherStore } from '@/stores/weather.store';
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from 'react';


const CurrentWeather = () => {
  const $currentWeather = useStore(weatherStore);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const weatherDetailsRef = useRef<HTMLDivElement>(null);
  const currentWeatherRef = useRef<HTMLDivElement>(null);
  const imageWeatherRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!$currentWeather) {
      return;
    }
    setCurrentWeather($currentWeather);
  }, [$currentWeather]);

  // useEffect(() => {
  //   if (imageWeatherRef.current && imageWeatherRef.current.children.length > 0) {
  //     gsap.fromTo(imageWeatherRef.current.children, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
  //   }

  //   if (currentWeatherRef.current && currentWeatherRef.current.children.length > 0) {
  //     gsap.fromTo(currentWeatherRef.current.children, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
  //   }

  //   if (weatherDetailsRef.current && weatherDetailsRef.current.children.length > 0) {
  //     const children = weatherDetailsRef.current.children;
  //     let delay = 0.2;
  //     for (let i = 0; i < weatherDetailsRef.current.children.length; i++) {
  //       gsap.fromTo(children[i], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: delay });
  //       delay += 0.2;
  //     }
  //   }
  // }, [currentWeather]);


  return (
    <div >
      {currentWeather && (
        <div ref={containerRef} className='flex flex-col lg:gap-10 '>
          <div className='flex lg:flex-col justify-center items-center sm:gap-24 lg:gap-4'>

            <div ref={imageWeatherRef} className='flex flex-col justify-center items-center '>
              <img src={currentWeather.current.weather[0]?.icon} alt="weather icon"
                className='w-64 h-64 object-contain'
              />
            </div>

            <div ref={currentWeatherRef} className='flex flex-col items-center text-center w-64'>
              <span
                className='text-5xl sm:text-6xl font-semibold text-gray-800'
              >{currentWeather.current.temp}°C</span>
              <span
                className='text-2xl font-semibold text-gray-500'
              >{currentWeather.current.weather[0]?.description}</span>

              {/* <p>Feels like {currentWeather.current.feels_like}°C</p> */}
            </div>

          </div>
          <div
            ref={weatherDetailsRef}
            className='flex flex-row justify-center items-center text-center gap-10'>
            <div className='flex flex-col items-center gap-2'>
              <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.341-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075z" /></svg>
              <p>{currentWeather.current.humidity}%</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <svg className='h-4 w-4' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="#0f0f0f"><path d="m12 9c-.5523 0-1 .44771-1 1v5.2676c-.5978.3458-1 .9921-1 1.7324 0 1.1046.8954 2 2 2s2-.8954 2-2c0-.7403-.4022-1.3866-1-1.7324v-5.2676c0-.55229-.4477-1-1-1z" /><path d="m11 6c0-.55228.4477-1 1-1s1 .44772 1 1-.4477 1-1 1-1-.44772-1-1z" /><path d="m16 7c-.5523 0-1 .44772-1 1 0 .55229.4477 1 1 1s1-.44771 1-1c0-.55228-.4477-1-1-1z" /><path d="m6 13c-.55228 0-1-.4477-1-1s.44772-1 1-1 1 .4477 1 1-.44772 1-1 1z" /><path d="m7 8c0 .55229.44772 1 1 1s1-.44772 1-1-.44772-1-1-1-1 .44772-1 1z" /><path d="m18 13c-.5523 0-1-.4477-1-1s.4477-1 1-1 1 .4477 1 1-.4477 1-1 1z" /><path d="m12 23c6.0751 0 11-4.9249 11-11 0-6.07513-4.9249-11-11-11-6.07513 0-11 4.92487-11 11 0 6.0751 4.92487 11 11 11zm0-2.0068c-4.96679 0-8.99317-4.0264-8.99317-8.9932 0-4.96679 4.02638-8.99317 8.99317-8.99317 4.9668 0 8.9932 4.02638 8.9932 8.99317 0 4.9668-4.0264 8.9932-8.9932 8.9932z" />
                </g>
              </svg>
              <p> {currentWeather.current.pressure} hPa</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <svg className='h-4 w-4' fill="#000000" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                <path d="M 6.1563 21.2852 C 9.5313 20.2071 13.0235 19.6680 16.3516 19.6680 C 20.6641 19.6680 23.8282 20.3476 27.9063 20.3476 C 32.1250 20.3476 34.7500 17.4883 34.7500 13.7617 C 34.7500 9.9414 31.8204 7.2227 28.2110 7.2227 C 25.5391 7.2227 23.1953 8.8867 22.2110 11.1133 C 21.8360 11.8867 21.9766 12.8008 22.7969 13.2227 C 23.5469 13.5976 24.4610 13.3633 24.9532 12.4024 C 25.4688 11.2071 26.7344 10.2695 28.2110 10.2695 C 30.1563 10.2695 31.6797 11.6289 31.6797 13.7617 C 31.6797 15.8945 30.2032 17.3008 27.9063 17.3008 C 24.0157 17.3008 20.8047 16.5976 16.3516 16.5976 C 12.5313 16.5976 8.6641 17.2773 5.2188 18.3789 C 4.2344 18.6602 3.8594 19.5039 4.0938 20.3242 C 4.3282 21.1211 5.1016 21.5898 6.1563 21.2852 Z M 42.8125 32.2539 C 48.2737 32.2539 52.1406 28.7852 52.1406 23.9336 C 52.1406 19.1524 48.4609 15.6836 43.8906 15.6836 C 39.6485 15.6836 36.5079 18.6367 35.9453 22.5273 C 35.8047 23.4883 36.3438 24.2617 37.1875 24.3789 C 38.0547 24.4961 38.8047 23.9571 38.9922 22.8555 C 39.3906 20.4180 41.4297 18.7305 43.8906 18.7305 C 46.7502 18.7305 49.0705 20.8633 49.0705 23.9336 C 49.0705 27.0508 46.6096 29.2071 42.8125 29.2071 C 35.6641 29.2071 27.9532 25.1289 18.5782 25.1289 C 13.7500 25.1289 9.3438 25.9024 5.2188 27.3789 C 4.2579 27.7071 3.8594 28.5273 4.0938 29.3476 C 4.3282 30.1445 5.1250 30.6367 6.1563 30.2852 C 9.9766 28.8320 13.9610 28.1992 18.5782 28.1992 C 27.9297 28.1992 34.9141 32.2539 42.8125 32.2539 Z M 27.9297 48.7773 C 31.5391 48.7773 34.3282 46.1055 34.3282 42.2852 C 34.3282 36.7539 28.6797 33.6602 18.2735 33.6602 C 13.9141 33.6602 9.2032 34.5039 5.2188 35.8867 C 4.2579 36.2149 3.8594 37.0352 4.0938 37.8555 C 4.3282 38.6524 5.1250 39.1445 6.1563 38.7930 C 9.8828 37.4571 14.0547 36.7305 18.2735 36.7305 C 26.7813 36.7305 31.2813 38.8633 31.2813 42.2852 C 31.2813 44.4414 29.7813 45.7305 27.9297 45.7305 C 26.0782 45.7305 24.9532 44.4883 24.6250 42.5195 C 24.4844 41.6524 23.8516 40.9492 22.8438 41.0195 C 21.7891 41.0898 21.3672 41.9805 21.5079 42.9180 C 21.9297 46.1758 24.3438 48.7773 27.9297 48.7773 Z" />
              </svg>
              <p>{currentWeather.current.wind_speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;