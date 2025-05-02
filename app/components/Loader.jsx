"use client"
import { useContext, useEffect, useState } from 'react';
import StoreContext from '../context/Store';
import "./style.css"
import Head from "next/head"
const Loader = () => {
  const { state, actions } = useContext(StoreContext);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const words = ["Setting up Stuff...", "Loading things...", "Refreshing objects..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleLoad = () => {
      actions.setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return state.loading ?
    <>
    <Head>
      </Head>
      <div className='h-[100vh] w-full flex flex-col items-center justify-center'>
        <div>
          <div className="text">
            <h1>
              <span className="words-wrapper">
                {words.map((word, index) => (
                  <b
                    key={index}
                    className={index === visibleIndex ? "is-visible" : "is-hidden"}
                  >
                    {word}
                  </b>
                ))}
              </span>
            </h1>
          </div>
        </div>
      </div></> : null;
};

export default Loader;
